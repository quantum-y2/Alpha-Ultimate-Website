import { Mail, Phone, MapPin } from 'lucide-react';
import { PageHeader } from '@/components/page-header';
import { PageShell } from '@/components/page-shell';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ContactForm } from '@/components/forms/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
            </div>
        </div>
      </PageShell>
      <Footer />
    </div>
  );
}
