'use client';
import { Mail, MapPinHouse, Send, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { MdWhatsapp } from 'react-icons/md';
import { Button } from '../../ui/button';
import { Container } from '../../ui/container';
import { ContactFormModal } from './contact-form-modal';

export function Contact() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

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
          <Sparkles /> Contato <Sparkles />
        </span>
        <h2>
          Vamos trabalhar <span>juntos</span>?
        </h2>
        <p>Estou sempre aberta a discutir novos projetos, ideias criativas ou oportunidades de fazer parte de suas visões.</p>

        <div>
          <div>
            <h3>Entre em contato</h3>
            <p>
              Seja pra uma oportunidade de colaboração, uma posição full time ou apenas para trocar ideias sobre tecnologia. Adoraria ouvir
              você!
            </p>
            <p>
              <MapPinHouse /> São José dos Campos, SP
            </p>
            <Button onClick={openModal}>
              <Mail /> Enviar mensagem <Send />
            </Button>
          </div>

          <div>
            <h3>Me encontre nas redes</h3>
            <ul>
              <li>
                <span>
                  <FiGithub />
                </span>
                <div>
                  <h4>GitHub</h4>
                  <a href='https://github.com' target='_blank' rel='noopener noreferrer' aria-label='Abrir GitHub'>
                    yasminalves16
                  </a>
                </div>
              </li>

              <li>
                <span>
                  <FiLinkedin />
                </span>
                <div>
                  <h4>LinkedIn</h4>
                  <a href='https://linkedin.com/in/yasminalves16' target='_blank' rel='noopener noreferrer' aria-label='Abrir LinkedIn'>
                    /in/devyasmin/
                  </a>
                </div>
              </li>

              <li>
                <span>
                  <MdWhatsapp />
                </span>
                <div>
                  <h4>WhatsApp</h4>
                  <a href='https://wa.me/5512983191908' target='_blank' rel='noopener noreferrer' aria-label='Abrir WhatsApp'>
                    (12) 98319-1908
                  </a>
                </div>
              </li>

              <li>
                <span>
                  <Mail />
                </span>
                <div>
                  <h4>Email</h4>
                  <a href='mailto:yasmin_dev@outlook.com' target='_blank' rel='noopener noreferrer' aria-label='Enviar email'>
                    yasmin_dev@outlook.com
                  </a>
                </div>
              </li>
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
