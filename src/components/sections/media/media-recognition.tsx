'use client';

import { HoverCard } from '@/src/components/motion/hover-card';
import { SectionHeader } from '@/src/components/motion/section-header';
import { Stagger, StaggerItem } from '@/src/components/motion/stagger';
import { Button, buttonClassName } from '@/src/components/ui/button';
import { useMessages } from '@/src/hooks/use-messages';
import { usePortfolioData } from '@/src/hooks/use-portfolio-data';
import type { MediaRecognition as MediaRecognitionItem } from '@/src/types/media-recognition';
import { Award, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { Container } from '../../ui/container';

function MediaRecognitionCard({
  item,
  readArticleLabel
}: {
  item: MediaRecognitionItem;
  readArticleLabel: string;
}) {
  return (
    <HoverCard
      as='article'
      className='overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/20'
    >
      <div className='grid gap-8 p-6 md:p-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-10'>
        <div>
          <header className='mb-5 flex items-start gap-3'>
            <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary'>
              <Award size={18} aria-hidden />
            </span>
            <div className='space-y-1'>
              <p className='text-sm font-medium text-primary'>{item.source}</p>
              <p className='text-xs text-muted-foreground'>{item.sourceSubtitle}</p>
            </div>
          </header>

          <h3 className='mb-4 text-xl font-semibold leading-snug tracking-tight md:text-2xl'>{item.title}</h3>
          <p className='mb-5 text-sm leading-relaxed text-muted-foreground md:text-base'>{item.description}</p>

          <ul className='mb-6 flex flex-wrap gap-2'>
            {item.tags.map((tag) => (
              <li
                key={tag}
                className='rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-secondary-foreground'
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className='flex flex-wrap items-center gap-3'>
            {item.articleDisabled ? (
              <Button disabled size='sm' className='px-4 py-2.5'>
                {readArticleLabel}
                <ExternalLink size={16} aria-hidden />
              </Button>
            ) : (
              <a
                href={item.articleUrl}
                target='_blank'
                rel='noopener noreferrer'
                className={buttonClassName({ size: 'sm', className: 'px-4 py-2.5' })}
              >
                {readArticleLabel}
                <ExternalLink size={16} aria-hidden />
              </a>
            )}
          </div>
        </div>

        {item.cover && (
          <div className='overflow-hidden rounded-xl border border-border bg-background p-3 shadow-sm'>
            <div className='relative aspect-[4/3] w-full overflow-hidden rounded-lg'>
              <Image
                src={item.cover.src}
                alt={item.cover.alt}
                fill
                sizes='(max-width: 1024px) 100vw, 28rem'
                className='object-cover object-top'
              />
            </div>
          </div>
        )}
      </div>
    </HoverCard>
  );
}

export function MediaRecognition() {
  const { mediaRecognition } = usePortfolioData();
  const { sections } = useMessages();
  const { media } = sections;

  return (
    <section id='media'>
      <Container>
        <SectionHeader badge={media.badge} title={media.title} />

        <Stagger as='ul' className='space-y-6'>
          {mediaRecognition.map((item) => (
            <StaggerItem key={item.id} as='li'>
              <MediaRecognitionCard item={item} readArticleLabel={media.readArticle} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
