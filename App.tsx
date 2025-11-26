import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import AuthoritySection from './components/AuthoritySection';
import ProductsSection from './components/ProductsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';
import WhatsAppFloat from './components/WhatsAppFloat';
import CTASection from './components/CTASection';
import { ModalState } from './types';

const App: React.FC = () => {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    productName: '',
  });

  const openModal = (productName: string) => {
    setModalState({ isOpen: true, productName });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <SocialProof />
        <ProblemSection />
        <SolutionSection />
        <AuthoritySection />
        <ProductsSection onOpenWaitlist={openModal} />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
      <WhatsAppFloat />
      
      <WaitlistModal 
        isOpen={modalState.isOpen} 
        productName={modalState.productName} 
        onClose={closeModal} 
      />
    </div>
  );
};

export default App;