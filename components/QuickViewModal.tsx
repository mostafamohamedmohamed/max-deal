
import React from 'react';
import { Product, Language, Currency } from '../types';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (p: Product) => void;
  onBuyNow: (p: Product) => void;
  lang: Language;
  currency: Currency;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose, onAddToCart, onBuyNow, lang, currency }) => {
  if (!product) return null;
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-dark/80 backdrop-blur-md transition-opacity animate-in fade-in"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-5xl rounded-[60px] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row transform animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 z-50 p-3 bg-gray-100 rounded-full hover:rotate-90 transition-transform"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        {/* Image Gallery Side */}
        <div className="lg:w-1/2 bg-gray-50 flex items-center justify-center p-12 relative group">
          <div className="relative">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto max-h-[500px] object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gallery Thumbnails (Mock) */}
            <div className="flex gap-4 mt-8 justify-center">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-20 h-20 rounded-2xl border-2 border-brand-deep/20 bg-white p-2 cursor-pointer hover:border-brand-deep transition-colors">
                  <img src={product.image} className="w-full h-full object-contain opacity-50 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
          {product.isHot && <div className="absolute top-12 left-12 bg-red-500 text-white text-xs font-black px-4 py-2 rounded-full shadow-xl">HOT DEAL</div>}
        </div>

        {/* Info Side */}
        <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-between h-full bg-white">
          <div className="space-y-8">
            <div>
              <div className="text-xs font-black text-brand-deep uppercase tracking-[0.2em] mb-3">{product.category}</div>
              <h2 className="text-4xl lg:text-5xl font-black text-brand-dark italic leading-tight">
                {t(product.name, product.nameAr)}
              </h2>
            </div>

            {/* Price & Rating */}
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-black text-brand-deep">
                  {currency === 'EGP' ? `${product.price * 50} EGP` : `$${product.price}`}
                </span>
                {product.oldPrice && (
                  <span className="text-xl text-gray-300 line-through font-bold">
                    {currency === 'EGP' ? `${product.oldPrice * 50} EGP` : `$${product.oldPrice}`}
                  </span>
                )}
              </div>
              <div className="flex flex-col items-end">
                <div className="flex text-yellow-400 text-xl">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-200'}>★</span>
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-400">{product.reviews} {t('Customer Reviews', 'تقييمات العملاء')}</span>
              </div>
            </div>

            <div className="h-px bg-gray-100" />

            {/* Description */}
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              {t(product.description || '', product.descriptionAr || '')}
            </p>

            {/* Variants Mock */}
            <div className="space-y-4">
              <div className="text-xs font-black text-gray-400 uppercase tracking-widest">{t('Select Color', 'اختر اللون')}</div>
              <div className="flex gap-3">
                {['#000', '#eee', '#088395', '#05BFDB'].map((color, i) => (
                  <div key={i} className={`w-10 h-10 rounded-full cursor-pointer border-2 ${i === 2 ? 'border-brand-deep scale-110 shadow-lg' : 'border-transparent'}`} style={{ backgroundColor: color }}></div>
                ))}
              </div>
            </div>
          </div>

          {/* Payment Options & Actions */}
          <div className="mt-12 space-y-6">
            <div className="flex gap-4">
              <button 
                onClick={() => onAddToCart(product)}
                className="flex-grow bg-brand-light text-brand-deep py-5 rounded-2xl font-black text-lg hover:bg-brand-deep hover:text-white transition-all active:scale-95"
              >
                {t('ADD TO CART', 'أضف للعربة')}
              </button>
              <button 
                onClick={() => onBuyNow(product)}
                className="flex-[2] bg-brand-dark text-white py-5 rounded-2xl font-black text-lg shadow-[0_20px_40px_rgba(7,25,82,0.3)] hover:bg-black transition-all active:scale-95 transform"
              >
                {t('BUY NOW - SECURE CHECKOUT', 'اشتري الآن - دفع آمن')}
              </button>
            </div>

            <div className="flex items-center justify-between p-6 border-2 border-brand-light/50 rounded-3xl bg-brand-light/10">
              <div className="flex items-center gap-2">
                <span className="text-green-600">🛡️</span>
                <span className="text-[10px] font-black text-brand-dark uppercase tracking-widest">{t('Safe Gateway Guaranteed', 'بوابة دفع آمنة ومضمونة')}</span>
              </div>
              <div className="flex gap-3 grayscale hover:grayscale-0 transition-all">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-3" alt="Visa" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4" alt="MC" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4" alt="PayPal" />
                <span className="text-[8px] font-black opacity-40 self-center">VODAFONE CASH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
