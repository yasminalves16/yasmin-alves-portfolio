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
        <span>{media.badge}</span>
        <RichHeading segments={media.title} as='h2' />

        <ul>
          {mediaRecognition.map((item) => (
            <li key={item.id}>
              <article>
                <header>
                  <p>{item.source}</p>
                  <p>{item.sourceSubtitle}</p>
                </header>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul>
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <a href={item.articleUrl} target='_blank' rel='noopener noreferrer'>
                  {media.readArticle}
                </a>
                <span>{media.officialPublication}</span>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
