import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-brand-black/95 backdrop-blur-sm shadow-md py-4 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <span className="text-white font-bold text-lg tracking-wider">MÉTODO BBF</span>
        <a
          href="#produtos"
          className="bg-brand-cta hover:bg-brand-ctaHover text-white font-bold text-sm px-6 py-2 rounded-full transition-all shadow-glow transform hover:scale-105"
        >
          QUERO COMEÇAR
        </a>
      </div>
    </nav>
  );
};

export default Header;