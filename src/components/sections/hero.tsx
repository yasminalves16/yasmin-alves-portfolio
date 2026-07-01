'use client';

import { socialLinks } from '@/src/data';
import { useMessages } from '@/src/hooks/use-messages';
import { usePortfolioData } from '@/src/hooks/use-portfolio-data';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import { MdOutlineFileDownload, MdWhatsapp } from 'react-icons/md';
import { buttonClassName } from '../ui/button';
import { Container } from '../ui/container';

const socialIcons = {
  github: FiGithub,
  linkedin: FiLinkedin,
  whatsapp: MdWhatsapp
} as const;

const socialA11yKeys = {
  github: 'openGithub',
  linkedin: 'openLinkedin',
  whatsapp: 'openWhatsapp'
} as const;

export function Hero() {
  const { profile } = usePortfolioData();
  const { sections, actions, a11y } = useMessages();
  const [firstName, ...lastNameParts] = profile.name.split(' ');
  const lastName = lastNameParts.join(' ');
  const heroSocialLinks = socialLinks.filter((link) => link.id !== 'email');

  return (
    <section id='hero' className='relative flex min-h-[100svh] items-center pt-16'>
      <Container asSection={false} className='w-full py-8'>
        <div className='grid items-center gap-10 lg:grid-cols-2 lg:gap-12'>
          <div className='mx-auto flex justify-center lg:order-2'>
            <div className='relative'>
              <div className='absolute inset-0 rounded-full border border-primary/30' />
              <video
                src='/assets/hero/iayasmin.mp4'
                aria-label={a11y.decorativeHeroVideo}
                autoPlay
                muted
                loop
                playsInline
                className='relative z-10 w-full max-w-[280px] rounded-full sm:max-w-[320px] lg:max-w-[400px]'
              />
            </div>
          </div>

          <div className='space-y-6 text-center lg:order-1 lg:text-left'>
            <h1 className='text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl'>
              {firstName}
              <span className='text-primary'> {lastName}</span>
            </h1>
            <p className='font-mono text-sm text-muted-foreground sm:text-base'>
              &lt; {profile.role} &gt;
            </p>
            <div className='space-y-3 text-muted-foreground'>
              {sections.hero.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className='flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start'>
              <Link href='#projects' className={buttonClassName({ className: 'w-full sm:w-auto' })}>
                {actions.viewProjects} <FiArrowRight />
              </Link>
              <div className='hidden flex-col gap-3 sm:flex-row md:flex'>
                {profile.documents.map((document) => (
                  <a
                    key={document.id}
                    href={document.href}
                    download={document.filename}
                    aria-label={`${a11y.downloadDocumentPrefix}: ${document.label}`}
                    className={buttonClassName({ variant: 'outline', className: 'w-full sm:w-auto' })}
                  >
                    {document.label} <MdOutlineFileDownload />
                  </a>
                ))}
              </div>
            </div>

            <ul className='flex items-center justify-center gap-3 lg:justify-start'>
              {heroSocialLinks.map((link) => {
                const Icon = socialIcons[link.id as keyof typeof socialIcons];
                const a11yKey = socialA11yKeys[link.id as keyof typeof socialA11yKeys];

                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={a11y[a11yKey]}
                      className='flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground'
                    >
                      <Icon />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className='absolute bottom-28 left-1/2 hidden -translate-x-1/2 lg:bottom-8 lg:block'
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className='flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-2'
          >
            <motion.div
              className='h-2 w-1 rounded-full bg-primary'
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
