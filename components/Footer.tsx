
import React from 'react';
import { Language, Page } from '../types';
import Logo from './Logo';

interface FooterProps {
  lang: Language;
  setCurrentPage: (p: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ lang, setCurrentPage }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;

  const socialIcons = [
    {
      name: 'Facebook',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      ),
      hoverColor: 'hover:text-[#1877F2]'
    },
    {
      name: 'Instagram',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M12.315 2c2.43 0 2.784.012 3.855.06a5.116 5.116 0 011.683.312 3.067 3.067 0 011.088.707 3.088 3.088 0 01.707 1.088 5.11 5.11 0 01.312 1.683c.048 1.07.06 1.425.06 3.855s-.012 2.784-.06 3.855a5.113 5.113 0 01-.312 1.683 3.083 3.083 0 01-.707 1.088 3.063 3.063 0 01-1.088.707 5.114 5.114 0 01-1.683.312c-1.07.048-1.425.06-3.855.06s-2.784-.012-3.855-.06a5.116 5.116 0 01-1.683-.312 3.067 3.067 0 01-1.088-.707 3.088 3.088 0 01-.707-1.088 5.11 5.11 0 01-.312-1.683C2.012 11.1 2 10.745 2 8.315s.012-2.784.06-3.855a5.111 5.111 0 01.312-1.683 3.089 3.089 0 01.707-1.088 3.062 3.062 0 011.088-.707A5.115 5.115 0 016.145 2.06C7.215 2.012 7.57 2 10 2c2.43 0 2.784.012 3.855.06zm-1.843 8.384a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zm5.122-5.182a.562.562 0 100-1.124.562.562 0 000 1.124z" />
        </svg>
      ),
      hoverColor: 'hover:text-[#E4405F]'
    },
    {
      name: 'X',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.309 17.41z" />
        </svg>
      ),
      hoverColor: 'hover:text-brand-teal'
    },
    {
      name: 'YouTube',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505a3.017 3.017 0 00-2.122 2.136C0 8.055 0 12 0 12s0 3.945.501 5.814a3.015 3.015 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.945 24 12 24 12s0-3.945-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      hoverColor: 'hover:text-[#FF0000]'
    }
  ];

  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <Logo variant="dark" className="h-10" />
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              {t("Cairo's premiere 8K tech storefront. Delivering the future of electronics to your doorstep since 2024.", 
                 "متجر التكنولوجيا الأول بدقة 8K في القاهرة. نقدم مستقبل الإلكترونيات إلى منزلك منذ عام ٢٠٢٤.")}
            </p>
            
            {/* Social Icons Section */}
            <div className="flex items-center gap-4 pt-2">
              {socialIcons.map((social) => (
                <button
                  key={social.name}
                  aria-label={social.name}
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 transition-all duration-300 ${social.hoverColor} hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl`}
                >
                  {social.icon}
                </button>
              ))}
            </div>

            <div className="pt-4">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-teal mb-4">{t('Newsletter', 'النشرة الإخبارية')}</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder={t('email@2026.eg', 'البريد@٢٠٢٦.مصر')} 
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-xs flex-grow outline-none focus:bg-white/20 transition-all" 
                />
                <button className="btn-primary-gradient px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest">
                  {t('JOIN', 'انضم')}
                </button>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-sm font-black italic mb-6 tracking-widest text-brand-teal uppercase">{t('Shopping', 'التسوق')}</h4>
            <ul className="space-y-4 text-white/50 text-xs font-bold uppercase tracking-tighter">
              <li className="hover:text-brand-teal cursor-pointer transition-colors" onClick={() => setCurrentPage('Shop')}>{t('New Arrivals', 'وصل حديثاً')}</li>
              <li className="hover:text-brand-teal cursor-pointer transition-colors" onClick={() => setCurrentPage('Shop')}>{t('Flash Deals', 'عروض خاطفة')}</li>
              <li className="hover:text-brand-teal cursor-pointer transition-colors" onClick={() => setCurrentPage('Shop')}>{t('Elite Catalog', 'كتالوج النخبة')}</li>
              <li className="hover:text-brand-teal cursor-pointer transition-colors" onClick={() => setCurrentPage('Cart')}>{t('Shopping Cart', 'عربة التسوق')}</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-sm font-black italic mb-6 tracking-widest text-brand-teal uppercase">{t('Support', 'الدعم')}</h4>
            <ul className="space-y-4 text-white/50 text-xs font-bold uppercase tracking-tighter">
              <li className="hover:text-brand-teal cursor-pointer transition-colors" onClick={() => setCurrentPage('Contact')}>{t('Contact Us', 'اتصل بنا')}</li>
              <li className="hover:text-brand-teal cursor-pointer transition-colors" onClick={() => setCurrentPage('FAQ')}>{t('Product Help', 'مساعدة المنتج')}</li>
              <li className="hover:text-brand-teal cursor-pointer transition-colors" onClick={() => setCurrentPage('Privacy')}>{t('Data Protection', 'حماية البيانات')}</li>
              <li className="hover:text-brand-teal cursor-pointer transition-colors" onClick={() => setCurrentPage('Track')}>{t('Drone Track', 'تتبع الدرون')}</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-sm font-black italic mb-6 tracking-widest text-brand-teal uppercase">{t('Legal', 'قانوني')}</h4>
            <ul className="space-y-4 text-white/50 text-xs font-bold uppercase tracking-tighter">
              <li className="hover:text-brand-teal cursor-pointer transition-colors" onClick={() => setCurrentPage('Privacy')}>{t('Terms of Service', 'شروط الخدمة')}</li>
              <li className="hover:text-brand-teal cursor-pointer transition-colors" onClick={() => setCurrentPage('Privacy')}>{t('Warranty Policy', 'سياسة الضمان')}</li>
              <li className="hover:text-brand-teal cursor-pointer transition-colors" onClick={() => setCurrentPage('Privacy')}>{t('User Agreement', 'اتفاقية المستخدم')}</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">
            © 2026 MAXDEAL CAIRO. BUILT FOR ENVATO ELEMENTS.
          </p>
          <div className="flex items-center gap-6 opacity-30 grayscale hover:grayscale-0 transition-all">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-3" alt="Visa" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" alt="MC" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4" alt="PayPal" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
