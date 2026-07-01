'use client';

import { useMessages } from '@/src/hooks/use-messages';
import { usePortfolioData } from '@/src/hooks/use-portfolio-data';
import { Container } from '../../ui/container';
import { RichHeading } from '../../ui/rich-heading';

export function Experience() {
  const { experience } = usePortfolioData();
  const { sections } = useMessages();
  const { experience: experienceMessages } = sections;

  return (
    <section id='experience'>
      <Container>
        <div className='mb-10 space-y-4'>
          <span className='section-badge'>{experienceMessages.badge}</span>
          <RichHeading segments={experienceMessages.title} as='h2' />
        </div>

        <ul className='space-y-10 border-l-2 border-primary/30 pl-8'>
          {experience.map((entry) => (
            <li key={entry.id} className='relative'>
              <span className='absolute -left-[2.125rem] top-1 h-4 w-4 rounded-full bg-primary' aria-hidden />
              <article className='rounded-xl border border-border bg-card p-6'>
                <header className='mb-4 space-y-1'>
                  <h3 className='text-lg font-semibold'>{entry.role}</h3>
                  <p className='text-sm text-muted-foreground'>
                    {entry.company} · {entry.employmentType}
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    {entry.period} · {entry.location}
                  </p>
                </header>
                <ul className='mb-4 list-disc space-y-2 pl-5 text-muted-foreground'>
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <ul className='flex flex-wrap gap-2'>
                  {entry.tags.map((tag) => (
                    <li
                      key={tag}
                      className='rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground'
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
