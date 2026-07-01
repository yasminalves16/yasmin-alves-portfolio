import { cn } from '@/src/lib/utils';
import { Fragment } from 'react';
import type { RichHeadingSegment } from '@/src/types/locale';

type RichHeadingProps = {
  segments: RichHeadingSegment[];
  as?: 'h2' | 'h3';
  className?: string;
};

export function RichHeading({ segments, as: Tag = 'h3', className }: RichHeadingProps) {
  return (
    <Tag className={cn('text-3xl font-bold tracking-tight md:text-4xl', className)}>
      {segments.map((seg, i) =>
        seg.kind === 'emphasis' ? (
          <span key={i} className='text-primary'>
            {seg.value}
          </span>
        ) : (
          <Fragment key={i}>{seg.value}</Fragment>
        )
      )}
    </Tag>
  );
}
