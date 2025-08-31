import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const FloatingCard = ({ children, className, delay = 0 }: FloatingCardProps) => {
  return (
    <div 
      className={cn(
        "relative group backdrop-blur-md animate-fade-in-up",
        "bg-card/10 border border-border/20 rounded-3xl p-6",
        "hover:bg-card/20 hover:border-primary/30 hover:shadow-glow",
        "transition-all duration-500 ease-out",
        className
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}
    >
      <div className="absolute inset-0 bg-neon-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};