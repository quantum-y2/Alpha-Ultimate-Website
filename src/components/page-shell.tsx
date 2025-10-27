import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface PageShellProps {
  children: ReactNode;
  className?: string;
}

export function PageShell({ children, className }: PageShellProps) {
  return (
    <main
      className={cn(
        "flex-grow animate-in fade-in-0 duration-500",
        className
      )}
    >
      <div className="container max-w-6xl px-4 md:px-8 py-24 sm:py-32">
        {children}
      </div>
    </main>
  );
}
