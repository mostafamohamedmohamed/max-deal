
import React, { useState } from 'react';
import { Language } from '../types';

interface AccountPageProps {
  lang: Language;
}

const AccountPage: React.FC<AccountPageProps> = ({ lang }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;
  const [activeTab, setActiveTab] = useState<'orders' | 'wishlist' | 'settings'>('orders');

  const orders = [
    { id: '#MD-9982', date: '2026-10-24', status: 'Delivering', total: '124,950 EGP', items: 'MacBook Pro M4 Max' },
    { id: '#MD-8210', date: '2026-09-12', status: 'Completed', total: '39,950 EGP', items: 'Apple Watch Ultra 3' }
  ];

  return (
    <div className="min-h-screen bg-brand-dark text-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="glass-dark border border-white/10 rounded-[40px] p-8 text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover rounded-full border-4 border-brand-accent shadow-2xl" />
                <div className="absolute bottom-1 right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-brand-dark"></div>
              </div>
              <h2 className="text-2xl font-black italic mb-1">Ahmed Kamal</h2>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-8">Premium Member 2026</p>
              
              <nav className="space-y-2">
                {[
                  { id: 'orders', label: t('Order History', 'تاريخ الطلبات'), icon: '📦' },
                  { id: 'wishlist', label: t('My Wishlist', 'قائمة أمنياتي'), icon: '🤍' },
                  { id: 'settings', label: t('Account Settings', 'إعدادات الحساب'), icon: '⚙️' }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id as any)}
                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-sm transition-all ${activeTab === item.id ? 'bg-brand-deep text-white shadow-lg' : 'hover:bg-white/5 text-white/60'}`}
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </button>
                ))}
                <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-sm text-red-400 hover:bg-red-400/10 transition-all mt-10">
                  <span>🚪</span>
                  {t('Logout', 'تسجيل الخروج')}
                </button>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-grow space-y-8">
            <div className="bg-brand-deep/20 border border-brand-deep/30 rounded-[40px] p-10 flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-black italic mb-2">
                  {t('Welcome Back, Ahmed', 'مرحباً بعودتك يا أحمد')}
                </h1>
                <p className="text-brand-accent font-bold">
                  {t('Your RTX 5090 order is currently being shipped by drone.', 'طلب RTX 5090 الخاص بك قيد الشحن حالياً بواسطة طائرة بدون طيار.')}
                </p>
              </div>
              <div className="hidden md:block glass p-6 rounded-3xl border border-white/20">
                <div className="text-[10px] font-black uppercase text-brand-dark mb-1">MaxCredits</div>
                <div className="text-3xl font-black text-brand-dark">8,420</div>
              </div>
            </div>

            {activeTab === 'orders' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-black italic ml-4">{t('Recent Orders', 'الطلبات الأخيرة')}</h3>
                <div className="grid gap-4">
                  {orders.map(order => (
                    <div key={order.id} className="glass-dark border border-white/10 rounded-[32px] p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-brand-accent/30 transition-all group">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-2xl">🛍️</div>
                        <div>
                          <div className="text-sm font-black text-brand-accent">{order.id}</div>
                          <div className="font-bold text-lg">{order.items}</div>
                          <div className="text-xs text-white/40 font-bold">{order.date}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-10">
                        <div className="text-right">
                          <div className="text-xs font-black text-white/40 uppercase mb-1">{t('Total', 'الإجمالي')}</div>
                          <div className="font-black">{order.total}</div>
                        </div>
                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${order.status === 'Delivering' ? 'bg-brand-accent text-brand-dark animate-pulse' : 'bg-green-500/20 text-green-400'}`}>
                          {t(order.status, order.status === 'Delivering' ? 'قيد التوصيل' : 'مكتمل')}
                        </span>
                        <button className="bg-white/5 hover:bg-white/10 p-3 rounded-xl transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div className="text-center py-20 opacity-40">
                <div className="text-6xl mb-4">🤍</div>
                <h3 className="text-2xl font-black italic">{t('Your wishlist is empty', 'قائمة أمنياتك فارغة')}</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
