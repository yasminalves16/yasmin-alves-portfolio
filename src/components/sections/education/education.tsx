'use client';

import { useMessages } from '@/src/hooks/use-messages';
import { usePortfolioData } from '@/src/hooks/use-portfolio-data';
import { Container } from '../../ui/container';
import { RichHeading } from '../../ui/rich-heading';

export function Education() {
  const { education } = usePortfolioData();
  const { sections, a11y } = useMessages();
  const { education: educationMessages } = sections;

  return (
    <section id='education'>
      <Container>
        <span>{educationMessages.badge}</span>
        <RichHeading segments={educationMessages.title} as='h2' />

        <section>
          <h3>{educationMessages.academicTitle}</h3>
          <ul>
            {education.academic.map((item) => (
              <li key={item.id}>
                <article>
                  <h4>{item.degree}</h4>
                  <p>{item.institution}</p>
                  <p>{item.period}</p>
                  <p>{item.description}</p>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3>{educationMessages.certificationsTitle}</h3>
          <ul>
            {education.certifications.map((item) => (
              <li key={item.id}>
                <article>
                  <h4>{item.title}</h4>
                  <p>
                    {item.issuer} · {item.period}
                  </p>
                  {item.credentialUrl && (
                    <a
                      href={item.credentialUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={a11y.externalCredential}
                    >
                      {item.title}
                    </a>
                  )}
                </article>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </section>
  );
}
