'use client';

import { HoverCard } from '@/src/components/motion/hover-card';
import { AboutHeader } from '@/src/components/motion/section-header';
import { Stagger, StaggerItem } from '@/src/components/motion/stagger';
import { slideFromLeft, slideFromRight } from '@/src/lib/motion';
import { useMessages } from '@/src/hooks/use-messages';
import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';
import { Container } from '../ui/container';

const pillarIcons = {
  'Clean Code': Code2,
  Colaboração: Users,
  Performance: Rocket,
  'Visão de Produto': Lightbulb,
  Collaboration: Users,
  'Product Vision': Lightbulb
} as const;

export function About() {
  const { sections } = useMessages();
  const { about } = sections;

  return (
    <section id='about'>
      <Container>
        <AboutHeader label={about.title} headline={about.headline} />

        <div className='grid gap-10 lg:grid-cols-2 lg:gap-12'>
          <Stagger className='space-y-4 text-muted-foreground'>
            {about.paragraphs.map((paragraph) => (
              <StaggerItem key={paragraph} variants={slideFromLeft}>
                <p>{paragraph}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <Stagger className='grid gap-6 sm:grid-cols-2'>
            {about.pillars.map((pillar) => {
              const Icon = pillarIcons[pillar.title as keyof typeof pillarIcons] ?? Code2;

              return (
                <StaggerItem key={pillar.title} variants={slideFromRight}>
                  <HoverCard
                    as='article'
                    className='h-full rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30'
                  >
                    <Icon className='mb-4 text-primary' size={24} aria-hidden />
                    <h3 className='mb-2 font-semibold'>{pillar.title}</h3>
                    <p className='text-sm text-muted-foreground'>{pillar.description}</p>
                  </HoverCard>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
