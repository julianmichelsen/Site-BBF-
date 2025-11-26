import React from 'react';
import { Product } from '../types';
import { Check, Diamond, GraduationCap, Users, Rocket } from 'lucide-react';
import FadeIn from './FadeIn';

interface ProductsSectionProps {
  onOpenWaitlist: (productName: string) => void;
}

const products: Product[] = [
  {
    id: 'checklist',
    title: 'CHECKLIST BBF',
    icon: 'diamond',
    priceDisplay: 'R$ 47',
    originalPrice: 'R$ 97',
    features: ['170 pontos de verificação', 'Planilha de diagnóstico', 'Acesso Imediato'],
    isAvailable: true,
    ctaText: 'QUERO O CHECKLIST',
    themeColor: 'cta',
  },
  {
    id: 'curso',
    title: 'CURSO COMPLETO',
    icon: 'course',
    priceDisplay: 'R$ 497',
    isAvailable: false,
    ctaText: 'AVISE-ME QUANDO ABRIR',
    themeColor: 'purple',
  },
  {
    id: 'mentoria',
    title: 'MENTORIA BBF',
    icon: 'mentorship',
    priceDisplay: 'R$ 2.997',
    isAvailable: false,
    ctaText: 'AVISE-ME QUANDO ABRIR',
    themeColor: 'blue',
  },
  {
    id: 'done-for-you',
    title: 'FEITO PRA VOCÊ',
    icon: 'rocket',
    priceDisplay: 'A partir de R$ 5k',
    isAvailable: false,
    ctaText: 'AVISE-ME QUANDO ABRIR',
    themeColor: 'black',
  },
];

const getIcon = (iconName: string, className: string) => {
    switch(iconName) {
        case 'diamond': return <Diamond className={className} />;
        case 'course': return <GraduationCap className={className} />;
        case 'mentorship': return <Users className={className} />;
        case 'rocket': return <Rocket className={className} />;
        default: return <Diamond className={className} />;
    }
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ onOpenWaitlist }) => {
  return (
    <section id="produtos" className="py-20 bg-gradient-to-br from-brand-blue to-brand-purple relative overflow-hidden">
      {/* Abstract background blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full blur-[100px] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Escolha o Melhor Caminho</h2>
          <p className="text-white/80 max-w-2xl mx-auto">Comece pelo básico ou prepare-se para as próximas turmas avançadas.</p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {products.map((product, index) => (
            <FadeIn key={product.id} delay={index * 100} className="h-full">
              <div 
                className={`
                  relative rounded-2xl p-8 shadow-xl transition-all duration-300 flex flex-col justify-between h-full
                  ${product.isAvailable 
                    ? 'bg-white transform hover:-translate-y-2 hover:shadow-glow border-4 border-brand-cta z-20 scale-105 md:scale-100 xl:scale-110' 
                    : 'bg-white/95 grayscale hover:grayscale-0 opacity-90 hover:opacity-100 hover:-translate-y-1 z-10 border border-transparent hover:border-gray-200'
                  }
                `}
              >
                {/* Badge */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
                  {product.isAvailable ? (
                     <span className="bg-gradient-to-r from-brand-cta to-yellow-400 text-white px-6 py-2 rounded-full text-xs font-bold shadow-lg uppercase tracking-wider inline-block">
                        🔥 Mais Vendido
                     </span>
                  ) : (
                    <span className="bg-gray-800 text-white px-4 py-1 rounded-full text-xs font-bold shadow-md">
                        EM BREVE
                    </span>
                  )}
                </div>

                <div className="mt-4">
                  <div className={`text-center mb-4 flex justify-center ${
                      product.themeColor === 'cta' ? 'text-brand-cta' : 
                      product.themeColor === 'purple' ? 'text-brand-purple' :
                      product.themeColor === 'blue' ? 'text-brand-blue' : 'text-brand-black'
                  }`}>
                    {getIcon(product.icon, "w-16 h-16")}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-center text-brand-black mb-2">{product.title}</h3>
                  
                  <div className="text-center mb-6">
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through text-lg block">{product.originalPrice}</span>
                    )}
                    <div className={`text-3xl font-bold ${
                        product.isAvailable ? 'text-brand-cta text-4xl' : 'text-gray-800'
                    }`}>
                      {product.priceDisplay}
                    </div>
                  </div>

                  {product.features && (
                    <ul className="space-y-3 mb-8">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className={`w-5 h-5 flex-shrink-0 ${product.isAvailable ? 'text-brand-success' : 'text-gray-400'}`} />
                          <span className="text-gray-700 text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-auto">
                    {product.isAvailable ? (
                        <a 
                            href="#" 
                            className="block w-full bg-brand-cta hover:bg-brand-ctaHover text-white font-bold text-center py-4 rounded-lg shadow-lg transition duration-200 transform active:scale-95 text-lg"
                        >
                            {product.ctaText}
                        </a>
                    ) : (
                        <button 
                            onClick={() => onOpenWaitlist(product.title)}
                            className={`
                                block w-full border-2 font-bold py-3 rounded-lg text-sm transition transform active:scale-95
                                ${product.themeColor === 'purple' ? 'border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white' : ''}
                                ${product.themeColor === 'blue' ? 'border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white' : ''}
                                ${product.themeColor === 'black' ? 'border-brand-black text-brand-black hover:bg-brand-black hover:text-white' : ''}
                            `}
                        >
                            {product.ctaText}
                        </button>
                    )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;