'use client';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';
import { PageHeader } from '@/components/page-header';
import { PageShell } from '@/components/page-shell';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ContactForm } from '@/components/forms/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const contactDetails = [
  {
    icon: Phone,
    title: 'Phone',
    value: '+966 11 123 4567',
    href: 'tel:+966111234567',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@alphaultimate.com',
    href: 'mailto:info@alphaultimate.com',
  },
  {
    icon: MapPin,
    title: 'Address',
    value: '123 Business Avenue, Riyadh, KSA',
  },
];

const socialLinks = [
  {
    name: 'Facebook',
    href: '#',
    icon: Facebook,
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/966111234567', // Example WhatsApp link
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: Linkedin,
  },
  {
    name: 'X',
    href: '#',
    icon: Twitter,
  },
];


export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageShell>
        <PageHeader
          title="Contact Us"
          description="We're here to help. Reach out to us with any questions, inquiries, or partnership proposals. Our team is ready to assist you."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="neon-border bg-card/50 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl text-primary">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent>
                    <ContactForm />
                </CardContent>
            </Card>

            <div className="space-y-8">
                {contactDetails.map(item => (
                    <div key={item.title} className="flex items-start gap-4">
                        <div className="p-3 rounded-md bg-primary/10 text-primary neon-border">
                            <item.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-headline text-xl font-semibold">{item.title}</h3>
                            {item.href ? (
                                <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">{item.value}</a>
                            ) : (
                                <p className="text-muted-foreground">{item.value}</p>
                            )}
                        </div>
                    </div>
                ))}
                 <Separator className="my-8"/>
                  <div>
                    <h3 className="font-headline text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex items-center gap-4">
                      {socialLinks.map((social) => (
                        <Button key={social.name} variant="outline" size="icon" className="neon-border" asChild>
                          <Link href={social.href} target="_blank" aria-label={social.name}>
                            <social.icon />
                          </Link>
                        </Button>
                      ))}
                    </div>
                  </div>
            </div>
        </div>
      </PageShell>
      <Footer />
    </div>
  );
}
