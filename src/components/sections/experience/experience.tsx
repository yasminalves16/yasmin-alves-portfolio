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
        <span>{experienceMessages.badge}</span>
        <RichHeading segments={experienceMessages.title} as='h2' />

        <ul>
          {experience.map((entry) => (
            <li key={entry.id}>
              <article>
                <header>
                  <h3>{entry.role}</h3>
                  <p>
                    {entry.company} · {entry.employmentType}
                  </p>
                  <p>
                    {entry.period} · {entry.location}
                  </p>
                </header>
                <ul>
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <ul>
                  {entry.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
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
