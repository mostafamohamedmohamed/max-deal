
import React from 'react';
import { Language } from '../types';

interface SetupGalleryProps {
  lang: Language;
}

const SetupGallery: React.FC<SetupGalleryProps> = ({ lang }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;

  const setups = [
    { id: 1, user: '@ZayedGamer', image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=800' },
    { id: 2, user: '@CairoDev', image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=800' },
    { id: 3, user: '@TechQueen', image: 'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&q=80&w=800' },
    { id: 4, user: '@8KMaster', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <section className="mt-32">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-5xl font-black text-brand-dark italic">{t('The MaxDeal ', 'تجهيزات ')}<span className="text-brand-teal">{t('Elite Setup', 'النخبة')}</span></h2>
        <p className="text-gray-400 font-medium">{t('Real photos from our 2026 community in Egypt.', 'صور حقيقية من مجتمعنا لعام ٢٠٢٦ في مصر.')}</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {setups.map((setup) => (
          <div key={setup.id} className="relative group aspect-square rounded-[40px] overflow-hidden shadow-xl">
            <img src={setup.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-lg font-black italic">{setup.user}</div>
                <div className="text-[10px] font-bold text-brand-accent uppercase mt-2">View Setup Items</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SetupGallery;
