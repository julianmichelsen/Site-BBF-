import React from 'react';
import { Target, Globe, FileText, Rocket, DollarSign, Handshake, BarChart3 } from 'lucide-react';
import FadeIn from './FadeIn';

interface Pillar {
  number: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
}

const pillars: Pillar[] = [
  { number: 1, title: 'ALICERCE', desc: 'Saber quem você é e pra quem vende.', icon: <Target className="w-12 h-12" />, color: 'text-brand-blue' },
  { number: 2, title: 'PRESENÇA', desc: 'Onde você existe online e como é visto.', icon: <Globe className="w-12 h-12" />, color: 'text-brand-cyan' },
  { number: 3, title: 'CONTEÚDO', desc: 'O que você fala e como você fala.', icon: <FileText className="w-12 h-12" />, color: 'text-brand-green' },
  { number: 4, title: 'ATRAÇÃO', desc: 'Como trazer gente nova para o negócio.', icon: <Rocket className="w-12 h-12" />, color: 'text-brand-purple' },
  { number: 5, title: 'CONVERSÃO', desc: 'Transformar interessados em clientes.', icon: <DollarSign className="w-12 h-12" />, color: 'text-brand-cta' },
  { number: 6, title: 'RELACIONAMENTO', desc: 'Manter o cliente feliz e comprando.', icon: <Handshake className="w-12 h-12" />, color: 'text-brand-blue' },
  { number: 7, title: 'INTELIGÊNCIA', desc: 'Como medir e melhorar constantemente.', icon: <BarChart3 className="w-12 h-12" />, color: 'text-brand-cyan' },
];

const SolutionSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-brand-black mb-4">Apresento o Método BBF</h2>
          <p className="text-xl text-gray-600">Os 7 Pilares que TODA empresa precisa ter funcionando antes de tentar qualquer tática avançada.</p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <FadeIn 
                key={pillar.number} 
                delay={index * 100}
                className={`h-full ${index === 6 ? 'md:col-span-2 lg:col-span-1 xl:col-span-2' : ''}`}
            >
              <div className="h-full p-8 border border-gray-200 rounded-xl hover:shadow-xl transition-all duration-300 bg-white group hover:border-transparent hover:ring-2 hover:ring-gray-100">
                <div className={`mb-6 transform group-hover:scale-110 transition duration-300 ${pillar.color}`}>
                  {pillar.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${pillar.color}`}>
                  {pillar.number}: {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;