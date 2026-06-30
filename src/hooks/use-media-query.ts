'use client';

import { useLayoutEffect, useState } from 'react';

/**
 * Hook para detectar breakpoints de responsividade
 * Usa media queries do Tailwind
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia(query);

    // Sincronizar estado inicial
    setMatches(mediaQuery.matches);
    setMounted(true);

    // Listener para mudanças
    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Adicionar listener (sintaxe moderna)
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }

    // Fallback para browsers antigos
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }, [query]);

  // Retornar false durante SSR/hydration para evitar mismatches
  return mounted ? matches : false;
}

/**
 * Breakpoints do Tailwind CSS
 */
export const BREAKPOINTS = {
  xs: '(max-width: 639px)',
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)'
} as const;

/**
 * Helpers para breakpoints comuns
 */
export const useIsMobile = () => useMediaQuery(BREAKPOINTS.xs);
export const useIsTablet = () => useMediaQuery(BREAKPOINTS.md);
export const useIsDesktop = () => useMediaQuery(BREAKPOINTS.lg);
