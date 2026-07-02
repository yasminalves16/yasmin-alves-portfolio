'use client';

import { CodeBackground } from '@/src/components/effects/code-background';
import { LocaleProvider } from '@/src/context/locale-context';
import { ThemeProvider } from '@/src/context/theme-context';
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <ThemeProvider>
        <CodeBackground />
        <div className='relative z-10'>{children}</div>
      </ThemeProvider>
    </LocaleProvider>
  );
}
