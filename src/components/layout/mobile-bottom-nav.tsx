'use client';

import { useMessages } from '@/src/hooks/use-messages';
import { useActiveSection } from '@/src/hooks/use-active-section';
import { usePortfolioData } from '@/src/hooks/use-portfolio-data';
import { cn } from '@/src/lib/utils';
import { AtSign, Download, FolderKanban, Home, Route } from 'lucide-react';

const navItems = [
  { id: 'hero', href: '#hero', icon: Home, label: 'Início' },
  { id: 'experience', href: '#experience', icon: Route, label: 'Experiência' },
  { id: 'projects', href: '#projects', icon: FolderKanban, label: 'Projetos' },
  { id: 'contact', href: '#contact', icon: AtSign, label: 'Contato' }
] as const;

export function MobileBottomNav() {
  const activeSection = useActiveSection(navItems.map((item) => item.id));
  const { profile } = usePortfolioData();
  const { actions, a11y } = useMessages();
  const cvDocument =
    profile.documents.find((document) => document.id === 'cv-front-end') ?? profile.documents[0];
  const showCvButton = activeSection === 'hero';

  return (
    <div
      className='pointer-events-none fixed inset-x-0 bottom-0 z-50 lg:hidden'
      style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
    >
      <div className='pointer-events-auto mx-auto flex max-w-md flex-col items-center gap-3 bg-gradient-to-t from-background via-background/95 to-transparent px-4 pt-6'>
        {showCvButton && cvDocument && (
          <a
            href={cvDocument.href}
            download={cvDocument.filename}
            aria-label={`${a11y.downloadDocumentPrefix}: ${cvDocument.label}`}
            className='inline-flex items-center gap-2 rounded-xl border border-accent px-6 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent/10'
          >
            <Download size={16} aria-hidden />
            {actions.downloadCv}
          </a>
        )}

        <nav
          className='flex w-full items-center justify-between rounded-full border border-border bg-card/95 px-2 py-2 shadow-lg backdrop-blur-md'
          aria-label='Navegação rápida'
        >
          {navItems.map(({ id, href, icon: Icon, label }) => {
            const isActive = activeSection === id;

            return (
              <a
                key={id}
                href={href}
                aria-label={label}
                aria-current={isActive ? 'page' : undefined}
                title={label}
                className={cn(
                  'flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-accent hover:text-primary'
                )}
              >
                <Icon size={20} aria-hidden />
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
