
import React from 'react';
import { Language } from '../types';

interface InstagramFeedProps {
  lang: Language;
}

const InstagramFeed: React.FC<InstagramFeedProps> = ({ lang }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;

  const posts = [
    { id: 1, image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400' },
    { id: 2, image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=400' },
    { id: 3, image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=400' },
    { id: 4, image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=400' },
    { id: 5, image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=400' },
    { id: 6, image: 'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <section className="mt-24">
      <div className="flex flex-col items-center mb-16 space-y-4">
        <div className="text-brand-red font-black text-xl italic tracking-tighter">@maxdeal_egypt</div>
        <h2 className="text-4xl font-black text-brand-dark italic">{t('Follow the ', 'تابع ')}<span className="text-brand-teal">{t('Innovation', 'الابتكار')}</span></h2>
        <div className="w-16 h-1 bg-brand-teal rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="relative aspect-square rounded-3xl overflow-hidden group cursor-pointer shadow-lg">
            <img 
              src={post.image} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
              alt="IG Post"
            />
            <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-3xl">❤️</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 flex justify-center">
        <button className="bg-white border-2 border-brand-dark px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all">
          {t('LOAD MORE POSTS', 'تحميل المزيد')}
        </button>
      </div>
    </section>
  );
};

export default InstagramFeed;
