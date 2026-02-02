
import React from 'react';
import { Language } from '../types';

interface NewsletterSectionProps {
  lang: Language;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ lang }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;

  return (
    <section className="mt-24">
      <div className="bg-brand-dark rounded-[60px] p-12 lg:p-24 relative overflow-hidden text-center lg:text-left">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/20 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red/10 rounded-full blur-[100px] -ml-32 -mb-32"></div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl lg:text-6xl font-black text-white italic tracking-tighter leading-tight">
              {t('Unlock Early ', 'احصل على وصول ')}<br/>
              <span className="text-brand-teal">{t('2026 Access.', 'مبكر لعام ٢٠٢٦.')}</span>
            </h2>
            <p className="text-lg text-white/50 font-medium">
              {t('Join 50K+ tech enthusiasts in Egypt. Get exclusive drops, secret deals, and 8K hardware news directly to your inbox.', 
                 'انضم لأكثر من ٥٠ ألف محب للتقنية في مصر. احصل على عروض حصرية وأخبار أجهزة 8K مباشرة.')}
            </p>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-[30px] flex flex-col md:flex-row gap-2">
              <input 
                type="email" 
                placeholder={t('Enter your email...', 'أدخل بريدك الإلكتروني...')}
                className="flex-grow bg-transparent text-white px-8 py-5 outline-none font-bold placeholder:text-white/30"
              />
              <button className="bg-brand-teal text-white px-10 py-5 rounded-[24px] font-black text-xs uppercase tracking-widest hover:bg-brand-dark transition-all shadow-xl">
                {t('SUBSCRIBE NOW', 'اشترك الآن')}
              </button>
            </div>
            <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] mt-4 text-center lg:text-left">
              {t('No spam. Only high-end innovation. Unsubscribe anytime.', 'لا رسائل عشوائية. ابتكار فقط. يمكنك الإلغاء في أي وقت.')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
