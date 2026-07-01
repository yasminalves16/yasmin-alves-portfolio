'use client';

import { useTheme } from '@/src/hooks/use-theme';
import { type ThemeId } from '@/src/types/theme';
import { Moon, MoonStar, Sun } from 'lucide-react';

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

export const ThemeToggle = () => {
  const { theme, setTheme, themes } = useTheme();

  const cycleTheme = () => {
    setTheme((prev: ThemeId) => {
      const i = themes.indexOf(prev);
      return themes[(i + 1) % themes.length];
    });
  };

  return (
    <button
      type='button'
      onClick={cycleTheme}
      className='p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors hover:bg-gray-300 dark:hover:bg-gray-700'
      aria-label={themeLabel[theme]}
      title={themeLabel[theme]}
    >
      <ThemeIcon id={theme} />
    </button>
  );
};
