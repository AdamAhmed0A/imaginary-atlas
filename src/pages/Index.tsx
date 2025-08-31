import { Suspense } from 'react';
import { Scene3D } from '@/components/3d/Scene3D';
import { FAQItem } from '@/components/ui/faq-item';
import { FloatingCard } from '@/components/ui/floating-card';
import { GlowingText } from '@/components/GlowingText';
import { Stars, Zap, Globe, Rocket, Brain, Shield } from 'lucide-react';

const faqData = [
  {
    question: "What is this mysterious platform about?",
    answer: "Welcome to the Nexus of Impossible Questions - a digital realm where curiosity meets cosmic intelligence. We exist at the intersection of reality and imagination, providing answers to questions that haven't been asked yet and solutions to problems that don't exist... until they do."
  },
  {
    question: "How does the quantum FAQ system work?",
    answer: "Our advanced quantum FAQ system utilizes parallel universe browsing to access answers from alternate dimensions. Each question creates a ripple in the space-time continuum, allowing us to harvest knowledge from infinite possibilities. The 3D visualizations you see are actual representations of data flowing through interdimensional channels."
  },
  {
    question: "Can I interact with the floating geometries?",
    answer: "Absolutely! The floating 3D shapes respond to your cosmic energy. Try moving your cursor around the screen - you're actually manipulating dark matter particles that influence the geometric patterns. Each shape represents a different aspect of universal knowledge: spheres for wisdom, cubes for logic, torus for infinite loops of understanding."
  },
  {
    question: "What makes this site different from regular FAQs?",
    answer: "Traditional FAQ sites exist in boring 2D flatlands. We've transcended physical limitations by creating a multidimensional experience. Our answers aren't just text - they're living, breathing entities that adapt to your consciousness level. The purple glow you see? That's concentrated enlightenment."
  },
  {
    question: "Is this technology available in my dimension?",
    answer: "Currently, our technology is beta-testing across 47 parallel universes. If you can see this site, congratulations - your dimension has been selected for the advanced preview. Side effects may include: enhanced creativity, temporary telepathy, and an irresistible urge to build something amazing."
  },
  {
    question: "How do I unlock the hidden features?",
    answer: "Hidden features unlock themselves when you reach the appropriate level of cosmic awareness. Keep exploring, keep questioning, and remember - the real FAQ was the friends we made along the way through the quantum entanglement of curiosity."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      <Suspense fallback={<div className="absolute inset-0 bg-background" />}>
        <Scene3D />
      </Suspense>
      
      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <FloatingCard delay={200} className="inline-block mb-8">
            <div className="flex items-center gap-3 text-primary">
              <Stars className="w-8 h-8" />
              <span className="text-sm font-medium tracking-wider uppercase">Nexus Portal Active</span>
              <Stars className="w-8 h-8" />
            </div>
          </FloatingCard>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <GlowingText>
              Frequently Asked
            </GlowingText>
            <br />
            <GlowingText variant="secondary">
              Impossible Questions
            </GlowingText>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Welcome to the interdimensional FAQ portal where{' '}
            <GlowingText variant="accent">reality bends</GlowingText>{' '}
            to accommodate your curiosity. Prepare for answers that transcend conventional wisdom.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <FloatingCard delay={400}>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quantum Intelligence</h3>
              <p className="text-sm text-muted-foreground">
                Answers powered by artificial consciousness from the year 3047
              </p>
            </div>
          </FloatingCard>
          
          <FloatingCard delay={600}>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-neon-cyan/20 flex items-center justify-center">
                <Globe className="w-6 h-6 text-neon-cyan" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Multidimensional Access</h3>
              <p className="text-sm text-muted-foreground">
                Browse knowledge from infinite parallel universes simultaneously
              </p>
            </div>
          </FloatingCard>
          
          <FloatingCard delay={800}>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-neon-pink/20 flex items-center justify-center">
                <Rocket className="w-6 h-6 text-neon-pink" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Impossible Answers</h3>
              <p className="text-sm text-muted-foreground">
                Solutions to problems that don't exist yet but definitely will
              </p>
            </div>
          </FloatingCard>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <FloatingCard className="inline-block">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-lg font-semibold">Knowledge Database</span>
                <Zap className="w-5 h-5 text-primary" />
              </div>
            </FloatingCard>
          </div>
          
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-20">
          <FloatingCard>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Shield className="w-5 h-5" />
              <span className="text-sm">
                Protected by quantum encryption from the Department of Impossible Things
              </span>
              <Shield className="w-5 h-5" />
            </div>
          </FloatingCard>
        </div>
      </div>
    </div>
  );
};

export default Index;
