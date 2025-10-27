import { redirect } from 'next/navigation';

export default function PortalRootPage() {
  // In a real app, you would check for authentication here.
  // If authenticated, redirect to '/portal/dashboard'.
  // If not, redirect to '/portal/login'.
  redirect('/portal/login');
}
