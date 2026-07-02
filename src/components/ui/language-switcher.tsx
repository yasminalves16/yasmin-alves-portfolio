'use client';

import { useLocale } from '@/src/hooks/use-locale';
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

  const toggleLanguage = () => {
    setLocale((prev) => (prev === 'pt-BR' ? 'en-US' : 'pt-BR'));
  };

  const otherLocale: LocaleCode = locale === 'pt-BR' ? 'en-US' : 'pt-BR';

  return (
    <button
      type='button'
      onClick={toggleLanguage}
      className='utility-btn px-3'
      aria-label={`Mudar para ${localeFullLabel[otherLocale]}`}
      title={`Mudar para ${localeFullLabel[otherLocale]}`}
    >
      {localeLabel[locale]}
    </button>
  );
};
