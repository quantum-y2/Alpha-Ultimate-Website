import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PageHeader } from '@/components/page-header';
import { PageShell } from '@/components/page-shell';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const slideshowImages = [
  'about-slideshow-1',
  'about-slideshow-2',
  'about-slideshow-3',
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageShell>
        <PageHeader
          title="About Alpha Ultimate"
          description="Forging the future of service excellence in Saudi Arabia."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold text-primary">Our Mission</h2>
            <p className="text-muted-foreground text-lg">
              To be the most trusted partner for construction, HR, and cleaning services in the Kingdom by leveraging data, technology, and a highly skilled workforce to deliver unparalleled results. We aim to exceed expectations and build lasting relationships based on integrity and performance.
            </p>
            <h2 className="font-headline text-3xl font-bold text-primary">Our Values</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground text-lg">
              <li><strong>Excellence:</strong> We set the highest standards for ourselves and our work.</li>
              <li><strong>Integrity:</strong> We operate with transparency and honesty in all our dealings.</li>
              <li><strong>Innovation:</strong> We embrace technology to drive efficiency and create value.</li>
              <li><strong>People:</strong> We invest in our team, ensuring they are skilled, safe, and motivated.</li>
            </ul>
          </div>
          <div>
            <Carousel
              opts={{ loop: true }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {slideshowImages.map(imageId => {
                  const image = PlaceHolderImages.find(p => p.id === imageId);
                  return image ? (
                    <CarouselItem key={imageId}>
                      <Card className="overflow-hidden neon-border">
                        <CardContent className="p-0">
                          <div className="aspect-video relative">
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              fill
                              className="object-cover"
                              data-ai-hint={image.imageHint}
                            />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ) : null;
                })}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </PageShell>
      <Footer />
    </div>
  );
}
