'use client';

import { useMessages } from '@/src/hooks/use-messages';
import { usePortfolioData } from '@/src/hooks/use-portfolio-data';
import { Container } from '../../ui/container';
import { RichHeading } from '../../ui/rich-heading';

export function MediaRecognition() {
  const { mediaRecognition } = usePortfolioData();
  const { sections } = useMessages();
  const { media } = sections;

  return (
    <section id='media'>
      <Container>
        <div className='mb-10 space-y-4'>
          <span className='section-badge'>{media.badge}</span>
          <RichHeading segments={media.title} as='h2' />
        </div>

        <ul className='space-y-6'>
          {mediaRecognition.map((item) => (
            <li key={item.id}>
              <article className='rounded-xl border border-border bg-card p-8'>
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
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
