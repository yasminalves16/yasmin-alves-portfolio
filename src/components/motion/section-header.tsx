'use client';

import { fadeUp, transition, VIEWPORT } from '@/src/lib/motion';
import type { RichHeadingSegment } from '@/src/types/locale';
import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { RichHeading } from '../ui/rich-heading';
import { Reveal } from './reveal';

type SectionHeaderProps = {
  badge?: ReactNode;
  title?: RichHeadingSegment[];
  description?: string;
  className?: string;
  align?: 'left' | 'center';
};

export function SectionHeader({ badge, title, description, className = '', align = 'left' }: SectionHeaderProps) {
  const prefersReducedMotion = useReducedMotion();
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  if (prefersReducedMotion) {
    return (
      <div className={`mb-10 flex flex-col space-y-4 ${alignClass} ${className}`}>
        {badge && <span className='section-badge'>{badge}</span>}
        {title && <RichHeading segments={title} as='h2' />}
        {description && <p className='max-w-2xl text-muted-foreground'>{description}</p>}
      </div>
    );
  }

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={VIEWPORT}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.1, delayChildren: 0.04 }
        }
      }}
      className={`mb-10 flex flex-col space-y-4 md:mb-12 ${alignClass} ${className}`}
    >
      {badge && (
        <motion.span className='section-badge inline-flex items-center gap-2' variants={fadeUp} transition={transition}>
          {badge}
        </motion.span>
      )}
      {title && (
        <motion.div variants={fadeUp} transition={transition}>
          <RichHeading segments={title} as='h2' />
        </motion.div>
      )}
      {description && (
        <motion.p className='max-w-2xl text-muted-foreground' variants={fadeUp} transition={transition}>
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

type AboutHeaderProps = {
  label: string;
  headline: RichHeadingSegment[];
};

export function AboutHeader({ label, headline }: AboutHeaderProps) {
  return (
    <Reveal className='mb-10 space-y-4 md:mb-12'>
      <h2 className='text-sm font-semibold uppercase tracking-widest text-primary'>{label}</h2>
      <RichHeading segments={headline} as='h2' />
    </Reveal>
  );
}
