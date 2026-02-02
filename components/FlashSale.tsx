
import React, { useState, useEffect } from 'react';
import { Language, Product, Currency } from '../types';

interface FlashSaleProps {
  lang: Language;
  currency: Currency;
  products: Product[];
  onAddToCart: (p: Product) => void;
  onQuickView: (p: Product) => void;
}

const FlashProductCard: React.FC<{
  product: Product;
  lang: Language;
  currency: Currency;
  onAddToCart: (p: Product) => void;
  onQuickView: (p: Product) => void;
  globalTimeLeft: number;
}> = ({ product, lang, currency, onAddToCart, onQuickView, globalTimeLeft }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;
  const savings = product.oldPrice ? product.oldPrice - product.price : 0;
  const discount = product.oldPrice ? Math.round((savings / product.oldPrice) * 100) : 0;

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  return (
    <div className="bg-white border border-gray-100 rounded-[32px] p-5 group hover:shadow-[0_30px_60px_-15px_rgba(239,68,68,0.15)] transition-all duration-500 relative flex flex-col h-full overflow-hidden">
      {/* 2026 Deal Badges */}
      <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
        {discount > 0 && (
          <span className="bg-[#EF4444] text-white text-[9px] font-black px-3 py-1.5 rounded-lg shadow-[0_5px_15px_rgba(239,68,68,0.4)] uppercase tracking-widest animate-pulse">
            {discount}% {t('OFF', 'خصم')}
          </span>
        )}
        <span className="bg-[#FF6B35] text-white text-[8px] font-black px-2 py-1 rounded-md shadow-sm uppercase tracking-tighter">
          {t('DEAL OF THE DAY', 'عرض اليوم')}
        </span>
      </div>

      <div className="absolute top-4 right-4 z-20">
        <button className="w-8 h-8 bg-white/80 backdrop-blur-md rounded-full shadow-sm flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors">
          🤍
        </button>
      </div>

      {/* Product Image */}
      <div className="relative aspect-square mb-6 overflow-hidden rounded-3xl bg-gray-50 flex items-center justify-center p-6">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-1000"
        />
        
        {/* Urgent Timer Overlay */}
        <div className="absolute bottom-4 inset-x-4">
          <div className="bg-red-600/90 border border-white/20 rounded-2xl px-4 py-2.5 flex items-center justify-between backdrop-blur-md shadow-xl transform group-hover:scale-105 transition-transform">
            <div className="flex items-center gap-2">
               <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
               <span className="text-[8px] font-black text-white uppercase tracking-[0.2em]">{t('HURRY:', 'عاجل:')}</span>
            </div>
            <span className="text-sm font-black text-white font-mono tracking-tighter">
              {formatTime(globalTimeLeft)}
            </span>
          </div>
        </div>

        <div className="absolute inset-0 bg-brand-dark/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
           <button 
            onClick={() => onQuickView(product)}
            className="bg-brand-dark text-white px-6 py-3 rounded-2xl text-xs font-black shadow-2xl hover:bg-red-600 transition-all transform hover:scale-110"
           >
             {t('EXPLORE DEAL', 'استكشف العرض')}
           </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-4 flex-grow">
        <div className="flex items-center justify-between">
          <div className="text-[9px] font-black text-brand-teal uppercase tracking-widest">{product.category}</div>
          <div className="flex text-yellow-400 text-[10px]">★★★★★</div>
        </div>

        <h4 className="font-black text-brand-dark text-lg leading-tight group-hover:text-red-600 transition-colors line-clamp-2 italic">
          {t(product.name, product.nameAr)}
        </h4>
        
        <div className="flex items-center justify-between pt-2">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-300 line-through font-bold">
                {currency === 'EGP' ? `${product.oldPrice ? product.oldPrice * 50 : 0} EGP` : `$${product.oldPrice}`}
              </span>
              <span className="bg-green-100 text-green-700 text-[8px] font-black px-2 py-0.5 rounded uppercase">
                {t('SAVE', 'وفر')} {currency === 'EGP' ? `${savings * 50} EGP` : `$${savings}`}
              </span>
            </div>
            <span className="text-2xl font-black text-brand-dark tracking-tighter">
              {currency === 'EGP' ? `${product.price * 50} EGP` : `$${product.price}`}
            </span>
          </div>
          <button 
            onClick={() => onAddToCart(product)}
            className="w-12 h-12 bg-brand-dark text-white rounded-2xl flex items-center justify-center hover:bg-red-600 transition-all active:scale-90 shadow-2xl shadow-brand-dark/20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Progress Bar (Stock Status) */}
      <div className="mt-6 pt-5 border-t border-gray-50">
        <div className="flex justify-between text-[10px] font-black uppercase text-gray-400 mb-2">
          <div className="flex items-center gap-1.5">
             <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
             <span>{t('Limited Inventory', 'مخزون محدود')}</span>
          </div>
          <span className="text-red-600 font-black">92% Claimed</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
           <div className="h-full bg-gradient-to-r from-red-600 to-orange-400 w-[92%]"></div>
        </div>
      </div>
    </div>
  );
};

