'use client';

import { socialLinks } from '@/src/data';
import { useMessages } from '@/src/hooks/use-messages';
import { usePortfolioData } from '@/src/hooks/use-portfolio-data';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import { MdOutlineFileDownload, MdWhatsapp } from 'react-icons/md';
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
    <section id='hero' className='relative min-h-[100svh]'>
      <Container>
        <video
          src='/assets/hero/iayasmin.mp4'
          aria-label={a11y.decorativeHeroVideo}
          autoPlay
          muted
          loop
          playsInline
          width={500}
          height={500}
        />
        <div>
          <h1>
            {firstName}
            <span>{lastName}</span>
          </h1>
          <span>&lt; {profile.role} &gt;</span>
          <div>
            {sections.hero.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div>
            <a href='#projects'>
              {actions.viewProjects} <FiArrowRight />
            </a>
            {profile.documents.map((document) => (
              <a
                key={document.id}
                href={document.href}
                download={document.filename}
                aria-label={`${a11y.downloadDocumentPrefix}: ${document.label}`}
              >
                {document.label} <MdOutlineFileDownload />
              </a>
            ))}
          </div>
          <div>
            <ul>
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
                    >
                      <Icon />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className='absolute bottom-8 left-1/2 -translate-x-1/2'
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className='w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2'
            >
              <motion.div
                className='w-1 h-2 bg-primary rounded-full'
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
