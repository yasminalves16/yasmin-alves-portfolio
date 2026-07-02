'use client';

import { fadeUp, stagger, transition } from '@/src/lib/motion';
import { useMessages } from '@/src/hooks/use-messages';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { buttonClassName } from '../ui/button';
import { Container } from '../ui/container';
import { RichHeading } from '../ui/rich-heading';
import { HeroCodeEditor } from './hero/hero-code-editor';

export function Hero2() {
  const { sections, actions } = useMessages();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id='hero-2' className='relative overflow-hidden'>
      <Container>
        <div className='grid items-center gap-10 lg:grid-cols-2 lg:gap-14'>
          <motion.div
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView='visible'
            viewport={{ once: true, amount: 'some' }}
            variants={fadeUp}
            transition={{ ...transition, delay: 0.1 }}
          >
            <HeroCodeEditor />
          </motion.div>

          <motion.div
            className='space-y-6'
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView='visible'
            viewport={{ once: true, amount: 'some' }}
            variants={stagger}
          >
            <motion.p className='font-mono text-sm text-primary' variants={fadeUp} transition={transition}>
              {sections.hero2.badge}
            </motion.p>

            <motion.div variants={fadeUp} transition={transition}>
              <RichHeading
                as='h2'
                segments={sections.hero2.headline}
                className='text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]'
              />
            </motion.div>

            <motion.p
              className='max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg'
              variants={fadeUp}
              transition={transition}
            >
              {sections.hero2.description}
            </motion.p>

            <motion.ul className='flex flex-wrap gap-2' variants={fadeUp} transition={transition}>
              {sections.hero2.tags.map((tag) => (
                <li
                  key={tag}
                  className='rounded-md border border-border bg-secondary/50 px-2.5 py-1 font-mono text-xs text-muted-foreground'
                >
                  {tag}
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp} transition={transition}>
              <a href='#projects' className={buttonClassName({ className: 'gap-2' })}>
                {actions.viewProjects}
                <FiArrowRight size={16} aria-hidden />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
