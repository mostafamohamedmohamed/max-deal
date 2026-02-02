
import React from 'react';
import { Language } from '../types';

interface SellPageProps {
  lang: Language;
}

const SellPage: React.FC<SellPageProps> = ({ lang }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;

  const benefits = [
    { title: 'Global Reach', titleAr: 'وصول عالمي', desc: 'Sell to millions across Egypt and the Middle East.', descAr: 'قم بالبيع للملايين في جميع أنحاء مصر والشرق الأوسط.', icon: '🌍' },
    { title: 'Zero Fees', titleAr: 'رسوم صفرية', desc: 'No hidden listing fees for your first 100 products.', descAr: 'لا توجد رسوم إدراج مخفية لأول ١٠٠ منتج لك.', icon: '💰' },
    { title: 'Fast Payouts', titleAr: 'دفعات سريعة', desc: 'Receive your earnings within 24 hours of delivery.', descAr: 'استلم أرباحك خلال ٢٤ ساعة من التسليم.', icon: '⚡' },
    { title: '24/7 Support', titleAr: 'دعم ٢٤/٧', desc: 'Dedicated vendor support team for all your needs.', descAr: 'فريق دعم مخصص للبائعين لجميع احتياجاتك.', icon: '📞' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-dark to-brand-deep text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <img src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=1200" alt="Vendor Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl space-y-8">
            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              {t('Scale Your Business With ', 'قم بتوسيع نطاق عملك مع ')}
              <span className="text-brand-accent italic">maxdeal</span>.
            </h1>
            <p className="text-xl opacity-80 leading-relaxed font-medium">
              {t('Join the fastest growing tech marketplace in the region. Reach high-intent buyers looking for the latest 2026 innovations.', 
                 'انضم إلى أسرع سوق تكنولوجي نمواً في المنطقة. صل إلى مشترين مهتمين يبحثون عن أحدث ابتكارات ٢٠٢٦.')}
            </p>
            <button className="bg-brand-accent text-brand-dark px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-[0_20px_40px_rgba(5,191,219,0.3)]">
              {t('START SELLING TODAY', 'ابدأ البيع اليوم')}
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-brand-dark mb-4 italic">{t('Why Sell On MaxDeal?', 'لماذا تبيع على ماكس ديل؟')}</h2>
          <div className="w-24 h-1.5 bg-brand-deep mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="p-10 rounded-[40px] border border-gray-100 bg-brand-light/20 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
              <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-500 inline-block">{b.icon}</div>
              <h3 className="text-xl font-black text-brand-dark mb-4">{t(b.title, b.titleAr)}</h3>
              <p className="text-gray-500 font-medium leading-relaxed">{t(b.desc, b.descAr)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Registration Form Area */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-[60px] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
            <div className="lg:w-1/2 p-12 lg:p-16 space-y-8 bg-brand-deep text-white">
              <h2 className="text-4xl font-black italic">{t('Apply To Sell', 'طلب انضمام بائع')}</h2>
              <p className="opacity-80 font-medium leading-relaxed">
                {t('Complete this simple form and our vendor success team will contact you within 1 business day to verify your store.', 
                   'أكمل هذا النموذج البسيط وسيتواصل معك فريق نجاح البائعين لدينا خلال يوم عمل واحد للتحقق من متجرك.')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">1</div>
                  <span className="font-bold">{t('Submit Application', 'تقديم الطلب')}</span>
                </div>
                <div className="flex items-center gap-4 opacity-60">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">2</div>
                  <span className="font-bold">{t('Verify Store', 'التحقق من المتجر')}</span>
                </div>
                <div className="flex items-center gap-4 opacity-60">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">3</div>
                  <span className="font-bold">{t('Start Listing', 'ابدأ الإدراج')}</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 p-12 lg:p-16 space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">{t('Full Name', 'الاسم الكامل')}</label>
                  <input type="text" className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-deep/30 rounded-2xl px-6 py-4 outline-none transition-all font-medium" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">{t('Store Name', 'اسم المتجر')}</label>
                  <input type="text" className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-deep/30 rounded-2xl px-6 py-4 outline-none transition-all font-medium" placeholder="Electro-2026 Egypt" />
                </div>
                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">{t('Business Email', 'البريد الإلكتروني للعمل')}</label>
                  <input type="email" className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-deep/30 rounded-2xl px-6 py-4 outline-none transition-all font-medium" placeholder="vendor@example.com" />
                </div>
                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">{t('Phone Number', 'رقم الهاتف')}</label>
                  <input type="tel" className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-deep/30 rounded-2xl px-6 py-4 outline-none transition-all font-medium" placeholder="+20 1XX XXX XXXX" />
                </div>
              </div>
              <button className="w-full bg-brand-dark text-white py-5 rounded-2xl font-black text-lg hover:bg-black transition-all shadow-xl mt-4">
                {t('SUBMIT APPLICATION', 'إرسال الطلب')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellPage;
