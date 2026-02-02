
import React, { useRef } from 'react';
import { Product, Language, Currency } from '../types';

interface NewArrivalsSliderProps {
  products: Product[];
  lang: Language;
  currency: Currency;
  onAddToCart: (p: Product) => void;
  onQuickView: (p: Product) => void;
}

const NewArrivalsSlider: React.FC<NewArrivalsSliderProps> = ({ products, lang, currency, onAddToCart, onQuickView }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="mt-24">
      <div className="flex items-end justify-between mb-12">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-10 h-0.5 bg-brand-teal rounded-full"></span>
            <span className="text-[10px] font-black text-brand-teal uppercase tracking-[0.4em]">{t('LATEST RELEASES', 'أحدث الإصدارات')}</span>
          </div>
          <h2 className="text-4xl font-black text-brand-dark italic tracking-tighter uppercase">{t('New Arrivals', 'وصل حديثاً')}</h2>
        </div>
        <div className="flex gap-4">
          <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-brand-teal hover:text-white transition-all shadow-sm">
            {lang === 'ar' ? '→' : '←'}
          </button>
          <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-brand-teal hover:text-white transition-all shadow-sm">
            {lang === 'ar' ? '←' : '→'}
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto no-scrollbar pb-8 snap-x snap-mandatory"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {products.map((product) => (
          <div 
            key={product.id} 
            className="flex-shrink-0 w-[300px] snap-start group"
          >
            <div className="bg-white border border-gray-100 rounded-[40px] p-6 hover:shadow-[0_40px_80px_-20px_rgba(8,131,149,0.15)] transition-all duration-500 relative overflow-hidden">
              {/* Product Image */}
              <div className="relative aspect-square mb-6 bg-gray-50 rounded-[30px] flex items-center justify-center p-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                />
                <button 
                  onClick={() => onQuickView(product)}
                  className="absolute inset-0 bg-brand-dark/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] rounded-[30px]"
                >
                  <span className="bg-white text-brand-dark px-4 py-2 rounded-xl text-[10px] font-black shadow-xl">{t('QUICK VIEW', 'نظرة سريعة')}</span>
                </button>
              </div>

              {/* Info */}
              <div className="space-y-2">
                <div className="text-[9px] font-black text-brand-teal uppercase tracking-widest">{product.category}</div>
                <h4 className="font-black text-brand-dark text-md leading-tight group-hover:text-brand-teal transition-colors line-clamp-1 italic">
                  {t(product.name, product.nameAr)}
                </h4>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xl font-black text-brand-dark tracking-tighter">
                    {currency === 'EGP' ? `${product.price * 50} EGP` : `$${product.price}`}
                  </span>
                  <button 
                    onClick={() => onAddToCart(product)}
                    className="w-10 h-10 bg-brand-dark text-white rounded-xl flex items-center justify-center hover:bg-brand-teal transition-all shadow-lg active:scale-90"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivalsSlider;
