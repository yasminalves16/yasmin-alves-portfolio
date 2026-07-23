'use client';

import { HoverCard } from '@/src/components/motion/hover-card';
import { ProjectCover } from '@/src/components/projects/project-cover';
import { useMessages } from '@/src/hooks/use-messages';
import { getProjectPreviewText } from '@/src/lib/project-preview';
import type { ProjectListItem } from '@/src/types/project';
import { cn } from '@/src/lib/utils';
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
  const preview = getProjectPreviewText(project);

  if (variant === 'featured') {
    return (
      <HoverCard
        as='article'
        className='group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50'
      >
        <Link
          href={`/projetos/${project.slug}`}
          aria-label={`${a11y.projectDetailsPrefix} ${project.title}`}
          className='flex flex-1 flex-col'
        >
          <div className='p-4 pb-0'>
            <ProjectCover cover={project.cover} title={project.title} />
          </div>

          <div className='flex flex-1 flex-col p-6 pt-4'>
            {project.badge && (
              <span className='mb-3 inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary'>
                {project.badge}
              </span>
            )}
            <h4 className='mb-2 text-lg font-semibold'>{project.title}</h4>
            <p className='mb-4 flex-1 text-sm leading-relaxed text-muted-foreground'>{preview}</p>
            <TagList tags={project.tags} />
          </div>
        </Link>

        <div className='flex items-center justify-between border-t border-border px-6 py-4'>
          <Link
            href={`/projetos/${project.slug}`}
            aria-label={`${a11y.projectDetailsPrefix} ${project.title}`}
            className='inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline'
          >
            {actions.viewDetails} <FiArrowRight />
          </Link>
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
        </div>
      </HoverCard>
    );
  }

  return (
    <HoverCard
      as='article'
      className='group h-full overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50'
    >
      <Link
        href={`/projetos/${project.slug}`}
        aria-label={`${a11y.projectDetailsPrefix} ${project.title}`}
        className='flex h-full flex-col'
      >
        <div className='p-4 pb-0'>
          <ProjectCover cover={project.cover} title={project.title} />
        </div>

        <div className='flex flex-1 flex-col p-5 pt-4'>
          <h4 className='mb-2 text-base font-semibold leading-snug'>{project.title}</h4>
          <p className='mb-4 flex-1 text-sm leading-relaxed text-muted-foreground'>{preview}</p>
          <TagList tags={project.tags} size='sm' />
        </div>
      </Link>
    </HoverCard>
  );
}
