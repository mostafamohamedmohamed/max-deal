
import React, { useState, useEffect } from 'react';
import { Language } from '../types';

interface CategoryBannerSliderProps {
  lang: Language;
}

const CategoryBannerSlider: React.FC<CategoryBannerSliderProps> = ({ lang }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;

  const slides = [
    {
      title: t('The Gaming Frontier', 'أفق الألعاب'),
      description: t('Unleash raw power with RTX 50-series hardware and 240Hz OLED displays.', 'أطلق العنان للقوة الغاشمة مع أجهزة RTX فئة 50 وشاشات OLED بتردد ٢٤٠ هرتز.'),
      cta: t('EXPLORE GAMING', 'استكشف الألعاب'),
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200',
      color: 'from-purple-900 to-black'
    },
    {
      title: t('Mobile Intelligence', 'الذكاء المحمول'),
      description: t('Next-gen AI integration in every pocket. Experience the S26 Ultra & iPhone 17.', 'تكامل الجيل القادم من الذكاء الاصطناعي في كل جيب. اختبر S26 Ultra و iPhone 17.'),
      cta: t('SHOP SMARTPHONES', 'تسوق الهواتف'),
      image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=1200',
      color: 'from-blue-900 to-brand-dark'
    },
    {
      title: t('Futuristic Home Office', 'مكتب منزلي مستقبلي'),
      description: t('Ergonomic setups meets neural link connectivity for ultimate productivity.', 'إعدادات مريحة تلتقي مع اتصال الرابط العصبي لإنتاجية قصوى.'),
      cta: t('BROWSE OFFICE', 'تصفح المكتب'),
      image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1200',
      color: 'from-emerald-900 to-brand-dark'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mt-12 mb-20 overflow-hidden rounded-[50px] relative h-[400px] lg:h-[500px] shadow-2xl group">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out flex items-center ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'}`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img src={slide.image} className="w-full h-full object-cover" alt={slide.title} />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-80 lg:opacity-60`}></div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-12 relative z-10 text-white max-w-2xl">
            <div className="space-y-6">
              <span className="glass px-4 py-1 inline-block rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-white/20 animate-bounce">
                {t('Premium Category', 'فئة متميزة')}
              </span>
              <h2 className="text-4xl lg:text-6xl font-black italic leading-tight drop-shadow-2xl">
                {slide.title}
              </h2>
              <p className="text-lg text-white/80 font-medium leading-relaxed">
                {slide.description}
              </p>
              <button className="bg-brand-accent text-brand-dark px-10 py-4 rounded-2xl font-black text-sm hover:scale-105 transition-transform shadow-[0_20px_40px_rgba(5,191,219,0.3)] hover:bg-white">
                {slide.cta}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-12 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-12 bg-brand-accent' : 'w-4 bg-white/30 hover:bg-white'}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 right-12 flex flex-col justify-center gap-4 z-20">
        <button 
          onClick={() => setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))}
          className="w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center hover:bg-brand-accent hover:text-white transition-all"
        >
          <span className="transform -rotate-90">▲</span>
        </button>
        <button 
          onClick={() => setCurrentSlide(prev => (prev + 1) % slides.length)}
          className="w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center hover:bg-brand-accent hover:text-white transition-all"
        >
          <span className="transform rotate-90">▲</span>
        </button>
      </div>
    </section>
  );
};

export default CategoryBannerSlider;
