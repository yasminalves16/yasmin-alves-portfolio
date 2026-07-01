'use client';

import { BREAKPOINTS, useMediaQuery } from '@/src/hooks/use-media-query';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { LanguageSwitcher } from '../ui/language-switcher';
import { ThemeToggle } from '../ui/theme-toggle';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery(BREAKPOINTS.xs);

  const navLinks = [
    { href: '#hero', label: 'Início' },
    { href: '#about', label: 'Sobre' },
    { href: '#projects', label: 'Projetos' },
    { href: '#contact', label: 'Contato' }
  ];

  return (
    <nav className='flex items-center justify-between w-full px-4 py-4 gap-4'>
      {/* Desktop: Menu de links */}
      {!isMobile && (
        <ul className='flex items-center gap-6'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className='text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Right side: Theme, Language, Menu */}
      <div className='flex items-center gap-2 ml-auto'>
        <ThemeToggle />
        <LanguageSwitcher />
        <button
          type='button'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors hover:bg-gray-300 dark:hover:bg-gray-700'
          aria-label='Abrir menu'
          aria-expanded={isMenuOpen}
        >
          <Menu size={20} aria-hidden />
        </button>
      </div>

      {/* Mobile: Menu dropdown */}
      {isMobile && isMenuOpen && (
        <ul className='absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 flex flex-col gap-4 p-4'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className='text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors block'
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
