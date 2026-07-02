'use client';

import { SectionHeader } from '@/src/components/motion/section-header';
import { useIsDesktop } from '@/src/hooks/use-media-query';
import { useMessages } from '@/src/hooks/use-messages';
import { usePortfolioData } from '@/src/hooks/use-portfolio-data';
import { useReducedMotion } from 'framer-motion';
import { Container } from '../../ui/container';
import { ExperienceDesktop } from './experience-desktop';
import { ExperienceMobile } from './experience-mobile';

export function Experience() {
  const { experience } = usePortfolioData();
  const { sections } = useMessages();
  const { experience: experienceMessages } = sections;
  const prefersReducedMotion = useReducedMotion();
  const isDesktop = useIsDesktop();

  const header = <SectionHeader badge={experienceMessages.badge} title={experienceMessages.title} className='mb-8 md:mb-12 lg:mb-20' />;

  const showDesktopExperience = isDesktop && !prefersReducedMotion;

  if (!showDesktopExperience) {
    return (
      <section id='experience'>
        <Container>
          {header}
          <ExperienceMobile entries={experience} focusLabels={experienceMessages.focusLabels} swipeHint={experienceMessages.swipeHint} />
        </Container>
      </section>
    );
  }

  return (
    <section id='experience' className='relative'>
      <Container>{header}</Container>
      <ExperienceDesktop entries={experience} focusLabels={experienceMessages.focusLabels} />
    </section>
  );
}
