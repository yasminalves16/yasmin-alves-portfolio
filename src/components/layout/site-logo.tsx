import { cn } from '@/src/lib/utils';
import { Terminal } from 'lucide-react';

type SiteLogoProps = {
  className?: string;
};

export function SiteLogo({ className }: SiteLogoProps) {
  return (
    <span className={cn('flex items-center gap-2.5 text-primary', className)}>
      <span className='flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-primary/40 bg-primary/10'>
        <Terminal size={14} strokeWidth={2.5} aria-hidden />
      </span>
      <span className='font-mono text-sm font-semibold tracking-widest'>YASMIN.ALVES</span>
    </span>
  );
}
