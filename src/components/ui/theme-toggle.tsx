'use client';

import { useTheme } from '@/src/hooks/use-theme';
import { type ThemeId } from '@/src/types/theme';
import { MdOutlineDarkMode, MdOutlineLightMode, MdOutlineNightsStay } from 'react-icons/md';

const ICON_SIZE = 18;

function ThemeIcon({ id }: { id: ThemeId }) {
  switch (id) {
    case 'light':
      return <MdOutlineLightMode size={ICON_SIZE} aria-hidden />;
    case 'dark':
      return <MdOutlineDarkMode size={ICON_SIZE} aria-hidden />;
    case 'dark-blue':
      return <MdOutlineNightsStay size={ICON_SIZE} aria-hidden />;
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
      className='utility-btn w-9'
      aria-label={themeLabel[theme]}
      title={themeLabel[theme]}
    >
      <ThemeIcon id={theme} />
    </button>
  );
};
