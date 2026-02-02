
import React from 'react';
import { Product, Language, Currency } from '../types';

interface GamingShowcaseProps {
  product: Product;
  lang: Language;
  currency: Currency;
  onAddToCart: (p: Product) => void;
}

const GamingShowcase: React.FC<GamingShowcaseProps> = ({ product, lang, currency, onAddToCart }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;

  const reviews = [
    {
      id: 1,
      name: 'Youssef Mansour',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
      rating: 5,
      comment: t('Absolutely insane performance. Running Cyberpunk 2077 at native 8K with ray tracing and it doesn\'t even break a sweat. Best 2026 purchase!', 'أداء جنوني تماماً. قمت بتشغيل Cyberpunk 2077 بدقة 8K أصلية مع تتبع الأشعة ولم يواجه الجهاز أي مشكلة. أفضل شراء في ٢٠٢٦!')
    },
    {
      id: 2,
      name: 'Sarah Jenkins',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
      rating: 5,
      comment: t('The 240Hz OLED screen is a game changer. Colors are so vibrant it looks like a window to another world. The liquid cooling is surprisingly quiet.', 'شاشة OLED بتردد ٢٤٠ هرتز غيرت اللعبة تماماً. الألوان نابضة بالحياة لدرجة أنها تبدو كأنها نافذة لعالم آخر. التبريد السائل هادئ بشكل مدهش.')
    },
    {
      id: 3,
      name: 'Khaled Zayed',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100',
      rating: 4,
      comment: t('Heavy but worth it. The power of an RTX 5090 in a portable frame is futuristic. Delivery by drone to New Cairo was under 12 minutes.', 'ثقيل قليلاً لكنه يستحق ذلك. قوة RTX 5090 في إطار محمول هي أمر مستقبلي. التوصيل بالدرون للقاهرة الجديدة استغرق أقل من ١٢ دقيقة.')
    },
    {
      id: 4,
      name: 'Elena Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100',
      rating: 5,
      comment: t('The neural-link integration is seamless. Using hand gestures to control UI while gaming feels like magic. ASUS nailed the 2026 design.', 'تكامل الرابط العصبي سلس للغاية. استخدام إيماءات اليد للتحكم في الواجهة أثناء اللعب يشعرني بالسحر. أسوس أبدعت في تصميم ٢٠٢٦.')
    }
  ];

  return (
    <section className="mt-32 mb-40 container mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        
        {/* Left Section: Product Details */}
        <div className="lg:w-1/2 space-y-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-brand-light px-4 py-1.5 rounded-full border border-brand-deep/20">
              <span className="text-[10px] font-black text-brand-dark uppercase tracking-[0.4em]">{t('GAMING MONSTER', 'وحش الألعاب')}</span>
            </div>
            <h2 className="text-6xl lg:text-7xl font-black text-brand-dark italic tracking-tighter leading-none uppercase">
              {t(product.name, product.nameAr)}
            </h2>
            <div className="flex items-center gap-6">
              <div className="text-5xl font-black text-brand-deep tracking-tighter">
                {currency === 'EGP' ? `${product.price * 50} EGP` : `$${product.price}`}
              </div>
              {product.oldPrice && (
                <div className="text-xl font-bold text-gray-300 line-through">
                  {currency === 'EGP' ? `${product.oldPrice * 50} EGP` : `$${product.oldPrice}`}
                </div>
              )}
            </div>
          </div>

          {/* Product Hero Image Area */}
          <div className="relative w-full h-80 bg-gray-50 rounded-[40px] overflow-hidden group/showcase border border-gray-100 shadow-inner">
             <img 
               src={product.image} 
               className="w-full h-full object-contain p-10 group-hover/showcase:scale-110 transition-transform duration-700" 
               alt={product.name} 
             />
             <div className="absolute inset-0 bg-brand-deep/5 opacity-0 group-hover/showcase:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                <div className="glass px-6 py-2 rounded-full border border-white/40 text-[10px] font-black text-brand-dark uppercase tracking-widest shadow-xl">8K Visualizer Active</div>
             </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { l: 'GPU', v: 'RTX 5090 32GB' },
              { l: 'DISPLAY', v: '240Hz 8K OLED' },
              { l: 'COOLING', v: 'Vapor-Liquid 4.0' },
              { l: 'AI CHIP', v: 'Tensor Core Gen 6' }
            ].map((spec, i) => (
              <div key={i} className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm transition-transform hover:scale-105 hover:border-brand-deep/30">
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{spec.l}</div>
                <div className="text-sm font-black text-brand-dark">{spec.v}</div>
              </div>
            ))}
          </div>

          <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-lg">
            {t(product.description || '', product.descriptionAr || '')}
          </p>

          <button 
            onClick={() => onAddToCart(product)}
            className="bg-brand-dark text-white px-12 py-5 rounded-2xl font-black text-lg shadow-2xl hover:scale-105 transition-all transform flex items-center gap-4 uppercase tracking-tighter"
          >
            {t('SECURE THE BEAST', 'احجز الوحش الآن')}
            <span className="text-2xl">→</span>
          </button>
        </div>

        {/* Right Section: Reviews Area */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-3xl font-black text-brand-dark italic uppercase tracking-tighter">{t('Elite Squad Reviews', 'تقييمات فريق النخبة')}</h3>
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400 text-lg font-black tracking-tighter">
                ★★★★★
              </div>
              <span className="text-sm font-black text-gray-400">4.9/5</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((rev) => (
              <div key={rev.id} className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-lg space-y-4 hover:-translate-y-2 transition-transform duration-500 flex flex-col">
                <div className="flex items-center gap-4">
                  <img src={rev.avatar} alt={rev.name} className="w-12 h-12 rounded-full border-2 border-brand-accent shadow-md" />
                  <div>
                    <div className="text-sm font-black text-brand-dark leading-none mb-1">{rev.name}</div>
                    <div className="text-yellow-400 text-[10px]">
                      {'★'.repeat(rev.rating)}{'☆'.repeat(5 - rev.rating)}
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl flex-grow">
                  <p className="text-xs text-gray-500 font-medium leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamingShowcase;
