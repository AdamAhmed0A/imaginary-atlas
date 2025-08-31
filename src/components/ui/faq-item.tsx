import { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

export const FAQItem = ({ question, answer, index }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);


  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl backdrop-blur-md transition-all duration-500",
        "bg-card/20 border border-border/30 hover:border-primary/50",
        "hover:shadow-glow hover:scale-[1.02] animate-fade-in-up",
        isOpen && "bg-card/40 shadow-neon"
      )}
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
    >
      <button className="absolute inset-0 bg-neon-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-500" onClick={() => setIsOpen(!isOpen)} />

      <div
        
        className="w-full p-6 text-left transition-all duration-300 group-hover:text-foreground"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {question}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <ChevronDown
              className={cn(
                "w-5 h-5 text-muted-foreground transition-all duration-300",
                isOpen && "transform rotate-180 text-primary"
              )}
            />
          </div>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden transition-all duration-500 ease-in-out",
          isOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0 pb-0"
        )}
      >
        <div className="px-6">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-4" />
          <div className="text-muted-foreground leading-relaxed text-sm md:text-base space-y-3">
            {answer.split('\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};