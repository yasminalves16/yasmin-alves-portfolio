'use client';

import type { ExperienceEntry, ExperienceFocus } from '@/src/types/experience';
import { EASE_OUT } from '@/src/lib/motion';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ExperienceCard } from './experience-card';

type ExperienceMobileProps = {
  entries: ExperienceEntry[];
  focusLabels: Record<ExperienceFocus, string>;
  swipeHint: string;
};

export function ExperienceMobile({ entries, focusLabels, swipeHint }: ExperienceMobileProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    const card = cardRefs.current[index];
    card?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, []);

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (observed) => {
        const visible = observed
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        const index = Number(visible.target.getAttribute('data-index'));
        if (!Number.isNaN(index)) {
          setActiveIndex(index);
        }
      },
      { root, threshold: [0.55, 0.7, 0.85] }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [entries.length]);

  return (
    <div className='lg:hidden'>
      <div
        ref={scrollRef}
        className='scrollbar-none -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2'
        aria-label='Trajetória profissional'
      >
        {entries.map((entry, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.article
              key={entry.id}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              data-index={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, ease: EASE_OUT, delay: index * 0.04 }}
              className='relative w-[min(92vw,24rem)] shrink-0 snap-center scroll-ml-4'
            >
              <div
                className='relative overflow-hidden rounded-2xl border border-primary/20 bg-card p-6 shadow-[0_16px_48px_-24px_rgba(0,0,0,0.18)] transition-shadow duration-500'
                style={{
                  boxShadow: isActive
                    ? '0 20px 56px -20px color-mix(in oklch, var(--primary) 25%, transparent)'
                    : undefined
                }}
              >
                <div
                  className='pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-50 blur-2xl'
                  style={{
                    background:
                      'radial-gradient(circle, color-mix(in oklch, var(--primary) 30%, transparent), transparent 70%)'
                  }}
                  aria-hidden
                />

                <p className='mb-3 text-[1.625rem] font-semibold leading-[1.15] tracking-tight text-primary'>
                  {entry.headline}
                </p>
                <p className='mb-6 text-sm leading-relaxed text-muted-foreground'>{entry.summary}</p>

                <div className='border-t border-border/60 pt-5'>
                  <ExperienceCard entry={entry} focusLabel={focusLabels[entry.focus]} compact />
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className='mt-5 flex items-center justify-between gap-4 px-1'>
        <p className='text-xs text-muted-foreground'>{swipeHint}</p>

        <div className='flex items-center gap-3'>
          <button
            type='button'
            onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            aria-label='Experiência anterior'
            className='flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors enabled:hover:border-primary/40 enabled:hover:text-primary disabled:opacity-30'
          >
            <ChevronLeft size={16} aria-hidden />
          </button>

          <div className='flex items-center gap-1.5' aria-hidden>
            {entries.map((entry, i) => (
              <button
                key={entry.id}
                type='button'
                onClick={() => scrollToIndex(i)}
                aria-label={`Ir para experiência ${i + 1}`}
                className='h-1.5 rounded-full transition-all duration-500'
                style={{
                  width: i === activeIndex ? '1.25rem' : '0.375rem',
                  backgroundColor:
                    i === activeIndex
                      ? 'var(--primary)'
                      : 'color-mix(in oklch, var(--muted-foreground) 35%, transparent)'
                }}
              />
            ))}
          </div>

          <button
            type='button'
            onClick={() => scrollToIndex(Math.min(entries.length - 1, activeIndex + 1))}
            disabled={activeIndex === entries.length - 1}
            aria-label='Próxima experiência'
            className='flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors enabled:hover:border-primary/40 enabled:hover:text-primary disabled:opacity-30'
          >
            <ChevronRight size={16} aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}
