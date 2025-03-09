import React from 'react';

interface Plan {
  name: string;
  price: string;
  period: string;
  features: string[];
  isFeatured: boolean;
}

const Pricing: React.FC = () => {
  const plans: Plan[] = [
    {
      name: "Başlangıç",
      price: "₺99",
      period: "aylık",
      features: [
        "5 Kullanıcı",
        "Temel Özellikler",
        "7/24 E-posta Desteği",
        "1GB Depolama"
      ],
      isFeatured: false
    },
    {
      name: "Profesyonel",
      price: "₺199",
      period: "aylık",
      features: [
        "25 Kullanıcı",
        "Tüm Temel Özellikler",
        "Öncelikli Destek",
        "10GB Depolama",
        "Gelişmiş Raporlama"
      ],
      isFeatured: true
    },
    {
      name: "Kurumsal",
      price: "₺399",
      period: "aylık",
      features: [
        "Sınırsız Kullanıcı",
        "Tüm Özellikler",
        "7/24 Telefon Desteği",
        "100GB Depolama",
        "Özel Entegrasyonlar",
        "Özel Eğitim"
      ],
      isFeatured: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Fiyatlandırma</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 ${
                plan.isFeatured ? 'border-2 border-blue-600 transform scale-105' : 'border border-gray-200'
              }`}
            >
              <div className={`p-6 ${plan.isFeatured ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <div className="flex items-end">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-sm ml-1">/{plan.period}</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-2 mt-6 rounded-lg font-semibold ${
                  plan.isFeatured
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                } transition-colors`}>
                  {plan.isFeatured ? 'Hemen Başla' : 'Seç'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;