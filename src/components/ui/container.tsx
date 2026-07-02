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
        'mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16 xl:px-20',
        asSection && 'py-16 md:py-24',
        className
      )}
    >
      {children}
    </div>
  );
}
