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
    <main>
      <Container>
        <nav>
          <Link href='/#projects' aria-label={a11y.backToHome}>
            <FiArrowLeft /> {navigation.projects}
          </Link>
        </nav>
        <article>
          <header>
            <h1>{project.title}</h1>
          </header>
          <p>{project.description}</p>

          <ul>
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>

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
            {project.demoUrl && (
              <a href={project.demoUrl} target='_blank' rel='noopener noreferrer'>
                Demo
              </a>
            )}
          </div>

          <section>
            <h2>
              <Sparkles /> Funcionalidades
            </h2>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>
                  <CircleCheck /> {feature}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Processo e Aprendizados</h2>
            <div>
              <h3>
                <Target />
                {caseStudy.challenge.title}
              </h3>
              <p>{caseStudy.challenge.description}</p>
            </div>
            <div>
              <h3>
                <Lightbulb />
                {caseStudy.solution.title}
              </h3>
              <p>{caseStudy.solution.description}</p>
            </div>
            <div>
              <h3>
                <Trophy />
                {caseStudy.highlight.title}
              </h3>
              <p>{caseStudy.highlight.description}</p>
            </div>
            <div>
              <h3>
                <BookOpen />
                {caseStudy.learnings.title}
              </h3>
              <ul>
                {caseStudy.learnings.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        </article>

        {otherProjects.length > 0 && (
          <section>
            <h2>{sections.projects.moreTitle}</h2>
            <ul>
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
