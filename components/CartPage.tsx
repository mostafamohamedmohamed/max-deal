
import React from 'react';
import { CartItem, Language, Currency } from '../types';

interface CartPageProps {
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, delta: number) => void;
  lang: Language;
  currency: Currency;
  onCheckout: () => void;
}

const CartPage: React.FC<CartPageProps> = ({ items, onRemove, onUpdateQty, lang, currency, onCheckout }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white py-20 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-5xl font-black text-brand-dark italic mb-12">
          {t('Shopping ', 'عربة ')}
          <span className="text-brand-deep">Cart.</span>
        </h1>

        {items.length === 0 ? (
          <div className="bg-brand-light/30 rounded-[40px] p-20 text-center">
            <div className="text-7xl mb-6">🛒</div>
            <h2 className="text-3xl font-black text-brand-dark mb-4">{t('Empty Cart', 'العربة فارغة')}</h2>
            <p className="text-gray-500 mb-8 font-medium">{t('Looks like you haven\'t added any 2026 tech yet.', 'يبدو أنك لم تضف أي تقنيات من عام ٢٠٢٦ بعد.')}</p>
            <button className="bg-brand-deep text-white px-10 py-4 rounded-2xl font-black shadow-xl hover:bg-brand-dark transition-all">
              {t('EXPLORE SHOP', 'استكشف المتجر')}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              {items.map(item => (
                <div key={item.id} className="flex flex-col sm:flex-row gap-6 p-8 border border-gray-100 rounded-[40px] hover:shadow-xl transition-all group">
                  <div className="w-32 h-32 bg-gray-50 rounded-3xl overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
                    <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                  </div>
                  <div className="flex-grow space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-black text-brand-dark leading-tight">{t(item.name, item.nameAr)}</h3>
                      <button onClick={() => onRemove(item.id)} className="text-gray-300 hover:text-red-500 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                      </button>
                    </div>
                    <div className="text-xs font-black text-brand-deep uppercase tracking-widest">{item.category}</div>
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center gap-4 bg-gray-100 p-2 rounded-2xl">
                        <button onClick={() => onUpdateQty(item.id, -1)} className="w-8 h-8 flex items-center justify-center bg-white rounded-xl font-black shadow-sm">-</button>
                        <span className="w-8 text-center font-black">{item.quantity}</span>
                        <button onClick={() => onUpdateQty(item.id, 1)} className="w-8 h-8 flex items-center justify-center bg-white rounded-xl font-black shadow-sm">+</button>
                      </div>
                      <div className="text-2xl font-black text-brand-dark">
                        {currency === 'EGP' ? `${item.price * 50 * item.quantity} EGP` : `$${item.price * item.quantity}`}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-8 rounded-[40px] sticky top-32 space-y-8">
                <h3 className="text-2xl font-black text-brand-dark italic">{t('Summary', 'الملخص')}</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between font-bold text-gray-500">
                    <span>{t('Subtotal', 'المجموع الفرعي')}</span>
                    <span>{currency === 'EGP' ? `${total * 50} EGP` : `$${total}`}</span>
                  </div>
                  <div className="flex justify-between font-bold text-gray-500">
                    <span>{t('Shipping', 'الشحن')}</span>
                    <span className="text-green-600 font-black">{t('FREE', 'مجاني')}</span>
                  </div>
                  <div className="h-px bg-gray-200" />
                  <div className="flex justify-between text-3xl font-black text-brand-dark">
                    <span>{t('Total', 'الإجمالي')}</span>
                    <span>{currency === 'EGP' ? `${total * 50} EGP` : `$${total}`}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <input type="text" placeholder={t('Coupon Code', 'كود الخصم')} className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-brand-deep outline-none bg-white transition-all font-bold" />
                  <button onClick={onCheckout} className="w-full bg-brand-deep text-white py-5 rounded-2xl font-black text-lg shadow-2xl hover:bg-brand-dark transition-all transform hover:scale-[1.02]">
                    {t('CHECKOUT NOW', 'الدفع الآن')}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-4 opacity-40 grayscale">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-3" alt="Visa" />
                   <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-5" alt="MC" />
                   <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4" alt="PayPal" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
