'use client';

import { AboutHeader } from '@/src/components/motion/section-header';
import { HoverCard } from '@/src/components/motion/hover-card';
import { Reveal } from '@/src/components/motion/reveal';
import { useMessages } from '@/src/hooks/use-messages';
import { cn } from '@/src/lib/utils';
import { Code2, Lightbulb, Rocket, Target, Users } from 'lucide-react';
import Image from 'next/image';
import { Container } from '../ui/container';

const ABOUT_IMAGE_SRC = '/assets/about/yasmin-about.png';

const pillarIcons = {
  'Clean Code': Code2,
  Colaboração: Users,
  Collaboration: Users,
  Performance: Rocket,
  'Visão de Produto': Lightbulb,
  'Product mindset': Lightbulb,
  'Impacto Real': Target,
  'Real Impact': Target
} as const;

const pillarAccents = ['violet', 'emerald', 'cyan', 'lime', 'rose'] as const;

const accentMap = {
  violet: 'bg-violet-500/15 text-violet-400',
  emerald: 'bg-emerald-500/15 text-emerald-400',
  cyan: 'bg-cyan-500/15 text-cyan-400',
  lime: 'bg-lime-500/15 text-lime-400',
  rose: 'bg-primary/15 text-primary'
} as const;

const pillarGridClass = [
  'lg:col-start-3 lg:row-start-1',
  'lg:col-start-3 lg:row-start-2',
  'lg:col-start-1 lg:row-start-3',
  'lg:col-start-2 lg:row-start-3',
  'lg:col-start-3 lg:row-start-3'
] as const;

export function About() {
  const { sections } = useMessages();
  const { about } = sections;

  return (
    <section id='about'>
      <Container>
        <AboutHeader label={about.title} headline={about.headline} />

        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[auto_auto_auto]'>
          <Reveal className='md:col-span-2 lg:col-span-2 lg:row-span-2'>
            <HoverCard as='article' className='h-full rounded-2xl border border-border bg-card p-6 md:p-8'>
              <div className='flex h-full flex-col gap-6 sm:flex-row sm:items-start'>
                <div className='relative mx-auto h-36 w-36 shrink-0 overflow-hidden rounded-full border-2 border-primary/20 sm:mx-0 sm:mt-1 sm:h-40 sm:w-40'>
                  <Image
                    src={ABOUT_IMAGE_SRC}
                    alt={about.imageAlt}
                    fill
                    sizes='(max-width: 640px) 144px, 160px'
                    className='object-cover object-center'
                  />
                </div>
                <div className='space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base'>
                  <p className='text-foreground'>{about.intro}</p>
                  {about.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </HoverCard>
          </Reveal>

          {about.pillars.map((pillar, index) => {
            const Icon = pillarIcons[pillar.title as keyof typeof pillarIcons] ?? Code2;
            const accent = pillarAccents[index];

            return (
              <Reveal key={pillar.title} delay={0.08 * (index + 1)} className={pillarGridClass[index]}>
                <HoverCard as='article' className='h-full rounded-2xl border border-border bg-card p-6'>
                  <span
                    className={cn(
                      'mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg',
                      accentMap[accent]
                    )}
                  >
                    <Icon size={20} aria-hidden />
                  </span>
                  <h3 className='mb-2 font-semibold'>{pillar.title}</h3>
                  <p className='text-sm leading-relaxed text-muted-foreground'>{pillar.description}</p>
                </HoverCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
