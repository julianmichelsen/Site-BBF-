import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import FadeIn from './FadeIn';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "O Método BBF serve para quem está começando do zero?",
    answer: "Sim! O Método foi desenhado justamente para criar o alicerce. Se você está começando, é a melhor oportunidade para começar do jeito certo, economizando tempo e dinheiro que seriam gastos em tentativas erradas."
  },
  {
    question: "Já tenho uma agência/equipe, o material serve para mim?",
    answer: "Com certeza. O BBF vai te dar o critério necessário para cobrar e direcionar sua agência ou equipe. A maioria dos empresários fica refém dos prestadores de serviço por não entender os fundamentos. O BBF resolve isso."
  },
  {
    question: "Como recebo acesso ao Checklist BBF?",
    answer: "O acesso é 100% online e imediato. Assim que o pagamento for aprovado, você receberá um e-mail com o link para baixar o material e assistir às aulas explicativas."
  },
  {
    question: "Tenho garantia?",
    answer: "Sim. Oferecemos uma garantia incondicional de 7 dias. Se você achar que o conteúdo não agregou valor ao seu negócio, devolvemos 100% do seu investimento sem perguntas."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-3xl">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Perguntas Frequentes</h2>
          <p className="text-gray-600">Tire suas dúvidas e decida com segurança.</p>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div 
                className={`border rounded-xl transition-all duration-300 ${
                  openIndex === index ? 'border-brand-blue bg-blue-50/50 shadow-md' : 'border-gray-200 hover:border-brand-blue/50 bg-white'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <span className={`font-bold text-lg ${openIndex === index ? 'text-brand-blue' : 'text-gray-800'}`}>
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-full transition-colors ${openIndex === index ? 'bg-brand-blue text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-transparent">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;