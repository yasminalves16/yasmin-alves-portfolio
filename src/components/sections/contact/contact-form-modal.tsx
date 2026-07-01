'use client';

import { useMessages } from '@/src/hooks/use-messages';
import { Send, X } from 'lucide-react';
import Form from 'next/form';

export function ContactFormModal({ closeModal }: { closeModal: () => void }) {
  const { sections, actions, a11y } = useMessages();
  const { contact } = sections;

  return (
    <div>
      <header>
        <div>
          <h2 id='contact-title'>{contact.formTitle}</h2>
          <p id='contact-description'>{contact.formDescription}</p>
        </div>
        <button aria-label={a11y.closeContactForm} onClick={closeModal}>
          <X />
        </button>
      </header>
      <hr />
      <Form action='/send-message'>
        <label htmlFor='name'>{contact.form.nameLabel}</label>
        <input type='text' name='name' id='name' placeholder={contact.form.namePlaceholder} required />
        <label htmlFor='email'>{contact.form.emailLabel}</label>
        <input type='email' name='email' id='email' placeholder={contact.form.emailPlaceholder} required />
        <label htmlFor='subject'>{contact.form.subjectLabel}</label>
        <input type='text' name='subject' id='subject' placeholder={contact.form.subjectPlaceholder} required />
        <label htmlFor='message'>{contact.form.messageLabel}</label>
        <textarea name='message' id='message' placeholder={contact.form.messagePlaceholder} required></textarea>
        <button type='submit'>
          <Send /> {actions.sendMessage}
        </button>
      </Form>
    </div>
  );
}
