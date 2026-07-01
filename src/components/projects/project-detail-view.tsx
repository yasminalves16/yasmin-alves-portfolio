'use client';

import { HoverCard } from '@/src/components/motion/hover-card';
import { Reveal } from '@/src/components/motion/reveal';
import { Stagger, StaggerItem } from '@/src/components/motion/stagger';
import { ProjectCard } from '@/src/components/projects/project-card';
import { Container } from '@/src/components/ui/container';
import { slideFromLeft } from '@/src/lib/motion';
import { useMessages } from '@/src/hooks/use-messages';
import { usePortfolioData } from '@/src/hooks/use-portfolio-data';
import { BookOpen, CircleCheck, Lightbulb, Sparkles, Target, Trophy } from 'lucide-react';
import Link from 'next/link';
import { FiArrowLeft, FiGithub } from 'react-icons/fi';

type ProjectDetailViewProps = {
  slug: string;
};

export function ProjectDetailView({ slug }: ProjectDetailViewProps) {
  const { getProjectBySlug, getOtherProjects } = usePortfolioData();
  const { sections, navigation, a11y } = useMessages();
  const project = getProjectBySlug(slug);
  const otherProjects = getOtherProjects(slug, 3);

  if (!project) {
    return null;
  }

  const { caseStudy } = project;

  return (
    <main className='pt-16'>
      <Container>
        <Reveal variants={slideFromLeft}>
          <nav className='mb-8'>
            <Link
              href='/#projects'
              aria-label={a11y.backToHome}
              className='inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary'
            >
              <FiArrowLeft /> {navigation.projects}
            </Link>
          </nav>
        </Reveal>

        <article className='space-y-8'>
          <Reveal as='header' className='space-y-4'>
            <h1 className='text-3xl font-bold tracking-tight md:text-4xl'>{project.title}</h1>
            <p className='whitespace-pre-line text-muted-foreground'>{project.description}</p>
          </Reveal>

          <Reveal>
            <ul className='flex flex-wrap gap-2'>
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className='rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground'
                >
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <div className='flex flex-wrap gap-4'>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`${a11y.openGithub}: ${project.title}`}
                  className='inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm transition-colors hover:border-primary/50'
                >
                  <FiGithub /> GitHub
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 rounded-lg border border-primary px-4 py-2 text-sm text-primary transition-colors hover:bg-primary/10'
                >
                  Demo
                </a>
              )}
            </div>
          </Reveal>

          <Reveal>
            <HoverCard
              as='section'
              className='rounded-xl border border-border bg-card p-6'
            >
              <h2 className='mb-4 flex items-center gap-2 text-xl font-semibold'>
                <Sparkles size={20} className='text-primary' aria-hidden /> Funcionalidades
              </h2>
              <Stagger as='ul' className='grid gap-2 sm:grid-cols-2'>
                {project.features.map((feature) => (
                  <StaggerItem key={feature} as='li' className='flex items-center gap-2 text-muted-foreground'>
                    <CircleCheck size={16} className='shrink-0 text-primary' aria-hidden /> {feature}
                  </StaggerItem>
                ))}
              </Stagger>
            </HoverCard>
          </Reveal>

          <Reveal as='section' className='space-y-4'>
            <h2 className='text-xl font-semibold'>Processo e Aprendizados</h2>
            <Stagger className='grid gap-4 md:grid-cols-2'>
              <StaggerItem>
                <HoverCard className='h-full rounded-xl border border-border bg-card p-5'>
                  <h3 className='mb-2 flex items-center gap-2 font-semibold'>
                    <Target size={18} className='text-primary' aria-hidden />
                    {caseStudy.challenge.title}
                  </h3>
                  <p className='text-sm text-muted-foreground'>{caseStudy.challenge.description}</p>
                </HoverCard>
              </StaggerItem>
              <StaggerItem>
                <HoverCard className='h-full rounded-xl border border-border bg-card p-5'>
                  <h3 className='mb-2 flex items-center gap-2 font-semibold'>
                    <Lightbulb size={18} className='text-primary' aria-hidden />
                    {caseStudy.solution.title}
                  </h3>
                  <p className='text-sm text-muted-foreground'>{caseStudy.solution.description}</p>
                </HoverCard>
              </StaggerItem>
              <StaggerItem>
                <HoverCard className='h-full rounded-xl border border-border bg-card p-5'>
                  <h3 className='mb-2 flex items-center gap-2 font-semibold'>
                    <Trophy size={18} className='text-primary' aria-hidden />
                    {caseStudy.highlight.title}
                  </h3>
                  <p className='text-sm text-muted-foreground'>{caseStudy.highlight.description}</p>
                </HoverCard>
              </StaggerItem>
              <StaggerItem>
                <div className='h-full rounded-xl border border-border bg-card p-5'>
                  <h3 className='mb-2 flex items-center gap-2 font-semibold'>
                    <BookOpen size={18} className='text-primary' aria-hidden />
                    {caseStudy.learnings.title}
                  </h3>
                  <ul className='list-disc space-y-1 pl-5 text-sm text-muted-foreground'>
                    {caseStudy.learnings.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            </Stagger>
          </Reveal>
        </article>

        {otherProjects.length > 0 && (
          <section className='mt-16'>
            <Reveal as='header'>
              <h2 className='mb-6 text-xl font-semibold'>{sections.projects.moreTitle}</h2>
            </Reveal>
            <Stagger as='ul' className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              {otherProjects.map((item) => (
                <StaggerItem key={item.slug} as='li'>
                  <ProjectCard project={item} />
                </StaggerItem>
              ))}
            </Stagger>
          </section>
        )}
      </Container>
    </main>
  );
}
