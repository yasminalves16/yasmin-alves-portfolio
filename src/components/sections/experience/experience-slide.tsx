'use client';

import type { ExperienceEntry } from '@/src/types/experience';
import { motion, type MotionValue, useTransform } from 'framer-motion';

type ExperienceSlideProps = {
  entry: ExperienceEntry;
  index: number;
  total: number;
  scrollProgress: MotionValue<number>;
  isActive: boolean;
};

function getActiveness(progress: number, index: number, total: number) {
  const slideProgress = progress * (total - 1);
  const distance = Math.abs(slideProgress - index);

  if (distance >= 0.5) return 0;

  return 1 - distance / 0.5;
}

function getDirectionalY(progress: number, index: number, total: number, offset = 24) {
  const slideProgress = progress * (total - 1);
  const activeness = getActiveness(progress, index, total);

  if (activeness === 0) {
    return slideProgress > index ? -offset : offset;
  }

  const direction = slideProgress - index;

  if (direction < 0) return offset * (1 - activeness);
  if (direction > 0) return -offset * (1 - activeness);

  return 0;
}

export function ExperienceSlide({ entry, index, total, scrollProgress, isActive }: ExperienceSlideProps) {
  const activeness = useTransform(scrollProgress, (p) => getActiveness(p, index, total));

  const headlineOpacity = useTransform(activeness, [0, 0.55, 1], [0, 0.18, 1]);
  const summaryOpacity = useTransform(activeness, [0, 0.65, 1], [0, 0.1, 0.95]);

  const headlineY = useTransform(scrollProgress, (p) => getDirectionalY(p, index, total, 22));
  const summaryY = useTransform(scrollProgress, (p) => getDirectionalY(p, index, total, 32));

  const headlineColor = useTransform(
    activeness,
    [0, 0.5, 1],
    ['var(--muted-foreground)', 'color-mix(in oklch, var(--primary) 60%, var(--muted-foreground))', 'var(--primary)']
  );

  return (
    <article className='absolute inset-0 flex flex-col justify-center space-y-4' aria-hidden={!isActive}>
      <motion.h3
        className='text-[1.75rem] font-semibold leading-[1.12] tracking-tight md:text-[2.25rem] lg:text-[2.625rem]'
        style={{
          opacity: headlineOpacity,
          y: headlineY,
          color: headlineColor
        }}
      >
        {entry.headline}
      </motion.h3>
      <motion.p
        className='max-w-xl text-base leading-relaxed text-foreground md:text-lg lg:text-[1.125rem] lg:leading-[1.65]'
        style={{
          opacity: summaryOpacity,
          y: summaryY
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
