'use client';

import { socialLinks } from '@/src/data';
import { EASE_OUT, fadeUp, scaleIn, slideFromLeft, transition } from '@/src/lib/motion';
import { useMessages } from '@/src/hooks/use-messages';
import { usePortfolioData } from '@/src/hooks/use-portfolio-data';
import { motion, useReducedMotion } from 'framer-motion';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { MdOutlineFileDownload, MdWhatsapp } from 'react-icons/md';
import { buttonClassName } from '../ui/button';
import { Container } from '../ui/container';
import { HeroAvatarMedia } from './hero/hero-avatar-media';

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

const heroStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 }
  }
};

export function Hero() {
  const { profile } = usePortfolioData();
  const { sections, a11y } = useMessages();
  const prefersReducedMotion = useReducedMotion();
  const [firstName, ...lastNameParts] = profile.name.split(' ');
  const lastName = lastNameParts.join(' ');
  const heroSocialLinks = socialLinks.filter((link) => link.id !== 'email');

  return (
    <section id='hero' className='relative flex min-h-[100svh] items-center overflow-hidden pt-16'>
      <div
        className='pointer-events-none absolute inset-0 opacity-60'
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 70% 40%, color-mix(in oklch, var(--primary) 8%, transparent), transparent)'
        }}
      />

      <Container asSection={false} className='relative w-full py-8'>
        <div className='grid items-center gap-10 lg:grid-cols-2 lg:gap-12'>
          <motion.div
            className='mx-auto flex justify-center lg:order-2'
            initial={prefersReducedMotion ? false : 'hidden'}
            animate='visible'
            variants={scaleIn}
            transition={{ ...transition, delay: 0.1 }}
          >
            <div className='relative'>
              <motion.div
                className='absolute inset-0 rounded-[2.5rem] border border-primary/30'
                animate={prefersReducedMotion ? undefined : { scale: [1, 1.03, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <HeroAvatarMedia />
            </div>
          </motion.div>

          <motion.div
            className='space-y-6 text-center lg:order-1 lg:text-left'
            initial={prefersReducedMotion ? false : 'hidden'}
            animate='visible'
            variants={heroStagger}
          >
            <motion.h1
              className='text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl'
              variants={slideFromLeft}
              transition={transition}
            >
              {firstName}
              <span className='text-primary'> {lastName}</span>
            </motion.h1>

            <motion.p
              className='font-mono text-sm text-muted-foreground sm:text-base'
              variants={fadeUp}
              transition={transition}
            >
              &lt; {profile.role} /&gt;
            </motion.p>

            <motion.div className='space-y-3 text-muted-foreground' variants={fadeUp} transition={transition}>
              {sections.hero.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </motion.div>

            <motion.div
              className='flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start'
              variants={fadeUp}
              transition={transition}
            >
              {profile.documents.map((document) => (
                <a
                  key={document.id}
                  href={document.href}
                  download={document.filename}
                  aria-label={`${a11y.downloadDocumentPrefix}: ${document.label}`}
                  className={buttonClassName({ variant: 'outline', className: 'w-full gap-2 sm:w-auto' })}
                >
                  {document.label}
                  <MdOutlineFileDownload size={16} aria-hidden />
                </a>
              ))}
            </motion.div>

            <motion.ul
              className='flex items-center justify-center gap-2 lg:justify-start'
              variants={fadeUp}
              transition={transition}
            >
              {heroSocialLinks.map((link) => {
                const Icon = socialIcons[link.id as keyof typeof socialIcons];
                const a11yKey = socialA11yKeys[link.id as keyof typeof socialA11yKeys];

                return (
                  <li key={link.id}>
                    <motion.a
                      href={link.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={a11y[a11yKey]}
                      className='utility-btn h-9 w-9 text-muted-foreground hover:text-foreground'
                      whileHover={prefersReducedMotion ? undefined : { scale: 1.08 }}
                      whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon size={16} aria-hidden />
                    </motion.a>
                  </li>
                );
              })}
            </motion.ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2, ease: EASE_OUT }}
          className='absolute bottom-28 left-1/2 hidden -translate-x-1/2 lg:bottom-8 lg:block'
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className='flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-2'
          >
            <motion.div
              className='h-2 w-1 rounded-full bg-primary'
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
