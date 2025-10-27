import { jobs } from '@/lib/data';
import { PageHeader } from '@/components/page-header';
import { PageShell } from '@/components/page-shell';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { JobCard } from '@/components/job-card';
import { CareerApplicationForm } from '@/components/forms/career-application-form';

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageShell>
        <PageHeader
          title="Join Our Team"
          description="We are always looking for talented and passionate individuals to join our growing team. Explore our current openings and take the next step in your career with Alpha Ultimate Ltd."
        />
        <div className="space-y-16">
          <section>
            <h2 className="font-headline text-3xl font-bold text-center mb-8 text-primary">Current Openings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobs.map((job) => (
                <JobCard key={job.id} {...job} />
              ))}
            </div>
          </section>
          <section>
             <h2 className="font-headline text-3xl font-bold text-center mb-8 text-accent">Apply Now</h2>
             <CareerApplicationForm />
          </section>
        </div>
      </PageShell>
      <Footer />
    </div>
  );
}
