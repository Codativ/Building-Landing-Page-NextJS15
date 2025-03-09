'use client';
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll efekti için event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-yellow-600 shadow-lg py-2' : 'bg-black/80 py-4'
    }`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo alanı */}
        <div className="flex items-center">
          <div className={`mr-2 transition-all duration-300 ${scrolled ? 'text-black' : 'text-yellow-500'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div className={`text-2xl font-bold transition-all duration-300 ${
            scrolled ? 'text-white' : 'text-yellow-500'
          }`}>
            İNŞAAT A.Ş.
          </div>
        </div>

        {/* Masaüstü menü */}
        <div className="hidden lg:flex space-x-8">
          {['Projelerimiz', 'Hizmetlerimiz', 'Referanslar', 'Ekibimiz', 'İletişim'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-medium relative overflow-hidden group transition-all duration-300 ${
                scrolled ? 'text-white hover:text-black' : 'text-gray-200 hover:text-yellow-500'
              }`}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CTA Butonu */}
        <button className={`hidden md:block px-6 py-2 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 ${
          scrolled
            ? 'bg-black text-yellow-500 hover:bg-gray-800'
            : 'bg-yellow-500 text-black hover:bg-yellow-600'
        }`}>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
            Teklif Al
          </div>
        </button>

        {/* Mobil menü açma butonu */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-md ${
              scrolled ? 'text-white hover:bg-black/20' : 'text-yellow-500 hover:bg-white/10'
            }`}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobil menü */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden transition-all duration-500 ease-in-out`}>
        <div className={`px-4 py-2 space-y-3 ${scrolled ? 'bg-yellow-600' : 'bg-black/90'}`}>
          {['Projelerimiz', 'Hizmetlerimiz', 'Referanslar', 'Ekibimiz', 'İletişim'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`block font-medium py-2 border-b border-gray-700 ${
                scrolled ? 'text-white hover:text-black' : 'text-gray-200 hover:text-yellow-500'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className={`w-full mt-4 px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
            scrolled
              ? 'bg-black text-yellow-500 hover:bg-gray-800'
              : 'bg-yellow-500 text-black hover:bg-yellow-600'
          }`}>
            <div className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              Teklif Al
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;