
import React from 'react';
import { Language } from '../types';

interface OffersServicesProps {
  lang: Language;
}

const OffersServices: React.FC<OffersServicesProps> = ({ lang }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;

  const services = [
    {
      icon: '🛸',
      title: t('15-Min Drone Delivery', 'توصيل بالدرون في ١٥ دقيقة'),
      desc: t('Instant autonomous delivery to your rooftop across New Cairo.', 'توصيل ذاتي فوري إلى سطح منزلك في جميع أنحاء القاهرة الجديدة.'),
      badge: t('EXPRESS', 'سريع')
    },
    {
      icon: '🤖',
      title: t('24/7 AI Tech Support', 'دعم فني ذكي ٢٤/٧'),
      desc: t('Our neural-link AI assistants are ready to troubleshoot any device.', 'مساعدونا الأذكياء جاهزون لإصلاح أي عطل في أجهزتك فوراً.'),
      badge: t('SMART', 'ذكي')
    },
    {
      icon: '🔐',
      title: t('Biometric Security', 'أمان بيومتري فائق'),
      desc: t('100% secure checkout powered by FaceID and Neural encryption.', 'دفع آمن بنسبة ١٠٠٪ مدعوم ببصمة الوجه والتشفير العصبي.'),
      badge: t('SECURE', 'آمن')
    },
    {
      icon: '♻️',
      title: t('Eco-Exchange Program', 'برنامج التبادل البيئي'),
      desc: t('Trade your 2025 gear for 2026 MaxCredits instantly.', 'استبدل أجهزتك من فئة ٢٠٢٥ بـ MaxCredits لعام ٢٠٢٦ فوراً.'),
      badge: t('GREEN', 'بيئي')
    }
  ];

  return (
    <section className="mt-24 mb-12">
      <div className="text-center mb-16 space-y-4">
        <div className="inline-block glass px-4 py-1 rounded-full border border-brand-deep/20 text-[10px] font-black text-brand-deep uppercase tracking-[0.3em]">
          {t('The MaxDeal Advantage', 'ميزة ماكس ديل')}
        </div>
        <h2 className="text-4xl lg:text-5xl font-black text-brand-dark italic">
          {t('Discover our ', 'اكتشف ')}
          <span className="text-brand-deep">{t('Offers & Services', 'عروضنا وخدماتنا')}</span>
        </h2>
        <p className="text-gray-400 font-medium max-w-xl mx-auto italic">
          {t('Setting the gold standard for premium tech retail in Egypt since 2024.', 'نضع المعايير الذهبية لتجارة التكنولوجيا الفاخرة في مصر منذ عام ٢٠٢٤.')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <div 
            key={i} 
            className="group relative bg-white border border-gray-100 rounded-[40px] p-10 hover:shadow-[0_40px_80px_-15px_rgba(8,131,149,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute -right-4 -bottom-4 text-8xl opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none transform group-hover:scale-110 duration-700">
              {service.icon}
            </div>

            <div className="relative z-10 space-y-6">
              <div className="w-16 h-16 bg-brand-light rounded-3xl flex items-center justify-center text-3xl shadow-inner group-hover:bg-brand-deep group-hover:text-white transition-colors duration-500">
                {service.icon}
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[8px] font-black bg-brand-light text-brand-deep px-2 py-0.5 rounded uppercase tracking-tighter">
                    {service.badge}
                  </span>
                </div>
                <h3 className="text-xl font-black text-brand-dark italic leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 font-medium leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <button className="text-[10px] font-black text-brand-deep uppercase tracking-widest flex items-center gap-2 group/btn">
                {t('LEARN MORE', 'اعرف المزيد')}
                <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OffersServices;
