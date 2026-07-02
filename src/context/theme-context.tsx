'use client';

import { DEFAULT_THEME, THEME_IDS, ThemeId } from '@/src/types/theme';
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

const THEME_CHANGE_EVENT = 'portfolio-theme-change';

interface ThemeContextType {
  theme: ThemeId;
  setTheme: Dispatch<SetStateAction<ThemeId>>;
  themes: readonly ThemeId[];
}

const ThemeContext = createContext<ThemeContextType>({
  theme: DEFAULT_THEME,
  setTheme: () => {},
  themes: THEME_IDS
});

function readStoredTheme(): ThemeId {
  const stored = localStorage.getItem('theme');
  if (stored && THEME_IDS.includes(stored as ThemeId)) {
    return stored as ThemeId;
  }

  return DEFAULT_THEME;
}

function applyThemeClass(theme: ThemeId) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.classList.remove('dark', 'dark-blue');

  if (theme === 'dark') {
    root.classList.add('dark');
  } else if (theme === 'dark-blue') {
    root.classList.add('dark-blue');
  }
}

function subscribeToTheme(onStoreChange: () => void) {
  window.addEventListener(THEME_CHANGE_EVENT, onStoreChange);
  window.addEventListener('storage', onStoreChange);
  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, onStoreChange);
    window.removeEventListener('storage', onStoreChange);
  };
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribeToTheme, readStoredTheme, () => DEFAULT_THEME);

  useLayoutEffect(() => {
    applyThemeClass(theme);
  }, [theme]);

  const setTheme = useCallback((newTheme: SetStateAction<ThemeId>) => {
    const current = readStoredTheme();
    const next = typeof newTheme === 'function' ? newTheme(current) : newTheme;
    localStorage.setItem('theme', next);
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }, []);

  return <ThemeContext.Provider value={{ theme, setTheme, themes: THEME_IDS }}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextType {
  return useContext(ThemeContext);
}
