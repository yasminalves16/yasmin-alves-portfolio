'use client';

import { HoverCard } from '@/src/components/motion/hover-card';
import { SectionHeader } from '@/src/components/motion/section-header';
import { Stagger, StaggerItem } from '@/src/components/motion/stagger';
import { useMessages } from '@/src/hooks/use-messages';
import { usePortfolioData } from '@/src/hooks/use-portfolio-data';
import { Container } from '../../ui/container';

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
              <HoverCard
                as='article'
                className='rounded-xl border border-border bg-card p-8 transition-colors hover:border-primary/20'
              >
                <header className='mb-4 space-y-1'>
                  <p className='text-sm font-medium text-primary'>{item.source}</p>
                  <p className='text-xs text-muted-foreground'>{item.sourceSubtitle}</p>
                </header>
                <h3 className='mb-3 text-lg font-semibold'>{item.title}</h3>
                <p className='mb-4 text-muted-foreground'>{item.description}</p>
                <ul className='mb-4 flex flex-wrap gap-2'>
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className='rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground'
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className='flex flex-wrap items-center gap-3'>
                  <a
                    href={item.articleUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-medium text-primary hover:underline'
                  >
                    {media.readArticle}
                  </a>
                  <span className='rounded-full bg-accent/20 px-2 py-1 text-xs text-accent-foreground'>
                    {media.officialPublication}
                  </span>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
