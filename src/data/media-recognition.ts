import type { LocaleCode } from '../types/locale';
import { DEFAULT_LOCALE } from '../types/locale';
import type { MediaRecognition } from '../types/media-recognition';
import * as mediaEN from './media-recognition.en-US';
import * as mediaPT from './media-recognition.pt-BR';

const mediaMap: Record<LocaleCode, MediaRecognition[]> = {
  'pt-BR': mediaPT.mediaRecognition,
  'en-US': mediaEN.mediaRecognition
};

export function getMediaRecognition(locale: LocaleCode = DEFAULT_LOCALE): MediaRecognition[] {
  return mediaMap[locale] || mediaMap[DEFAULT_LOCALE];
}

export function getMediaRecognitionById(id: string, locale?: LocaleCode): MediaRecognition | undefined {
  return getMediaRecognition(locale).find((item) => item.id === id);
}
