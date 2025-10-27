import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PageHeader } from '@/components/page-header'
import { PageShell } from '@/components/page-shell'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageShell>
        <div className="text-center">
        <PageHeader title="404 - Not Found" description="The page you are looking for does not exist."/>
        <Button asChild>
          <Link href="/">Return to Homepage</Link>
        </Button>
        </div>
      </PageShell>
      <Footer />
    </div>
  )
}
