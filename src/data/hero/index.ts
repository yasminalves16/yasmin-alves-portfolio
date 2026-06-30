import type { LocaleCode } from '../../types/locale';
import { DEFAULT_LOCALE } from '../../types/locale';
import type { HeroContent } from '../../types/hero';
import * as heroEN from './en-US';
import * as heroPT from './pt-BR';

const heroMap: Record<LocaleCode, HeroContent> = {
  'pt-BR': heroPT.heroContent,
  'en-US': heroEN.heroContent
};

export function getHeroContent(locale: LocaleCode = DEFAULT_LOCALE): HeroContent {
  return heroMap[locale] || heroMap[DEFAULT_LOCALE];
}
