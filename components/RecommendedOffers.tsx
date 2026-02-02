
import React from 'react';
import { Product, Language, Currency } from '../types';

interface RecommendedOffersProps {
  products: Product[];
  onAddToCart: (p: Product) => void;
  onQuickView: (p: Product) => void;
  lang: Language;
  currency: Currency;
}

const RecommendedOffers: React.FC<RecommendedOffersProps> = ({ products, onAddToCart, onQuickView, lang, currency }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;

  return (
    <section className="mt-24">
      <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-4xl lg:text-5xl font-black text-brand-dark italic tracking-tight">
            {t('Recommended ', 'ترشيحاتنا ')}
            <span className="text-brand-deep">|</span>
            <span className="ml-4 text-brand-accent">{t('Up to -50%', 'خصم حتى -٥٠٪')}</span>
          </h2>
          <div className="h-1.5 w-40 bg-gradient-to-r from-brand-deep to-transparent rounded-full mt-4 mx-auto md:mx-0"></div>
        </div>
        <button className="glass border border-brand-deep/20 px-8 py-3 rounded-2xl text-xs font-black text-brand-deep hover:bg-brand-deep hover:text-white transition-all">
          {t('VIEW ALL RECOMMENDATIONS', 'عرض جميع الترشيحات')}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => {
          const discount = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;
          
          return (
            <div 
              key={product.id}
              className="group relative h-[450px] rounded-[50px] overflow-hidden bg-white shadow-xl hover:shadow-[0_40px_100px_rgba(8,131,149,0.2)] transition-all duration-700"
            >
              {/* Product Image Background */}
              <div className="absolute inset-0 bg-gray-50 flex items-center justify-center p-12 transition-transform duration-1000 group-hover:scale-110">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:-rotate-6"
                />
              </div>

              {/* Glass Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Floating Badge */}
              <div className="absolute top-8 left-8">
                <div className="glass px-4 py-2 rounded-2xl border border-white/40 shadow-xl flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-black text-brand-dark uppercase tracking-widest">
                    {t('Specially Selected', 'مختار بعناية')}
                  </span>
                </div>
              </div>

              {/* Discount Tag */}
              <div className="absolute top-8 right-8">
                 <div className="bg-red-500 text-white w-14 h-14 rounded-full flex items-center justify-center text-xs font-black shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform">
                    -{discount}%
                 </div>
              </div>

              {/* Info Content - Revealed on Hover */}
              <div className="absolute inset-x-0 bottom-0 p-10 translate-y-24 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="text-[10px] font-black text-brand-accent uppercase tracking-[0.3em]">{product.category}</div>
                    <h3 className="text-2xl font-black text-white leading-tight italic">
                      {t(product.name, product.nameAr)}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs text-white/40 line-through font-bold">
                        {currency === 'EGP' ? `${(product.oldPrice || 0) * 50} EGP` : `$${product.oldPrice}`}
                      </span>
                      <span className="text-3xl font-black text-white tracking-tighter">
                        {currency === 'EGP' ? `${product.price * 50} EGP` : `$${product.price}`}
                      </span>
                    </div>
                    
                    <button 
                      onClick={() => onAddToCart(product)}
                      className="bg-brand-accent text-brand-dark px-6 py-3 rounded-2xl font-black text-xs hover:bg-white hover:scale-105 transition-all shadow-2xl"
                    >
                      {t('ADD TO CART', 'أضف للعربة')}
                    </button>
                  </div>

                  <button 
                    onClick={() => onQuickView(product)}
                    className="w-full text-center text-[10px] font-black text-white/60 hover:text-white uppercase tracking-widest pt-4 transition-colors"
                  >
                    {t('EXPLORE DETAILS', 'استكشف التفاصيل')}
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

export default RecommendedOffers;
