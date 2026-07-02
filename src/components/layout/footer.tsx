'use client';

import { useMessages } from '@/src/hooks/use-messages';
import { Container } from '../ui/container';

export function Footer() {
  const { sections } = useMessages();
  const { footer } = sections;

  return (
    <footer id='footer' className='border-t border-border bg-card'>
      <Container asSection={false} className='py-4 pb-24 lg:pb-4'>
        <div className='flex flex-col items-center justify-between gap-2 sm:flex-row sm:gap-4'>
          <p className='text-xs text-muted-foreground'>{footer.madeWith}</p>
          <p className='text-xs text-muted-foreground'>{footer.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
