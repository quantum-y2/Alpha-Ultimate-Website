import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("text-center space-y-4 mb-12 md:mb-16", className)}>
      <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
        {title}
      </h1>
      {description && (
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
