
import React from 'react';
import { CartItem, Language, Currency } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, delta: number) => void;
  lang: Language;
  currency: Currency;
  onViewCart: () => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemove, onUpdateQty, lang, currency, onViewCart, onCheckout }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      <div className={`fixed top-0 bottom-0 ${lang === 'ar' ? 'left-0' : 'right-0'} w-full max-w-md bg-white shadow-2xl z-[110] transform transition-transform duration-500 ease-out flex flex-col ${isOpen ? 'translate-x-0' : lang === 'ar' ? '-translate-x-full' : 'translate-x-full'}`}>
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-brand-dark text-white">
          <h2 className="text-2xl font-black italic">max<span className="text-brand-accent">deal</span> cart.</h2>
          <button onClick={onClose} className="p-2 hover:rotate-90 transition-transform">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <span className="text-6xl mb-4 opacity-20">🛒</span>
              <p className="text-gray-400 font-bold uppercase tracking-widest">{t('Your cart is empty', 'عربة التسوق فارغة')}</p>
              <button onClick={onClose} className="mt-6 text-brand-deep font-bold underline">{t('GO SHOPPING', 'اذهب للتسوق')}</button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-4 group">
                <div className="w-24 h-24 bg-gray-50 rounded-2xl overflow-hidden flex-shrink-0 border border-gray-100 group-hover:border-brand-deep/30 transition-colors">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between">
                      <h4 className="font-bold text-gray-800 leading-tight">{t(item.name, item.nameAr)}</h4>
                      <button onClick={() => onRemove(item.id)} className="text-gray-400 hover:text-red-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 bg-gray-100 rounded-lg px-2 py-1">
                      <button onClick={() => onUpdateQty(item.id, -1)} className="text-brand-deep font-black">-</button>
                      <span className="text-sm font-bold w-6 text-center">{item.quantity}</span>
                      <button onClick={() => onUpdateQty(item.id, 1)} className="text-brand-deep font-black">+</button>
                    </div>
                    <div className="font-black text-brand-dark">
                      {currency === 'EGP' ? `${item.price * 50 * item.quantity} EGP` : `$${item.price * item.quantity}`}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 bg-gray-50 border-t border-gray-200 space-y-4">
            <div className="flex justify-between text-2xl font-black text-brand-dark py-4">
              <span>{t('Total', 'الإجمالي')}</span>
              <span>{currency === 'EGP' ? `${total * 50} EGP` : `$${total}`}</span>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={onViewCart}
                className="flex-grow bg-white border-2 border-brand-deep text-brand-deep py-4 rounded-2xl font-black hover:bg-brand-light transition-all"
              >
                {t('VIEW CART', 'عرض العربة')}
              </button>
              <button 
                onClick={onCheckout}
                className="flex-[2] bg-brand-deep text-white py-4 rounded-2xl font-black shadow-xl hover:bg-brand-dark transition-all transform hover:scale-[1.02]"
              >
                {t('CHECKOUT', 'الدفع')}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
