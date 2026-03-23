type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export function Button({ children, className = '', onClick }: ButtonProps) {
  return <button className={`w-full px-2 sm:px-6 lg:px-8 ${className}`} onClick={onClick}>
    {children}
    </button>;
}
