'use client';

import {
  getAllProjects,
  getEducation,
  getExperience,
  getFeaturedProjects,
  getHeroContent,
  getMediaRecognition,
  getMoreProjects,
  getOtherProjects,
  getProfile,
  getProjectBySlug
} from '@/src/data';
import { useLocale } from '@/src/hooks/use-locale';

export function usePortfolioData() {
  const { locale } = useLocale();

  return {
    locale,
    profile: getProfile(locale),
    heroContent: getHeroContent(locale),
    experience: getExperience(locale),
    education: getEducation(locale),
    mediaRecognition: getMediaRecognition(locale),
    allProjects: getAllProjects(locale),
    featuredProjects: getFeaturedProjects(locale),
    moreProjects: getMoreProjects(locale),
    getProjectBySlug: (slug: string) => getProjectBySlug(slug, locale),
    getOtherProjects: (slug: string, limit = 3) => getOtherProjects(slug, limit, locale)
  };
}
