'use client';

import type { ExperienceEntry } from '@/src/types/experience';
import { Briefcase, Calendar, ChevronRight, MapPin } from 'lucide-react';

type ExperienceCardProps = {
  entry: ExperienceEntry;
  focusLabel: string;
  compact?: boolean;
};

export function ExperienceCard({ entry, focusLabel, compact = false }: ExperienceCardProps) {
  return (
    <div className={compact ? 'space-y-4' : 'space-y-6'}>
      <div className='flex items-start justify-between gap-3'>
        <div className='flex min-w-0 items-center gap-3'>
          <div
            className={`flex shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ${
              compact ? 'h-11 w-11' : 'h-14 w-14'
            }`}
          >
            <Briefcase size={compact ? 18 : 22} aria-hidden />
          </div>
          <div className='min-w-0'>
            <p className={`truncate font-semibold tracking-tight ${compact ? 'text-base' : 'text-lg'}`}>
              {entry.company}
            </p>
            <p className={`text-primary ${compact ? 'text-xs' : 'text-sm'}`}>{entry.employmentType}</p>
          </div>
        </div>

        <span
          className={`shrink-0 rounded-full border border-primary/30 bg-primary/10 font-medium text-primary ${
            compact ? 'px-2.5 py-1 text-[0.65rem]' : 'px-3 py-1 text-xs'
          }`}
        >
          {focusLabel}
        </span>
      </div>

      <h3 className={`font-semibold leading-snug tracking-tight ${compact ? 'text-lg' : 'text-xl md:text-2xl'}`}>
        {entry.role}
      </h3>

      <div className={`space-y-1.5 text-muted-foreground ${compact ? 'text-xs' : 'text-sm'}`}>
        <p className='flex items-center gap-2'>
          <Calendar size={compact ? 14 : 15} className='shrink-0 text-primary/70' aria-hidden />
          {entry.period}
        </p>
        <p className='flex items-center gap-2'>
          <MapPin size={compact ? 14 : 15} className='shrink-0 text-primary/70' aria-hidden />
          {entry.location}
        </p>
      </div>

      <ul className={`space-y-2 ${compact ? 'text-xs' : 'text-sm'} text-muted-foreground`}>
        {entry.bullets.map((bullet) => (
          <li key={bullet} className='flex gap-2 leading-relaxed'>
            <ChevronRight size={compact ? 14 : 16} className='mt-0.5 shrink-0 text-primary' aria-hidden />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <ul className='flex flex-wrap gap-2'>
        {entry.tags.map((tag) => (
          <li
            key={tag}
            className={`rounded-full border border-primary/30 bg-background/60 font-medium text-primary ${
              compact ? 'px-2.5 py-1 text-[0.65rem]' : 'px-3.5 py-1.5 text-xs'
            }`}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
