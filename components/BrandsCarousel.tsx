
import React from 'react';
import { Language } from '../types';

interface BrandsCarouselProps {
  lang: Language;
}

const BrandsCarousel: React.FC<BrandsCarouselProps> = ({ lang }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;

  const brands = [
    { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { name: 'Nvidia', logo: 'https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg' },
    { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
    { name: 'Razer', logo: 'https://upload.wikimedia.org/wikipedia/en/4/40/Razer_snake_logo.svg' },
    { name: 'Asus', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Asus_Logo.svg' },
    { name: 'Sony', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg' },
    { name: 'Intel', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Logitech', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Logitech_logo.svg' },
    { name: 'Alienware', logo: 'https://upload.wikimedia.org/wikipedia/en/a/ad/Alienware_logo.svg' },
    { name: 'Bose', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Bose_logo.svg' }
  ];

  return (
    <section className="py-20 border-y border-gray-100 bg-gray-50/50 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-10">
        <p className="text-[10px] font-black text-gray-400 text-center uppercase tracking-[0.4em]">{t('Authorized 2026 Partners', 'شركاء معتمدون لعام ٢٠٢٦')}</p>
      </div>
      
      {/* Marquee Container */}
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex animate-marquee gap-16 lg:gap-32 items-center">
          {[...brands, ...brands].map((brand, idx) => (
            <img 
              key={idx} 
              src={brand.logo} 
              alt={brand.name} 
              className="h-6 lg:h-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer hover:scale-110 flex-shrink-0" 
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default BrandsCarousel;
