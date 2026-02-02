
import React from 'react';
import { Language } from '../types';

interface MaxPassSectionProps {
  lang: Language;
}

const MaxPassSection: React.FC<MaxPassSectionProps> = ({ lang }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;

  return (
    <section className="mt-32">
      <div className="bg-gradient-to-br from-[#071952] to-black rounded-[60px] p-12 lg:p-20 relative overflow-hidden group">
        {/* Animated Gold Aura */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse"></div>
        
        <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/30 px-4 py-1.5 rounded-full">
              <span className="text-brand-gold text-lg">👑</span>
              <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.4em]">Elite Membership</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-white italic tracking-tighter leading-none">
              {t('Introducing ', 'نقدم لكم ')}
              <span className="text-brand-gold">MAXPASS</span>
            </h2>
            <p className="text-xl text-white/60 font-medium leading-relaxed">
              {t('The ultimate tech privilege. Unlock zero-latency drone shipping, early access to 8K hardware, and exclusive AI- concierge support.', 
                 'امتياز التكنولوجيا المطلق. احصل على شحن بالدرون بدون انتظار، ووصول مبكر لأجهزة 8K، ودعم حصري من مساعدك الذكي الشخصي.')}
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { i: '⚡', l: t('Instant Shipping', 'شحن فوري') },
                { i: '🎁', l: t('Hidden Deals', 'عروض سرية') },
                { i: '🛡️', l: t('Unlimited Warranty', 'ضمان غير محدود') },
                { i: '🎧', l: t('24/7 Priority', 'أولوية الدعم') },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-white/80">
                  <span className="text-xl">{item.i}</span>
                  <span className="text-xs font-bold uppercase tracking-widest">{item.l}</span>
                </div>
              ))}
            </div>

            <button className="bg-brand-gold text-brand-dark px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_20px_40px_rgba(245,158,11,0.3)]">
              {t('JOIN FOR 499 EGP/MO', 'انضم مقابل ٤٩٩ ج.م/شهرياً')}
            </button>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 p-8 glass-dark rounded-[40px] border border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
               <div className="flex justify-between items-start mb-16">
                  <div className="text-2xl font-black italic text-white">max<span className="text-brand-gold">pass.</span></div>
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-brand-dark font-black">26</div>
               </div>
               <div className="space-y-4">
                  <div className="h-4 w-48 bg-white/10 rounded-full"></div>
                  <div className="flex items-center gap-4">
                     <div className="h-3 w-32 bg-white/5 rounded-full"></div>
                     <div className="h-3 w-12 bg-brand-gold/40 rounded-full"></div>
                  </div>
               </div>
               <div className="mt-20 flex justify-between items-end">
                  <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">ELITE MEMBER HUB</div>
                  <div className="text-brand-gold text-2xl font-black italic">AHMED_KAMAL</div>
               </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-[30px] shadow-2xl animate-bounce hidden lg:block border border-gray-100">
               <div className="text-brand-dark font-black text-3xl">SAVE</div>
               <div className="text-brand-gold font-black text-4xl">5000+</div>
               <div className="text-[8px] font-black text-gray-400 uppercase">Per Year avg.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaxPassSection;
