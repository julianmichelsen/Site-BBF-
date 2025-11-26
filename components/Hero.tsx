import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import FadeIn from './FadeIn';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-blue to-brand-purple text-white min-h-[90vh] flex items-center pt-24 pb-20 md:pt-0 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-purple opacity-20 blur-[100px] rounded-full transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="absolute top-6 left-6 md:top-10 md:left-10 z-20">
        <span className="text-white font-bold text-xl tracking-wider opacity-90">CENTUMILIA</span>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="max-w-2xl">
          <FadeIn>
            <div className="inline-block bg-white/10 rounded-full px-4 py-1 mb-6 border border-white/20 backdrop-blur-sm">
              <span className="text-brand-cyan font-bold text-sm tracking-wide">MÉTODO BBF</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              90% das empresas falham no marketing por não dominarem o <span className="text-brand-green">BÁSICO.</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={200}>
            <p className="text-lg md:text-xl lg:text-2xl font-medium text-white/90 mb-10 leading-relaxed">
              O Sistema Completo em 7 Pilares para Você Parar de Jogar Dinheiro Fora e Construir Marketing que Funciona.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="#produtos"
                className="group bg-brand-cta hover:bg-brand-ctaHover text-white font-bold text-lg px-10 py-5 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-glow border-b-4 border-yellow-700 active:border-b-0 active:translate-y-1 flex items-center gap-2"
              >
                QUERO ESTRUTURAR MEU MARKETING
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </FadeIn>
          
          <FadeIn delay={400}>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/80 font-medium">
              <span className="flex items-center gap-1"><Check className="text-brand-green w-4 h-4" /> Sem enrolação</span>
              <span className="flex items-center gap-1"><Check className="text-brand-green w-4 h-4" /> Linguagem simples</span>
              <span className="flex items-center gap-1"><Check className="text-brand-green w-4 h-4" /> Aplicável hoje mesmo</span>
            </div>
          </FadeIn>
        </div>

        <div className="hidden md:flex justify-center relative">
          <FadeIn delay={500} direction="left" className="w-full max-w-md">
            <div className="relative aspect-[4/5] bg-gradient-to-b from-white/10 to-transparent rounded-2xl overflow-hidden border border-white/20 shadow-2xl animate-float">
              <img
                src="https://i.ibb.co/chptCd9z/2048px-centum-177.jpg"
                alt="Julian Michelsen"
                className="object-cover object-top w-full h-full mix-blend-normal"
                loading="eager"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;