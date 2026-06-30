import type { LocaleCode } from '../types/locale';
import { DEFAULT_LOCALE } from '../types/locale';
import type { ProjectCategory, ProjectDetail, ProjectListItem } from '../types/project';
import * as projectsEN from './projects.en-US';
import * as projectsPT from './projects.pt-BR';

const localeProjectMap: Record<LocaleCode, ProjectDetail[]> = {
  'pt-BR': projectsPT.projects,
  'en-US': projectsEN.projects
};

function getProjectsByLocale(locale: LocaleCode = DEFAULT_LOCALE): ProjectDetail[] {
  return localeProjectMap[locale] || localeProjectMap[DEFAULT_LOCALE];
}

export function getAllProjects(locale?: LocaleCode): ProjectListItem[] {
  return getProjectsByLocale(locale);
}

export function getFeaturedProjects(locale?: LocaleCode): ProjectListItem[] {
  return getProjectsByLocale(locale).filter((project) => project.featured);
}

export function getMoreProjects(locale?: LocaleCode): ProjectListItem[] {
  return getProjectsByLocale(locale).filter((project) => !project.featured);
}

export function getProjectsByCategory(category: ProjectCategory, locale?: LocaleCode): ProjectListItem[] {
  return getProjectsByLocale(locale).filter((project) => project.category === category);
}

export const projectFilterTechnologies = [
  'React',
  'TypeScript',
  'Next.js',
  'Node.js',
  'Java',
  'Spring Boot',
  'PostgreSQL',
  'TailwindCSS',
  'Scrum',
  'RPA',
  'Google Cloud',
  'Power BI'
] as const;

export function getProjectBySlug(slug: string, locale?: LocaleCode): ProjectDetail | undefined {
  return getProjectsByLocale(locale).find((project) => project.slug === slug);
}

export function getOtherProjects(slug: string, limit = 3, locale?: LocaleCode): ProjectListItem[] {
  return getProjectsByLocale(locale)
    .filter((project) => project.slug !== slug)
    .slice(0, limit);
}

export function getAllProjectTags(locale?: LocaleCode): string[] {
  const tags = new Set<string>();
  for (const project of getProjectsByLocale(locale)) {
    for (const tag of project.tags) {
      tags.add(tag);
    }
  }
  return Array.from(tags).sort((a, b) => a.localeCompare(b));
}
