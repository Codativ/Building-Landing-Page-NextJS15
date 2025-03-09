'use client';
import React, { useEffect, useRef, useState } from 'react';

interface Testimonial {
  name: string;
  position: string;
  content: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Ahmet Yılmaz",
      position: "Site Müdürü, XYZ İnşaat",
      content: "Bu inşaat firması ile çalışmak çok verimli oldu. Projemiz zamanında ve bütçe dahilinde tamamlandı.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Ayşe Demir",
      position: "Proje Müdürü, ABC Gayrimenkul",
      content: "Profesyonel ekibi ve kaliteli işçiliği ile çok memnun kaldık. Gelecek projelerimizde de birlikte çalışmak istiyoruz.",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Mehmet Kaya",
      position: "Müteahhit, 123 Yapı",
      content: "İnşaat sürecinde karşılaştığımız tüm zorluklara hızlı çözümler buldular. Yüksek kalite standartlarını korudular.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Zeynep Şahin",
      position: "Mimar, Modern Mimarlık",
      content: "Tasarımlarımızı hayata geçirmedeki titizlikleri ve detaylara verdikleri önem takdire şayan.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Osman Koç",
      position: "İnşaat Mühendisi, Güvenli Yapı",
      content: "Teknik standartlara tam uyum ve mühendislik açısından mükemmel bir iş çıkardılar.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-scrolling animation
  useEffect(() => {
    if (!scrollContainerRef.current || isPaused) return;

    const scrollContainer = scrollContainerRef.current;
    const cardWidth = 320 + 24; // card width (w-80 = 320px) + margin (space-x-6 = 24px)

    const interval = setInterval(() => {
      // Calculate next index
      const nextIndex = (currentIndex + 1) % testimonials.length;

      // Set animating state
      setIsAnimating(true);

      // Smooth scroll to the next testimonial
      scrollContainer.scrollTo({
        left: nextIndex * cardWidth,
        behavior: 'smooth'
      });

      setCurrentIndex(nextIndex);

      // Clear animating state after animation
      setTimeout(() => {
        setIsAnimating(false);
      }, 750); // Match with the smooth scroll duration
    }, 4000); // Scroll every 4 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, testimonials.length]);

  // Handle manual scrolling
  const handleScroll = () => {
    if (!scrollContainerRef.current || isAnimating) return;

    const scrollContainer = scrollContainerRef.current;
    const cardWidth = 320 + 24;

    // Calculate current index based on scroll position
    const index = Math.round(scrollContainer.scrollLeft / cardWidth);

    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  // Pause auto-scrolling when user interacts
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => {
    // Add a short delay before resuming to allow for tap interaction
    setTimeout(() => setIsPaused(false), 1000);
  };

  // Custom scroll function with smooth animation
  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current) return;

    setIsAnimating(true);
    const cardWidth = 320 + 24;

    scrollContainerRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });

    setCurrentIndex(index);

    // Clear animating state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 750);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-900 relative">
      {/* Dekoratif elemanlar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500"></div>
      <div className="absolute top-20 right-10 w-32 h-32 border-r-4 border-t-4 border-yellow-500 opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-20 h-20 bg-yellow-500 opacity-10 rotate-45"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-yellow-500 text-black font-bold rounded-full mb-4">
            MÜŞTERİ YORUMLARI
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Müşterilerimiz Ne Diyor?</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
        </div>

        <div className="relative">
          {/* Kaydırma göstergesi ve otomatik animasyon bilgisi */}
          <div className="text-center text-gray-400 mb-4">
            <span>← Kaydırarak veya otomatik animasyonla referansları görün →</span>
          </div>

          {/* Kaydırılabilir alan */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-6 snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#F59E0B #4B5563',
              msOverflowStyle: 'auto',
              scrollBehavior: 'smooth'
            }}
            onScroll={handleScroll}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex space-x-6 px-2">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 rounded-lg border-b-4 p-6 w-80 snap-center transition-all duration-500
                    ${index === currentIndex
                      ? 'bg-gray-700 border-yellow-400 shadow-lg shadow-yellow-500/20 scale-105'
                      : 'bg-gray-800 border-yellow-500 hover:-translate-y-2'}`}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className={`w-16 h-16 rounded-full mr-4 object-cover border-2
                        ${index === currentIndex ? 'border-yellow-400 shadow-md' : 'border-yellow-500'}`}
                    />
                    <div>
                      <h3 className="font-bold text-lg text-white">{testimonial.name}</h3>
                      <p className={`${index === currentIndex ? 'text-gray-300' : 'text-gray-400'}`}>
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                  <p className={`italic ${index === currentIndex ? 'text-white' : 'text-gray-300'}`}>
                    "{testimonial.content}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Gösterge noktaları */}
          <div className="flex justify-center space-x-3 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-yellow-400 w-6 shadow-md shadow-yellow-500/50'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                onClick={() => scrollToCard(index)}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-600 transition-colors inline-flex items-center">
            <span>Tüm Referanslarımız</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;