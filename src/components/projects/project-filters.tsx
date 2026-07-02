'use client';

import { projectFilterTechnologies } from '@/src/data';
import { useMessages } from '@/src/hooks/use-messages';
import type { ProjectCategoryFilter } from '@/src/lib/project-filters';
import { cn } from '@/src/lib/utils';
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
    { value: 'development', label: projects.categoryDevelopment },
    { value: 'mobile', label: projects.categoryMobile }
  ];

  return (
    <div className='mb-10 space-y-4' aria-labelledby='filter-title'>
      <div className='flex flex-wrap gap-2'>
        {categories.map((item) => (
          <Button
            key={item.value}
            variant={category === item.value ? 'default' : 'ghost'}
            size='sm'
            onClick={() => onCategoryChange(item.value)}
            aria-pressed={category === item.value}
          >
            {item.label}
          </Button>
        ))}
      </div>

      <p id='filter-title' className='flex items-center gap-2 text-sm text-muted-foreground'>
        <Funnel size={16} aria-hidden /> {projects.filterLabel}
      </p>
      <ul className='flex flex-wrap gap-2'>
        {projectFilterTechnologies.map((tag) => (
          <li key={tag}>
            <Button
              variant={selectedTags.includes(tag) ? 'default' : 'outline'}
              size='sm'
              onClick={() => onTagToggle(tag)}
              aria-pressed={selectedTags.includes(tag)}
            >
              {tag}
            </Button>
          </li>
        ))}
      </ul>
      <Button variant='ghost' size='sm' onClick={onClear} className={cn('text-muted-foreground')}>
        {actions.clearFilters}
      </Button>
    </div>
  );
}
