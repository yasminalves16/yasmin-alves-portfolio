'use client';

import type { ProjectMedia } from '@/src/types/project';
import { cn } from '@/src/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

type ProjectCoverProps = {
  cover?: ProjectMedia;
  title: string;
  className?: string;
};

export function ProjectCover({ cover, title, className }: ProjectCoverProps) {
  const [hasError, setHasError] = useState(false);
  const showPlaceholder = !cover?.src || hasError;

  return (
    <div
      className={cn(
        'relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-gradient-to-br from-secondary/80 to-secondary/30',
        className
      )}
    >
      {showPlaceholder ? (
        <div
          className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklch,var(--primary)_18%,transparent),transparent_55%)]'
          aria-hidden
        />
      ) : (
        <Image
          src={cover.src}
          alt={cover.alt || title}
          fill
          className='object-cover transition-transform duration-500 group-hover:scale-[1.02]'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}
