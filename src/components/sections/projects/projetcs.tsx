'use client';

import { Reveal } from '@/src/components/motion/reveal';
import { SectionHeader } from '@/src/components/motion/section-header';
import { Stagger, StaggerItem } from '@/src/components/motion/stagger';
import { getSocialLink } from '@/src/data';
import { fadeUp } from '@/src/lib/motion';
import { useMessages } from '@/src/hooks/use-messages';
import { usePortfolioData } from '@/src/hooks/use-portfolio-data';
import { filterProjects, type ProjectCategoryFilter } from '@/src/lib/project-filters';
import { useMemo, useState } from 'react';
import { FiGithub } from 'react-icons/fi';
import Link from 'next/link';
import { ProjectCard } from '../../projects/project-card';
import { ProjectFilters } from '../../projects/project-filters';
import { Container } from '../../ui/container';

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
        <SectionHeader
          badge={projectsMessages.badge}
          title={projectsMessages.title}
          description={projectsMessages.description}
        />

        <Reveal delay={0.1}>
          <ProjectFilters
            category={category}
            selectedTags={selectedTags}
            onCategoryChange={setCategory}
            onTagToggle={handleTagToggle}
            onClear={handleClear}
          />
        </Reveal>

        {!hasResults && (
          <Reveal>
            <p className='rounded-xl border border-dashed border-border p-8 text-center text-muted-foreground'>
              {projectsMessages.emptyMessage}
            </p>
          </Reveal>
        )}

        {filteredFeatured.length > 0 && (
          <section className='mb-12'>
            <Reveal as='header'>
              <h3 className='mb-6 text-xl font-semibold'>{projectsMessages.featuredTitle}</h3>
            </Reveal>
            <Stagger as='ul' className='grid gap-6 md:grid-cols-2'>
              {filteredFeatured.map((project) => (
                <StaggerItem key={project.slug} as='li'>
                  <ProjectCard project={project} variant='featured' />
                </StaggerItem>
              ))}
            </Stagger>
          </section>
        )}

        {filteredMore.length > 0 && (
          <section className='mb-8'>
            <Reveal as='header'>
              <h3 className='mb-6 text-xl font-semibold'>{projectsMessages.moreTitle}</h3>
            </Reveal>
            <Stagger as='ul' className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              {filteredMore.map((project) => (
                <StaggerItem key={project.slug} as='li'>
                  <ProjectCard project={project} />
                </StaggerItem>
              ))}
            </Stagger>
          </section>
        )}

        {githubLink && (
          <Reveal variants={fadeUp}>
            <Link
              href={githubLink.href}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={a11y.moreProjectsOnGithub}
              className='inline-flex items-center gap-2 font-medium text-primary hover:underline'
            >
              {actions.viewMoreOnGithub} <FiGithub />
            </Link>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
