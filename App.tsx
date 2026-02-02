
import React, { useState } from 'react';
import { Language, Currency, CartItem, Product, Page } from './types';
import { PRODUCTS, CATEGORIES } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import FlashSale from './components/FlashSale';
import PopularCategories from './components/PopularCategories';
import ProductGrid from './components/ProductGrid';
import ProductSlideBanner from './components/ProductSlideBanner';
import EliteArrivals from './components/EliteArrivals';
import CategoryBannerSlider from './components/CategoryBannerSlider';
import GamingShowcase from './components/GamingShowcase';
import BestOffers from './components/BestOffers';
import RecommendedOffers from './components/RecommendedOffers';
import OffersServices from './components/OffersServices';
import MultiCategorySection from './components/MultiCategorySection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import MobileNav from './components/MobileNav';
import SellPage from './components/SellPage';
import CheckoutPage from './components/CheckoutPage';
import QuickViewModal from './components/QuickViewModal';
import ShopPage from './components/ShopPage';
import BlogPage from './components/BlogPage';
import GenericPage from './components/GenericPage';
import AccountPage from './components/AccountPage';
import CartPage from './components/CartPage';
import OrderSuccessPage from './components/OrderSuccessPage';
import TrackDronePage from './components/TrackDronePage';
import ChatBot from './components/ChatBot';
import FloatingContact from './components/FloatingContact';
import TrustSection from './components/TrustSection';
import ImageQualityDashboard from './components/ImageQualityDashboard';
import WooCommerceSection from './components/WooCommerceSection';
import LiveStreamSection from './components/LiveStreamSection';
import BrandsCarousel from './components/BrandsCarousel';
import SetupGallery from './components/SetupGallery';
import AppPromoSection from './components/AppPromoSection';
import FrequentlyBoughtTogether from './components/FrequentlyBoughtTogether';
import NewArrivalsSlider from './components/NewArrivalsSlider';
import InstagramFeed from './components/InstagramFeed';
import NewsletterSection from './components/NewsletterSection';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [currency, setCurrency] = useState<Currency>('EGP');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('Home');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const t = (en: string, ar: string) => lang === 'en' ? en : ar;

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
    setQuickViewProduct(null);
  };

  const addBundleToCart = (products: Product[]) => {
    products.forEach(p => addToCart(p));
    setIsCartOpen(true);
  };

  const buyNow = (product: Product) => {
    setCart([{ ...product, quantity: 1 }]);
    setCurrentPage('Checkout');
    setQuickViewProduct(null);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const navigateToCategory = (catName: string) => {
    setActiveCategory(catName);
    setCurrentPage('Shop');
  };

  const handleOrderComplete = () => {
    setCurrentPage('Success');
  };

  const clearCartAndGoHome = () => {
    setCart([]);
    setCurrentPage('Home');
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'Sell':
        return <SellPage lang={lang} />;
      case 'Shop':
        return (
          <ShopPage 
            lang={lang} 
            currency={currency} 
            onAddToCart={addToCart} 
            onQuickView={setQuickViewProduct}
            initialCategory={activeCategory}
          />
        );
      case 'Blog':
        return <BlogPage lang={lang} />;
      case 'Pages':
      case 'Privacy':
      case 'FAQ':
      case 'Contact':
        return <GenericPage lang={lang} type={currentPage} />;
      case 'Account':
        return <AccountPage lang={lang} />;
      case 'Cart':
        return (
          <CartPage 
            items={cart} 
            onRemove={removeFromCart} 
            onUpdateQty={updateQuantity} 
            lang={lang} 
            currency={currency} 
            onCheckout={() => setCurrentPage('Checkout')} 
          />
        );
      case 'Checkout':
        return (
          <CheckoutPage 
            lang={lang} 
            currency={currency} 
            items={cart} 
            onBack={() => setCurrentPage('Home')} 
            onOrderComplete={handleOrderComplete}
          />
        );
      case 'Success':
        return <OrderSuccessPage lang={lang} onGoHome={clearCartAndGoHome} onTrackDrone={() => setCurrentPage('Track')} />;
      case 'Track':
        return <TrackDronePage lang={lang} onBack={() => setCurrentPage('Home')} />;
      case 'Dashboard':
        return <ImageQualityDashboard lang={lang} />;
      default:
        return (
          <div className="animate-in fade-in duration-700">
            <Hero lang={lang} />
            
            {/* OffersServices relocated to top page under slider as per UI feedback */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <OffersServices lang={lang} />
            </div>

            {/* Flash Sale Section moved to top page under slider as per UI feedback */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <FlashSale 
                lang={lang} 
                currency={currency} 
                products={PRODUCTS.filter(p => p.isFlashSale).slice(0, 4)} 
                onAddToCart={addToCart}
                onQuickView={setQuickViewProduct}
              />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-8 lg:gap-12">
              <aside className="hidden lg:block w-80 flex-shrink-0">
                <div className="glass-morphism rounded-[40px] overflow-hidden shadow-xl sticky top-32 border border-gray-100">
                  <div className="bg-brand-dark text-white px-8 py-6 font-black italic text-lg flex items-center gap-3">
                    <span className="text-brand-teal">☰</span>
                    {t('CATEGORIES', 'جميع الفئات')}
                  </div>
                  <ul className="bg-white/50 backdrop-blur-md">
                    {CATEGORIES.map(cat => (
                      <li key={cat.id} className="group cursor-pointer" onClick={() => navigateToCategory(cat.name)}>
                        <div className="px-8 py-4 border-b border-gray-100 flex items-center justify-between hover:bg-brand-teal hover:text-white transition-all">
                          <div className="flex items-center gap-4">
                            <span className="text-2xl">{cat.icon}</span>
                            <span className="text-sm font-bold uppercase tracking-widest">{t(cat.name, cat.nameAr)}</span>
                          </div>
                          <span className="text-xs opacity-30 group-hover:opacity-100 transform group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="p-6 bg-brand-teal/5 border-t border-brand-teal/10">
                    <div className="text-brand-dark font-black text-xl italic mb-1">{t('Autumn 2026', 'تشكيلة الخريف')}</div>
                    <div className="text-[10px] font-bold text-gray-500 mb-4 tracking-[0.2em]">{t('UP TO 50% OFF ELITE TECH', 'خصم حتى ٥٠٪')}</div>
                    <button className="w-full btn-primary-gradient py-3 rounded-2xl text-[10px] font-black text-white uppercase tracking-widest" onClick={() => setCurrentPage('Shop')}>
                      {t('EXPLORE NOW', 'استكشف الآن')}
                    </button>
                  </div>
                </div>
              </aside>
              <div className="flex-grow space-y-16 lg:space-y-24 overflow-hidden">
                <PopularCategories lang={lang} onSelectCategory={navigateToCategory} />
                <NewArrivalsSlider 
                  products={PRODUCTS.slice(0, 8)}
                  lang={lang}
                  currency={currency}
                  onAddToCart={addToCart}
                  onQuickView={setQuickViewProduct}
                />
                <section>
                  <div className="flex items-center justify-between mb-8 lg:mb-12">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-1 bg-brand-teal rounded-full"></span>
                        <span className="text-[10px] font-black text-brand-teal uppercase tracking-widest">{t('2026 Collection', 'مجموعة ٢٠٢٦')}</span>
                      </div>
                      <h2 className="text-2xl lg:text-4xl font-black text-brand-dark italic">{t('Featured Innovations', 'ابتكارات مختارة')}</h2>
                    </div>
                  </div>
                  <ProductGrid 
                    products={PRODUCTS.filter(p => p.isHot).slice(0, 8)} 
                    onAddToCart={addToCart} 
                    onQuickView={setQuickViewProduct}
                    lang={lang} 
                    currency={currency} 
                  />
                </section>
                <FrequentlyBoughtTogether 
                  lang={lang} 
                  currency={currency} 
                  mainProduct={PRODUCTS[0]} 
                  bundleProducts={PRODUCTS.slice(1, 3)} 
                  onAddBundle={addBundleToCart}
                />
                <MultiCategorySection lang={lang} onSelectCategory={navigateToCategory} />
                <RecommendedOffers 
                   products={PRODUCTS.slice(0, 3)}
                   onAddToCart={addToCart}
                   onQuickView={setQuickViewProduct}
                   lang={lang}
                   currency={currency}
                />
                <InstagramFeed lang={lang} />
                <SetupGallery lang={lang} />
                <BestOffers 
                  products={PRODUCTS.filter(p => p.isFlashSale)}
                  onAddToCart={addToCart}
                  onQuickView={setQuickViewProduct}
                  lang={lang}
                  currency={currency}
                />
                <TrustSection lang={lang} />
                <WooCommerceSection lang={lang} />
                <NewsletterSection lang={lang} />
                <AppPromoSection lang={lang} />
                <ProductSlideBanner lang={lang} />
                <EliteArrivals 
                  products={PRODUCTS.filter(p => p.isNew).slice(0, 2)}
                  lang={lang}
                  currency={currency}
                  onAddToCart={addToCart}
                  onQuickView={setQuickViewProduct}
                />
                <CategoryBannerSlider lang={lang} />
              </div>
            </div>

            {/* Gaming Showcase relocated above footer as per UI feedback */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <GamingShowcase 
                product={PRODUCTS.find(p => p.id === 'p-rtx-5090') || PRODUCTS[0]}
                lang={lang}
                currency={currency}
                onAddToCart={addToCart}
              />
            </div>

            {/* LiveStreamSection relocated to bottom as per UI feedback arrows */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <LiveStreamSection lang={lang} />
            </div>
            
            <BrandsCarousel lang={lang} />
          </div>
        );
    }
  };

  const MainLayout = ({ isMobile = false }) => (
    <div 
      className={`min-h-screen bg-white transition-all duration-700 ${lang === 'ar' ? 'rtl font-arabic' : 'ltr font-inter'}`}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <Header 
        lang={lang} 
        setLang={setLang} 
        currency={currency} 
        setCurrency={setCurrency} 
        cartCount={cart.reduce((a, b) => a + b.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <main className="pb-20 lg:pb-0">{renderContent()}</main>
      <Footer lang={lang} setCurrentPage={setCurrentPage} />
      <QuickViewModal 
        product={quickViewProduct} 
        onClose={() => setQuickViewProduct(null)} 
        onAddToCart={addToCart}
        onBuyNow={buyNow}
        lang={lang}
        currency={currency}
      />
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart} 
        onRemove={removeFromCart}
        onUpdateQty={updateQuantity}
        lang={lang}
        currency={currency}
        onViewCart={() => { setIsCartOpen(false); setCurrentPage('Cart'); }}
        onCheckout={() => { setIsCartOpen(false); setCurrentPage('Checkout'); }}
      />
      {!isMobile && (
        <>
          <ChatBot lang={lang} />
          <FloatingContact lang={lang} />
        </>
      )}
      {isMobile && <MobileNav activeTab={currentPage} setActiveTab={(tab) => setCurrentPage(tab as Page)} lang={lang} />}
    </div>
  );

  return (
    <div className="relative">
      <div className="fixed bottom-24 right-8 z-[300] flex flex-col gap-4">
        <button 
          onClick={() => setCurrentPage(currentPage === 'Dashboard' ? 'Home' : 'Dashboard')}
          className="bg-brand-dark text-white px-8 py-4 rounded-3xl shadow-2xl hover:scale-105 transition-transform flex items-center gap-3 font-black text-[10px] uppercase tracking-widest border border-white/10"
        >
          <span className="text-brand-teal">🔬</span>
          {currentPage === 'Dashboard' ? t('Exit Dashboard', 'خروج') : t('AI Asset Scan', 'فحص الصور')}
        </button>
        <button 
          onClick={() => setIsPreviewMode(!isPreviewMode)}
          className="bg-brand-dark text-white px-8 py-4 rounded-3xl shadow-2xl hover:scale-105 transition-transform flex items-center gap-3 font-black text-[10px] uppercase tracking-widest border border-white/10"
        >
          <span className="text-brand-teal">📱</span>
          {isPreviewMode ? 'Exit Responsive Proof' : 'Responsive Showcase'}
        </button>
      </div>

      {!isPreviewMode ? <MainLayout /> : (
        <div className="bg-[#f2f4f7] min-h-screen p-8 overflow-x-auto space-y-16 pb-32">
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-4xl font-black text-brand-dark italic">MaxDeal 2026 <span className="text-brand-teal">Ultra-HD Responsive Proof</span></h1>
            <p className="text-gray-400 font-bold uppercase tracking-[0.4em] text-xs">Simultaneous multi-viewport rendering</p>
          </div>

          <div className="flex gap-12 items-start justify-center">
            {/* 1440px Desktop */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <span className="mb-4 text-[10px] font-black uppercase tracking-widest text-gray-400 bg-white px-4 py-1.5 rounded-full border border-gray-100">1440px Desktop (MacBook Pro)</span>
              <div className="w-[1440px] border-[16px] border-gray-900 rounded-[40px] shadow-2xl h-[900px] overflow-hidden bg-white">
                <div className="h-full overflow-y-auto no-scrollbar"><MainLayout /></div>
              </div>
            </div>

            {/* 1024px Laptop */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <span className="mb-4 text-[10px] font-black uppercase tracking-widest text-gray-400 bg-white px-4 py-1.5 rounded-full border border-gray-100">1024px Laptop</span>
              <div className="w-[1024px] border-[12px] border-gray-800 rounded-[35px] shadow-2xl h-[768px] overflow-hidden bg-white">
                <div className="h-full overflow-y-auto no-scrollbar"><MainLayout /></div>
              </div>
            </div>

            {/* 768px Tablet */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <span className="mb-4 text-[10px] font-black uppercase tracking-widest text-gray-400 bg-white px-4 py-1.5 rounded-full border border-gray-100">768px Tablet (iPad Pro)</span>
              <div className="w-[768px] border-[12px] border-gray-700 rounded-[30px] shadow-2xl h-[1024px] overflow-hidden bg-white">
                <div className="h-full overflow-y-auto no-scrollbar"><MainLayout /></div>
              </div>
            </div>

            {/* 390px Mobile */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <span className="mb-4 text-[10px] font-black uppercase tracking-widest text-gray-400 bg-white px-4 py-1.5 rounded-full border border-gray-100">390px Mobile (iPhone 14)</span>
              <div className="iphone-frame scale-100 h-[844px]"><div className="iphone-island"></div><div className="h-full overflow-y-auto no-scrollbar"><MainLayout isMobile /></div></div>
            </div>

            {/* 375px Small */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <span className="mb-4 text-[10px] font-black uppercase tracking-widest text-gray-400 bg-white px-4 py-1.5 rounded-full border border-gray-100">375px Small (iPhone SE)</span>
              <div className="w-[375px] h-[667px] border-[10px] border-black rounded-[30px] shadow-2xl overflow-hidden bg-white">
                <div className="h-full overflow-y-auto no-scrollbar"><MainLayout isMobile /></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
