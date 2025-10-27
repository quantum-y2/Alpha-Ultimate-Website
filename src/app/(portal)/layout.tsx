import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <Logo />
          <Button variant="ghost" size="sm">
            Logout
            <LogOut className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>
      <main className="flex-1">{children}</main>
       <footer className="py-6 md:px-8 md:py-0 border-t">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Alpha Ultimate Ltd. Client Portal.
          </p>
        </div>
      </footer>
    </div>
  );
}
