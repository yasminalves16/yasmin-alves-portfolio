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
        <RichHeading segments={projectsMessages.title} as='h2' />
        <p>{projectsMessages.description}</p>

        <ProjectFilters
          category={category}
          selectedTags={selectedTags}
          onCategoryChange={setCategory}
          onTagToggle={handleTagToggle}
          onClear={handleClear}
        />

        {!hasResults && <p>{projectsMessages.emptyMessage}</p>}

        {filteredFeatured.length > 0 && (
          <section>
            <h3>{projectsMessages.featuredTitle}</h3>
            <ul>
              {filteredFeatured.map((project) => (
                <ProjectCard key={project.slug} project={project} variant='featured' />
              ))}
            </ul>
          </section>
        )}

        {filteredMore.length > 0 && (
          <section>
            <h3>{projectsMessages.moreTitle}</h3>
            <ul>
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
          >
            {actions.viewMoreOnGithub} <FiGithub />
          </Link>
        )}
      </Container>
    </section>
  );
}
