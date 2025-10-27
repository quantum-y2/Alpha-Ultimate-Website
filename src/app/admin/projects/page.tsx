// This is a new file for managing Projects.
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
import { projects as initialProjects } from '@/lib/data'; // Using placeholder data

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState(initialProjects);

  const handleAdd = () => {
    console.log('Add new project');
  };

  const handleEdit = (id: string) => {
    console.log(`Edit project ${id}`);
  };

  const handleDelete = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
    console.log(`Delete project ${id}`);
  };

  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between">
        <PageHeader
          title="Manage Projects"
          description="Manage the project showcase on your public website."
          className="text-left items-start mb-0"
        />
        <Button onClick={handleAdd}>
          <PlusCircle className="mr-2" />
          Add Project
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
              {projects.map(project => (
                <TableRow key={project.id}>
                  <TableCell className="font-medium">{project.title}</TableCell>
                  <TableCell className="max-w-sm truncate">{project.description}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleEdit(project.id)}>Edit</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDelete(project.id)} className="text-destructive">Delete</DropdownMenuItem>
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
