
import React, { useState, useEffect } from 'react';
import { Language } from '../types';

interface TrackDronePageProps {
  lang: Language;
  onBack: () => void;
}

const TrackDronePage: React.FC<TrackDronePageProps> = ({ lang, onBack }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;
  const [progress, setProgress] = useState(35);
  const [altitude, setAltitude] = useState(120);
  const [speed, setSpeed] = useState(88);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 0.1 : 100));
      setAltitude(prev => prev + (Math.random() - 0.5) * 2);
      setSpeed(prev => 85 + (Math.random() - 0.5) * 10);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark text-white py-12 px-4 relative overflow-hidden">
      {/* Background Grid / HUD Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #05BFDB 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-brand-accent font-black mb-8 hover:-translate-x-1 transition-transform"
        >
          {t('← Back to Dashboard', '← العودة للوحة التحكم')}
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Visual - Map Simulation */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-dark border border-white/10 rounded-[40px] p-8 aspect-video relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[#0a1a3a]">
                {/* Simulated Map Grid */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
                
                {/* Drone Path */}
                <svg className="absolute inset-0 w-full h-full">
                  <path 
                    d="M 100 400 Q 300 100 700 300" 
                    fill="none" 
                    stroke="rgba(5, 191, 219, 0.2)" 
                    strokeWidth="4" 
                    strokeDasharray="10 10"
                  />
                  <path 
                    d="M 100 400 Q 300 100 700 300" 
                    fill="none" 
                    stroke="#05BFDB" 
                    strokeWidth="4" 
                    strokeDasharray="1000"
                    strokeDashoffset={1000 - (progress * 10)}
                    className="transition-all duration-1000"
                  />
                  {/* Drone Icon Placeholder on Path */}
                  <circle cx="400" cy="210" r="10" fill="#05BFDB" className="animate-pulse shadow-[0_0_20px_#05BFDB]" />
                </svg>

                {/* HUD Data Overlays */}
                <div className="absolute top-8 left-8 space-y-2">
                  <div className="glass px-3 py-1 rounded text-[10px] font-black text-brand-dark uppercase tracking-tighter">Live Telemetry</div>
                  <div className="text-4xl font-black italic tracking-tighter">CAIRO_HUB_SEC_4</div>
                </div>

                <div className="absolute bottom-8 right-8 text-right">
                  <div className="text-xs font-black text-brand-accent uppercase mb-1">ETA</div>
                  <div className="text-5xl font-black italic tracking-tighter">00:12:45</div>
                </div>
              </div>
            </div>

            {/* Delivery Steps */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: t('Dispatched', 'تم الإرسال'), status: 'Done', time: '14:20' },
                { label: t('In Transit', 'في الطريق'), status: 'Active', time: '14:22' },
                { label: t('Airspace Appr.', 'تصريح الجو'), status: 'Pending', time: '--:--' },
                { label: t('Final Approach', 'الوصول النهائي'), status: 'Pending', time: '--:--' }
              ].map((step, i) => (
                <div key={i} className={`p-6 rounded-3xl border ${step.status === 'Done' ? 'border-brand-deep bg-brand-deep/10' : step.status === 'Active' ? 'border-brand-accent bg-brand-accent/5 animate-pulse' : 'border-white/5 bg-white/5 opacity-40'} transition-all`}>
                  <div className="text-[10px] font-black uppercase mb-1">{step.time}</div>
                  <div className="font-black text-sm">{step.label}</div>
                  <div className="mt-2 text-[8px] font-bold uppercase text-brand-accent">{step.status}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Telemetry */}
          <div className="space-y-6">
            <div className="glass-dark border border-white/10 rounded-[40px] p-8 space-y-8 shadow-xl">
              <h3 className="text-xl font-black italic border-b border-white/10 pb-4">{t('Drone Stats', 'إحصائيات الدرون')}</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-[10px] font-black uppercase text-white/40 mb-2">
                    <span>{t('Altitude', 'الارتفاع')}</span>
                    <span>{altitude.toFixed(1)}m</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-accent transition-all duration-1000" style={{ width: `${(altitude/200)*100}%` }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[10px] font-black uppercase text-white/40 mb-2">
                    <span>{t('Velocity', 'السرعة')}</span>
                    <span>{speed.toFixed(1)} km/h</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-deep transition-all duration-1000" style={{ width: `${(speed/150)*100}%` }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[10px] font-black uppercase text-white/40 mb-2">
                    <span>{t('Battery Charge', 'شحن البطارية')}</span>
                    <span>88%</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 transition-all duration-1000" style={{ width: `88%` }}></div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center text-brand-dark text-xl font-black">AI</div>
                  <div>
                    <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">Pilot System</div>
                    <div className="font-bold">MaxAutopilot v4.2</div>
                  </div>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  {t('Optimal flight path calculated using real-time Cairo wind data. Avoiding congested airspace above Nile City Towers.', 
                     'تم حساب مسار الرحلة الأمثل باستخدام بيانات رياح القاهرة في الوقت الفعلي. تجنب المجال الجوي المزدحم فوق أبراج نايل سيتي.')}
                </p>
              </div>

              <button className="w-full bg-brand-accent text-brand-dark py-4 rounded-2xl font-black text-sm shadow-xl hover:scale-105 transition-all">
                {t('CONTACT COURIER AI', 'تواصل مع ذكاء التوصيل')}
              </button>
            </div>

            <div className="glass-dark border border-white/10 rounded-[40px] p-8 flex items-center gap-6">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-3xl">📦</div>
              <div>
                <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">{t('Current Payload', 'الحمولة الحالية')}</div>
                <div className="text-lg font-black italic">MacBook Pro M4 Max</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackDronePage;
