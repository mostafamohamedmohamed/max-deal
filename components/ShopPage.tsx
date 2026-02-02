
import React, { useState, useEffect } from 'react';
import { Product, Language, Currency } from '../types';
import { PRODUCTS, CATEGORIES } from '../constants';
import ProductGrid from './ProductGrid';

interface ShopPageProps {
  lang: Language;
  currency: Currency;
  onAddToCart: (p: Product) => void;
  onQuickView: (p: Product) => void;
  initialCategory?: string;
}

const ShopPage: React.FC<ShopPageProps> = ({ lang, currency, onAddToCart, onQuickView, initialCategory = 'All' }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [isFiltering, setIsFiltering] = useState(false);
  
  useEffect(() => {
    if (initialCategory) setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  const handleCategorySelect = (cat: string) => {
    setIsFiltering(true);
    setSelectedCategory(cat);
    // Simulate AJAX delay
    setTimeout(() => setIsFiltering(false), 500);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Category Banner */}
        <div className="relative h-64 rounded-[50px] overflow-hidden mb-12 shadow-2xl group">
           <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80" alt="Banner" />
           <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-transparent"></div>
           <div className="absolute inset-0 flex items-center px-12">
              <div className="text-white space-y-2">
                 <div className="glass-dark px-4 py-1 inline-block rounded-full text-[10px] font-black uppercase tracking-widest text-brand-accent">2026 Collection</div>
                 <h2 className="text-5xl font-black italic">{t(selectedCategory, selectedCategory === 'All' ? 'جميع المنتجات' : selectedCategory)}</h2>
                 <p className="text-white/60 font-medium">Experience high-tier performance.</p>
              </div>
           </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="lg:w-72 flex-shrink-0 space-y-8">
            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-black text-brand-dark italic">{t('Categories', 'الفئات')}</h3>
                <span className="text-[10px] font-black bg-brand-accent text-brand-dark px-2 py-0.5 rounded-full">HOT</span>
              </div>
              <div className="space-y-2">
                <button 
                  onClick={() => handleCategorySelect('All')}
                  className={`block w-full text-left text-sm font-bold px-4 py-3 rounded-xl transition-all ${selectedCategory === 'All' ? 'bg-brand-deep text-white shadow-lg' : 'text-gray-500 hover:bg-gray-50 hover:text-brand-dark'}`}
                >
                  {t('All Products', 'جميع المنتجات')}
                </button>
                {CATEGORIES.map(cat => (
                  <button 
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.name)}
                    className={`block w-full text-left text-sm font-bold px-4 py-3 rounded-xl transition-all ${selectedCategory === cat.name ? 'bg-brand-deep text-white shadow-lg' : 'text-gray-500 hover:bg-gray-50 hover:text-brand-dark'}`}
                  >
                    <div className="flex items-center justify-between">
                      {t(cat.name, cat.nameAr)}
                      <span className="text-xs opacity-40">{cat.icon}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100">
              <h3 className="text-lg font-black text-brand-dark mb-6 italic">{t('Price Range', 'نطاق السعر')}</h3>
              <input type="range" className="w-full accent-brand-deep" min="0" max="200000" step="1000" />
              <div className="flex justify-between mt-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                <span>0 EGP</span>
                <span>200k+ EGP</span>
              </div>
            </div>

            <div className="bg-brand-dark p-8 rounded-[40px] text-white overflow-hidden relative group">
              <div className="absolute top-4 right-4 z-20">
                <span className="bg-brand-accent text-brand-dark text-[8px] font-black px-2 py-1 rounded tracking-widest animate-pulse">TRENDING</span>
              </div>
              <img src="https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&q=80&w=400" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700" alt="Ad" />
              <div className="relative z-10">
                <div className="text-brand-accent font-black text-3xl mb-2">20% OFF</div>
                <div className="text-sm font-bold uppercase tracking-widest mb-4">{t('Camera Gear', 'معدات الكاميرا')}</div>
                <button className="text-xs font-black underline">{t('SHOP NOW', 'تسوق الآن')}</button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-grow">
            <div className="bg-white p-6 rounded-3xl shadow-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-4 border border-gray-100">
              <div className="text-sm font-bold text-gray-400 italic">
                {t(`Showing ${filteredProducts.length} results for`, `عرض ${filteredProducts.length} نتيجة لـ`)} "{selectedCategory}"
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{t('Sort By:', 'ترتيب حسب:')}</span>
                <select className="bg-gray-50 text-sm font-bold px-4 py-2 rounded-xl outline-none cursor-pointer border-none ring-0">
                  <option>{t('Newest Arrivals', 'الأحدث وصولاً')}</option>
                  <option>{t('Price: Low to High', 'السعر: من الأقل للأعلى')}</option>
                  <option>{t('Price: High to Low', 'السعر: من الأعلى للأقل')}</option>
                  <option>{t('Most Popular', 'الأكثر شعبية')}</option>
                </select>
              </div>
            </div>

            <div className={`transition-opacity duration-300 ${isFiltering ? 'opacity-30 pointer-events-none scale-95' : 'opacity-100 scale-100'}`}>
              <ProductGrid 
                products={filteredProducts} 
                onAddToCart={onAddToCart} 
                onQuickView={onQuickView} 
                lang={lang} 
                currency={currency} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
