
import React from 'react';
import { Language } from '../types';
import { CATEGORIES } from '../constants';

interface MultiCategorySectionProps {
  lang: Language;
  onSelectCategory: (cat: string) => void;
}

const MultiCategorySection: React.FC<MultiCategorySectionProps> = ({ lang, onSelectCategory }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;

  const highlightedCategories = CATEGORIES.slice(0, 6);

  return (
    <section className="mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row items-baseline justify-between mb-12 gap-4">
        <div className="relative">
          <h2 className="text-4xl lg:text-5xl font-black text-brand-dark italic tracking-tighter">
            {t('Tech ', 'أنظمة ')}
            <span className="text-brand-deep">{t('Ecosystems', 'تكنولوجية')}</span>
          </h2>
          <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-brand-accent to-transparent rounded-full"></div>
        </div>
        <p className="text-gray-400 font-bold text-sm max-w-md">
          {t('Curated collections of the most advanced 2026 hardware integrations.', 'مجموعات مختارة من أكثر تكاملات الأجهزة تطوراً لعام ٢٠٢٦.')}
        </p>
      </div>

      {/* Main Grid Layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Banner 1: Mobile Focus */}
        <div className="lg:w-1/3 relative group h-[600px] rounded-[50px] overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=800" 
            alt="Mobile Tech" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent"></div>
          <div className="absolute inset-0 p-10 flex flex-col justify-end">
            <div className="glass-dark inline-block px-4 py-1 rounded-full text-[10px] font-black text-brand-accent uppercase tracking-widest mb-4 w-fit border border-white/10">
              {t('New Era', 'عصر جديد')}
            </div>
            <h3 className="text-4xl font-black text-white italic mb-4 leading-tight">
              {t('Mobile ', 'الذكاء ')}<br/>{t('Intelligence', 'المحمول')}
            </h3>
            <button 
              onClick={() => onSelectCategory('Smartphones')}
              className="bg-brand-accent text-brand-dark px-8 py-4 rounded-2xl font-black text-xs hover:bg-white transition-all w-fit shadow-xl"
            >
              {t('SHOP SMARTPHONES', 'تسوق الهواتف')}
            </button>
          </div>
        </div>

        {/* Center Grid: Category Icons */}
        <div className="lg:w-1/3 grid grid-cols-2 gap-6">
          {highlightedCategories.map((cat) => (
            <div 
              key={cat.id}
              onClick={() => onSelectCategory(cat.name)}
              className="bg-white border border-gray-100 rounded-[40px] p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-2xl hover:border-brand-deep/30 hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-brand-light/50 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 group-hover:bg-brand-deep group-hover:text-white transition-all">
                {cat.icon}
              </div>
              <h4 className="text-sm font-black text-brand-dark uppercase tracking-tight">
                {t(cat.name, cat.nameAr)}
              </h4>
              <div className="text-[9px] text-gray-400 font-bold mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {t('View Items', 'عرض المنتجات')} →
              </div>
            </div>
          ))}
          <div 
            onClick={() => onSelectCategory('All')}
            className="col-span-2 bg-brand-dark text-white rounded-[40px] p-6 flex items-center justify-between cursor-pointer hover:bg-black transition-colors"
          >
            <div className="flex flex-col">
              <span className="text-xs font-black text-brand-accent uppercase tracking-widest">{t('More Tech', 'المزيد')}</span>
              <span className="text-xl font-black italic">{t('View All Categories', 'عرض جميع الفئات')}</span>
            </div>
            <span className="text-3xl">→</span>
          </div>
        </div>

        {/* Banner 2: Computing Focus */}
        <div className="lg:w-1/3 relative group h-[600px] rounded-[50px] overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800" 
            alt="Computing Tech" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/20 to-transparent"></div>
          <div className="absolute inset-0 p-10 flex flex-col justify-end">
             <div className="glass px-4 py-1 rounded-full text-[10px] font-black text-brand-dark uppercase tracking-widest mb-4 w-fit border border-brand-deep/20">
              {t('Extreme Power', 'قوة قصوى')}
            </div>
            <h3 className="text-4xl font-black text-white italic mb-4 leading-tight">
              {t('Ultimate ', 'الحوسبة ')}<br/>{t('Computing', 'المتطورة')}
            </h3>
            <button 
              onClick={() => onSelectCategory('Laptops')}
              className="bg-brand-dark text-white px-8 py-4 rounded-2xl font-black text-xs hover:bg-brand-accent hover:text-brand-dark transition-all w-fit shadow-xl"
            >
              {t('SHOP LAPTOPS', 'تسوق الأجهزة')}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MultiCategorySection;
