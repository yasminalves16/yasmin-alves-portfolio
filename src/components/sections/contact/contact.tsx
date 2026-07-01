'use client';

import { socialLinks } from '@/src/data';
import { useMessages } from '@/src/hooks/use-messages';
import { Mail, MapPinHouse, Send, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { MdWhatsapp } from 'react-icons/md';
import { Button } from '../../ui/button';
import { Container } from '../../ui/container';
import { RichHeading } from '../../ui/rich-heading';
import { ContactFormModal } from './contact-form-modal';

const socialIcons = {
  github: FiGithub,
  linkedin: FiLinkedin,
  whatsapp: MdWhatsapp,
  email: Mail
} as const;

const socialA11yKeys = {
  github: 'openGithub',
  linkedin: 'openLinkedin',
  whatsapp: 'openWhatsapp',
  email: 'sendEmail'
} as const;

export function Contact() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const { sections, actions, a11y } = useMessages();
  const { contact } = sections;

  const openModal = () => {
    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    dialogRef.current?.close();
  };

  return (
    <section id='contact'>
      <Container>
        <div className='mb-10 space-y-4 text-center lg:text-left'>
          <span className='section-badge inline-flex items-center gap-2'>
            <Sparkles size={14} aria-hidden /> {contact.badge} <Sparkles size={14} aria-hidden />
          </span>
          <RichHeading segments={contact.heading} as='h2' />
          <p className='max-w-2xl text-muted-foreground'>{contact.description}</p>
        </div>

        <div className='grid gap-10 lg:grid-cols-2'>
          <div className='space-y-4 rounded-xl border border-border bg-card p-6'>
            <h3 className='text-xl font-semibold'>{contact.getInTouchTitle}</h3>
            <p className='text-muted-foreground'>{contact.getInTouchDescription}</p>
            <p className='flex items-center gap-2 text-sm text-muted-foreground'>
              <MapPinHouse size={18} aria-hidden /> {contact.location}
            </p>
            <Button onClick={openModal} className='mt-2'>
              <Mail size={16} aria-hidden /> {actions.sendMessage} <Send size={16} aria-hidden />
            </Button>
          </div>

          <div className='space-y-4'>
            <h3 className='text-xl font-semibold'>{contact.networksTitle}</h3>
            <ul className='space-y-3'>
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.id];
                const a11yLabel = a11y[socialA11yKeys[link.id]];

                return (
                  <li key={link.id}>
                    <div className='flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/30'>
                      <span className='flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary'>
                        <Icon />
                      </span>
                      <div>
                        <h4 className='text-sm font-medium'>{link.label}</h4>
                        <a
                          href={link.href}
                          target='_blank'
                          rel='noopener noreferrer'
                          aria-label={a11yLabel}
                          className='text-sm text-muted-foreground transition-colors hover:text-primary'
                        >
                          {link.display}
                        </a>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
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
