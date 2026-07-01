'use client';

import { useLocale } from '@/src/hooks/use-locale';
import { BREAKPOINTS, useMediaQuery } from '@/src/hooks/use-media-query';
import { cn } from '@/src/lib/utils';
import { type LocaleCode } from '@/src/types/locale';

const localeLabel: Record<LocaleCode, string> = {
  'pt-BR': 'PT',
  'en-US': 'EN'
};

const localeFullLabel: Record<LocaleCode, string> = {
  'pt-BR': 'Português',
  'en-US': 'English'
};

export const LanguageSwitcher = () => {
  const { locale, setLocale } = useLocale();
  const isDesktop = useMediaQuery(BREAKPOINTS.lg);

  const toggleLanguage = () => {
    setLocale((prev) => (prev === 'pt-BR' ? 'en-US' : 'pt-BR'));
  };

  const otherLocale: LocaleCode = locale === 'pt-BR' ? 'en-US' : 'pt-BR';

  return (
    <button
      type='button'
      onClick={toggleLanguage}
      className={cn(
        'rounded-full bg-secondary px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted'
      )}
      aria-label={`Mudar para ${localeFullLabel[otherLocale]}`}
      title={`Mudar para ${localeFullLabel[otherLocale]}`}
    >
      {isDesktop ? localeLabel[locale] : localeLabel[locale]}
    </button>
  );
};
