'use client';

import type { ExperienceEntry, ExperienceFocus } from '@/src/types/experience';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useRef, useState } from 'react';
import { Container } from '../../ui/container';
import { ExperienceSlide } from './experience-slide';
import { ExperienceVisual } from './experience-visual';

const SCROLL_HEIGHT_PER_SLIDE = 150;

type ExperienceDesktopProps = {
  entries: ExperienceEntry[];
  focusLabels: Record<ExperienceFocus, string>;
};

export function ExperienceDesktop({ entries, focusLabels }: ExperienceDesktopProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const index = Math.min(entries.length - 1, Math.max(0, Math.round(latest * (entries.length - 1))));
    setActiveIndex(index);
  });

  return (
    <div ref={containerRef} className='relative' style={{ height: `${entries.length * SCROLL_HEIGHT_PER_SLIDE}vh` }}>
      <div className='sticky top-0 flex h-svh items-center overflow-hidden'>
        <Container asSection={false} className='w-full'>
          <div className='grid items-center gap-16 xl:grid-cols-[0.85fr_1.15fr] xl:gap-24'>
            <ExperienceVisual entries={entries} activeIndex={activeIndex} focusLabels={focusLabels} />

            <div className='relative h-[72svh] overflow-hidden'>
              <div
                className='pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-background to-transparent'
                aria-hidden
              />
              <div
                className='pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-background to-transparent'
                aria-hidden
              />

              <div className='relative h-full'>
                {entries.map((entry, index) => (
                  <ExperienceSlide
                    key={entry.id}
                    entry={entry}
                    index={index}
                    total={entries.length}
                    scrollProgress={scrollYProgress}
                    isActive={index === activeIndex}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
