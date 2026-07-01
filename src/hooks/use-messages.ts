'use client';

import { messages } from '@/src/messages';
import { useLocale } from '@/src/hooks/use-locale';

export function useMessages() {
  const { locale } = useLocale();
  return messages[locale];
}
