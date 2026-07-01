'use client';

import { HoverCard } from '@/src/components/motion/hover-card';
import { useMessages } from '@/src/hooks/use-messages';
import type { ProjectListItem } from '@/src/types/project';
import { cn } from '@/src/lib/utils';
import { Folder } from 'lucide-react';
import Link from 'next/link';
import { FiArrowRight, FiGithub } from 'react-icons/fi';

type ProjectCardProps = {
  project: ProjectListItem;
  variant?: 'featured' | 'compact';
};

function TagList({ tags, size = 'default' }: { tags: string[]; size?: 'default' | 'sm' }) {
  return (
    <ul className='flex flex-wrap gap-2'>
      {tags.map((tag) => (
        <li
          key={tag}
          className={cn(
            'rounded-full bg-secondary text-secondary-foreground',
            size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-xs'
          )}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export function ProjectCard({ project, variant = 'compact' }: ProjectCardProps) {
  const { actions, a11y } = useMessages();

  if (variant === 'featured') {
    return (
      <HoverCard
        as='article'
        className='flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50'
      >
        {project.badge && (
          <span className='mb-3 inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary'>
            {project.badge}
          </span>
        )}
        <h4 className='mb-2 text-lg font-semibold'>{project.title}</h4>
        <p className='mb-4 flex-1 text-sm text-muted-foreground'>{project.summary}</p>
        <TagList tags={project.tags} />
        <Link
          href={`/projetos/${project.slug}`}
          aria-label={`${a11y.projectDetailsPrefix} ${project.title}`}
          className='mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline'
        >
          {actions.viewDetails} <FiArrowRight />
        </Link>
      </HoverCard>
    );
  }

  return (
    <HoverCard
      as='article'
      className='flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50'
    >
      <div className='mb-4 flex items-center justify-between'>
        <Folder className='text-primary' size={20} aria-hidden />
        <div className='flex items-center gap-2'>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`${a11y.openGithub}: ${project.title}`}
              className='text-muted-foreground transition-colors hover:text-primary'
            >
              <FiGithub />
            </a>
          )}
          <Link
            href={`/projetos/${project.slug}`}
            aria-label={`${a11y.projectDetailsPrefix} ${project.title}`}
            className='text-muted-foreground transition-colors hover:text-primary'
          >
            <FiArrowRight />
          </Link>
        </div>
      </div>
      <h4 className='mb-2 font-semibold'>{project.title}</h4>
      <p className='mb-4 flex-1 text-sm text-muted-foreground'>{project.summary}</p>
      <TagList tags={project.tags} size='sm' />
    </HoverCard>
  );
}
