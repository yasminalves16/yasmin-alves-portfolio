'use client';

import { DEFAULT_LOCALE, LocaleCode } from '@/src/types/locale';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useLayoutEffect, useState } from 'react';

interface LocaleContextType {
  locale: LocaleCode;
  setLocale: Dispatch<SetStateAction<LocaleCode>>;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {}
});

function readInitialLocale(): LocaleCode {
  if (typeof window === 'undefined') {
    return DEFAULT_LOCALE;
  }

  const stored = localStorage.getItem('locale');
  if (stored === 'pt-BR' || stored === 'en-US') {
    return stored;
  }

  return DEFAULT_LOCALE;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<LocaleCode>(readInitialLocale);

  // Sincronizar mudanças de locale
  useLayoutEffect(() => {
    localStorage.setItem('locale', locale);

    // Atualizar atributo lang do HTML
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale === 'pt-BR' ? 'pt-br' : 'en-us';
    }
  }, [locale]);

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextType {
  return useContext(LocaleContext);
}
