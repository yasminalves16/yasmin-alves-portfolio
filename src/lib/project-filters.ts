import type { ProjectCategory, ProjectListItem } from '@/src/types/project';

export type ProjectCategoryFilter = 'all' | ProjectCategory | 'mobile';

const MOBILE_PROJECT_TAGS = ['React Native', 'Android SDK', 'Expo'] as const;

export function isMobileProject(project: ProjectListItem): boolean {
  return MOBILE_PROJECT_TAGS.some((tag) => project.tags.includes(tag));
}

export function filterProjects(
  projects: ProjectListItem[],
  category: ProjectCategoryFilter,
  selectedTags: string[]
): ProjectListItem[] {
  return projects.filter((project) => {
    const matchesCategory =
      category === 'all' ||
      (category === 'mobile' ? isMobileProject(project) : project.category === category);
    const matchesTags =
      selectedTags.length === 0 || selectedTags.some((tag) => project.tags.includes(tag));

    return matchesCategory && matchesTags;
  });
}
