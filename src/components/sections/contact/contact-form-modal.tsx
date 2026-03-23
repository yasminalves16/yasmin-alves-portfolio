'use client';
import { Send, X } from 'lucide-react';
import Form from 'next/form';

export function ContactFormModal({ closeModal }: { closeModal: () => void }) {
  return (
    <div>
      <header>
        <div>
          <h2 id="contact-title">Enviar mensagem</h2>
          <p id="contact-description">Preencha o formulário abaixo</p>
        </div>
        <button aria-label='Fechar formulário de contato' onClick={closeModal}>
          <X />
        </button>
      </header>
      <hr/>
      <Form action='/send-message'>
        <label htmlFor='name'>Nome</label>
        <input type='text' name='name' id='name' placeholder='Seu nome' required />
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' placeholder='seu@email.com' required />
        <label htmlFor='subject'>Assunto</label>
        <input type='text' name='subject' id='subject' placeholder='Sobre o que gostaria de falar?' required />
        <label htmlFor='message'>Mensagem</label>
        <textarea name='message' id='message' placeholder='Escreva sua mensagem aqui...' required></textarea>
        <button type='submit'>
          <Send /> Enviar mensagem
        </button>
      </Form>
    </div>
  );
}
