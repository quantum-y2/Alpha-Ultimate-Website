'use client';

import Image from 'next/image';
import { projects } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/page-header';
import { PageShell } from '@/components/page-shell';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageShell>
        <PageHeader
          title="Project Showcase"
          description="We take pride in our contribution to some of the most ambitious projects in the Kingdom of Saudi Arabia. Our portfolio demonstrates our commitment to quality, scale, and excellence."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="neon-border-accent overflow-hidden bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.imageIds.map(imageId => {
                      const image = PlaceHolderImages.find(p => p.id === imageId);
                      return image ? (
                        <CarouselItem key={imageId}>
                          <div className="aspect-video relative overflow-hidden rounded-lg">
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              fill
                              className="object-cover"
                              data-ai-hint={image.imageHint}
                            />
                          </div>
                        </CarouselItem>
                      ) : null;
                    })}
                  </CarouselContent>
                  {project.imageIds.length > 1 && (
                      <>
                        <CarouselPrevious className="absolute left-2"/>
                        <CarouselNext className="absolute right-2"/>
                      </>
                  )}
                </Carousel>
              </CardHeader>
              <CardContent>
                <CardTitle className="font-headline text-2xl mb-2 text-accent">{project.title}</CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </PageShell>
      <Footer />
    </div>
  );
}
