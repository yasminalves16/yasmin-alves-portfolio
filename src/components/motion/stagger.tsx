'use client';

import { fadeUp, stagger, transition, VIEWPORT } from '@/src/lib/motion';
import { cn } from '@/src/lib/utils';
import { motion, useInView, useReducedMotion, type Variants } from 'framer-motion';
import { type ReactNode, useEffect, useRef, useState } from 'react';

type StaggerProps = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'ul' | 'section';
};

export function Stagger({ children, className, as = 'div' }: StaggerProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, VIEWPORT);
  const [forceVisible, setForceVisible] = useState(false);
  const Component = motion[as];

  useEffect(() => {
    const timer = window.setTimeout(() => setForceVisible(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  if (prefersReducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const visible = isInView || forceVisible;

  return (
    <div ref={ref} className='contents'>
      <Component
        initial='hidden'
        animate={visible ? 'visible' : 'hidden'}
        variants={stagger}
        className={cn(className)}
      >
        {children}
      </Component>
    </div>
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
