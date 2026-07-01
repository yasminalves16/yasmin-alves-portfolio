import type { LocaleCode } from '../../types/locale';
import { DEFAULT_LOCALE } from '../../types/locale';
import type { Profile } from '../../types/profile';
import * as profileEN from './en-US';
import * as profilePT from './pt-BR';

const profileMap: Record<LocaleCode, Profile> = {
  'pt-BR': profilePT.profile,
  'en-US': profileEN.profile
};

export function getProfile(locale: LocaleCode = DEFAULT_LOCALE): Profile {
  return profileMap[locale] || profileMap[DEFAULT_LOCALE];
}
