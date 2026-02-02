
import React from 'react';
import { Language } from '../types';

interface WooCommerceSectionProps {
  lang: Language;
}

const WooCommerceSection: React.FC<WooCommerceSectionProps> = ({ lang }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;

  return (
    <section className="mt-24 mb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-[#071952] to-[#088395] rounded-[60px] p-12 lg:p-20 relative overflow-hidden group shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-accent/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
          
          <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
            {/* Visual Side */}
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 animate-in slide-in-from-left-12 duration-1000">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] p-8 shadow-2xl space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/WooCommerce_logo.svg" className="w-8 h-8" alt="WooCommerce" />
                      </div>
                      <div>
                        <div className="text-white font-black text-lg italic tracking-tighter">Vendor Hub</div>
                        <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Active Connection</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <span className="text-[10px] font-black text-green-400">SYNCED</span>
                    </div>
                  </div>

                  {/* Mock Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                      <div className="text-[10px] font-black text-white/40 uppercase mb-1">Total Sales</div>
                      <div className="text-2xl font-black text-white italic">EGP 1.2M</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                      <div className="text-[10px] font-black text-white/40 uppercase mb-1">Drone Loads</div>
                      <div className="text-2xl font-black text-white italic">420</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-black text-white/60">
                      <span>INVENTORY HEALTH</span>
                      <span>98%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-accent w-[98%]"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Icon */}
              <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-brand-accent text-brand-dark w-20 h-20 rounded-[30px] flex items-center justify-center text-3xl shadow-2xl animate-bounce z-20">
                🚀
              </div>
            </div>

            {/* Text Side */}
            <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
                  <span className="text-[10px] font-black text-brand-accent uppercase tracking-[0.4em]">WooCommerce Optimized</span>
                </div>
                <h2 className="text-5xl lg:text-6xl font-black text-white italic tracking-tighter leading-none">
                  {t('The Ultimate ', 'النظام ')}
                  <span className="text-brand-accent">{t('Vendor Engine', 'التجاري الأمثل')}</span>
                </h2>
                <p className="text-xl text-white/60 font-medium leading-relaxed">
                  {t('MaxDeal is 100% WooCommerce ready, supporting complex inventories, multi-vendor drone dispatching, and real-time EGP fiscal reporting.', 
                     'ماكس ديل جاهز بنسبة ١٠٠٪ لمنصة ووكومرس، مع دعم للمخزونات المعقدة، وتوصيل الدرون لعدة بائعين، وتقارير مالية فورية بالجنيه المصري.')}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button className="bg-white text-brand-dark px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
                  {t('BECOME A VENDOR', 'كن بائعاً الآن')}
                </button>
                <div className="flex items-center gap-4 px-8 py-5 glass border border-white/20 rounded-2xl">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/WooCommerce_logo.svg" className="h-4 opacity-60" alt="Woo" />
                   <div className="h-4 w-px bg-white/20"></div>
                   <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">v6.2 Core Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WooCommerceSection;
