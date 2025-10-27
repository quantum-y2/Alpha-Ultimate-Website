import { MapPin } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface JobCardProps {
  title: string;
  location: string;
  description: string;
}

export function JobCard({ title, location, description }: JobCardProps) {
  return (
    <Card className="flex flex-col h-full neon-border bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="font-headline text-xl text-primary">{title}</CardTitle>
        <CardDescription className="flex items-center gap-2 pt-2">
          <MapPin className="w-4 h-4 text-muted-foreground" />
          <span>{location}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  );
}
