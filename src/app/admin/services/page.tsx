// This is a new file for managing Services.
'use client';
import { useState } from 'react';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { PlusCircle, MoreHorizontal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { services as initialServices } from '@/lib/data'; // Using placeholder data

export default function AdminServicesPage() {
  const [services, setServices] = useState(initialServices);

  const handleAdd = () => {
    console.log('Add new service');
  };

  const handleEdit = (id: string) => {
    console.log(`Edit service ${id}`);
  };

  const handleDelete = (id: string) => {
    setServices(services.filter(s => s.id !== id));
    console.log(`Delete service ${id}`);
  };

  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between">
        <PageHeader
          title="Manage Services"
          description="Update the services offered on your public website."
          className="text-left items-start mb-0"
        />
        <Button onClick={handleAdd}>
          <PlusCircle className="mr-2" />
          Add Service
        </Button>
      </div>
      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map(service => (
                <TableRow key={service.id}>
                  <TableCell className="font-medium">{service.title}</TableCell>
                  <TableCell className="max-w-sm truncate">{service.description}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleEdit(service.id)}>Edit</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDelete(service.id)} className="text-destructive">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
