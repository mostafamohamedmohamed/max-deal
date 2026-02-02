
import React from 'react';
import { Language } from '../types';

interface MobileNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  lang: Language;
}

const MobileNav: React.FC<MobileNavProps> = ({ activeTab, setActiveTab, lang }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;
  
  const navItems = [
    { name: 'Home', nameAr: 'الرئيسية', icon: '🏠' },
    { name: 'Shop', nameAr: 'المتجر', icon: '🛍️' },
    { name: 'Search', nameAr: 'البحث', icon: '🔍' },
    { name: 'Wishlist', nameAr: 'المفضلة', icon: '🤍' },
    { name: 'Account', nameAr: 'حسابي', icon: '👤' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-2xl border-t border-gray-100 z-[140] h-[70px] flex justify-around items-center lg:hidden shadow-[0_-15px_40px_rgba(0,0,0,0.1)] px-2">
      {navItems.map(item => (
        <button 
          key={item.name}
          onClick={() => setActiveTab(item.name)}
          className={`flex flex-col items-center justify-center gap-1 transition-all h-full w-full min-h-[48px] ${activeTab === item.name ? 'text-brand-teal scale-110' : 'text-gray-400'}`}
        >
          <span className="text-2xl">{item.icon}</span>
          <span className="text-[9px] font-black uppercase tracking-widest truncate max-w-[60px]">
            {t(item.name, item.nameAr)}
          </span>
          {activeTab === item.name && (
            <div className="absolute bottom-2 w-1.5 h-1.5 rounded-full bg-brand-teal shadow-[0_0_8px_#088395]"></div>
          )}
        </button>
      ))}
    </nav>
  );
};

export default MobileNav;
