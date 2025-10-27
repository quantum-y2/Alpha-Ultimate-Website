import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const footerLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/estimating', label: 'Estimating' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
  { href: '/portal/login', label: 'Client Portal' },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Logo />
            <p className="text-muted-foreground italic">"Beyond the every limit..."</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
             {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} passHref>
                    <Button variant="link" className="text-muted-foreground hover:text-primary">
                        {link.label}
                    </Button>
                </Link>
             ))}
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Alpha Ultimate Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
