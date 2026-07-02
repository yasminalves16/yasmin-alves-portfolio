'use client';

import { useMessages } from '@/src/hooks/use-messages';
import { usePortfolioData } from '@/src/hooks/use-portfolio-data';
import { cn } from '@/src/lib/utils';
import type { HeroDeveloperCode } from '@/src/types/hero';
import { useInView, useReducedMotion } from 'framer-motion';
import { Code2, Eye } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { FiGitBranch } from 'react-icons/fi';

type ViewMode = 'code' | 'preview';

type CodeToken = {
  text: string;
  kind: 'keyword' | 'name' | 'prop' | 'string' | 'default';
};

const tokenClass: Record<CodeToken['kind'], string> = {
  keyword: 'text-primary',
  name: 'font-semibold text-foreground',
  prop: 'text-foreground/90',
  string: 'text-accent',
  default: 'text-foreground/80'
};

function buildCodeTokens(code: HeroDeveloperCode): CodeToken[] {
  const stack = code.fields.stack.map((item) => `"${item}"`).join(', ');

  return [
    { text: 'const ', kind: 'keyword' },
    { text: code.objectName, kind: 'name' },
    { text: `: ${code.typeName} = {`, kind: 'default' },
    { text: '\n', kind: 'default' },
    { text: '  nome: ', kind: 'prop' },
    { text: `"${code.fields.nome}"`, kind: 'string' },
    { text: ',', kind: 'default' },
    { text: '\n', kind: 'default' },
    { text: '  foco: ', kind: 'prop' },
    { text: `"${code.fields.foco}"`, kind: 'string' },
    { text: ',', kind: 'default' },
    { text: '\n', kind: 'default' },
    { text: '  stack: ', kind: 'prop' },
    { text: `[${stack}]`, kind: 'string' },
    { text: ',', kind: 'default' },
    { text: '\n', kind: 'default' },
    { text: '  disponivel: ', kind: 'prop' },
    { text: String(code.fields.disponivel), kind: 'keyword' },
    { text: ',', kind: 'default' },
    { text: '\n', kind: 'default' },
    { text: '}', kind: 'default' }
  ];
}

function renderTypedTokens(tokens: CodeToken[], length: number) {
  let remaining = length;

  return tokens.map((token, index) => {
    if (remaining <= 0) return null;

    const visible = token.text.slice(0, remaining);
    remaining -= visible.length;

    if (!visible) return null;

    return (
      <span key={index} className={tokenClass[token.kind]}>
        {visible}
      </span>
    );
  });
}

function CodeView({
  tokens,
  typedLength,
  showCursor
}: {
  tokens: CodeToken[];
  typedLength: number;
  showCursor: boolean;
}) {
  const visibleText = tokens
    .map((token) => token.text)
    .join('')
    .slice(0, typedLength);
  const lineCount = Math.min(6, Math.max(1, visibleText.split('\n').length));

  return (
    <div className='overflow-x-auto p-4 font-mono text-xs leading-6 sm:text-sm sm:leading-7'>
      <div className='flex gap-3'>
        <div className='flex shrink-0 flex-col select-none text-right text-muted-foreground/50'>
          {Array.from({ length: 6 }, (_, i) => (
            <span key={i + 1} className={cn(i + 1 > lineCount && 'opacity-30')}>
              {i + 1}
            </span>
          ))}
        </div>
        <pre className='flex-1 whitespace-pre-wrap'>
          {renderTypedTokens(tokens, typedLength)}
          {showCursor && <span className='animate-pulse text-primary'>|</span>}
        </pre>
      </div>
    </div>
  );
}

function PreviewView() {
  const { heroContent } = usePortfolioData();
  const { preview } = heroContent;

  return (
    <div className='flex min-h-[240px] flex-col justify-center p-6 sm:min-h-[280px] sm:p-8'>
      <p className='flex items-center gap-2 font-mono text-xs text-muted-foreground'>
        <span className='h-1.5 w-1.5 shrink-0 rounded-full bg-primary' aria-hidden />
        {preview.availabilityLabel}
      </p>
      <h3 className='mt-4 text-2xl font-bold tracking-tight sm:text-3xl'>{preview.name}</h3>
      <p className='mt-1 text-base text-muted-foreground sm:text-lg'>{preview.role}</p>
      <div className='mt-5 flex flex-wrap gap-2'>
        {preview.stack.map((tag) => (
          <span
            key={tag}
            className='rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs text-primary'
          >
            {tag}
          </span>
        ))}
      </div>
      <p className='mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base'>{preview.quote}</p>
    </div>
  );
}

