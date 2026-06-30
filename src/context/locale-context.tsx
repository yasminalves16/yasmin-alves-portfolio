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

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<LocaleCode>(DEFAULT_LOCALE);

  // Hidratar do localStorage apenas no cliente
  useLayoutEffect(() => {
    const stored = localStorage.getItem('locale') as LocaleCode | null;
    if (stored && (stored === 'pt-BR' || stored === 'en-US')) {
      setLocale(stored);
    }
  }, []);

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
