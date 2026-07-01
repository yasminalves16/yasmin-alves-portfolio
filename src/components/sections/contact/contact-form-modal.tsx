'use client';

import { useMessages } from '@/src/hooks/use-messages';
import { Send, X } from 'lucide-react';
import Form from 'next/form';
import { Button } from '../../ui/button';

export function ContactFormModal({ closeModal }: { closeModal: () => void }) {
  const { sections, actions, a11y } = useMessages();
  const { contact } = sections;

  const inputClassName =
    'w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring';

  return (
    <div className='p-6'>
      <header className='mb-4 flex items-start justify-between gap-4'>
        <div>
          <h2 id='contact-title' className='text-xl font-semibold'>
            {contact.formTitle}
          </h2>
          <p id='contact-description' className='text-sm text-muted-foreground'>
            {contact.formDescription}
          </p>
        </div>
        <button
          type='button'
          aria-label={a11y.closeContactForm}
          onClick={closeModal}
          className='rounded-lg p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'
        >
          <X size={20} aria-hidden />
        </button>
      </header>
      <hr className='mb-4 border-border' />
      <Form action='/send-message' className='space-y-4'>
        <div>
          <label htmlFor='name' className='mb-1 block text-sm font-medium'>
            {contact.form.nameLabel}
          </label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder={contact.form.namePlaceholder}
            className={inputClassName}
            required
          />
        </div>
        <div>
          <label htmlFor='email' className='mb-1 block text-sm font-medium'>
            {contact.form.emailLabel}
          </label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder={contact.form.emailPlaceholder}
            className={inputClassName}
            required
          />
        </div>
        <div>
          <label htmlFor='subject' className='mb-1 block text-sm font-medium'>
            {contact.form.subjectLabel}
          </label>
          <input
            type='text'
            name='subject'
            id='subject'
            placeholder={contact.form.subjectPlaceholder}
            className={inputClassName}
            required
          />
        </div>
        <div>
          <label htmlFor='message' className='mb-1 block text-sm font-medium'>
            {contact.form.messageLabel}
          </label>
          <textarea
            name='message'
            id='message'
            placeholder={contact.form.messagePlaceholder}
            className={`${inputClassName} min-h-28 resize-y`}
            required
          />
        </div>
        <Button type='submit' className='w-full'>
          <Send size={16} aria-hidden /> {actions.sendMessage}
        </Button>
      </Form>
    </div>
  );
}
