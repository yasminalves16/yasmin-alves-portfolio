'use client';

import { useMessages } from '@/src/hooks/use-messages';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { LanguageSwitcher } from '../ui/language-switcher';
import { ThemeToggle } from '../ui/theme-toggle';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      <ul className='hidden items-center gap-6 lg:flex'>
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

      <div className='ml-auto flex items-center gap-2'>
        <div className='hidden items-center gap-2 lg:flex'>
          <ThemeToggle />
          <LanguageSwitcher />
        </div>

        <button
          type='button'
          onClick={() => setIsMenuOpen((open) => !open)}
          className='p-2 text-primary transition-colors hover:text-primary/80 lg:hidden'
          aria-label={a11y.mainNavigation}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </div>

      {isMenuOpen && (
        <ul className='absolute right-0 top-full z-50 mt-3 flex min-w-48 flex-col gap-1 rounded-xl border border-border bg-card p-3 shadow-lg lg:hidden'>
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
