import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BrandName</h3>
            <p className="text-gray-400">
              Modern, kullanıcı dostu ve yenilikçi çözümler sunan lider bir teknoloji şirketi.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ana Sayfa</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Özellikler</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Fiyatlandırma</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">İletişim</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <ul className="space-y-2 text-gray-400">
              <li>İstanbul, Türkiye</li>
              <li>info@brandname.com</li>
              <li>+90 212 123 45 67</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Bizi Takip Edin</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <span>FB</span>
              </a>
              <a href="#" className="bg-gray-700 hover:bg-blue-400 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <span>TW</span>
              </a>
              <a href="#" className="bg-gray-700 hover:bg-pink-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <span>IG</span>
              </a>
              <a href="#" className="bg-gray-700 hover:bg-blue-800 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <span>LI</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BrandName. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;