
import React from 'react';
import { Language } from '../types';

interface AppPromoSectionProps {
  lang: Language;
}

const AppPromoSection: React.FC<AppPromoSectionProps> = ({ lang }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;

  return (
    <section className="mt-32 mb-20">
      <div className="bg-brand-dark rounded-[60px] p-12 lg:p-24 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/20 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/20 rounded-full blur-[120px] -ml-48 -mb-48"></div>

        <div className="flex flex-col lg:flex-row items-center gap-20 relative z-10">
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="inline-block bg-white/10 border border-white/20 px-4 py-1 rounded-full text-[10px] font-black text-brand-accent uppercase tracking-widest">
              {t('Available on VisionOS, iOS & Android', 'متاح على جميع أنظمة التشغيل الحديثة')}
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-white italic leading-none">
              {t('Your Store, ', 'متجرك، ')}<br/>
              <span className="text-brand-accent">{t('In AR.', 'بتقنية AR.')}</span>
            </h2>
            <p className="text-xl text-white/60 font-medium leading-relaxed">
              {t('Download the MaxDeal 2.0 app to visualize 8K hardware in your room using neural-augmented reality. Tracking drone included in the app dashboard.', 
                 'قم بتنزيل تطبيق ماكس ديل ٢.٠ لتخيل أجهزة 8K في غرفتك باستخدام الواقع المعزز العصبي. يتضمن لوحة تحكم لتتبع الدرون.')}
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="bg-white text-brand-dark px-10 py-5 rounded-2xl font-black flex items-center gap-3 hover:scale-105 transition-transform">
                <span className="text-2xl">🍎</span>
                <div className="text-left">
                  <div className="text-[8px] uppercase font-bold opacity-60">Download on</div>
                  <div className="text-sm">App Store</div>
                </div>
              </button>
              <button className="bg-white text-brand-dark px-10 py-5 rounded-2xl font-black flex items-center gap-3 hover:scale-105 transition-transform">
                <span className="text-2xl">🤖</span>
                <div className="text-left">
                  <div className="text-[8px] uppercase font-bold opacity-60">Get it on</div>
                  <div className="text-sm">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
             {/* Main Phone Mockup */}
             <div className="iphone-frame scale-75 lg:scale-100 shadow-[0_50px_100px_rgba(0,0,0,0.6)] border-[12px] border-gray-900">
                <div className="iphone-island"></div>
                <div className="bg-brand-wash h-full flex items-center justify-center">
                   <div className="text-center p-8">
                      <div className="w-20 h-20 bg-brand-dark rounded-3xl mx-auto mb-4 flex items-center justify-center text-4xl">⚡</div>
                      <div className="font-black text-2xl text-brand-dark italic">maxdeal app.</div>
                      <div className="mt-8 space-y-3">
                         <div className="h-2 w-32 bg-gray-200 rounded-full mx-auto"></div>
                         <div className="h-2 w-24 bg-gray-200 rounded-full mx-auto"></div>
                      </div>
                   </div>
                </div>
             </div>
             {/* Floating Elements */}
             <div className="absolute -top-10 -right-10 bg-brand-accent text-brand-dark p-6 rounded-[30px] shadow-2xl animate-bounce hidden lg:block">
                <div className="text-[10px] font-black uppercase tracking-widest">AR Ready</div>
                <div className="text-2xl font-black">SCAN_FIX</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromoSection;
