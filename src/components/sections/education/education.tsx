'use client';

import { Reveal } from '@/src/components/motion/reveal';
import { SectionHeader } from '@/src/components/motion/section-header';
import { Stagger, StaggerItem } from '@/src/components/motion/stagger';
import { useMessages } from '@/src/hooks/use-messages';
import { usePortfolioData } from '@/src/hooks/use-portfolio-data';
import { sortCertifications } from '@/src/lib/education';
import { cn } from '@/src/lib/utils';
import type { Certification } from '@/src/types/education';
import { Calendar, ExternalLink, GraduationCap } from 'lucide-react';
import { Container } from '../../ui/container';

const academicCardClassName =
  'flex cursor-default items-start gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/30 hover:bg-secondary/40';

const certificationCardClassName =
  'flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/30 hover:bg-secondary/40';

function PeriodBadge({ period }: { period: string }) {
  return (
    <p className='flex shrink-0 items-center gap-1.5 text-xs text-muted-foreground'>
      <Calendar size={14} className='shrink-0 text-primary/70' aria-hidden />
      <span className='whitespace-nowrap'>{period}</span>
    </p>
  );
}

function AcademicCard({
  degree,
  institution,
  period,
  description,
  credentialUrl,
  a11yLabel
}: {
  degree: string;
  institution: string;
  period: string;
  description: string;
  credentialUrl?: string;
  a11yLabel: string;
}) {
  const content = (
    <>
      <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary'>
        <GraduationCap size={18} aria-hidden />
      </span>
      <div className='min-w-0 flex-1'>
        <div className='flex items-start justify-between gap-3'>
          <h4 className='text-sm font-medium leading-snug'>{degree}</h4>
          <div className='flex shrink-0 items-center gap-2'>
            <PeriodBadge period={period} />
            {credentialUrl && (
              <ExternalLink size={16} className='shrink-0 text-muted-foreground' aria-hidden />
            )}
          </div>
        </div>
        <p className='mt-1 text-sm text-primary'>{institution}</p>
        <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>{description}</p>
      </div>
    </>
  );

  if (credentialUrl) {
    return (
      <a
        href={credentialUrl}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={a11yLabel}
        className={cn(academicCardClassName, 'cursor-pointer')}
      >
        {content}
      </a>
    );
  }

  return <article className={academicCardClassName}>{content}</article>;
}

function CertificationMeta({
  issuer,
  period,
  workload
}: {
  issuer: string;
  period?: string;
  workload?: string;
}) {
  if (workload) {
    return (
      <>
        <p className='mt-1 text-sm text-primary'>{issuer}</p>
        <p className='mt-1 text-sm text-muted-foreground'>
          <span>{workload}</span>
          {period && (
            <>
              <span> · </span>
              <span>{period}</span>
            </>
          )}
        </p>
      </>
    );
  }

  return (
    <p className='mt-1 text-sm'>
      <span className='text-primary'>{issuer}</span>
      {period && <span className='text-muted-foreground'> · {period}</span>}
    </p>
  );
}

function CertificationCard({ item, a11yLabel }: { item: Certification; a11yLabel: string }) {
  const content = (
    <>
      <div className='min-w-0 flex-1'>
        <h4 className='text-sm font-semibold leading-snug text-primary'>{item.title}</h4>
        <CertificationMeta issuer={item.issuer} period={item.period} workload={item.workload} />
      </div>
      {item.credentialUrl && (
        <ExternalLink size={16} className='shrink-0 text-muted-foreground' aria-hidden />
      )}
    </>
  );

  if (item.credentialUrl) {
    return (
      <a
        href={item.credentialUrl}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={a11yLabel}
        className={cn(certificationCardClassName, 'cursor-pointer')}
      >
        {content}
      </a>
    );
  }

  return <article className={certificationCardClassName}>{content}</article>;
}

export function Education() {
  const { education } = usePortfolioData();
  const { sections, a11y } = useMessages();
  const { education: educationMessages } = sections;
  const certifications = sortCertifications(education.certifications);

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
                      credentialUrl={item.credentialUrl}
                      a11yLabel={a11y.externalCredential}
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
                {certifications.map((item) => (
                  <StaggerItem key={item.id} as='li'>
                    <CertificationCard item={item} a11yLabel={a11y.externalCredential} />
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
