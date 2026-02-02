
import React from 'react';
import { Language } from '../types';

interface ProductSlideBannerProps {
  lang: Language;
}

const ProductSlideBanner: React.FC<ProductSlideBannerProps> = ({ lang }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;

  return (
    <section className="mt-20 mb-32 relative z-20">
      <div className="bg-gradient-to-r from-brand-dark via-brand-deep to-brand-accent rounded-[40px] overflow-hidden relative min-h-[500px] flex items-center group shadow-2xl">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/40 rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div>
        </div>

        <div className="container mx-auto px-12 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10 py-16 lg:py-0">
          {/* Text Content */}
          <div className="max-w-xl text-white space-y-8 text-center lg:text-left">
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <div className="glass px-4 py-1 inline-block rounded-full text-[10px] font-black tracking-widest uppercase border border-white/20">
                {t('New 2026 Release', 'إصدار ٢٠٢٦ الجديد')}
              </div>
              <div className="-widget-wrap -element-populated"></div>
            </div>

            <div className="space-y-4">
              <h2 className="text-5xl lg:text-7xl font-black leading-tight italic tracking-tighter">
                {t('AirPods Max 2 Ultra', 'آيربودز ماكس ٢ الترا')}
              </h2>
              
              {/* Demo Specification Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                {[
                  { label: 'AUDIO', val: '8K Spatial', icon: '🎧' },
                  { label: 'CHIP', val: 'H4 Neural', icon: '🧠' },
                  { label: 'BATTERY', val: '120 Hours', icon: '🔋' }
                ].map((spec, i) => (
                  <div key={i} className="glass p-3 rounded-2xl border border-white/10 flex flex-col items-center lg:items-start">
                    <span className="text-xl mb-1">{spec.icon}</span>
                    <span className="text-[8px] font-black text-white/50 uppercase tracking-widest">{spec.label}</span>
                    <span className="text-xs font-bold text-white uppercase">{spec.val}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg text-white/80 font-medium leading-relaxed">
              {t('Unprecedented 8K spatial audio with studio-grade noise cancellation. Experience sound like never before.', 
                 'صوت مكاني 8K غير مسبوق مع إلغاء ضوضاء بمستوى استوديو. اختبر الصوت كما لم يحدث من قبل.')}
            </p>

            {/* Bundle Demo Area */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center justify-between gap-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/20 border border-white/20 flex items-center justify-center text-xs">🎁</div>
                <div className="w-10 h-10 rounded-full bg-brand-accent border border-white/20 flex items-center justify-center text-xs">🛡️</div>
              </div>
              <div className="text-left flex-grow pl-4">
                <div className="text-[10px] font-black text-brand-accent uppercase tracking-widest">{t('Demo Bonus', 'مكافأة تجريبية')}</div>
                <div className="text-xs font-bold text-white/90">{t('Includes Smart Case + 2yr Care', 'يشمل الحقيبة الذكية + ضمان سنتين')}</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <button className="bg-white text-brand-dark px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-2xl flex items-center gap-2">
                {t('ORDER NOW', 'اطلب الآن')}
                <span className="text-2xl">→</span>
              </button>
              <div className="flex items-center gap-3 glass px-8 py-5 rounded-2xl border border-white/10">
                <span className="text-3xl font-black">749$</span>
                <span className="text-sm text-white/40 line-through">899$</span>
              </div>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative group transition-transform duration-700 group-hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=1000" 
                alt="AirPods Max 2" 
                className="w-full max-w-md lg:max-w-lg drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] transform rotate-12 group-hover:rotate-6 transition-transform duration-1000"
              />
              {/* Floating Highlight */}
              <div className="absolute -top-4 -left-4 glass p-6 rounded-3xl shadow-xl animate-pulse border border-white/20">
                <div className="text-[10px] font-black text-brand-deep uppercase tracking-[0.3em] mb-1">{t('Exclusive', 'حصري')}</div>
                <div className="text-2xl font-black text-brand-dark">Studio Pro</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSlideBanner;
