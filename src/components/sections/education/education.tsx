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
        <div className='mb-10 space-y-4'>
          <span className='section-badge'>{educationMessages.badge}</span>
          <RichHeading segments={educationMessages.title} as='h2' />
        </div>

        <div className='grid gap-12 lg:grid-cols-2'>
          <section>
            <h3 className='mb-6 text-xl font-semibold'>{educationMessages.academicTitle}</h3>
            <ul className='space-y-6'>
              {education.academic.map((item) => (
                <li key={item.id} className='border-l-4 border-primary pl-4'>
                  <article>
                    <h4 className='font-semibold'>{item.degree}</h4>
                    <p className='text-sm text-muted-foreground'>{item.institution}</p>
                    <p className='text-sm text-primary'>{item.period}</p>
                    <p className='mt-2 text-sm text-muted-foreground'>{item.description}</p>
                  </article>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className='mb-6 text-xl font-semibold'>{educationMessages.certificationsTitle}</h3>
            <ul className='space-y-6'>
              {education.certifications.map((item) => (
                <li key={item.id} className='border-l-4 border-primary pl-4'>
                  <article>
                    <h4 className='font-semibold'>{item.title}</h4>
                    <p className='text-sm text-muted-foreground'>
                      {item.issuer} · {item.period}
                    </p>
                    {item.credentialUrl && (
                      <a
                        href={item.credentialUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={a11y.externalCredential}
                        className='mt-2 inline-block text-sm text-primary hover:underline'
                      >
                        Ver credencial
                      </a>
                    )}
                  </article>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Container>
    </section>
  );
}
