import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Dekoratif animasyonlu elementler */}
      <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500 animate-beam"></div>
      <div className="absolute top-20 right-10 w-32 h-32 border-r-4 border-t-4 border-yellow-500 opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-20 h-20 bg-yellow-500 opacity-10 rotate-45 animate-pulse"></div>

      {/* Sağ üst köşe dekorasyon */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-yellow-500/10 rounded-full filter blur-3xl animate-blob"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-yellow-500 text-black font-bold rounded-full mb-4 animate-fade-in-up">
            İLETİŞİM
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white animate-fade-in-up delay-100">
            Projenizi <span className="text-yellow-500">Konuşalım</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6 animate-scale-x"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* İllüstrasyon/Resim Bölümü */}
          <div className="hidden md:block relative group">
            <div className="absolute inset-0 bg-yellow-500/10 rounded-2xl transform rotate-6 translate-x-6 translate-y-6 group-hover:rotate-3 group-hover:translate-x-3 group-hover:translate-y-3 transition-all duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden border-4 border-yellow-500 transform hover:-translate-y-2 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Construction Meeting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Form Bölümü */}
          <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 border-b-4 border-yellow-500 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-yellow-500/5 rounded-full filter blur-xl animate-blob"></div>

            <form className="space-y-6 relative">
              <div className="grid grid-cols-1 gap-6">
                <div className="animate-fade-in-up delay-200">
                  <label htmlFor="name" className="block text-white mb-2 font-medium">Ad Soyad</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-700 border-2 border-gray-600 rounded-xl focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 text-white transition-all"
                    placeholder="Ad Soyad"
                  />
                </div>
                <div className="animate-fade-in-up delay-300">
                  <label htmlFor="email" className="block text-white mb-2 font-medium">E-posta</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-700 border-2 border-gray-600 rounded-xl focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 text-white transition-all"
                    placeholder="ornek@email.com"
                  />
                </div>
                <div className="animate-fade-in-up delay-400">
                  <label htmlFor="subject" className="block text-white mb-2 font-medium">Konu</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-gray-700 border-2 border-gray-600 rounded-xl focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 text-white transition-all"
                    placeholder="Mesajınızın konusu"
                  />
                </div>
                <div className="animate-fade-in-up delay-500">
                  <label htmlFor="message" className="block text-white mb-2 font-medium">Mesaj</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 border-2 border-gray-600 rounded-xl focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 text-white transition-all"
                    placeholder="Mesajınızı buraya yazın..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-xl font-bold transition-all w-full inline-flex items-center justify-center animate-fade-in-up delay-600 group"
              >
                <span>Mesajı Gönder</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Alt dekorasyon */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
    </section>
  );
};

export default Contact;