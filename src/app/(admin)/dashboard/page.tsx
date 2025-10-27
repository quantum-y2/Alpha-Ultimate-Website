import { RecentManpowerRequests, RecentSubmissions } from '@/components/admin/dashboard-widgets';
import { YusraInsightWidget } from '@/components/admin/yusra-insight';
import { PageHeader } from '@/components/page-header';

export default function AdminDashboardPage() {
  return (
    <div className="flex-1 space-y-4">
       <PageHeader
          title="Admin Dashboard"
          description="Welcome, Mr. Hasan. Here is a real-time overview of your business activities."
          className="text-left items-start"
        />
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        <div className="lg:col-span-2">
          <YusraInsightWidget />
        </div>
        <div className="lg:col-span-1">
          <RecentManpowerRequests />
        </div>
        <div className="lg:col-span-1">
          <RecentSubmissions />
        </div>
      </div>
    </div>
  );
}
