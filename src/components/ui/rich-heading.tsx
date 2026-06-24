import { Fragment } from 'react';
import type { RichHeadingSegment } from '@/src/types/locale';

type RichHeadingProps = {
  segments: RichHeadingSegment[];
  as?: 'h2' | 'h3';
  className?: string;
};

export function RichHeading({ segments, as: Tag = 'h3', className }: RichHeadingProps) {
  return (
    <Tag className={className}>
      {segments.map((seg, i) =>
        seg.kind === 'emphasis' ? (
          <span key={i}>{seg.value}</span>
        ) : (
          <Fragment key={i}>{seg.value}</Fragment>
        )
      )}
    </Tag>
  );
}
