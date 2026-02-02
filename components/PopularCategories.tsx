
import React from 'react';
import { CATEGORIES } from '../constants';
import { Language } from '../types';

interface PopularCategoriesProps {
  lang: Language;
  onSelectCategory?: (cat: string) => void;
}

const PopularCategories: React.FC<PopularCategoriesProps> = ({ lang, onSelectCategory }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;

  return (
    <section className="mt-8 lg:mt-12">
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-1">
          <h2 className="text-xl lg:text-3xl font-black text-brand-dark italic uppercase tracking-tight">{t('Popular Categories', 'الفئات الشائعة')}</h2>
          <div className="w-12 h-1 bg-brand-teal rounded-full"></div>
        </div>
        <button className="text-[10px] font-black text-brand-teal hover:underline uppercase tracking-widest border border-brand-teal/20 px-4 py-2 rounded-full">
          {t('See All', 'عرض الكل')}
        </button>
      </div>
      
      {/* Exact Responsive Grid: 3x3 (Mobile) -> 2x2 (Tablet) -> 6-col (Desktop) */}
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
        {CATEGORIES.slice(0, 12).map((cat) => (
          <div 
            key={cat.id} 
            className="group cursor-pointer"
            onClick={() => onSelectCategory?.(cat.name)}
          >
            <div className="aspect-square bg-white rounded-2xl sm:rounded-[32px] lg:rounded-[40px] flex flex-col items-center justify-center border border-gray-100 hover:border-brand-teal/30 hover:bg-brand-wash/20 hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
              <span className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 group-hover:scale-125 transition-transform duration-500">{cat.icon}</span>
              <span className="text-[8px] sm:text-[9px] lg:text-[10px] font-black text-brand-dark uppercase tracking-widest text-center px-1 sm:px-4 leading-tight">
                {t(cat.name, cat.nameAr)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
