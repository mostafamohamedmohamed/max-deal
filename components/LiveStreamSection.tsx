
import React from 'react';
import { Language } from '../types';

interface LiveStreamSectionProps {
  lang: Language;
}

const LiveStreamSection: React.FC<LiveStreamSectionProps> = ({ lang }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;

  const streams = [
    { id: 1, host: 'Omar Tech', viewers: '12.4K', title: 'Unboxing RTX 5090', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400' },
    { id: 2, host: 'Sara Reviews', viewers: '8.1K', title: 'Vision Pro 2 vs Reality', image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=400' },
    { id: 3, host: 'Cairo Geek', viewers: '5.9K', title: 'S26 Ultra Camera Test', image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <section className="mt-24">
      <div className="flex items-center justify-between mb-12">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
            <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">{t('Live Now', 'بث مباشر الآن')}</span>
          </div>
          <h2 className="text-4xl font-black text-brand-dark italic">{t('MaxDeal Live Shopping', 'تسوق مباشر من ماكس ديل')}</h2>
        </div>
        <button className="text-xs font-black text-brand-teal border-b-2 border-brand-teal pb-1 hover:text-brand-dark hover:border-brand-dark transition-all">
          {t('VIEW ALL STREAMS', 'مشاهدة الكل')}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {streams.map((stream) => (
          <div key={stream.id} className="relative group rounded-[40px] overflow-hidden aspect-[9/12] shadow-2xl cursor-pointer">
            <img src={stream.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            
            {/* Badges */}
            <div className="absolute top-6 left-6 flex flex-col gap-2">
              <span className="bg-red-500 text-white text-[8px] font-black px-3 py-1 rounded-full">{t('LIVE', 'مباشر')}</span>
              <span className="bg-black/40 backdrop-blur-md text-white text-[8px] font-black px-3 py-1 rounded-full">👤 {stream.viewers}</span>
            </div>

            {/* Content */}
            <div className="absolute bottom-8 left-8 right-8 text-white space-y-2">
              <div className="text-[10px] font-black text-brand-accent uppercase tracking-widest">{stream.host}</div>
              <h3 className="text-xl font-black italic leading-tight">{stream.title}</h3>
              <div className="pt-4 flex items-center gap-2">
                <div className="flex-grow h-0.5 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-accent w-1/3"></div>
                </div>
                <span className="text-[8px] font-black opacity-60">JOIN CHAT</span>
              </div>
            </div>

            {/* Hover Play Button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center text-3xl shadow-2xl animate-pulse">
                ▶
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiveStreamSection;
