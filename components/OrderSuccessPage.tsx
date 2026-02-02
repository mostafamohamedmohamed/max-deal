
import React from 'react';
import { Language } from '../types';

interface OrderSuccessPageProps {
  lang: Language;
  onGoHome: () => void;
  onTrackDrone: () => void;
}

const OrderSuccessPage: React.FC<OrderSuccessPageProps> = ({ lang, onGoHome, onTrackDrone }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;
  const orderId = `MD-${Math.floor(Math.random() * 90000) + 10000}`;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20 px-4">
      <div className="max-w-3xl w-full bg-white rounded-[60px] p-12 lg:p-20 shadow-2xl text-center space-y-8 animate-in zoom-in-95 duration-500">
        <div className="relative w-32 h-32 mx-auto">
          <div className="absolute inset-0 bg-brand-deep rounded-full animate-ping opacity-20"></div>
          <div className="relative z-10 w-full h-full bg-brand-deep text-white rounded-full flex items-center justify-center text-5xl shadow-2xl">
            ✓
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl lg:text-6xl font-black text-brand-dark italic">
            {t('Order ', 'تم الطلب ')}
            <span className="text-brand-deep">Confirmed.</span>
          </h1>
          <p className="text-xl text-gray-500 font-medium">
            {t('Thank you for choosing the future of tech.', 'شكراً لاختيارك مستقبل التكنولوجيا.')}
          </p>
        </div>

        <div className="bg-brand-light/30 rounded-[32px] p-8 border border-brand-light flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{t('Order ID', 'رقم الطلب')}</div>
            <div className="text-2xl font-black text-brand-dark">{orderId}</div>
          </div>
          <div className="h-px w-full md:w-px md:h-12 bg-gray-200"></div>
          <div className="text-left">
            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{t('Delivery Status', 'حالة التوصيل')}</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-lg font-bold text-brand-dark">{t('Drone Dispatched', 'تم إرسال الدرون')}</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-gray-400 font-medium leading-relaxed">
            {t('A confirmation email has been sent to your primary neural link. Your items are currently being prepared for 15-minute drone delivery to New Cairo.', 
               'تم إرسال بريد تأكيد إلى رابطك العصبي الأساسي. يتم حالياً تجهيز طلباتك للتوصيل خلال ١٥ دقيقة بواسطة طائرة بدون طيار إلى القاهرة الجديدة.')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onGoHome}
              className="bg-brand-deep text-white px-12 py-5 rounded-2xl font-black text-lg shadow-2xl hover:bg-brand-dark transition-all transform hover:scale-[1.05]"
            >
              {t('CONTINUE SHOPPING', 'مواصلة التسوق')}
            </button>
            <button 
              onClick={onTrackDrone}
              className="bg-white border-2 border-brand-dark text-brand-dark px-12 py-5 rounded-2xl font-black text-lg hover:bg-brand-light transition-all"
            >
              {t('TRACK DRONE', 'تتبع الدرون')}
            </button>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 opacity-40">
           <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">MaxDeal 2026 Logistics</div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
