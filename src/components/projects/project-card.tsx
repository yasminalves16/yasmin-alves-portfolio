'use client';

import { useMessages } from '@/src/hooks/use-messages';
import type { ProjectListItem } from '@/src/types/project';
import { Folder } from 'lucide-react';
import Link from 'next/link';
import { FiArrowRight, FiGithub } from 'react-icons/fi';

type ProjectCardProps = {
  project: ProjectListItem;
  variant?: 'featured' | 'compact';
};

export function ProjectCard({ project, variant = 'compact' }: ProjectCardProps) {
  const { actions, a11y } = useMessages();

  if (variant === 'featured') {
    return (
      <li>
        <article>
          <div>
            {project.badge && <span>{project.badge}</span>}
          </div>
          <h4>{project.title}</h4>
          <p>{project.summary}</p>
          <ul>
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <Link
            href={`/projetos/${project.slug}`}
            aria-label={`${a11y.projectDetailsPrefix} ${project.title}`}
          >
            {actions.viewDetails} <FiArrowRight />
          </Link>
        </article>
      </li>
    );
  }

  return (
    <li>
      <article>
        <div>
          <Folder />
          <div>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`${a11y.openGithub}: ${project.title}`}
              >
                <FiGithub />
              </a>
            )}
            <Link
              href={`/projetos/${project.slug}`}
              aria-label={`${a11y.projectDetailsPrefix} ${project.title}`}
            >
              <FiArrowRight />
            </Link>
          </div>
        </div>
        <h4>{project.title}</h4>
        <p>{project.summary}</p>
        <ul>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </article>
    </li>
  );
}
