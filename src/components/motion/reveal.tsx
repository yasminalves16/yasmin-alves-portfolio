'use client';

import { fadeUp, transition, VIEWPORT } from '@/src/lib/motion';
import { cn } from '@/src/lib/utils';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
  as?: 'div' | 'section' | 'article' | 'p' | 'span' | 'header';
};

export function Reveal({
  children,
  className,
  delay = 0,
  variants = fadeUp,
  as = 'div'
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion[as];

  if (prefersReducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      initial='hidden'
      whileInView='visible'
      viewport={VIEWPORT}
      variants={variants}
      transition={{ ...transition, delay }}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
