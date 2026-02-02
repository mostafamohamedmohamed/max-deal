
import React, { useState } from 'react';
import { Language, Currency, Product } from '../types';

interface FrequentlyBoughtTogetherProps {
  lang: Language;
  currency: Currency;
  mainProduct: Product;
  bundleProducts: Product[];
  onAddBundle: (products: Product[]) => void;
}

const FrequentlyBoughtTogether: React.FC<FrequentlyBoughtTogetherProps> = ({ lang, currency, mainProduct, bundleProducts, onAddBundle }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;
  const [selectedIds, setSelectedIds] = useState<string[]>([mainProduct.id, ...bundleProducts.map(p => p.id)]);

  const allProducts = [mainProduct, ...bundleProducts];
  const totalPrice = allProducts
    .filter(p => selectedIds.includes(p.id))
    .reduce((sum, p) => sum + p.price, 0);

  const toggleProduct = (id: string) => {
    if (id === mainProduct.id) return; // Main product always selected
    setSelectedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <section className="mt-24 p-10 bg-gray-50 rounded-[40px] border border-gray-100">
      <h3 className="text-2xl font-black text-brand-dark mb-10 italic">
        {t('Frequently Bought Together', 'يُشترى معاً عادةً')}
      </h3>

      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Products Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8 flex-grow">
          {allProducts.map((product, idx) => (
            <React.Fragment key={product.id}>
              <div 
                onClick={() => toggleProduct(product.id)}
                className={`relative w-32 h-32 lg:w-40 lg:h-40 bg-white rounded-3xl p-4 border-2 transition-all cursor-pointer group shadow-sm
                  ${selectedIds.includes(product.id) ? 'border-brand-teal shadow-md scale-105' : 'border-transparent opacity-50 grayscale'}`}
              >
                <img src={product.image} className="w-full h-full object-contain" alt={product.name} />
                {product.id !== mainProduct.id && (
                  <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold
                    ${selectedIds.includes(product.id) ? 'bg-brand-teal' : 'bg-gray-300'}`}>
                    {selectedIds.includes(product.id) ? '✓' : '+'}
                  </div>
                )}
              </div>
              {idx < allProducts.length - 1 && (
                <span className="text-3xl font-black text-gray-300">+</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Total Card */}
        <div className="w-full lg:w-72 bg-white p-8 rounded-[32px] shadow-xl border border-gray-100 space-y-4">
          <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{t('Total Price for Selected', 'الإجمالي للمختار')}</div>
          <div className="text-3xl font-black text-brand-dark tracking-tighter">
            {currency === 'EGP' ? `${totalPrice * 50} EGP` : `$${totalPrice}`}
          </div>
          <p className="text-[10px] text-green-600 font-bold uppercase">{t('Save 10% on this bundle', 'وفر ١٠٪ عند شراء الحزمة')}</p>
          <button 
            onClick={() => onAddBundle(allProducts.filter(p => selectedIds.includes(p.id)))}
            className="w-full bg-brand-dark text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-teal transition-all shadow-lg active:scale-95"
          >
            {t('ADD ALL TO CART', 'أضف الكل للعربة')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyBoughtTogether;
