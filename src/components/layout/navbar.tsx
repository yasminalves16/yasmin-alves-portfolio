'use client';

import { BREAKPOINTS, useMediaQuery } from '@/src/hooks/use-media-query';
import { useMessages } from '@/src/hooks/use-messages';
import { cn } from '@/src/lib/utils';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { LanguageSwitcher } from '../ui/language-switcher';
import { ThemeToggle } from '../ui/theme-toggle';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery(BREAKPOINTS.xs);
  const { navigation, a11y } = useMessages();

  const navLinks = [
    { href: '#hero', label: navigation.hero },
    { href: '#about', label: navigation.about },
    { href: '#experience', label: navigation.experience },
    { href: '#projects', label: navigation.projects },
    { href: '#education', label: navigation.education },
    { href: '#contact', label: navigation.contact }
  ];

  return (
    <nav className='relative flex items-center gap-2 lg:gap-4' aria-label={a11y.mainNavigation}>
      {!isMobile && (
        <ul className='flex items-center gap-6'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className='text-muted-foreground transition-colors hover:text-foreground'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      <div className={cn('flex items-center gap-2', !isMobile && 'ml-auto')}>
        {!isMobile && (
          <>
            <ThemeToggle />
            <LanguageSwitcher />
          </>
        )}

        {isMobile && (
          <button
            type='button'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='p-2 text-primary transition-colors hover:text-primary/80'
            aria-label={a11y.mainNavigation}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
          </button>
        )}
      </div>

      {isMobile && isMenuOpen && (
        <ul className='absolute right-0 top-full mt-3 flex min-w-48 flex-col gap-1 rounded-xl border border-border bg-card p-3 shadow-lg'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className='block rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className='mt-2 flex items-center gap-2 border-t border-border pt-3'>
            <ThemeToggle />
            <LanguageSwitcher />
          </li>
        </ul>
      )}
    </nav>
  );
}
