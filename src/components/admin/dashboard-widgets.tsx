import { FileText, Users } from 'lucide-react';
import { recentManpowerRequests, recentSubmissions } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

export function RecentManpowerRequests() {
  return (
    <Card className="neon-border h-full">
      <CardHeader>
        <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-primary" />
            <div>
                <CardTitle className="font-headline text-primary">New Manpower Requests</CardTitle>
                <CardDescription>The 5 most recent requests from clients.</CardDescription>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Client</TableHead>
              <TableHead>Project</TableHead>
              <TableHead>Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentManpowerRequests.map(req => (
              <TableRow key={req.id}>
                <TableCell className="font-medium">{req.client}</TableCell>
                <TableCell>{req.project}</TableCell>
                <TableCell className="text-muted-foreground">{req.details}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}


export function RecentSubmissions() {
  return (
    <Card className="neon-border h-full">
      <CardHeader>
        <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-primary" />
            <div>
                <CardTitle className="font-headline text-primary">New Submissions</CardTitle>
                <CardDescription>Recent contacts and CVs from the website.</CardDescription>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentSubmissions.map(sub => (
              <TableRow key={sub.id}>
                <TableCell className="font-medium">{sub.name}</TableCell>
                <TableCell>
                    <Badge variant={sub.type === 'Career' ? 'default' : 'secondary'}>{sub.type}</Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{sub.details}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
