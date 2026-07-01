'use client';

import type { ExperienceEntry, ExperienceFocus } from '@/src/types/experience';
import { AnimatePresence, motion } from 'framer-motion';
import { ExperienceCard } from './experience-card';

type ExperienceVisualProps = {
  entries: ExperienceEntry[];
  activeIndex: number;
  focusLabels: Record<ExperienceFocus, string>;
};

export function ExperienceVisual({ entries, activeIndex, focusLabels }: ExperienceVisualProps) {
  const entry = entries[activeIndex] ?? entries[0];

  return (
    <div className='relative hidden lg:flex lg:items-center lg:justify-center'>
      <div className='relative w-full max-w-md'>
        <div
          className='pointer-events-none absolute -inset-8 rounded-full opacity-40 blur-3xl'
          style={{
            background:
              'radial-gradient(circle at 50% 50%, color-mix(in oklch, var(--primary) 35%, transparent), transparent 70%)'
          }}
          aria-hidden
        />

        <AnimatePresence mode='wait'>
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className='relative overflow-hidden rounded-3xl border border-primary/20 bg-card/80 p-8 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.12)] backdrop-blur-sm dark:shadow-[0_24px_80px_-20px_rgba(0,0,0,0.45)]'
          >
            <ExperienceCard entry={entry} focusLabel={focusLabels[entry.focus]} />
          </motion.div>
        </AnimatePresence>

        <div className='mt-6 flex justify-center gap-2' aria-hidden>
          {entries.map((item, i) => (
            <span
              key={item.id}
              className='h-1 rounded-full transition-all duration-500 ease-out'
              style={{
                width: i === activeIndex ? '2rem' : '0.375rem',
                backgroundColor:
                  i === activeIndex ? 'var(--primary)' : 'color-mix(in oklch, var(--muted-foreground) 40%, transparent)'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

type ExperienceVisualMobileProps = {
  entry: ExperienceEntry;
  focusLabel: string;
};

export function ExperienceVisualMobile({ entry, focusLabel }: ExperienceVisualMobileProps) {
  return (
    <div className='mt-6 rounded-2xl border border-primary/20 bg-card p-6 lg:hidden'>
      <ExperienceCard entry={entry} focusLabel={focusLabel} compact />
    </div>
  );
}
