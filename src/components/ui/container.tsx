import { cn } from '@/src/lib/utils';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  asSection?: boolean;
};

export function Container({ children, className = '', asSection = true }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8',
        asSection && 'py-16 md:py-24',
        className
      )}
    >
      {children}
    </div>
  );
}
