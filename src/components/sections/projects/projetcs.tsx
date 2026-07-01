'use client';

import { getSocialLink } from '@/src/data';
import { useMessages } from '@/src/hooks/use-messages';
import { usePortfolioData } from '@/src/hooks/use-portfolio-data';
import { filterProjects, type ProjectCategoryFilter } from '@/src/lib/project-filters';
import { useMemo, useState } from 'react';
import { FiGithub } from 'react-icons/fi';
import Link from 'next/link';
import { ProjectCard } from '../../projects/project-card';
import { ProjectFilters } from '../../projects/project-filters';
import { Container } from '../../ui/container';
import { RichHeading } from '../../ui/rich-heading';

export function Projects() {
  const { featuredProjects, moreProjects } = usePortfolioData();
  const { sections, actions, a11y } = useMessages();
  const { projects: projectsMessages } = sections;
  const githubLink = getSocialLink('github');

  const [category, setCategory] = useState<ProjectCategoryFilter>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredFeatured = useMemo(
    () => filterProjects(featuredProjects, category, selectedTags),
    [featuredProjects, category, selectedTags]
  );

  const filteredMore = useMemo(
    () => filterProjects(moreProjects, category, selectedTags),
    [moreProjects, category, selectedTags]
  );

  const handleTagToggle = (tag: string) => {
    setSelectedTags((current) =>
      current.includes(tag) ? current.filter((item) => item !== tag) : [...current, tag]
    );
  };

  const handleClear = () => {
    setCategory('all');
    setSelectedTags([]);
  };

  const hasResults = filteredFeatured.length > 0 || filteredMore.length > 0;

  return (
    <section id='projects'>
      <Container>
        <div className='mb-6 space-y-4'>
          <span className='section-badge'>{projectsMessages.badge}</span>
          <RichHeading segments={projectsMessages.title} as='h2' />
          <p className='max-w-2xl text-muted-foreground'>{projectsMessages.description}</p>
        </div>

        <ProjectFilters
          category={category}
          selectedTags={selectedTags}
          onCategoryChange={setCategory}
          onTagToggle={handleTagToggle}
          onClear={handleClear}
        />

        {!hasResults && (
          <p className='rounded-xl border border-dashed border-border p-8 text-center text-muted-foreground'>
            {projectsMessages.emptyMessage}
          </p>
        )}

        {filteredFeatured.length > 0 && (
          <section className='mb-12'>
            <h3 className='mb-6 text-xl font-semibold'>{projectsMessages.featuredTitle}</h3>
            <ul className='grid gap-6 md:grid-cols-2'>
              {filteredFeatured.map((project) => (
                <ProjectCard key={project.slug} project={project} variant='featured' />
              ))}
            </ul>
          </section>
        )}

        {filteredMore.length > 0 && (
          <section className='mb-8'>
            <h3 className='mb-6 text-xl font-semibold'>{projectsMessages.moreTitle}</h3>
            <ul className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              {filteredMore.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </ul>
          </section>
        )}

        {githubLink && (
          <Link
            href={githubLink.href}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={a11y.moreProjectsOnGithub}
            className='inline-flex items-center gap-2 font-medium text-primary hover:underline'
          >
            {actions.viewMoreOnGithub} <FiGithub />
          </Link>
        )}
      </Container>
    </section>
  );
}
