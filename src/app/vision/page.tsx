import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PageHeader } from '@/components/page-header';
import { PageShell } from '@/components/page-shell';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function VisionPage() {
  const visionImage = PlaceHolderImages.find(p => p.id === 'vision-page-image');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageShell>
        <PageHeader
          title="Our AI-Driven Vision"
          description="Connecting data, people, and projects to build the future, smarter."
        />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 space-y-6">
                <h2 className="font-headline text-3xl font-bold text-accent">Introducing 'Yusra': The Future of Project Management</h2>
                <p className="text-muted-foreground text-lg">
                At Alpha Ultimate Ltd., our vision extends beyond conventional limits. We are pioneering an AI-driven ecosystem, codenamed 'Yusra', designed to revolutionize how we manage resources, anticipate project needs, and drive operational efficiency.
                </p>
                <p className="text-muted-foreground text-lg">
                Yusra will be the digital backbone of our operations, analyzing real-time data from manpower requests, project progress, and talent acquisition funnels. By identifying patterns and making predictive recommendations, Yusra will empower our leadership to make proactive, data-informed decisions, ensuring the right people are in the right place at the right time.
                </p>
                 <p className="text-muted-foreground text-lg">
                This isn't just about automation; it's about intelligence. It's about transforming raw data into actionable insights, minimizing downtime, optimizing resource allocation, and ultimately, delivering superior value to our clients. Our journey with Yusra is just beginning, and it represents our unwavering commitment to innovation and excellence.
                </p>
            </div>
            <div className="lg:col-span-2">
                {visionImage && (
                    <div className="aspect-square relative rounded-lg overflow-hidden neon-border-accent">
                        <Image
                            src={visionImage.imageUrl}
                            alt={visionImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={visionImage.imageHint}
                        />
                    </div>
                )}
            </div>
        </div>
      </PageShell>
      <Footer />
    </div>
  );
}
