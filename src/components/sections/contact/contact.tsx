'use client';

import { Reveal } from '@/src/components/motion/reveal';
import { SectionHeader } from '@/src/components/motion/section-header';
import { socialLinks } from '@/src/data';
import { useMessages } from '@/src/hooks/use-messages';
import type { SocialLink } from '@/src/types/social-link';
import { Mail, MapPinHouse, Send } from 'lucide-react';
import { useRef } from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { MdWhatsapp } from 'react-icons/md';
import { Button } from '../../ui/button';
import { Container } from '../../ui/container';
import { ContactFormModal } from './contact-form-modal';

const contactSocialIds = ['github', 'linkedin', 'email', 'whatsapp'] as const;

const socialIcons = {
  github: FiGithub,
  linkedin: FiLinkedin,
  email: Mail,
  whatsapp: MdWhatsapp
} as const;

const socialA11yKeys = {
  github: 'openGithub',
  linkedin: 'openLinkedin',
  email: 'sendEmail',
  whatsapp: 'openWhatsapp'
} as const;

const socialCardClassName =
  'flex cursor-pointer items-center gap-4 rounded-xl border border-border bg-background/40 p-4 transition-colors hover:border-primary/30 hover:bg-secondary/40';

function formatSocialDisplay(link: SocialLink) {
  if (link.id === 'github') {
    return link.display.startsWith('@') ? link.display : `@${link.display}`;
  }

  return link.display;
}

export function Contact() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const { sections, actions, a11y } = useMessages();
  const { contact } = sections;

  const contactLinks = socialLinks.filter((link) =>
    contactSocialIds.includes(link.id as (typeof contactSocialIds)[number])
  );

  const openModal = () => {
    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    dialogRef.current?.close();
  };

  return (
    <section id='contact'>
      <Container>
        <SectionHeader badge={contact.badge} title={contact.title} description={contact.description} />

        <Reveal className='mx-auto max-w-6xl'>
          <article className='rounded-xl border border-border bg-card p-8 md:p-10 lg:p-12'>
            <div className='grid gap-10 lg:grid-cols-2 lg:gap-14'>
              <div className='flex flex-col items-center text-center'>
                <h3 className='text-xl font-semibold'>{contact.getInTouchTitle}</h3>
                <p className='my-8 max-w-md leading-relaxed text-muted-foreground sm:my-10'>
                  {contact.getInTouchDescription}
                </p>
                <p className='flex items-center justify-center gap-2 text-base text-muted-foreground sm:text-lg'>
                  <MapPinHouse size={20} className='shrink-0 text-primary' aria-hidden />
                  {contact.location}
                </p>
                <Button disabled size='sm' className='mt-12 px-4 py-2.5'>
                  <Mail size={16} aria-hidden />
                  {actions.sendMessage}
                  <Send size={16} aria-hidden />
                </Button>
              </div>

              <div className='space-y-4'>
                <h3 className='text-xl font-semibold'>{contact.networksTitle}</h3>
                <ul className='space-y-3'>
                  {contactLinks.map((link) => {
                    const Icon = socialIcons[link.id as keyof typeof socialIcons];
                    const a11yLabel = a11y[socialA11yKeys[link.id as keyof typeof socialA11yKeys]];
                    const opensInNewTab = link.id !== 'email';

                    return (
                      <li key={link.id}>
                        <a
                          href={link.href}
                          {...(opensInNewTab
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                          aria-label={a11yLabel}
                          className={socialCardClassName}
                        >
                          <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary'>
                            <Icon size={18} aria-hidden />
                          </span>
                          <div className='min-w-0'>
                            <h4 className='text-sm font-medium'>{link.label}</h4>
                            <p className='truncate text-sm text-muted-foreground'>{formatSocialDisplay(link)}</p>
                          </div>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </article>
        </Reveal>
      </Container>

      <dialog
        ref={dialogRef}
        className='max-w-lg rounded-xl border border-border bg-card p-0 shadow-xl backdrop:bg-background/80 open:flex open:flex-col'
        aria-labelledby='contact-title'
        aria-describedby='contact-description'
      >
        <ContactFormModal closeModal={closeModal} />
      </dialog>
    </section>
  );
}
