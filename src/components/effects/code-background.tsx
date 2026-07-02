'use client';

import { usePortfolioData } from '@/src/hooks/use-portfolio-data';
import type { Profile } from '@/src/types/profile';
import { useReducedMotion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

const COLUMN_CONFIG = [
  { left: '5%', top: '10%', delay: 0 },
  { left: '82%', top: '18%', delay: 900 },
  { left: '10%', top: '68%', delay: 1800 },
  { left: '78%', top: '75%', delay: 600 },
  { left: '48%', top: '88%', delay: 1200 }
];

function buildPersonalSnippets(profile: Profile) {
  const stack = profile.stacks.map((item) => `"${item}"`).join(', ');
  const [firstName] = profile.name.split(' ');

  return [
    `const nome = "${profile.name}";`,
    `const idade = ${profile.age};`,
    `const stack = [${stack}];`,
    `const foco = "Front-end";`,
    `const ${firstName.toLowerCase()} = { disponivel: true };`
  ];
}

const TYPING_SPEED_MS = 58;
const HOLD_AFTER_TYPING_MS = 1200;
const RESTART_PAUSE_MS = 250;

function useTypingText(text: string, active: boolean, speed = TYPING_SPEED_MS) {
  const [length, setLength] = useState(0);

  useEffect(() => {
    if (!active) {
      setLength(0);
      return;
    }

    setLength(0);
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setLength(index);
      if (index >= text.length) {
        window.clearInterval(timer);
      }
    }, speed);

    return () => window.clearInterval(timer);
  }, [text, active, speed]);

  return text.slice(0, length);
}

function CodeColumn({
  snippet,
  left,
  top,
  delay,
  active
}: {
  snippet: string;
  left: string;
  top: string;
  delay: number;
  active: boolean;
}) {
  const [started, setStarted] = useState(false);
  const typed = useTypingText(snippet, started && active);

  useEffect(() => {
    const timer = window.setTimeout(() => setStarted(true), delay);
    return () => window.clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started || !active) return;

    const typingDuration = snippet.length * TYPING_SPEED_MS;
    const cycleDuration = typingDuration + HOLD_AFTER_TYPING_MS + RESTART_PAUSE_MS;

    const resetTimer = window.setInterval(() => {
      setStarted(false);
      window.setTimeout(() => setStarted(true), RESTART_PAUSE_MS);
    }, cycleDuration);

    return () => window.clearInterval(resetTimer);
  }, [started, active, snippet.length]);

  return (
    <div
      className='absolute max-w-[200px] font-mono text-[9px] leading-relaxed whitespace-pre text-muted-foreground/18 sm:max-w-[220px] sm:text-[10px]'
      style={{ left, top }}
      aria-hidden
    >
      {typed}
      <span className='animate-pulse text-primary/30'>|</span>
    </div>
  );
}

export function CodeBackground() {
  const { profile } = usePortfolioData();
  const prefersReducedMotion = useReducedMotion();

  const snippets = useMemo(() => buildPersonalSnippets(profile), [profile]);
  const columns = useMemo(
    () => COLUMN_CONFIG.map((config, index) => ({ ...config, snippet: snippets[index % snippets.length] })),
    [snippets]
  );

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div className='pointer-events-none fixed inset-0 z-0 overflow-hidden' aria-hidden>
      <div
        className='absolute inset-0'
        style={{
          maskImage: 'radial-gradient(ellipse 64% 54% at 50% 42%, transparent 24%, black 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 64% 54% at 50% 42%, transparent 24%, black 80%)'
        }}
      >
        {columns.map((column, index) => (
          <CodeColumn key={index} {...column} active />
        ))}
      </div>
    </div>
  );
}
