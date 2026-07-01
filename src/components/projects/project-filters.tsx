'use client';

import { projectFilterTechnologies } from '@/src/data';
import { useMessages } from '@/src/hooks/use-messages';
import type { ProjectCategoryFilter } from '@/src/lib/project-filters';
import { Funnel } from 'lucide-react';
import { Button } from '../ui/button';

type ProjectFiltersProps = {
  category: ProjectCategoryFilter;
  selectedTags: string[];
  onCategoryChange: (category: ProjectCategoryFilter) => void;
  onTagToggle: (tag: string) => void;
  onClear: () => void;
};

export function ProjectFilters({
  category,
  selectedTags,
  onCategoryChange,
  onTagToggle,
  onClear
}: ProjectFiltersProps) {
  const { sections, actions } = useMessages();
  const { projects } = sections;

  const categories: { value: ProjectCategoryFilter; label: string }[] = [
    { value: 'all', label: projects.categoryAll },
    { value: 'management', label: projects.categoryManagement },
    { value: 'development', label: projects.categoryDevelopment }
  ];

  return (
    <div aria-labelledby='filter-title'>
      <div>
        {categories.map((item) => (
          <Button
            key={item.value}
            onClick={() => onCategoryChange(item.value)}
            aria-pressed={category === item.value}
          >
            {item.label}
          </Button>
        ))}
      </div>

      <p id='filter-title'>
        <Funnel /> {projects.filterLabel}
      </p>
      <ul>
        {projectFilterTechnologies.map((tag) => (
          <li key={tag}>
            <Button
              onClick={() => onTagToggle(tag)}
              aria-pressed={selectedTags.includes(tag)}
            >
              {tag}
            </Button>
          </li>
        ))}
      </ul>
      <Button onClick={onClear}>
        {actions.clearFilters}
      </Button>
    </div>
  );
}
