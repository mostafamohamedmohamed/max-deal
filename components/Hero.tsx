
import React, { useState, useEffect } from 'react';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState(13522); // ~3:45:22
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;

  const slides = [
    {
      badge: t('ULTRA-HD 8K TECH', 'تقنية 8K الفائقة'),
      title: t('MacBook Pro M4 Max', 'ماك بوك برو M4 ماكس'),
      subtitle: t('The zenith of creative performance. Photorealistic rendering in real-time.', 'ذروة الأداء الإبداعي. رندرة واقعية في الوقت الفعلي.'),
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=85&w=1600',
    },
    {
      badge: t('SPATIAL COMPUTING', 'الحوسبة المكانية'),
      title: t('Apple Vision Pro 2', 'آبل فيجن برو ٢'),
      subtitle: t('Lighter. Faster. More immersive than reality itself.', 'أخف. أسرع. أكثر انغماساً من الواقع نفسه.'),
      image: 'https://images.unsplash.com/photo-1708649290066-5f617003b93f?auto=format&fit=crop&q=85&w=1600',
    },
    {
      badge: t('NEXT-GEN MOBILE', 'جيل الجوال القادم'),
      title: t('iPhone 17 Pro Max', 'آيفون ١٧ برو ماكس'),
      subtitle: t('Aerospace Titanium. Holographic FaceTime. A19 Pro Bionic.', 'تيتانيوم فضائي. فيس تايم هولوغرافي. معالج A19 برو.'),
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=85&w=1600',
    },
    {
      badge: t('GAMING REVOLUTION', 'ثورة الألعاب'),
      title: t('RTX 5090 Monster', 'وحش RTX 5090'),
      subtitle: t('32GB VRAM. Liquid Cooled. Blackwell Architecture.', '٣٢ جيجابايت VRAM. تبريد سائل. معمارية Blackwell.'),
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=85&w=1600',
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide(s => (s + 1) % slides.length), 6000);
    const count = setInterval(() => setTimeLeft(l => l > 0 ? l - 1 : 0), 1000);
    return () => { clearInterval(timer); clearInterval(count); };
  }, []);

  const h = Math.floor(timeLeft / 3600);
  const m = Math.floor((timeLeft % 3600) / 60);
  const s = timeLeft % 60;

  return (
    <section className="relative w-full h-[350px] sm:h-[500px] lg:h-[700px] overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        >
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img src={slide.image} className="w-full h-full object-cover" alt={slide.title} />
          
          <div className="absolute inset-0 z-20 container mx-auto px-4 sm:px-6 flex items-center">
            <div className="max-w-2xl space-y-4 lg:space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-brand-teal text-white text-[8px] lg:text-[10px] font-black px-2 lg:px-3 py-1 rounded-full">{slide.badge}</span>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-2 lg:px-3 py-1 rounded-full text-white text-[8px] lg:text-[10px] font-black border border-white/20">
                  <span className="text-brand-red animate-pulse">● LIVE</span>
                  <span>{String(h).padStart(2,'0')}:{String(m).padStart(2,'0')}:{String(s).padStart(2,'0')}</span>
                </div>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white italic tracking-tighter leading-tight lg:leading-none text-glow-teal">
                {slide.title}
              </h1>
              <p className="text-xs sm:text-lg lg:text-xl text-white/70 font-medium line-clamp-2 sm:line-clamp-none">
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap items-center gap-3 lg:gap-4 pt-2 lg:pt-4">
                <button className="btn-primary-gradient px-6 lg:px-10 py-3 lg:py-4 rounded-xl lg:rounded-2xl text-white font-black text-[10px] lg:text-sm uppercase tracking-widest whitespace-nowrap">
                  {t('SHOP NOW', 'تسوق الآن')}
                </button>
                <button className="bg-white/10 backdrop-blur-md border border-white/20 px-6 lg:px-10 py-3 lg:py-4 rounded-xl lg:rounded-2xl text-white font-black text-[10px] lg:text-sm uppercase tracking-widest hover:bg-white/20 transition-all whitespace-nowrap">
                  {t('DETAILS', 'تفاصيل')}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators - Responsive Widths */}
      <div className="absolute bottom-6 lg:bottom-10 left-0 right-0 z-30 flex justify-center gap-2 lg:gap-3">
        {slides.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 lg:h-1.5 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-8 lg:w-12 bg-brand-teal' : 'w-2 lg:w-4 bg-white/30'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
