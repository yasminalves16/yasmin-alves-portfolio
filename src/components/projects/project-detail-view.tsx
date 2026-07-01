'use client';

import { ProjectCard } from '@/src/components/projects/project-card';
import { Container } from '@/src/components/ui/container';
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
        <nav className='mb-8'>
          <Link
            href='/#projects'
            aria-label={a11y.backToHome}
            className='inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary'
          >
            <FiArrowLeft /> {navigation.projects}
          </Link>
        </nav>

        <article className='space-y-8'>
          <header className='space-y-4'>
            <h1 className='text-3xl font-bold tracking-tight md:text-4xl'>{project.title}</h1>
            <p className='whitespace-pre-line text-muted-foreground'>{project.description}</p>
          </header>

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

          <section className='rounded-xl border border-border bg-card p-6'>
            <h2 className='mb-4 flex items-center gap-2 text-xl font-semibold'>
              <Sparkles size={20} className='text-primary' aria-hidden /> Funcionalidades
            </h2>
            <ul className='grid gap-2 sm:grid-cols-2'>
              {project.features.map((feature) => (
                <li key={feature} className='flex items-center gap-2 text-muted-foreground'>
                  <CircleCheck size={16} className='shrink-0 text-primary' aria-hidden /> {feature}
                </li>
              ))}
            </ul>
          </section>

          <section className='space-y-4'>
            <h2 className='text-xl font-semibold'>Processo e Aprendizados</h2>
            <div className='grid gap-4 md:grid-cols-2'>
              <div className='rounded-xl border border-border bg-card p-5'>
                <h3 className='mb-2 flex items-center gap-2 font-semibold'>
                  <Target size={18} className='text-primary' aria-hidden />
                  {caseStudy.challenge.title}
                </h3>
                <p className='text-sm text-muted-foreground'>{caseStudy.challenge.description}</p>
              </div>
              <div className='rounded-xl border border-border bg-card p-5'>
                <h3 className='mb-2 flex items-center gap-2 font-semibold'>
                  <Lightbulb size={18} className='text-primary' aria-hidden />
                  {caseStudy.solution.title}
                </h3>
                <p className='text-sm text-muted-foreground'>{caseStudy.solution.description}</p>
              </div>
              <div className='rounded-xl border border-border bg-card p-5'>
                <h3 className='mb-2 flex items-center gap-2 font-semibold'>
                  <Trophy size={18} className='text-primary' aria-hidden />
                  {caseStudy.highlight.title}
                </h3>
                <p className='text-sm text-muted-foreground'>{caseStudy.highlight.description}</p>
              </div>
              <div className='rounded-xl border border-border bg-card p-5'>
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
            </div>
          </section>
        </article>

        {otherProjects.length > 0 && (
          <section className='mt-16'>
            <h2 className='mb-6 text-xl font-semibold'>{sections.projects.moreTitle}</h2>
            <ul className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              {otherProjects.map((item) => (
                <ProjectCard key={item.slug} project={item} />
              ))}
            </ul>
          </section>
        )}
      </Container>
    </main>
  );
}
