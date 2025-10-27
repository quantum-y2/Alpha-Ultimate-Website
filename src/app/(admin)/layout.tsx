'use client';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInset,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/logo';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LayoutDashboard, Newspaper, Briefcase, Users, FileText, BrainCircuit, LogOut, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const adminNavItems = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/submissions', label: 'Submissions', icon: FileText },
  { href: '/admin/manpower-requests', label: 'Manpower Requests', icon: Users },
  { href: '/admin/jobs', label: 'Job Postings', icon: Briefcase },
  { href: '/admin/projects', label: 'Projects', icon: Newspaper },
  { href: '/admin/services', label: 'Services', icon: Settings },
  { href: '/admin/vision', label: 'Vision Page', icon: BrainCircuit },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center justify-between">
              <Logo />
              <SidebarTrigger />
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {adminNavItems.map(item => (
                <SidebarMenuItem key={item.href}>
                  <Link href={item.href}>
                    <SidebarMenuButton isActive={pathname === item.href}>
                      <item.icon />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <div className="flex items-center gap-3 p-2 rounded-md bg-sidebar-accent">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>MH</AvatarFallback>
                </Avatar>
                <div className="flex-grow overflow-hidden">
                    <p className="text-sm font-semibold truncate">Mr. M.M. Hasan</p>
                    <p className="text-xs text-muted-foreground truncate">CEO</p>
                </div>
                <Button variant="ghost" size="icon" asChild>
                    <Link href="/"><LogOut/></Link>
                </Button>
            </div>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
            <div className="p-4 sm:p-6 lg:p-8 flex-grow">
             {children}
            </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
