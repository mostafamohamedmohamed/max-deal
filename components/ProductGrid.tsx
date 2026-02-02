
import React, { useState } from 'react';
import { Product, Language, Currency } from '../types';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (p: Product) => void;
  onQuickView: (p: Product) => void;
  lang: Language;
  currency: Currency;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onAddToCart, onQuickView, lang, currency }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {products.map(product => (
        <div 
          key={product.id} 
          className="group relative bg-white border border-gray-100 rounded-[32px] overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col h-full"
        >
          {/* Badge */}
          {(product.isNew || product.isFlashSale) && (
            <div className="absolute top-4 left-4 z-20">
              <span className={`${product.isFlashSale ? 'bg-red-500' : 'bg-brand-teal'} text-white text-[10px] font-black px-3 py-1.5 rounded-lg shadow-sm uppercase tracking-widest`}>
                {product.isFlashSale ? t('HOT', 'ساخن') : t('NEW', 'جديد')}
              </span>
            </div>
          )}
          
          {/* Image Area */}
          <div className="relative aspect-[4/5] overflow-hidden p-4">
            <div className="w-full h-full bg-[#f9fafb] rounded-[24px] flex items-center justify-center relative overflow-hidden">
              {imageErrors[product.id] ? (
                <div className="flex flex-col items-center justify-center text-gray-300 opacity-50">
                  <span className="text-4xl mb-2">🖼️</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-center">Image not found</span>
                </div>
              ) : (
                <img 
                  src={product.image} 
                  alt={product.name}
                  onError={() => handleImageError(product.id)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              )}
              
              {/* Quick View Overlay */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <button 
                  onClick={() => onQuickView(product)}
                  className="bg-white text-brand-dark px-6 py-3 rounded-2xl text-xs font-black shadow-2xl hover:bg-brand-teal hover:text-white transition-all transform hover:scale-105"
                >
                  {t('QUICK VIEW', 'نظرة سريعة')}
                </button>
              </div>
            </div>
          </div>

          {/* Info Area */}
          <div className="p-6 pt-2 flex flex-col flex-grow">
            <div className="text-[10px] text-gray-400 font-black uppercase tracking-[0.15em] mb-2">{t(product.category, product.category)}</div>
            <h3 className="font-bold text-brand-dark text-lg leading-tight mb-2 group-hover:text-brand-teal transition-colors line-clamp-2">
              {t(product.name, product.nameAr)}
            </h3>
            
            {/* Rating */}
            <div className="flex items-center gap-1.5 mb-6">
              <div className="flex text-yellow-400 text-sm">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-200'}>★</span>
                ))}
              </div>
              <span className="text-[10px] text-gray-400 font-bold">({product.reviews})</span>
            </div>

            <div className="mt-auto flex items-center justify-between">
              <div className="flex flex-col">
                {product.oldPrice && (
                  <span className="text-xs text-gray-300 line-through font-bold mb-0.5">
                    {currency === 'EGP' ? `${product.oldPrice * 50} EGP` : `$${product.oldPrice}`}
                  </span>
                )}
                <span className="text-xl font-black text-brand-dark tracking-tight">
                  {currency === 'EGP' ? `${product.price * 50} EGP` : `$${product.price}`}
                </span>
              </div>
              
              <button 
                onClick={() => onAddToCart(product)}
                className="w-12 h-12 bg-brand-wash flex items-center justify-center rounded-2xl text-brand-teal hover:bg-brand-teal hover:text-white transition-all transform active:scale-90 shadow-sm min-h-[48px] min-w-[48px]"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
