
import React, { useState, useEffect } from 'react';
import { Language, Currency, Page } from '../types';
import Logo from './Logo';

interface HeaderProps {
  lang: Language;
  setLang: (l: Language) => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  cartCount: number;
  onCartClick: () => void;
  setCurrentPage: (p: Page) => void;
  currentPage: Page;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, currency, setCurrency, cartCount, onCartClick, setCurrentPage, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', nameAr: 'الرئيسية' },
    { name: 'Shop', nameAr: 'المتجر' },
    { name: 'Sell', nameAr: 'بيع' },
    { name: 'Blog', nameAr: 'المدونة' },
  ];

  return (
    <header className="w-full z-[100] relative">
      {/* Top Bar - Hidden on Mobile */}
      <div className="bg-brand-dark text-white/90 text-[10px] font-black uppercase tracking-widest py-2.5 hidden md:block">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="opacity-50">📞 {t('SUPPORT:', 'الدعم:')}</span>
              <span className="text-brand-teal">+201112308395</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="opacity-50">🚚 {t('FREE SHIPPING 50+', 'شحن مجاني ٥٠+')}</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
               <button onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} className="hover:text-brand-teal transition-colors">
                {lang === 'en' ? 'العربية' : 'English'}
              </button>
              <div className="w-px h-3 bg-white/20"></div>
              <select 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value as Currency)}
                className="bg-transparent outline-none cursor-pointer border-none font-black text-[10px]"
              >
                <option value="EGP" className="text-black">EGP</option>
                <option value="USD" className="text-black">USD</option>
                <option value="EUR" className="text-black">EUR</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`transition-all duration-500 ${isScrolled ? 'fixed top-0 left-0 glass-morphism shadow-2xl py-3' : 'bg-white py-4 lg:py-6'} w-full`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          <div className="flex items-center gap-4">
            {/* Mobile Hamburger Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 transition-all"
            >
              <span className={`w-6 h-0.5 bg-brand-dark transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-brand-dark transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-brand-dark transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
            
            <div className="cursor-pointer" onClick={() => setCurrentPage('Home')}>
              <Logo className="h-8 lg:h-12" />
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            {menuItems.map((p) => (
              <span 
                key={p.name}
                onClick={() => setCurrentPage(p.name as Page)}
                className={`text-[11px] font-black uppercase tracking-[0.2em] cursor-pointer transition-all hover:text-brand-teal relative group ${currentPage === p.name ? 'text-brand-teal' : 'text-brand-dark/70'}`}
              >
                {t(p.name, p.nameAr)}
                <span className={`absolute -bottom-2 left-0 h-0.5 bg-brand-teal transition-all duration-300 ${currentPage === p.name ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </span>
            ))}
          </nav>

          <div className="flex items-center gap-3 lg:gap-6">
            <div className="relative group hidden lg:block">
              <input 
                type="text" 
                placeholder={t('Search 2026 Tech...', 'ابحث عن تقنية ٢٠٢٦...')}
                className="bg-gray-50 border border-gray-100 rounded-full py-2.5 px-6 text-xs font-medium w-64 outline-none focus:ring-2 ring-brand-teal/20 transition-all"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300">🔍</span>
            </div>
            
            <div className="flex items-center gap-2 lg:gap-4">
              <button onClick={() => setCurrentPage('Account')} className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <span className="text-xl">👤</span>
              </button>
              <button 
                onClick={onCartClick}
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-brand-dark text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all relative group"
              >
                <span className="text-xl">🛒</span>
                <span className="absolute -top-1 -right-1 bg-brand-teal text-white text-[10px] font-black rounded-full w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center border-2 border-white shadow-lg group-hover:animate-bounce">
                  {cartCount}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] lg:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Drawer Content */}
      <div className={`fixed top-0 left-0 bottom-0 w-80 bg-white z-[160] lg:hidden transform transition-transform duration-500 ease-out flex flex-col ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-8 border-b border-gray-100 bg-brand-dark text-white flex justify-between items-center">
          <Logo variant="dark" className="h-8" />
          <button onClick={() => setIsMenuOpen(false)} className="text-white hover:rotate-90 transition-transform">✕</button>
        </div>
        <div className="p-8 space-y-8 flex-grow overflow-y-auto">
          <div className="space-y-4">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{t('Quick Navigation', 'ملاحة سريعة')}</p>
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => { setCurrentPage(item.name as Page); setIsMenuOpen(false); }}
                className={`w-full text-left text-xl font-black italic transition-all ${currentPage === item.name ? 'text-brand-teal translate-x-2' : 'text-brand-dark'}`}
              >
                {t(item.name, item.nameAr)}
              </button>
            ))}
          </div>

          <div className="h-px bg-gray-100"></div>

          <div className="space-y-4">
             <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{t('Settings', 'الإعدادات')}</p>
             <button onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} className="flex items-center gap-3 font-bold text-sm text-brand-dark">
                🌐 {lang === 'en' ? 'العربية' : 'English'}
             </button>
             <div className="flex items-center gap-4">
               {['EGP', 'USD', 'EUR'].map(c => (
                 <button 
                  key={c} 
                  onClick={() => setCurrency(c as Currency)}
                  className={`px-4 py-2 rounded-xl text-xs font-black ${currency === c ? 'bg-brand-dark text-white' : 'bg-gray-100 text-gray-400'}`}
                 >
                   {c}
                 </button>
               ))}
             </div>
          </div>
        </div>
        <div className="p-8 border-t border-gray-100 space-y-4 bg-gray-50">
           <button className="w-full bg-brand-teal text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl">
             {t('DOWNLOAD OUR APP', 'تحميل التطبيق')}
           </button>
           <p className="text-center text-[10px] font-bold text-gray-400">© 2026 MAXDEAL CAIRO</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
