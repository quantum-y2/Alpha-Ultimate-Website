import Image from 'next/image';
import { services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/page-header';
import { PageShell } from '@/components/page-shell';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageShell>
        <PageHeader
          title="Our Services"
          description="We provide comprehensive solutions in construction, HR, and cleaning, tailored to the demanding needs of the Saudi Arabian market. Our data-driven approach ensures efficiency and excellence in every project."
        />
        <div className="relative">
          <ScrollArea>
            <div className="flex space-x-6 pb-4">
              {services.map((service) => {
                const image = PlaceHolderImages.find(p => p.id === service.imageId);
                return (
                  <Card key={service.id} className="w-[350px] flex-shrink-0 neon-border bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      {image && (
                        <div className="overflow-hidden rounded-lg mb-4 h-48">
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            data-ai-hint={image.imageHint}
                          />
                        </div>
                      )}
                      <CardTitle className="font-headline text-xl text-primary">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </PageShell>
      <Footer />
    </div>
  );
}
