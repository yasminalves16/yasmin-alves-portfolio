import { cn } from '@/src/lib/utils';
import type { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'default' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'default' | 'sm' | 'icon';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantClasses: Record<ButtonVariant, string> = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-muted',
  outline: 'border border-primary text-primary hover:bg-primary/10',
  ghost: 'text-foreground hover:bg-muted'
};

const sizeClasses: Record<ButtonSize, string> = {
  default: 'px-4 py-2 text-sm',
  sm: 'px-3 py-1.5 text-xs',
  icon: 'p-2'
};

export function buttonClassName({
  variant = 'default',
  size = 'default',
  className = ''
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
    variantClasses[variant],
    sizeClasses[size],
    className
  );
}

export function Button({
  children,
  className = '',
  variant = 'default',
  size = 'default',
  ...props
}: ButtonProps) {
  return (
    <button className={buttonClassName({ variant, size, className })} {...props}>
      {children}
    </button>
  );
}
