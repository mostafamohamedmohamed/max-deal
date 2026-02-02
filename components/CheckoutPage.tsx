
import React, { useState } from 'react';
import { Language, Currency, CartItem } from '../types';

interface CheckoutPageProps {
  lang: Language;
  currency: Currency;
  items: CartItem[];
  onBack: () => void;
  onOrderComplete: () => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ lang, currency, items, onBack, onOrderComplete }) => {
  const [selectedPayment, setSelectedPayment] = useState<string>('visa');
  const [isProcessing, setIsProcessing] = useState(false);
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    // Simulate 2026 "Instant Processing"
    setTimeout(() => {
      setIsProcessing(false);
      onOrderComplete();
    }, 2000);
  };

  const paymentMethods = [
    { 
      id: 'visa', 
      name: 'Visa / Mastercard', 
      nameAr: 'فيزا / ماستركارد', 
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2 4h20a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v12h20V6H2zm2 2h4v2H4V8zm0 4h10v2H4v-2z" />
        </svg>
      ), 
      color: 'bg-blue-500' 
    },
    { 
      id: 'vodafone', 
      name: 'Vodafone Cash', 
      nameAr: 'فودافون كاش', 
      icon: (
        <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-red-600 rounded-full" />
        </div>
      ), 
      color: 'bg-red-600' 
    },
    { 
      id: 'apple', 
      name: 'Apple Pay', 
      nameAr: 'آبل باي', 
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.05 20.28c-.96.95-2.04 1.95-3.15 1.95-1.12 0-1.46-.71-2.73-.71-1.27 0-1.66.7-2.71.71-1.04 0-2.22-1.09-3.18-2.05-1.94-1.95-3.41-5.5-3.41-8.83 0-5.28 3.44-8.1 6.7-8.1 1.05 0 2.04.38 2.7.38.64 0 1.93-.44 3.1-.44 1.15 0 2.45.63 3.13 1.5-2.13 1.25-1.8 4.38.35 5.56-.84 2.15-2.2 4.1-3.1 5.03zM14.6 2.5c0 1.25-.94 2.46-1.95 3.3-1.01.84-2.26 1.4-3.1 1.4-.1 0-.1-.13-.1-.26 0-1.2.98-2.52 1.95-3.3C12.38 2.8 13.6 2.25 14.5 2.25c.1 0 .1.12.1.25z" />
        </svg>
      ), 
      color: 'bg-black' 
    },
    { 
      id: 'amazon', 
      name: 'Amazon Pay', 
      nameAr: 'أمازون باي', 
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
      ), 
      color: 'bg-orange-500' 
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-brand-dark font-black mb-8 hover:-translate-x-1 transition-transform"
        >
          {t('← Back to Shopping', '← العودة للتسوق')}
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Side */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[40px] p-10 shadow-xl border border-gray-100">
              <h2 className="text-3xl font-black text-brand-dark mb-8 italic">{t('Shipping Details', 'تفاصيل الشحن')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase mb-2 tracking-widest">{t('First Name', 'الاسم الأول')}</label>
                  <input type="text" defaultValue="Ahmed" className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-deep/30 rounded-2xl px-6 py-4 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase mb-2 tracking-widest">{t('Last Name', 'اسم العائلة')}</label>
                  <input type="text" defaultValue="Kamal" className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-deep/30 rounded-2xl px-6 py-4 outline-none transition-all" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-black text-gray-400 uppercase mb-2 tracking-widest">{t('Address', 'العنوان')}</label>
                  <input type="text" defaultValue="Building 102, Street 90 South" className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-deep/30 rounded-2xl px-6 py-4 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase mb-2 tracking-widest">{t('City', 'المدينة')}</label>
                  <select className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-deep/30 rounded-2xl px-6 py-4 outline-none transition-all">
                    <option>Cairo</option>
                    <option>Alexandria</option>
                    <option>Giza</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase mb-2 tracking-widest">{t('Postal Code', 'الرمز البريدي')}</label>
                  <input type="text" defaultValue="11835" className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-deep/30 rounded-2xl px-6 py-4 outline-none transition-all" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[40px] p-10 shadow-xl border border-gray-100">
              <h2 className="text-3xl font-black text-brand-dark mb-8 italic">{t('Payment Method', 'طريقة الدفع')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {paymentMethods.map(method => (
                  <div 
                    key={method.id}
                    onClick={() => setSelectedPayment(method.id)}
                    className={`cursor-pointer p-6 rounded-3xl border-2 transition-all flex items-center gap-4 ${selectedPayment === method.id ? 'border-brand-deep bg-brand-light/20' : 'border-gray-100 hover:border-brand-deep/30'}`}
                  >
                    <div className={`w-12 h-12 rounded-2xl ${method.color} flex items-center justify-center shadow-lg transition-transform group-hover:scale-105`}>
                      {method.icon}
                    </div>
                    <div>
                      <div className="font-black text-brand-dark">{t(method.name, method.nameAr)}</div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{t('Instant Processing', 'معالجة فورية')}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Summary Side */}
          <div className="space-y-8">
            <div className="bg-white rounded-[40px] p-8 shadow-xl border border-gray-100 sticky top-32">
              <h2 className="text-2xl font-black text-brand-dark mb-6 italic">{t('Order Summary', 'ملخص الطلب')}</h2>
              <div className="space-y-4 mb-8 max-h-60 overflow-y-auto pr-2 no-scrollbar">
                {items.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-xl" />
                    <div className="flex-grow">
                      <div className="font-bold text-sm text-gray-800 line-clamp-1">{t(item.name, item.nameAr)}</div>
                      <div className="text-xs text-gray-400 font-medium">Qty: {item.quantity}</div>
                      <div className="font-black text-brand-deep text-sm">{currency === 'EGP' ? `${item.price * 50 * item.quantity} EGP` : `$${item.price * item.quantity}`}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3 py-6 border-t border-gray-100">
                <div className="flex justify-between text-gray-500 font-medium">
                  <span>{t('Subtotal', 'المجموع الفرعي')}</span>
                  <span>{currency === 'EGP' ? `${total * 50} EGP` : `$${total}`}</span>
                </div>
                <div className="flex justify-between text-gray-500 font-medium">
                  <span>{t('Shipping', 'الشحن')}</span>
                  <span className="text-green-600 font-bold">{t('FREE', 'مجاني')}</span>
                </div>
                <div className="flex justify-between text-2xl font-black text-brand-dark pt-3 border-t border-gray-100">
                  <span>{t('Total', 'الإجمالي')}</span>
                  <span>{currency === 'EGP' ? `${total * 50} EGP` : `$${total}`}</span>
                </div>
              </div>

              <button 
                disabled={isProcessing}
                onClick={handlePlaceOrder}
                className={`w-full bg-brand-deep text-white py-5 rounded-2xl font-black text-lg shadow-2xl transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 ${isProcessing ? 'opacity-70 cursor-not-allowed' : 'hover:bg-brand-dark'}`}
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    {t('PROCESSING...', 'جاري المعالجة...')}
                  </>
                ) : (
                  t('PLACE ORDER NOW', 'إتمام الطلب الآن')
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
