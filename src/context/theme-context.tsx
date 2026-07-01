'use client';

import { DEFAULT_THEME, THEME_IDS, ThemeId } from '@/src/types/theme';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useLayoutEffect, useState } from 'react';

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

function readInitialTheme(): ThemeId {
  if (typeof window === 'undefined') {
    return DEFAULT_THEME;
  }

  const stored = localStorage.getItem('theme');
  if (stored && THEME_IDS.includes(stored as ThemeId)) {
    return stored as ThemeId;
  }

  return DEFAULT_THEME;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(readInitialTheme);

  // Sincronizar mudanças de tema
  useLayoutEffect(() => {
    localStorage.setItem('theme', theme);

    // Atualizar atributos do elemento raiz
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.dataset.theme = theme;

      // Adicionar/remover classe 'dark' para compatibilidade com Tailwind
      if (theme.startsWith('dark')) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }, [theme]);

  const setTheme = (newTheme: ThemeId | ((prev: ThemeId) => ThemeId)) => {
    setThemeState(newTheme);
  };

  return <ThemeContext.Provider value={{ theme, setTheme, themes: THEME_IDS }}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextType {
  return useContext(ThemeContext);
}