const FlashSale: React.FC<FlashSaleProps> = ({ lang, currency, products, onAddToCart, onQuickView }) => {
  const [timeLeft, setTimeLeft] = useState(13522); // ~3:45:22 in seconds
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(prev => prev > 0 ? prev - 1 : 0), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimeUnits = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return { h, m, s };
  };

  const { h, m, s } = formatTimeUnits(timeLeft);

  return (
    <div className="space-y-12">
      {/* Dynamic Header Banner */}
      <div className="bg-gradient-to-br from-brand-dark to-[#0A1A3A] rounded-[40px] p-10 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden group shadow-2xl">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full -mr-48 -mt-48 blur-[80px] group-hover:scale-125 transition-transform duration-1000"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-teal/10 rounded-full -ml-48 -mb-48 blur-[80px]"></div>
        
        <div className="z-10 text-center lg:text-left space-y-4">
          <div className="flex flex-col items-center lg:items-start gap-3">
            <div className="flex items-center gap-2 bg-red-600 px-3 py-1.5 rounded-full shadow-[0_10px_20px_rgba(220,38,38,0.3)] border border-red-500/20">
              <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
              <span className="text-[10px] font-black text-white uppercase tracking-widest">
                {t('CRITICAL STOCK', 'مخزون حرج')}
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-white italic tracking-tighter leading-none">
              {t('Lightning ', 'عروض ')}<br/>
              <span className="text-red-500">{t('Flash Deals', 'البرق الخاطفة')}</span>
            </h2>
          </div>
          <p className="text-white/50 text-lg font-medium max-w-sm">
            {t('2026 tech essentials at historic price lows. Updated every hour.', 'أساسيات تقنية ٢٠٢٦ بأقل الأسعار التاريخية. تتحدث كل ساعة.')}
          </p>
        </div>

        <div className="flex items-center gap-5 z-10 bg-white/5 backdrop-blur-md p-8 rounded-[40px] border border-white/10 shadow-inner">
          {[
            { label: t('HOURS', 'ساعة'), val: h },
            { label: t('MINS', 'دقيقة'), val: m },
            { label: t('SECS', 'ثانية'), val: s }
          ].map((unit, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="bg-white text-brand-dark w-16 h-16 lg:w-20 lg:h-20 rounded-3xl flex items-center justify-center text-3xl lg:text-4xl font-black shadow-[0_15px_30px_rgba(0,0,0,0.3)] transform hover:scale-110 transition-transform">
                {String(unit.val).padStart(2, '0')}
              </div>
              <span className="text-[10px] font-black text-white/40 mt-3 uppercase tracking-[0.2em]">{unit.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Product Grid - Enhanced Flash Sale Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {products.map(product => (
          <FlashProductCard 
            key={product.id}
            product={product}
            lang={lang}
            currency={currency}
            onAddToCart={onAddToCart}
            onQuickView={onQuickView}
            globalTimeLeft={timeLeft}
          />
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
