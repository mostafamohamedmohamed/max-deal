
import React, { useState } from 'react';
import { Product, Language, Currency } from '../types';

interface BestOffersProps {
  products: Product[];
  onAddToCart: (p: Product) => void;
  onQuickView: (p: Product) => void;
  lang: Language;
  currency: Currency;
}

const BestOffers: React.FC<BestOffersProps> = ({ products, onAddToCart, onQuickView, lang, currency }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="mt-20">
      {/* Heading Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="w-12 h-0.5 bg-brand-deep rounded-full"></span>
            <span className="text-xs font-black text-brand-deep uppercase tracking-[0.3em]">
              {t('Deal Hub', 'مركز العروض')}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-brand-dark italic flex flex-wrap items-center gap-2">
            {t('Our Best ', 'أفضل ')}
            <span className="bg-[#FF6B35] text-white px-6 py-1 rounded-lg not-italic inline-block">
              {t('Offers', 'عروضنا')}
            </span>
            <span className="mx-2 text-2xl font-black not-italic text-brand-dark opacity-40">|</span>
            <span className="text-3xl font-black text-red-500">
              {t('Up to -60%', 'خصم حتى -٦٠٪')}
            </span>
          </h2>
        </div>
        <p className="text-gray-400 font-medium max-w-sm text-sm">
          {t('Limited time clearance on premium 2026 electronics. Once they\'re gone, they\'re gone.', 
             'تصفية لفترة محدودة على إلكترونيات ٢٠٢٦ الفاخرة. بمجرد نفادها، لن تعود.')}
        </p>
      </div>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => {
          const savings = product.oldPrice ? product.oldPrice - product.price : 0;
          const discount = product.oldPrice ? Math.round((savings / product.oldPrice) * 100) : 0;

          return (
            <div 
              key={product.id}
              className="group relative bg-white border border-gray-100 rounded-[40px] p-6 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Offer Badge Overlay */}
              <div className="absolute top-0 right-0 z-10">
                <div className="bg-brand-dark text-white px-6 py-2 rounded-bl-[30px] font-black text-sm shadow-xl">
                  -{discount}%
                </div>
              </div>

              {/* Product Image */}
              <div className="relative aspect-square mb-6 overflow-hidden rounded-[30px] bg-gray-50 flex items-center justify-center">
                {!product.image || imageErrors[product.id] ? (
                  <div className="flex flex-col items-center justify-center text-gray-300 opacity-50 p-8">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                      <span className="text-2xl">🖼️</span>
                    </div>
                    <span className="text-[8px] font-black uppercase tracking-widest text-center">{t('CONFIDENTIAL TECH', 'تقنية سرية')}</span>
                  </div>
                ) : (
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    onError={() => handleImageError(product.id)}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 p-8"
                  />
                )}
                
                {/* Save Amount Badge */}
                <div className="absolute bottom-4 left-4 z-10">
                  <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-gray-100 shadow-sm flex flex-col">
                    <span className="text-[8px] font-black text-gray-400 uppercase tracking-tighter">{t('YOU SAVE', 'أنت توفر')}</span>
                    <span className="text-sm font-black text-green-600">
                      {currency === 'EGP' ? `${savings * 50} EGP` : `$${savings}`}
                    </span>
                  </div>
                </div>

                <div className="absolute inset-0 bg-brand-dark/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                   <button 
                    onClick={() => onQuickView(product)}
                    className="bg-brand-dark text-white px-6 py-3 rounded-2xl text-xs font-black shadow-2xl hover:bg-brand-deep transition-all transform hover:scale-105"
                   >
                     {t('VIEW DEAL', 'عرض العرض')}
                   </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-3 flex-grow">
                <div className="flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                   <span className="text-[9px] font-black text-red-500 uppercase tracking-widest">{t('Liquidating Soon', 'تصفية قريبة')}</span>
                </div>
                
                <h3 className="text-lg font-black text-brand-dark leading-tight group-hover:text-brand-deep transition-colors">
                  {t(product.name, product.nameAr)}
                </h3>

                <div className="flex items-end justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-300 line-through font-bold decoration-red-500/30">
                      {currency === 'EGP' ? `${(product.oldPrice || 0) * 50} EGP` : `$${product.oldPrice}`}
                    </span>
                    <span className="text-2xl font-black text-brand-dark tracking-tighter">
                      {currency === 'EGP' ? `${product.price * 50} EGP` : `$${product.price}`}
                    </span>
                  </div>
                  
                  <button 
                    onClick={() => onAddToCart(product)}
                    className="w-12 h-12 bg-brand-light flex items-center justify-center rounded-2xl text-brand-deep hover:bg-brand-deep hover:text-white transition-all transform active:scale-90"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BestOffers;
