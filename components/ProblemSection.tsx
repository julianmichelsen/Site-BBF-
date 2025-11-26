import React from 'react';
import { XCircle } from 'lucide-react';
import FadeIn from './FadeIn';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-6 max-w-4xl">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-danger leading-tight mb-6">
            Você já tentou de tudo mas os resultados não vêm?
          </h2>
        </FadeIn>
        
        <div className="space-y-4 mb-12">
          {[
            "Gasta com anúncios mas não sabe se está funcionando",
            "Posta no Instagram mas não converte em venda",
            "Contratou agência mas não vê resultado claro"
          ].map((problem, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <XCircle className="w-8 h-8 text-brand-danger flex-shrink-0" />
                <p className="text-lg text-gray-700 font-medium">{problem}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={400}>
          <div className="bg-white border-l-8 border-brand-danger p-8 rounded-r-lg shadow-md text-center transform hover:scale-[1.02] transition-transform">
            <p className="text-2xl font-bold text-brand-black">
              "O problema não é o canal. É a falta de <span className="text-brand-danger">FUNDAMENTO</span>."
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ProblemSection;