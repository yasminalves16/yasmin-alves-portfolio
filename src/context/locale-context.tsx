'use client';

import { DEFAULT_LOCALE, LocaleCode } from '@/src/types/locale';
import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useSyncExternalStore,
  type Dispatch,
  type ReactNode,
  type SetStateAction
} from 'react';

const LOCALE_CHANGE_EVENT = 'portfolio-locale-change';

interface LocaleContextType {
  locale: LocaleCode;
  setLocale: Dispatch<SetStateAction<LocaleCode>>;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {}
});

function readStoredLocale(): LocaleCode {
  const stored = localStorage.getItem('locale');
  if (stored === 'pt-BR' || stored === 'en-US') {
    return stored as LocaleCode;
  }

  return DEFAULT_LOCALE;
}

function applyLocale(lang: LocaleCode) {
  document.documentElement.lang = lang === 'pt-BR' ? 'pt-br' : 'en-us';
}

function subscribeToLocale(onStoreChange: () => void) {
  window.addEventListener(LOCALE_CHANGE_EVENT, onStoreChange);
  window.addEventListener('storage', onStoreChange);
  return () => {
    window.removeEventListener(LOCALE_CHANGE_EVENT, onStoreChange);
    window.removeEventListener('storage', onStoreChange);
  };
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore<LocaleCode>(subscribeToLocale, readStoredLocale, () => DEFAULT_LOCALE);

  useLayoutEffect(() => {
    applyLocale(locale);
  }, [locale]);

  const setLocale = useCallback((newLocale: SetStateAction<LocaleCode>) => {
    const current = readStoredLocale();
    const next: LocaleCode = typeof newLocale === 'function' ? newLocale(current) : newLocale;
    localStorage.setItem('locale', next);
    window.dispatchEvent(new Event(LOCALE_CHANGE_EVENT));
  }, []);

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextType {
  return useContext(LocaleContext);
}
