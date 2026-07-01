'use client';

import { hoverLift, transitionFast } from '@/src/lib/motion';
import { cn } from '@/src/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type HoverCardProps = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'article' | 'section';
};

export function HoverCard({ children, className, as = 'div' }: HoverCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion[as];

  if (prefersReducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      whileHover={hoverLift}
      transition={transitionFast}
      className={cn('will-change-transform', className)}
    >
      {children}
    </Component>
  );
}
