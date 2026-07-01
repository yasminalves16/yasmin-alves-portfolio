'use client';

import type { ExperienceEntry } from '@/src/types/experience';
import { motion, type MotionValue, useTransform } from 'framer-motion';

type ExperienceSlideProps = {
  entry: ExperienceEntry;
  index: number;
  total: number;
  scrollProgress: MotionValue<number>;
};

function getActiveness(progress: number, index: number, total: number) {
  const slideCenter = (index + 0.5) / total;
  const halfRange = 0.5 / total;
  const distance = Math.abs(progress - slideCenter) / halfRange;
  return Math.max(0, Math.min(1, 1 - distance));
}

export function ExperienceSlide({ entry, index, total, scrollProgress }: ExperienceSlideProps) {
  const activeness = useTransform(scrollProgress, (p) => getActiveness(p, index, total));

  const headlineOpacity = useTransform(activeness, [0, 0.6, 1], [0, 0.15, 1]);
  const summaryOpacity = useTransform(activeness, [0, 0.65, 1], [0, 0.08, 0.92]);
  const headlineY = useTransform(activeness, [0, 1], [6, 0]);

  const headlineColor = useTransform(
    activeness,
    [0, 0.5, 1],
    ['var(--muted-foreground)', 'color-mix(in oklch, var(--primary) 60%, var(--muted-foreground))', 'var(--primary)']
  );

  return (
    <article className='space-y-4 py-6 md:py-8'>
      <motion.h3
        className='text-[1.75rem] font-semibold leading-[1.12] tracking-tight md:text-[2.25rem] lg:text-[2.625rem]'
        style={{
          opacity: headlineOpacity,
          color: headlineColor,
          y: headlineY
        }}
      >
        {entry.headline}
      </motion.h3>
      <motion.p
        className='max-w-xl text-base leading-relaxed md:text-lg lg:text-[1.125rem] lg:leading-[1.65]'
        style={{
          opacity: summaryOpacity,
          color: 'var(--foreground)'
        }}
      >
        {entry.summary}
      </motion.p>
    </article>
  );
}

type ExperienceSlideStaticProps = {
  entry: ExperienceEntry;
};

export function ExperienceSlideStatic({ entry }: ExperienceSlideStaticProps) {
  return (
    <article className='space-y-4 border-b border-border py-10 last:border-b-0'>
      <h3 className='text-2xl font-semibold tracking-tight text-primary md:text-3xl'>{entry.headline}</h3>
      <p className='max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg'>{entry.summary}</p>
      <p className='text-sm text-muted-foreground'>
        {entry.company} · {entry.period}
      </p>
    </article>
  );
}
