import type { LocaleCode, LocaleMessages } from '../types/locale';
import enUS from './en-US';
import ptBR from './pt-BR';

export const messages = {
  'pt-BR': ptBR,
  'en-US': enUS
} satisfies Record<LocaleCode, LocaleMessages>;
