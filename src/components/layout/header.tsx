'use client';

import { fadeIn, transition } from '@/src/lib/motion';
import { useMessages } from '@/src/hooks/use-messages';
import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { LanguageSwitcher } from '../ui/language-switcher';
import { ThemeToggle } from '../ui/theme-toggle';
import { Navbar } from './navbar';
import { SiteLogo } from './site-logo';

export function Header() {
  const { a11y } = useMessages();
  const prefersReducedMotion = useReducedMotion();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={prefersReducedMotion ? false : 'hidden'}
      animate='visible'
      variants={fadeIn}
      transition={{ ...transition, duration: 0.5 }}
      className='fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md'
    >
      <div className='mx-auto grid w-full max-w-[1400px] grid-cols-[1fr_auto_1fr] items-center px-6 py-3 sm:px-10 lg:px-16 xl:px-20'>
        <a href='#hero' aria-label={a11y.siteLogo} className='justify-self-start'>
          <SiteLogo />
        </a>

        <Navbar isMenuOpen={isMenuOpen} onCloseMenu={() => setIsMenuOpen(false)} />

        <div className='flex items-center justify-end gap-2'>
          <div className='hidden items-center gap-2 lg:flex'>
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          <Navbar.MobileToggle isOpen={isMenuOpen} onToggle={() => setIsMenuOpen((open) => !open)} />
        </div>
      </div>
    </motion.header>
  );
}
