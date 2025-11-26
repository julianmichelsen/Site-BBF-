import React from 'react';
import FadeIn from './FadeIn';

const AuthoritySection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-brand-light to-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <FadeIn className="w-full md:w-1/3">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full shadow-2xl border-4 border-white overflow-hidden">
              <img 
                src="https://i.ibb.co/4v3JhMf/2048px-centum-376.jpg" 
                alt="Julian Michelsen" 
                className="object-cover w-full h-full object-top transform hover:scale-105 transition-transform duration-700" 
                loading="lazy"
              />
            </div>
          </FadeIn>
          
          <FadeIn delay={200} className="w-full md:w-2/3">
            <h2 className="text-4xl font-bold text-brand-black mb-6">Olá, sou Julian Michelsen</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>Fundador da Centumilia e criador do Método BBF.</p>
              <p>Depois de ajudar centenas de empresas, percebi uma verdade:</p>
              <div className="font-bold text-brand-black text-xl border-l-4 border-brand-purple pl-6 py-2 bg-brand-purple/5 rounded-r-lg">
                <p className="italic">Todos pregam o mesmo: domine o BÁSICO antes do avançado.</p>
              </div>
              <p>Por isso criei o <strong>Método BBF.</strong></p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;