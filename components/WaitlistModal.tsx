import React, { useEffect } from 'react';
import { X, Rocket } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  productName: string;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, productName, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-[fadeInUp_0.3s_ease-out]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition p-1 hover:bg-gray-100 rounded-full"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="bg-brand-light p-6 text-center border-b border-gray-200">
          <div className="flex justify-center mb-2">
            <Rocket className="w-10 h-10 text-brand-blue" />
          </div>
          <h3 className="text-2xl font-bold text-brand-black">Entre na Lista VIP</h3>
          <p className="text-gray-600 text-sm mt-1">Seja o primeiro a saber quando abrir!</p>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-sm text-gray-600 mb-4 bg-blue-50 p-3 rounded-lg border border-blue-100">
            Você tem interesse em: <strong>{productName}</strong>. <br/>
            Deixe seu contato para receber uma oferta exclusiva.
          </p>

          <form name="lista-espera-bbf" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="lista-espera-bbf" />
            <input type="hidden" name="produto-interesse" value={productName} />

            <div className="mb-4">
              <label htmlFor="nome" className="block text-sm font-bold text-gray-700 mb-1">Seu Nome</label>
              <input 
                type="text" 
                id="nome"
                name="nome" 
                required 
                placeholder="Digite seu nome" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition bg-gray-50 focus:bg-white"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="whatsapp" className="block text-sm font-bold text-gray-700 mb-1">Seu WhatsApp</label>
              <input 
                type="tel" 
                id="whatsapp"
                name="whatsapp" 
                required 
                placeholder="(00) 00000-0000" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition bg-gray-50 focus:bg-white"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-brand-blue hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg transition transform hover:scale-[1.02] active:scale-95"
            >
              QUERO SER AVISADO
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WaitlistModal;