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
        <div className='mb-10 space-y-4'>
          <h2 className='text-sm font-semibold uppercase tracking-widest text-primary'>{about.title}</h2>
          <RichHeading segments={about.headline} as='h2' />
        </div>

        <div className='grid gap-10 lg:grid-cols-2 lg:gap-12'>
          <div className='space-y-4 text-muted-foreground'>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className='grid gap-6 sm:grid-cols-2'>
            {about.pillars.map((pillar) => {
              const Icon = pillarIcons[pillar.title as keyof typeof pillarIcons] ?? Code2;

              return (
                <div
                  key={pillar.title}
                  className='rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30'
                >
                  <Icon className='mb-4 text-primary' size={24} aria-hidden />
                  <h3 className='mb-2 font-semibold'>{pillar.title}</h3>
                  <p className='text-sm text-muted-foreground'>{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
