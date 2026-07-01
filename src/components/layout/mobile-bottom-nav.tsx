'use client';

import { useMessages } from '@/src/hooks/use-messages';
import { useActiveSection } from '@/src/hooks/use-active-section';
import { usePortfolioData } from '@/src/hooks/use-portfolio-data';
import { cn } from '@/src/lib/utils';
import { Download, FolderKanban, GraduationCap, Home, PanelBottom, Route } from 'lucide-react';

const navItems = [
  { id: 'hero', href: '#hero', icon: Home, labelKey: 'hero' as const },
  { id: 'experience', href: '#experience', icon: Route, labelKey: 'experience' as const },
  { id: 'projects', href: '#projects', icon: FolderKanban, labelKey: 'projects' as const },
  { id: 'education', href: '#education', icon: GraduationCap, labelKey: 'education' as const },
  { id: 'footer', href: '#footer', icon: PanelBottom, labelKey: 'footer' as const }
] as const;

export function MobileBottomNav() {
  const activeSection = useActiveSection(navItems.map((item) => item.id));
  const { profile } = usePortfolioData();
  const { navigation, actions, a11y } = useMessages();
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
          className='flex w-full items-center justify-between gap-1 rounded-full border border-border bg-card/95 px-1.5 py-1.5 shadow-lg backdrop-blur-md'
          aria-label='Navegação rápida'
        >
          {navItems.map(({ id, href, icon: Icon, labelKey }) => {
            const isActive = activeSection === id;
            const label = navigation[labelKey];

            return (
              <a
                key={id}
                href={href}
                aria-label={label}
                aria-current={isActive ? 'page' : undefined}
                title={label}
                className={cn(
                  'flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors sm:h-11 sm:w-11',
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
