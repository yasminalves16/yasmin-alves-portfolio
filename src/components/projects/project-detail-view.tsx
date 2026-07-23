'use client';

import { HoverCard } from '@/src/components/motion/hover-card';
import { ProjectCover } from '@/src/components/projects/project-cover';
import { Reveal } from '@/src/components/motion/reveal';
import { Stagger, StaggerItem } from '@/src/components/motion/stagger';
import { ProjectCard } from '@/src/components/projects/project-card';
import { Container } from '@/src/components/ui/container';
import { slideFromLeft } from '@/src/lib/motion';
import { useMessages } from '@/src/hooks/use-messages';
import { usePortfolioData } from '@/src/hooks/use-portfolio-data';
import { BookOpen, CircleCheck, ExternalLink, Lightbulb, Target, Trophy } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiGithub } from 'react-icons/fi';

function isVideoSource(src: string) {
  return /\.(mp4|webm)$/i.test(src);
}

type ProjectDetailViewProps = {
  slug: string;
};

export function ProjectDetailView({ slug }: ProjectDetailViewProps) {
  const { getProjectBySlug, getOtherProjects } = usePortfolioData();
  const { sections, navigation, actions, a11y } = useMessages();
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
          <nav className='mb-10'>
            <Link
              href='/#projects'
              aria-label={a11y.backToHome}
              className='inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary'
            >
              <FiArrowLeft /> {navigation.projects}
            </Link>
          </nav>
        </Reveal>

        <article className='flex flex-col gap-16'>
          <div className='flex flex-col gap-6'>
            {project.cover && (
              <Reveal>
                <ProjectCover cover={project.cover} title={project.title} className='rounded-xl' />
              </Reveal>
            )}

            <Reveal as='header' className='space-y-4'>
              <h1 className='text-3xl font-bold tracking-tight md:text-4xl'>{project.title}</h1>
              <p className='whitespace-pre-line leading-relaxed text-muted-foreground'>{project.description}</p>
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

            {(project.githubUrl || project.demoUrl) && (
              <Reveal>
                <div className='flex flex-wrap gap-3'>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={`${a11y.openGithub}: ${project.title}`}
                      className='inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm transition-colors hover:border-primary/50'
                    >
                      <FiGithub /> {actions.viewOnGithub}
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 rounded-lg border border-primary px-4 py-2 text-sm text-primary transition-colors hover:bg-primary/10'
                    >
                      <ExternalLink size={16} aria-hidden /> {actions.viewDemo}
                    </a>
                  )}
                </div>
              </Reveal>
            )}

            {project.demoMedia && (
              <Reveal>
                <div className='overflow-hidden rounded-xl border border-border bg-card'>
                  {isVideoSource(project.demoMedia.src) ? (
                    <video
                      src={project.demoMedia.src}
                      controls
                      playsInline
                      className='w-full'
                      aria-label={project.demoMedia.alt}
                    />
                  ) : (
                    <Image
                      src={project.demoMedia.src}
                      alt={project.demoMedia.alt}
                      width={1280}
                      height={720}
                      className='h-auto w-full'
                      sizes='(max-width: 1024px) 100vw, 960px'
                    />
                  )}
                </div>
              </Reveal>
            )}
          </div>

          <Reveal as='section' className='flex flex-col gap-6'>
            <h2 className='text-xl font-semibold'>{sections.projects.detailFeaturesTitle}</h2>
            <Stagger className='grid gap-3 sm:grid-cols-2 md:gap-4'>
              {project.features.map((feature) => (
                <StaggerItem key={feature}>
                  <div className='flex h-full items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5'>
                    <CircleCheck size={16} className='shrink-0 text-primary' aria-hidden />
                    <span className='text-sm leading-snug text-muted-foreground'>{feature}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>

          <Reveal as='section' className='flex flex-col gap-6'>
            <h2 className='text-xl font-semibold'>{sections.projects.detailProcessTitle}</h2>
            <Stagger className='grid gap-4 md:grid-cols-2'>
              <StaggerItem>
                <HoverCard className='h-full rounded-xl border border-border bg-card p-5'>
                  <h3 className='mb-2 flex items-center gap-2 font-semibold'>
                    <Target size={18} className='text-primary' aria-hidden />
                    {caseStudy.challenge.title}
                  </h3>
                  <p className='text-sm leading-relaxed text-muted-foreground'>{caseStudy.challenge.description}</p>
                </HoverCard>
              </StaggerItem>
              <StaggerItem>
                <HoverCard className='h-full rounded-xl border border-border bg-card p-5'>
                  <h3 className='mb-2 flex items-center gap-2 font-semibold'>
                    <Lightbulb size={18} className='text-primary' aria-hidden />
                    {caseStudy.solution.title}
                  </h3>
                  <p className='text-sm leading-relaxed text-muted-foreground'>{caseStudy.solution.description}</p>
                </HoverCard>
              </StaggerItem>
              <StaggerItem>
                <HoverCard className='h-full rounded-xl border border-border bg-card p-5'>
                  <h3 className='mb-2 flex items-center gap-2 font-semibold'>
                    <Trophy size={18} className='text-primary' aria-hidden />
                    {caseStudy.highlight.title}
                  </h3>
                  <p className='text-sm leading-relaxed text-muted-foreground'>{caseStudy.highlight.description}</p>
                </HoverCard>
              </StaggerItem>
              <StaggerItem>
                <div className='h-full rounded-xl border border-border bg-card p-5'>
                  <h3 className='mb-3 flex items-center gap-2 font-semibold'>
                    <BookOpen size={18} className='text-primary' aria-hidden />
                    {caseStudy.learnings.title}
                  </h3>
                  <ul className='space-y-2'>
                    {caseStudy.learnings.items.map((item) => (
                      <li key={item} className='flex items-start gap-2 text-sm text-muted-foreground'>
                        <span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary' aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            </Stagger>
          </Reveal>
        </article>

        {otherProjects.length > 0 && (
          <section className='mt-20'>
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
