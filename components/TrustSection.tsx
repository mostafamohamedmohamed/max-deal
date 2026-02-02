
import React from 'react';
import { Language } from '../types';

interface TrustSectionProps {
  lang: Language;
}

const TrustSection: React.FC<TrustSectionProps> = ({ lang }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;

  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('Free Shipping', 'شحن مجاني'),
      desc: t('On all orders over EGP 2,499 across Egypt.', 'على جميع الطلبات فوق ٢٤٩٩ ج.م في مصر.')
    },
    {
      icon: (
        <svg className="w-8 h-8 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: t('30-Day Return', 'إرجاع خلال ٣٠ يوم'),
      desc: t('No questions asked, 100% money back guarantee.', 'استرجاع فوري للأموال بدون طرح أي أسئلة.')
    },
    {
      icon: (
        <svg className="w-8 h-8 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: t('Secure Checkout', 'دفع آمن'),
      desc: t('Bank-grade SSL encryption for every transaction.', 'تشفير SSL بمستوى بنكي لكل معاملة تجريها.')
    },
    {
      icon: (
        <svg className="w-8 h-8 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: t('Expert Support', 'دعم الخبراء'),
      desc: t('Real-time human assistance 24/7 globally.', 'مساعدة بشرية في الوقت الفعلي ٢٤/٧ عالمياً.')
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-4 group">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-brand-wash rounded-[32px] flex items-center justify-center transition-all group-hover:bg-brand-teal group-hover:text-white group-hover:rotate-6 shadow-sm">
                <div className="group-hover:text-white transition-colors duration-300">
                  {f.icon}
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-[11px] lg:text-sm font-black text-brand-dark uppercase tracking-widest">{f.title}</h3>
                <p className="text-[10px] lg:text-xs text-gray-400 font-medium leading-relaxed max-w-[200px] mx-auto">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
