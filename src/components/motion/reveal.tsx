'use client';

import { fadeUp, transition, VIEWPORT } from '@/src/lib/motion';
import { cn } from '@/src/lib/utils';
import { motion, useInView, useReducedMotion, type Variants } from 'framer-motion';
import { type ReactNode, useEffect, useRef, useState } from 'react';

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
        variants={variants}
        transition={{ ...transition, delay }}
        className={cn(className)}
      >
        {children}
      </Component>
    </div>
  );
}
