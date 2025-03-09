import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Arkaplan görseli */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity-90 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center mix-blend-overlay"></div>
      </div>

      {/* Decorative elements - inşaat simgeleri */}
      <div className="absolute top-10 right-10 w-24 h-24 border-4 border-yellow-500 opacity-30 rotate-12"></div>
      <div className="absolute bottom-10 left-20 w-32 h-16 border-b-4 border-r-4 border-yellow-500 opacity-30"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 text-center md:text-left text-white">
          <div className="inline-block px-4 py-1 bg-yellow-500 text-black font-bold rounded mb-4">
            GÜVEN • KALİTE • TECRÜBE
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-yellow-500">Güvenilir</span> İnşaat <br />
            <span className="text-yellow-500">Sağlam</span> Gelecek
          </h1>

          <p className="text-xl mb-8 text-gray-300 max-w-xl">
            25 yıllık tecrübemizle, hayalinizdeki yapıları en yüksek kalite standartlarında hayata geçiriyoruz. Modern mimari ve güvenli altyapı bizim önceliğimizdir.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-yellow-500 text-black px-8 py-4 rounded font-bold hover:bg-yellow-600 transition-colors flex items-center justify-center">
              <span>Projelerimiz</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="bg-transparent border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded font-bold hover:bg-yellow-500 hover:text-black transition-colors">
              Teklif Alın
            </button>
          </div>

          <div className="mt-10 flex space-x-8 justify-center md:justify-start">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-3xl font-bold text-yellow-500">250+</span>
              <span className="text-gray-400">Tamamlanan Proje</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <span className="text-3xl font-bold text-yellow-500">25</span>
              <span className="text-gray-400">Yıllık Tecrübe</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <span className="text-3xl font-bold text-yellow-500">100%</span>
              <span className="text-gray-400">Müşteri Memnuniyeti</span>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0 relative">
          <div className="w-full h-22 md:h-96 relative overflow-hidden rounded-lg border-4 border-yellow-500 shadow-2xl transform md:rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="h-full bg-[url('https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')] bg-cover bg-center"></div>
          </div>

          <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-yellow-500 rounded-lg hidden md:flex items-center justify-center transform rotate-12 shadow-lg">
            <div className="transform -rotate-12">
              <div className="font-bold text-2xl text-black text-center">YENİ</div>
              <div className="text-xs text-black text-center">PROJEMİZ</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animate scroll down indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center">
        <span className="text-sm mb-2">Aşağı Kaydır</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;