'use client';

import { LocaleProvider } from '@/src/context/locale-context';
import { ThemeProvider } from '@/src/context/theme-context';
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </LocaleProvider>
  );
}
