'use client';

import { useMessages } from '@/src/hooks/use-messages';
import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';
import { Container } from '../ui/container';
import { RichHeading } from '../ui/rich-heading';

const pillarIcons = {
  'Clean Code': Code2,
  Colaboração: Users,
  Performance: Rocket,
  'Visão de Produto': Lightbulb
} as const;

export function About() {
  const { sections } = useMessages();
  const { about } = sections;

  return (
    <section id='about'>
      <Container>
        <h2>{about.title}</h2>
        <RichHeading segments={about.headline} />

        <div>
          <div>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div>
          {about.pillars.map((pillar) => {
            const Icon = pillarIcons[pillar.title as keyof typeof pillarIcons] ?? Code2;

            return (
              <div key={pillar.title}>
                <Icon />
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
