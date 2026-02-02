
import React, { useState } from 'react';
import { Product, Language, Currency } from '../types';

interface EliteArrivalsProps {
  products: Product[];
  lang: Language;
  currency: Currency;
  onAddToCart: (p: Product) => void;
  onQuickView: (p: Product) => void;
}

const EliteArrivals: React.FC<EliteArrivalsProps> = ({ products, lang, currency, onAddToCart, onQuickView }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="mt-32">
      <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
        <div className="space-y-4 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-[#088395]/10 px-4 py-1.5 rounded-full border border-[#088395]/20">
            <span className="w-2 h-2 bg-[#088395] rounded-full animate-ping"></span>
            <span className="text-[10px] font-black text-[#088395] uppercase tracking-[0.4em]">Elite Arrivals</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black italic tracking-tighter leading-none">
            <span className="text-brand-dark">{t('The 2026 ', 'تشكيلة ')}</span>
            <span className="text-[#088395] underline decoration-[#088395]/30 decoration-8 underline-offset-8">{t('A-List', 'النخبة')}</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {products.map((product, idx) => (
          <div 
            key={product.id}
            className={`group relative rounded-[60px] overflow-hidden bg-white border border-gray-100 transition-all duration-700 hover:shadow-[0_60px_100px_rgba(8,131,149,0.1)] h-[650px]`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-[#EBF4F6] opacity-50 group-hover:scale-105 transition-transform duration-1000"></div>
            
            {!product.image || imageErrors[product.id] ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-200">
                 <div className="w-32 h-32 bg-gray-100 rounded-[40px] flex items-center justify-center mb-4 shadow-inner">
                    <span className="text-6xl opacity-20">🛡️</span>
                 </div>
                <span className="text-xs font-black uppercase tracking-[0.5em] opacity-30">{t('CLASSIFIED HARDWARE', 'جهاز مصنف سرياً')}</span>
              </div>
            ) : (
              <img 
                src={product.image} 
                alt={product.name} 
                onError={() => handleImageError(product.id)}
                className="absolute inset-0 w-full h-full object-contain p-16 mix-blend-multiply group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
            )}

            {/* Floating Glass Info Card */}
            <div className="absolute inset-x-8 bottom-8">
              <div className="bg-white/80 backdrop-blur-2xl p-8 lg:p-10 rounded-[40px] border border-white/60 shadow-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-[10px] font-black text-[#088395] uppercase tracking-widest">{product.category}</div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <span className="text-sm">★</span>
                    <span className="text-xs font-bold text-gray-400">{product.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-3xl font-black text-brand-dark italic leading-tight uppercase tracking-tighter">
                  {t(product.name, product.nameAr)}
                </h3>
                
                <p className="text-sm text-gray-500 font-medium line-clamp-2">
                  {t(product.description || '', product.descriptionAr || '')}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100/50">
                  <div className="text-3xl font-black text-brand-dark tracking-tighter">
                    {currency === 'EGP' ? `${product.price * 50} EGP` : `$${product.price}`}
                  </div>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => onQuickView(product)}
                      className="w-14 h-14 rounded-2xl border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-all shadow-sm"
                    >
                      <span className="text-xl">👁️</span>
                    </button>
                    <button 
                      onClick={() => onAddToCart(product)}
                      className="bg-brand-dark text-white px-8 py-4 rounded-2xl font-black text-xs hover:bg-[#088395] transition-all transform hover:scale-105 shadow-xl"
                    >
                      {t('PRE-ORDER', 'اطلب مسبقاً')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EliteArrivals;
