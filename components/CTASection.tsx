import React from 'react';
import FadeIn from './FadeIn';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-black to-brand-blue text-center text-white relative overflow-hidden">
       {/* Background noise/grain could go here if needed, keeping it clean for now */}
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
            Pare de Construir Marketing Sem Base
            </h2>
        </FadeIn>
        
        <FadeIn delay={200}>
            <a 
            href="#produtos" 
            className="inline-block bg-brand-cta hover:bg-brand-ctaHover text-white font-bold text-xl px-12 py-6 rounded-lg shadow-2xl transform transition-all hover:scale-105 hover:shadow-glow"
            >
            QUERO COMEÇAR AGORA
            </a>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTASection;