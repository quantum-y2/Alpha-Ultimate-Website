import { PageHeader } from "@/components/page-header";
import { ManpowerRequestForm } from "@/components/forms/manpower-request-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PortalDashboardPage() {
  return (
    <div className="container py-10">
      <PageHeader
        title="Client Dashboard"
        description="Welcome, valued partner. Submit and manage your manpower requests here."
        className="text-left items-start"
      />
      <Card className="neon-border-accent">
        <CardHeader>
            <CardTitle className="font-headline text-2xl text-accent">New Manpower Request</CardTitle>
        </CardHeader>
        <CardContent>
            <ManpowerRequestForm />
        </CardContent>
      </Card>
    </div>
  );
}
