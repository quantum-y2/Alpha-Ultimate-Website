'use client';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PageShell } from '@/components/page-shell';
import { PageHeader } from '@/components/page-header';
import { EstimatingTabs } from '@/components/estimating/estimating-tabs';

export default function EstimatingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageShell>
        <PageHeader
          title="Real-Time Service Estimator"
          description="Get an instant, transparent cost estimate for your project needs based on current market rates in Saudi Arabia. Select a service category below to get started."
        />
        <EstimatingTabs />
      </PageShell>
      <Footer />
    </div>
  );
}
