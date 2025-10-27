'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About Us' },
  { href: '/vision', label: 'Our Vision' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link href={href} passHref>
      <Button
        variant="link"
        className={cn(
          'text-base font-medium',
          pathname === href
            ? 'text-primary'
            : 'text-white/80 hover:text-white',
          'transition-colors duration-200'
        )}
      >
        {label}
      </Button>
    </Link>
  );

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isHome && !isScrolled && !isMenuOpen ? 'bg-transparent' : 'bg-background/80 backdrop-blur-sm border-b'
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
            <Link href="/portal/login" passHref>
                <Button variant="outline" className="neon-border">
                    Client Portal
                </Button>
            </Link>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm pb-6">
          <nav className="container flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
             <Link href="/portal/login" passHref>
                <Button variant="outline" className="w-full neon-border">
                    Client Portal
                </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
