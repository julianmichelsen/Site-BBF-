import React from 'react';
import { Target, Briefcase, Star } from 'lucide-react';
import FadeIn from './FadeIn';

const SocialProof: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 gap-8">
          <FadeIn className="text-center py-4">
            <div className="flex justify-center mb-2">
                <Target className="w-10 h-10 text-brand-blue" />
            </div>
            <div className="text-3xl font-bold text-brand-blue mb-1">170+</div>
            <p className="text-gray-600 font-medium">Pontos de Verificação</p>
          </FadeIn>

          <FadeIn delay={100} className="text-center py-4">
             <div className="flex justify-center mb-2">
                <Briefcase className="w-10 h-10 text-brand-purple" />
            </div>
            <div className="text-3xl font-bold text-brand-purple mb-1">500+</div>
            <p className="text-gray-600 font-medium">Empresas Implementaram</p>
          </FadeIn>

          <FadeIn delay={200} className="text-center py-4">
             <div className="flex justify-center mb-2">
                <Star className="w-10 h-10 text-brand-green fill-brand-green" />
            </div>
            <div className="text-3xl font-bold text-brand-green mb-1">4.9</div>
            <p className="text-gray-600 font-medium">Avaliação Média</p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;