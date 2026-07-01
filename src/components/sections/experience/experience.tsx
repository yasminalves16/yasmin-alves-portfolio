'use client';

import { SectionHeader } from '@/src/components/motion/section-header';
import { useMessages } from '@/src/hooks/use-messages';
import { usePortfolioData } from '@/src/hooks/use-portfolio-data';
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Container } from '../../ui/container';
import { ExperienceMobile } from './experience-mobile';
import { ExperienceSlide } from './experience-slide';
import { ExperienceVisual } from './experience-visual';

const SCROLL_HEIGHT_PER_SLIDE = 100;

export function Experience() {
  const { experience } = usePortfolioData();
  const { sections } = useMessages();
  const { experience: experienceMessages } = sections;
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const textY = useTransform(scrollYProgress, (progress) => {
    const shiftPerSlide = 24;
    return `calc(${-progress * (experience.length - 1) * shiftPerSlide}vh + 12vh)`;
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const index = Math.min(experience.length - 1, Math.max(0, Math.round(latest * (experience.length - 1))));
    setActiveIndex(index);
  });

  const header = <SectionHeader badge={experienceMessages.badge} title={experienceMessages.title} className='mb-8 md:mb-12 lg:mb-20' />;

  if (prefersReducedMotion) {
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

      <Container asSection={false} className='pb-8 lg:hidden'>
        <ExperienceMobile entries={experience} focusLabels={experienceMessages.focusLabels} swipeHint={experienceMessages.swipeHint} />
      </Container>

      <div ref={containerRef} className='relative hidden lg:block' style={{ height: `${experience.length * SCROLL_HEIGHT_PER_SLIDE}vh` }}>
        <div className='sticky top-0 flex h-svh items-center overflow-hidden'>
          <Container asSection={false} className='w-full'>
            <div className='grid items-center gap-16 xl:grid-cols-[0.85fr_1.15fr] xl:gap-24'>
              <ExperienceVisual entries={experience} activeIndex={activeIndex} focusLabels={experienceMessages.focusLabels} />

              <div className='relative h-[72svh] overflow-hidden'>
                <div
                  className='pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-background to-transparent'
                  aria-hidden
                />
                <div
                  className='pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-background to-transparent'
                  aria-hidden
                />

                <motion.div className='will-change-transform' style={{ y: textY }}>
                  {experience.map((entry, index) => (
                    <ExperienceSlide
                      key={entry.id}
                      entry={entry}
                      index={index}
                      total={experience.length}
                      scrollProgress={scrollYProgress}
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
