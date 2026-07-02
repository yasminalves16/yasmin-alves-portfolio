'use client';

import { Reveal } from '@/src/components/motion/reveal';
import { SectionHeader } from '@/src/components/motion/section-header';
import { Stagger, StaggerItem } from '@/src/components/motion/stagger';
import { useMessages } from '@/src/hooks/use-messages';
import { usePortfolioData } from '@/src/hooks/use-portfolio-data';
import { cn } from '@/src/lib/utils';
import type { Certification } from '@/src/types/education';
import { Award, GraduationCap } from 'lucide-react';
import { Container } from '../../ui/container';

const cardClassName =
  'flex cursor-default items-start gap-4 rounded-xl border border-border bg-background/40 p-4 transition-colors hover:border-primary/30 hover:bg-secondary/40';

function AcademicCard({
  degree,
  institution,
  period,
  description
}: {
  degree: string;
  institution: string;
  period: string;
  description: string;
}) {
  return (
    <article className={cardClassName}>
      <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary'>
        <GraduationCap size={18} aria-hidden />
      </span>
      <div className='min-w-0'>
        <h4 className='text-sm font-medium'>{degree}</h4>
        <p className='text-sm text-muted-foreground'>{institution}</p>
        <p className='text-sm text-primary'>{period}</p>
        <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>{description}</p>
      </div>
    </article>
  );
}

function CertificationCard({
  item,
  a11yLabel,
  viewCredentialLabel
}: {
  item: Certification;
  a11yLabel: string;
  viewCredentialLabel: string;
}) {
  const content = (
    <>
      <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary'>
        <Award size={18} aria-hidden />
      </span>
      <div className='min-w-0'>
        <h4 className='text-sm font-medium'>{item.title}</h4>
        <p className='text-sm text-muted-foreground'>
          {item.issuer} · {item.period}
        </p>
        {item.credentialUrl && (
          <p className='mt-1 truncate text-sm text-muted-foreground'>{viewCredentialLabel}</p>
        )}
      </div>
    </>
  );

  if (item.credentialUrl) {
    return (
      <a
        href={item.credentialUrl}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={a11yLabel}
        className={cn(cardClassName, 'cursor-pointer items-center')}
      >
        {content}
      </a>
    );
  }

  return <article className={cn(cardClassName, 'items-center')}>{content}</article>;
}

export function Education() {
  const { education } = usePortfolioData();
  const { sections, a11y } = useMessages();
  const { education: educationMessages } = sections;

  return (
    <section id='education'>
      <Container>
        <SectionHeader badge={educationMessages.badge} title={educationMessages.title} />

        <div className='grid gap-12 lg:grid-cols-2'>
          <Reveal>
            <section>
              <h3 className='mb-6 text-xl font-semibold'>{educationMessages.academicTitle}</h3>
              <Stagger as='ul' className='space-y-3'>
                {education.academic.map((item) => (
                  <StaggerItem key={item.id} as='li'>
                    <AcademicCard
                      degree={item.degree}
                      institution={item.institution}
                      period={item.period}
                      description={item.description}
                    />
                  </StaggerItem>
                ))}
              </Stagger>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <h3 className='mb-6 text-xl font-semibold'>{educationMessages.certificationsTitle}</h3>
              <Stagger as='ul' className='space-y-3'>
                {education.certifications.map((item) => (
                  <StaggerItem key={item.id} as='li'>
                    <CertificationCard
                      item={item}
                      a11yLabel={a11y.externalCredential}
                      viewCredentialLabel={educationMessages.viewCredential}
                    />
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
