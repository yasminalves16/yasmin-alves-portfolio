'use client';
import { DEFAULT_THEME, THEME_IDS, type ThemeId } from '@/src/types/theme';
import { Moon, MoonStar, Sun } from 'lucide-react';
import { useLayoutEffect, useRef, useState } from 'react';

function isThemeId(value: string | null): value is ThemeId {
  return value !== null && (THEME_IDS as readonly string[]).includes(value);
}

function readInitialTheme(): ThemeId {
  if (typeof window === 'undefined') return DEFAULT_THEME;

  const stored = localStorage.getItem('theme');
  if (isThemeId(stored)) return stored;

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

function ThemeIcon({ id }: { id: ThemeId }) {
  const size = 20;
  switch (id) {
    case 'light':
      return <Sun size={size} aria-hidden />;
    case 'dark':
      return <Moon size={size} aria-hidden />;
    case 'dark-blue':
      return <MoonStar size={size} aria-hidden />;
  }
}

const themeLabel: Record<ThemeId, string> = {
  light: 'Tema claro',
  dark: 'Tema escuro',
  'dark-blue': 'Tema azul escuro'
};

function syncThemeToDocument(t: ThemeId) {
  const root = window.document.documentElement;
  root.dataset.theme = t;
  const useDarkVariant = t === 'dark' || t === 'dark-blue';
  root.classList.toggle('dark', useDarkVariant);
  localStorage.setItem('theme', t);
}

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<ThemeId>(DEFAULT_THEME);
  const hydrated = useRef(false);

  useLayoutEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true;    
      // eslint-disable-next-line react-hooks/exhaustive-deps -- evita chamadas recursivas
      setTheme((prev) => {
        const nextTheme = readInitialTheme();
        if (prev === nextTheme) return prev;
        syncThemeToDocument(nextTheme);
        return nextTheme;
      });
    }
  }, [theme]);

  const cycleTheme = () => {
    setTheme((prev: ThemeId) => {
      const i = THEME_IDS.indexOf(prev);
      return THEME_IDS[(i + 1) % THEME_IDS.length];
    });
  };

  return (
    <button
      type='button'
      onClick={cycleTheme}
      className='p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors'
      aria-label={themeLabel[theme]}
    >
      <ThemeIcon id={theme} />
    </button>
  );
};
