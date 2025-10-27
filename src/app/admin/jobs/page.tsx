// This is a new file for managing Job Postings.
'use client';
import { useState } from 'react';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { PlusCircle, MoreHorizontal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import { jobs as initialJobs } from '@/lib/data'; // Using placeholder data

export default function AdminJobsPage() {
  const [jobs, setJobs] = useState(initialJobs);

  // In a real app, these handlers would call server actions to mutate data.
  const handleAdd = () => {
    // For demonstration, this would open a dialog/form to create a new job.
    console.log('Add new job');
  };

  const handleEdit = (id: string) => {
    // This would open a dialog/form pre-filled with the job's data.
    console.log(`Edit job ${id}`);
  };

  const handleDelete = (id: string) => {
    // This would show a confirmation dialog before deleting.
    setJobs(jobs.filter(job => job.id !== id));
    console.log(`Delete job ${id}`);
  };

  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between">
        <PageHeader
          title="Manage Job Postings"
          description="Create, edit, and delete job postings for the public careers page."
          className="text-left items-start mb-0"
        />
        <Button onClick={handleAdd}>
          <PlusCircle className="mr-2" />
          Add Job
        </Button>
      </div>
      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobs.map(job => (
                <TableRow key={job.id}>
                  <TableCell className="font-medium">{job.title}</TableCell>
                  <TableCell>{job.location}</TableCell>
                  <TableCell className="max-w-xs truncate">{job.description}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleEdit(job.id)}>Edit</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDelete(job.id)} className="text-destructive">Delete</DropdownMenuItem>
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
