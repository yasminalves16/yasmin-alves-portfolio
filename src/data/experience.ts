import type { LocaleCode } from '../types/locale';
import { DEFAULT_LOCALE } from '../types/locale';
import type { ExperienceEntry } from '../types/experience';
import * as experienceEN from './experience.en-US';
import * as experiencePT from './experience.pt-BR';

const experienceMap: Record<LocaleCode, ExperienceEntry[]> = {
  'pt-BR': experiencePT.experience,
  'en-US': experienceEN.experience
};

export function getExperience(locale: LocaleCode = DEFAULT_LOCALE): ExperienceEntry[] {
  return experienceMap[locale] || experienceMap[DEFAULT_LOCALE];
}

export function getExperienceById(id: string, locale?: LocaleCode): ExperienceEntry | undefined {
  return getExperience(locale).find((entry) => entry.id === id);
}
