'use client';

import { Reveal } from '@/src/components/motion/reveal';
import { SectionHeader } from '@/src/components/motion/section-header';
import { Stagger, StaggerItem } from '@/src/components/motion/stagger';
import { slideFromLeft, slideFromRight } from '@/src/lib/motion';
import { useMessages } from '@/src/hooks/use-messages';
import { usePortfolioData } from '@/src/hooks/use-portfolio-data';
import { Container } from '../../ui/container';

export function Education() {
  const { education } = usePortfolioData();
  const { sections, a11y } = useMessages();
  const { education: educationMessages } = sections;

  return (
    <section id='education'>
      <Container>
        <SectionHeader badge={educationMessages.badge} title={educationMessages.title} />

        <div className='grid gap-12 lg:grid-cols-2'>
          <Reveal variants={slideFromLeft}>
            <section>
              <h3 className='mb-6 text-xl font-semibold'>{educationMessages.academicTitle}</h3>
              <Stagger as='ul' className='space-y-6'>
                {education.academic.map((item) => (
                  <StaggerItem key={item.id} as='li' className='border-l-4 border-primary pl-4'>
                    <article>
                      <h4 className='font-semibold'>{item.degree}</h4>
                      <p className='text-sm text-muted-foreground'>{item.institution}</p>
                      <p className='text-sm text-primary'>{item.period}</p>
                      <p className='mt-2 text-sm text-muted-foreground'>{item.description}</p>
                    </article>
                  </StaggerItem>
                ))}
              </Stagger>
            </section>
          </Reveal>

          <Reveal variants={slideFromRight}>
            <section>
              <h3 className='mb-6 text-xl font-semibold'>{educationMessages.certificationsTitle}</h3>
              <Stagger as='ul' className='space-y-6'>
                {education.certifications.map((item) => (
                  <StaggerItem key={item.id} as='li' className='border-l-4 border-primary pl-4'>
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
                  </StaggerItem>
                ))}
              </Stagger>
            </section>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
