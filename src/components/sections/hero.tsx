'use client';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import { MdOutlineFileDownload, MdWhatsapp } from 'react-icons/md';
import { Container } from '../ui/container';

export function Hero() {
  return (
    <section id='hero' className='relative min-h-[100svh]'>
      <Container>
        <video src='/assets/hero/iayasmin.mp4' aria-hidden='true' autoPlay muted loop playsInline width={500} height={500} />
        <div>
          <h1>
            Yasmin<span>Alves</span>
          </h1>
          <span>&lt; Desenvolvedora Front-End com foco em produto &gt;</span>
          <div>
            <p>Construo interfaces modernas e aplicações web funcionais, conectando tecnologia e necessidades de negócio.</p>
            <p>Experiência com React, JavaScript e TypeScript, atuando desde a estruturação até a entrega de soluções reais.</p>
          </div>
          <div>
            <a href='#projects'>
              Ver Projetos <FiArrowRight />
            </a>
            <a href='/cv.pdf' download>
              Download CV <MdOutlineFileDownload />
            </a>
          </div>
          <div>
            <ul>
              <li>
                <a href='https://github.com' target='_blank' rel='noopener noreferrer' aria-label='Abrir GitHub'>
                  <FiGithub />
                </a>
              </li>
              <li>
                <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' aria-label='Abrir LinkedIn'>
                  <FiLinkedin />
                </a>
              </li>
              <li>
                <a href='https://whatsapp.com' target='_blank' rel='noopener noreferrer' aria-label='Abrir WhatsApp'>
                  <MdWhatsapp />
                </a>
              </li>
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
