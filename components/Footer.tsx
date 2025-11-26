import React from 'react';
import { Instagram, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-black text-white/80 py-16 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
                <span className="text-white font-bold text-xl tracking-wider block mb-4">MÉTODO BBF</span>
                <p className="text-sm text-gray-400 max-w-xs">
                    Dominando o básico do marketing para construir empresas sólidas e lucrativas.
                </p>
            </div>
            
            <div className="flex flex-col gap-2">
                <h4 className="text-white font-bold mb-2">Navegação</h4>
                <a href="#" onClick={scrollToTop} className="text-gray-400 hover:text-brand-cta transition-colors text-sm">Início</a>
                <a href="#produtos" className="text-gray-400 hover:text-brand-cta transition-colors text-sm">Produtos</a>
                <a href="#produtos" className="text-gray-400 hover:text-brand-cta transition-colors text-sm">Checklist</a>
            </div>

             <div className="flex flex-col gap-2">
                <h4 className="text-white font-bold mb-2">Legal</h4>
                <a href="#" className="text-gray-400 hover:text-brand-cta transition-colors text-sm">Termos de Uso</a>
                <a href="#" className="text-gray-400 hover:text-brand-cta transition-colors text-sm">Política de Privacidade</a>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-800">
          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} Centumilia. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-purple transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <button 
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-blue transition-colors duration-300 group"
                aria-label="Voltar ao topo"
            >
                <ArrowUp className="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;