import type { LocaleCode } from '../types/locale';
import { DEFAULT_LOCALE } from '../types/locale';
import type { EducationContent } from '../types/education';
import * as educationEN from './education.en-US';
import * as educationPT from './education.pt-BR';

const educationMap: Record<LocaleCode, EducationContent> = {
  'pt-BR': educationPT.education,
  'en-US': educationEN.education
};

export function getEducation(locale: LocaleCode = DEFAULT_LOCALE): EducationContent {
  return educationMap[locale] || educationMap[DEFAULT_LOCALE];
}
