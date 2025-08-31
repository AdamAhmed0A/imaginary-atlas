import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlowingTextProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
}

export const GlowingText = ({ children, className, variant = 'primary' }: GlowingTextProps) => {
  const variants = {
    primary: 'text-primary drop-shadow-[0_0_10px_hsl(var(--primary))]',
    secondary: 'text-neon-cyan drop-shadow-[0_0_10px_hsl(var(--neon-cyan))]',
    accent: 'text-neon-pink drop-shadow-[0_0_10px_hsl(var(--neon-pink))]'
  };

  return (
    <span className={cn(variants[variant], className)}>
      {children}
    </span>
  );
};