import type { ProjectCategory, ProjectListItem } from '@/src/types/project';

export type ProjectCategoryFilter = 'all' | ProjectCategory;

export function filterProjects(
  projects: ProjectListItem[],
  category: ProjectCategoryFilter,
  selectedTags: string[]
): ProjectListItem[] {
  return projects.filter((project) => {
    const matchesCategory = category === 'all' || project.category === category;
    const matchesTags =
      selectedTags.length === 0 || selectedTags.some((tag) => project.tags.includes(tag));

    return matchesCategory && matchesTags;
  });
}
