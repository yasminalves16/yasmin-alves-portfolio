'use client';

import { useMessages } from '@/src/hooks/use-messages';
import { SiteLogo } from './site-logo';
import { Navbar } from './navbar';

export function Header() {
  const { a11y } = useMessages();

  return (
    <header className='fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8'>
        <a href='#hero' aria-label={a11y.siteLogo}>
          <SiteLogo />
        </a>
        <Navbar />
      </div>
    </header>
  );
}
