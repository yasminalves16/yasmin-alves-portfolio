'use client';

import { fadeUp, stagger, transition, VIEWPORT } from '@/src/lib/motion';
import { cn } from '@/src/lib/utils';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type StaggerProps = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'ul' | 'section';
};

export function Stagger({ children, className, as = 'div' }: StaggerProps) {
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
      variants={stagger}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  as?: 'div' | 'li' | 'article';
};

export function StaggerItem({ children, className, variants = fadeUp, as = 'div' }: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion[as];

  if (prefersReducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component variants={variants} transition={transition} className={cn(className)}>
      {children}
    </Component>
  );
}