const TYPING_SPEED_MS = 32;
const PREVIEW_DELAY_MS = 700;

export function HeroCodeEditor() {
  const { heroContent } = usePortfolioData();
  const { actions } = useMessages();
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.35 });
  const introStarted = useRef(false);

  const tokens = useMemo(() => buildCodeTokens(heroContent.code), [heroContent.code]);
  const fullLength = useMemo(() => tokens.reduce((sum, token) => sum + token.text.length, 0), [tokens]);

  const [view, setView] = useState<ViewMode>('code');
  const [typedLength, setTypedLength] = useState(0);
  const [introDone, setIntroDone] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!isInView || introStarted.current) return;
    introStarted.current = true;

    if (prefersReducedMotion) {
      setTypedLength(fullLength);
      setView('preview');
      setIntroDone(true);
      return;
    }

    setView('code');
    setIsTyping(true);
    let index = 0;

    const timer = window.setInterval(() => {
      index += 1;
      setTypedLength(index);

      if (index >= fullLength) {
        window.clearInterval(timer);
        setIsTyping(false);
        window.setTimeout(() => {
          setView('preview');
          setIntroDone(true);
        }, PREVIEW_DELAY_MS);
      }
    }, TYPING_SPEED_MS);

    return () => window.clearInterval(timer);
  }, [isInView, prefersReducedMotion, fullLength]);

  const handleSelectCode = () => {
    setView('code');
    setTypedLength(fullLength);
    setIsTyping(false);
  };

  const displayLength = view === 'code' && introDone ? fullLength : typedLength;

  return (
    <div
      ref={containerRef}
      className='overflow-hidden rounded-lg border border-border bg-card shadow-[0_24px_80px_-32px_rgba(0,0,0,0.45)]'
    >
      <div className='flex items-center gap-3 border-b border-border px-4 py-3'>
        <div className='flex items-center gap-1.5' aria-hidden>
          <span className='h-2.5 w-2.5 rounded-full bg-primary/80' />
          <span className='h-2.5 w-2.5 rounded-full bg-primary/50' />
          <span className='h-2.5 w-2.5 rounded-full bg-primary/30' />
        </div>
        <p className='flex-1 text-center font-mono text-xs text-muted-foreground'>{heroContent.code.fileName}</p>
        <div className='flex rounded-full border border-border p-0.5 font-mono text-[10px] sm:text-xs'>
          <button
            type='button'
            onClick={handleSelectCode}
            className={cn(
              'inline-flex items-center gap-1 rounded-full px-2.5 py-1 transition-colors',
              view === 'code' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <Code2 size={12} aria-hidden />
            {actions.heroCode}
          </button>
          <button
            type='button'
            onClick={() => setView('preview')}
            className={cn(
              'inline-flex items-center gap-1 rounded-full px-2.5 py-1 transition-colors',
              view === 'preview'
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <Eye size={12} aria-hidden />
            {actions.heroPreview}
          </button>
        </div>
      </div>

      {view === 'code' ? (
        <CodeView tokens={tokens} typedLength={displayLength} showCursor={isTyping} />
      ) : (
        <PreviewView />
      )}

      <div className='flex items-center gap-4 border-t border-border px-4 py-2 font-mono text-[10px] sm:text-xs'>
        <span className='inline-flex items-center gap-1 text-primary'>
          <FiGitBranch size={12} aria-hidden />
          main
        </span>
        <span className='text-muted-foreground'>TypeScript</span>
        <span className='text-muted-foreground'>UTF-8</span>
        <span className='ml-auto text-muted-foreground'>Ln 6, Col 1</span>
      </div>
    </div>
  );
}
