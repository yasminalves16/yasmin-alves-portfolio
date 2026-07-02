'use client';

import { useMessages } from '@/src/hooks/use-messages';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from '../ui/language-switcher';
import { ThemeToggle } from '../ui/theme-toggle';

type NavbarProps = {
  isMenuOpen: boolean;
  onCloseMenu: () => void;
};

type MobileToggleProps = {
  isOpen: boolean;
  onToggle: () => void;
};

function MobileToggle({ isOpen, onToggle }: MobileToggleProps) {
  const { a11y } = useMessages();

  return (
    <button
      type='button'
      onClick={onToggle}
      className='p-2 text-primary transition-colors hover:text-primary/80 lg:hidden'
      aria-label={a11y.mainNavigation}
      aria-expanded={isOpen}
    >
      {isOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
    </button>
  );
}

function Navbar({ isMenuOpen, onCloseMenu }: NavbarProps) {
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
    <nav className='relative justify-self-center' aria-label={a11y.mainNavigation}>
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

      {isMenuOpen && (
        <ul className='absolute right-0 top-full z-50 mt-3 flex min-w-48 flex-col gap-1 rounded-xl border border-border bg-card p-3 shadow-lg lg:hidden'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className='block rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'
                onClick={onCloseMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className='mt-2 flex items-center gap-2 border-t border-border pt-3'>
            <LanguageSwitcher />
            <ThemeToggle />
          </li>
        </ul>
      )}
    </nav>
  );
}

Navbar.MobileToggle = MobileToggle;

export { Navbar };
