'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import { CalendarIcon, Loader2, PlusCircle, Trash2 } from 'lucide-react';
import { format } from 'date-fns';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useToast } from '@/hooks/use-toast';
import { submitManpowerRequest } from '@/lib/actions';
import { useState } from 'react';

const formSchema = z.object({
  projectName: z.string().min(3, { message: 'Project name is required.' }),
  projectLocation: z.string().min(3, { message: 'Location is required.' }),
  startDate: z.date({ required_error: 'A start date is required.' }),
  endDate: z.date().optional(),
  workers: z.array(z.object({
    role: z.string().min(2, { message: 'Role is required.' }),
    quantity: z.coerce.number().min(1, { message: 'Min 1.' }),
  })).min(1, { message: 'At least one worker request is required.' }),
});

export function ManpowerRequestForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: '',
      projectLocation: '',
      workers: [{ role: '', quantity: 1 }],
    },
  });
  
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'workers',
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append('projectName', values.projectName);
    formData.append('projectLocation', values.projectLocation);
    formData.append('startDate', values.startDate.toISOString());
    if (values.endDate) {
        formData.append('endDate', values.endDate.toISOString());
    }
    formData.append('workers', JSON.stringify(values.workers));
    
    const result = await submitManpowerRequest(formData);

    if (result.success) {
      toast({
        title: 'Request Submitted',
        description: 'Your manpower request has been sent to the Alpha Ultimate team.',
      });
      form.reset();
    } else {
        toast({
            title: 'Submission Failed',
            description: result.message || 'There was an error submitting your request.',
            variant: 'destructive',
        });
    }
    setIsSubmitting(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormField control={form.control} name="projectName" render={({ field }) => (
                <FormItem><FormLabel>Project Name</FormLabel><FormControl><Input placeholder="e.g., Riyadh Tower C" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="projectLocation" render={({ field }) => (
                <FormItem><FormLabel>Project Location</FormLabel><FormControl><Input placeholder="e.g., Riyadh, KSA" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormField control={form.control} name="startDate" render={({ field }) => (
                <FormItem className="flex flex-col"><FormLabel>Project Start Date</FormLabel>
                <Popover><PopoverTrigger asChild>
                    <FormControl><Button variant={"outline"} className={cn("pl-3 text-left font-normal", !field.value && "text-muted-foreground")}>
                        {field.value ? (format(field.value, 'PPP')) : (<span>Pick a date</span>)}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button></FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start"><Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus /></PopoverContent></Popover>
                <FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="endDate" render={({ field }) => (
                <FormItem className="flex flex-col"><FormLabel>Project End Date (Optional)</FormLabel>
                <Popover><PopoverTrigger asChild>
                    <FormControl><Button variant={"outline"} className={cn("pl-3 text-left font-normal", !field.value && "text-muted-foreground")}>
                        {field.value ? (format(field.value, 'PPP')) : (<span>Pick a date</span>)}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button></FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start"><Calendar mode="single" selected={field.value} onSelect={field.onChange} /></PopoverContent></Popover>
                <FormMessage /></FormItem>
            )} />
        </div>
        
        <div>
            <FormLabel>Worker Request List</FormLabel>
            <FormDescription>Specify the roles and quantities of workers needed.</FormDescription>
            <div className="space-y-4 mt-4">
                {fields.map((field, index) => (
                    <div key={field.id} className="flex items-end gap-4 p-4 border rounded-lg neon-border">
                        <FormField control={form.control} name={`workers.${index}.role`} render={({ field }) => (
                            <FormItem className="flex-grow"><FormLabel>Worker Role</FormLabel><FormControl><Input placeholder="e.g., Civil Laborer" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name={`workers.${index}.quantity`} render={({ field }) => (
                            <FormItem><FormLabel>Quantity</FormLabel><FormControl><Input type="number" placeholder="e.g., 50" {...field} className="w-24" /></FormControl><FormMessage /></FormItem>
                        )} />
                        <Button type="button" variant="destructive" size="icon" onClick={() => remove(index)}><Trash2 className="h-4 w-4" /></Button>
                    </div>
                ))}
                 {form.formState.errors.workers && !form.formState.errors.workers.root && (
                     <p className="text-sm font-medium text-destructive">{form.formState.errors.workers.message}</p>
                 )}
                <Button type="button" variant="outline" size="sm" onClick={() => append({ role: '', quantity: 1 })}>
                    <PlusCircle className="mr-2 h-4 w-4" /> Add Worker Role
                </Button>
            </div>
        </div>

        <Button type="submit" size="lg" className="w-full neon-button" disabled={isSubmitting}>
             {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Submit Manpower Request
        </Button>
      </form>
    </Form>
  );
}
