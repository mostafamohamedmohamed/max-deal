
import React from 'react';
import { Language } from '../types';

interface BlogPageProps {
  lang: Language;
}

const BlogPage: React.FC<BlogPageProps> = ({ lang }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;

  const posts = [
    {
      id: 1,
      title: 'The AI Revolution in 2026 Wearables',
      titleAr: 'ثورة الذكاء الاصطناعي في الأجهزة القابلة للارتداء لعام ٢٠٢٦',
      image: 'https://images.unsplash.com/photo-1544117518-30df578096a4?auto=format&fit=crop&q=80&w=800',
      tag: 'Tech Trends',
      date: 'Oct 24, 2026'
    },
    {
      id: 2,
      title: 'Holographic Displays: Science Fiction or Reality?',
      titleAr: 'الشاشات الهولوغرافية: خيال علمي أم واقع؟',
      image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=800',
      tag: 'Innovation',
      date: 'Oct 20, 2026'
    },
    {
      id: 3,
      title: 'RTX 5090 Performance Review: The Beast Unleashed',
      titleAr: 'مراجعة أداء RTX 5090: إطلاق الوحش',
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=800',
      tag: 'Gaming',
      date: 'Oct 15, 2026'
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-7xl font-black text-brand-dark italic mb-6">
            {t('MaxDeal Tech ', 'ماكس ديل تيك ')}
            <span className="text-brand-accent italic">Blog</span>.
          </h1>
          <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
            {t('Staying ahead of the curve with the latest 2026 technology news, reviews, and insights.', 
               'البقاء في الطليعة مع أحدث أخبار التكنولوجيا لعام ٢٠٢٦ والمراجعات والأفكار.')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map(post => (
            <div key={post.id} className="group cursor-pointer">
              <div className="relative h-80 rounded-[40px] overflow-hidden mb-8 shadow-xl">
                <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={post.title} />
                <div className="absolute top-6 left-6 bg-brand-deep text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest">
                  {post.tag}
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs font-black text-gray-400 uppercase tracking-widest mb-4">
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>{t('5 Min Read', 'قراءة في ٥ دقائق')}</span>
              </div>
              <h2 className="text-2xl font-black text-brand-dark group-hover:text-brand-deep transition-colors leading-tight italic">
                {t(post.title, post.titleAr)}
              </h2>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 lg:p-20 bg-brand-light/30 rounded-[60px] flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-black text-brand-dark italic leading-tight">
              {t('Ready for the Future?', 'مستعد للمستقبل؟')}
            </h2>
            <p className="text-lg text-gray-500 font-medium">
              {t('Subscribe to our newsletter and get the latest tech insights delivered straight to your VR headset or inbox.', 
                 'اشترك في نشرتنا الإخبارية واحصل على أحدث الأفكار التكنولوجية مباشرة إلى نظارات الواقع الافتراضي أو بريدك الإلكتروني.')}
            </p>
            <div className="flex gap-2">
              <input type="email" placeholder="email@2026.eg" className="bg-white border-2 border-transparent focus:border-brand-deep/30 rounded-2xl px-6 py-4 outline-none flex-grow" />
              <button className="bg-brand-deep text-white px-8 py-4 rounded-2xl font-black hover:bg-brand-dark transition-colors">{t('JOIN', 'انضم')}</button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=800" className="w-full h-auto rounded-[40px] shadow-2xl" alt="Vision" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
