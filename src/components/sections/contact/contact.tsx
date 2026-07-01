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
        <span>
          <Sparkles /> {contact.badge} <Sparkles />
        </span>
        <RichHeading segments={contact.heading} as='h2' />
        <p>{contact.description}</p>

        <div>
          <div>
            <h3>{contact.getInTouchTitle}</h3>
            <p>{contact.getInTouchDescription}</p>
            <p>
              <MapPinHouse /> {contact.location}
            </p>
            <Button onClick={openModal}>
              <Mail /> {actions.sendMessage} <Send />
            </Button>
          </div>

          <div>
            <h3>{contact.networksTitle}</h3>
            <ul>
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.id];
                const a11yLabel = a11y[socialA11yKeys[link.id]];

                return (
                  <li key={link.id}>
                    <span>
                      <Icon />
                    </span>
                    <div>
                      <h4>{link.label}</h4>
                      <a
                        href={link.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={a11yLabel}
                      >
                        {link.display}
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
      <dialog ref={dialogRef} aria-labelledby='contact-title' aria-describedby='contact-description'>
        <ContactFormModal closeModal={closeModal} />
      </dialog>
    </section>
  );
}
