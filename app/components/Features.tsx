import React from 'react';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      title: "Kaliteli Malzeme",
      description: "Projelerimizde yalnızca en yüksek kalitedeki malzemeleri kullanarak yapıların dayanıklılığını garanti ediyoruz.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Uzman Ekip",
      description: "Deneyimli mühendisler, mimarlar ve kalifiye işçilerden oluşan ekibimiz her projede mükemmelliği hedefler.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Zamanında Teslim",
      description: "Projelerinizi söz verdiğimiz sürede, planlanan bütçe dahilinde tamamlamak bizim önceliğimizdir.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Modern Tasarım",
      description: "Çağdaş mimari trendleri takip ederek estetik ve fonksiyonelliği bir araya getiren projeler sunuyoruz.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Dekoratif elementler */}
      <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500 animate-beam"></div>
      <div className="absolute top-20 right-10 w-32 h-32 border-r-4 border-t-4 border-yellow-500 opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-20 h-20 bg-yellow-500 opacity-10 rotate-45 animate-pulse"></div>

      {/* Gradient bloblar */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-yellow-500/20 to-transparent rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-l from-yellow-500/20 to-transparent rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-yellow-500/10 text-yellow-500 font-bold rounded-full mb-6 animate-fade-in-up border border-yellow-500/30">
            <span className="mr-2">🏆</span>NEDEN BİZ?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up delay-100">
            Üstün <span className="text-yellow-500">Hizmet</span> Kalitemiz
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in-up delay-200">
            25 yıllık uzmanlığımızla inşaat sektöründe fark yaratan çözümler sunuyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-yellow-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/10"
            >
              {/* Icon wrapper */}
              <div className="mb-6 relative">
                <div className="absolute -top-2 -left-2 w-16 h-16 bg-yellow-500/10 rounded-xl transform rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-yellow-500 to-yellow-600 w-14 h-14 rounded-xl flex items-center justify-center text-white">
                  {feature.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-500 transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up delay-300">
          <button className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-600 transition-all duration-300 inline-flex items-center hover:shadow-lg hover:shadow-yellow-500/30">
            <span>Tüm Hizmetlerimizi Keşfedin</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-3 transform group-hover:translate-x-1 transition-transform"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;