'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="relative h-screen w-full overflow-hidden">
           <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute z-[-1] w-auto min-w-full min-h-full max-w-none object-cover"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-crane-working-at-a-construction-site-4775-large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-4">
              <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent">
                Alpha Ultimate Ltd.
              </h1>
              <p className="mt-4 text-xl md:text-2xl text-muted-foreground">
                Beyond the every limit...
              </p>
              <Link href="/services">
                <Button size="lg" className="mt-8 neon-button text-lg">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
