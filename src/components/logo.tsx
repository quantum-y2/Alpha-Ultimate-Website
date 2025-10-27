import { cn } from '@/lib/utils';
import Link from 'next/link';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)} aria-label="Back to homepage">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <path
          d="M12 2L3.25 22H7.25L9.1 17H14.9L16.75 22H20.75L12 2ZM12 6.3L14.05 15H9.95L12 6.3Z"
          fill="currentColor"
        />
      </svg>
      <span className="font-headline font-bold text-xl tracking-tight">
        Alpha Ultimate
      </span>
    </Link>
  );
}
