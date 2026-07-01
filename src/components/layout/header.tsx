'use client';

import { useMessages } from '@/src/hooks/use-messages';
import { Navbar } from './navbar';

export function Header() {
  const { a11y } = useMessages();

  return (
    <header className='fixed'>
      <a href='#hero' aria-label={a11y.siteLogo}>
        Y.
      </a>
      <Navbar />
    </header>
  );
}
