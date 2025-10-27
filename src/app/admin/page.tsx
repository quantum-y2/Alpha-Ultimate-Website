import { redirect } from 'next/navigation';

export default function AdminRootPage() {
  // In a real app, you would check for authentication here.
  // If authenticated, redirect to '/admin/dashboard'.
  // If not, redirect to '/admin/login'.
  redirect('/admin/login');
}
