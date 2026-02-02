
import React from 'react';
import { Language } from '../types';

interface ComparisonMatrixProps {
  lang: Language;
}

const ComparisonMatrix: React.FC<ComparisonMatrixProps> = ({ lang }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;

  const specs = [
    { label: t('Processor', 'المعالج'), v1: 'A19 Pro Bionic', v2: 'Snapdragon G8 Gen 6', v3: 'M4 Max Ultra' },
    { label: t('Display', 'الشاشة'), v1: '6.9" ProMotion OLED', v2: '7.2" Dynamic AMOLED', v3: '16.2" Liquid Retina' },
    { label: t('Camera', 'الكاميرا'), v1: '48MP Triple Lens', v2: '200MP Space Zoom', v3: '12MP Center Stage' },
    { label: t('Battery', 'البطارية'), v1: '48 Hours', v2: '55 Hours', v3: '22 Hours' },
    { label: t('AR Ready', 'دعم AR'), v1: '✓ Yes', v2: '✓ Yes', v3: '✓ Yes' },
  ];

  return (
    <section className="mt-32">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl font-black text-brand-dark italic">{t('Compare the ', 'قارن بين ')}<span className="text-brand-teal">{t('Flagships', 'الأجهزة الرائدة')}</span></h2>
        <p className="text-gray-400 font-medium">{t('Decide which 2026 powerhouse fits your workflow.', 'قرر أي وحش من وحوش ٢٠٢٦ يناسب عملك.')}</p>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <table className="w-full border-separate border-spacing-x-4">
          <thead>
            <tr>
              <th className="p-6"></th>
              <th className="p-8 bg-gray-50 rounded-t-[40px] border-x border-t border-gray-100 min-w-[200px]">
                <img src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=200" className="h-24 mx-auto mb-4 object-contain" alt="iPhone" />
                <div className="text-sm font-black text-brand-dark uppercase">iPhone 17 Pro</div>
              </th>
              <th className="p-8 bg-brand-teal/5 rounded-t-[40px] border-x border-t border-brand-teal/10 min-w-[200px]">
                <img src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=200" className="h-24 mx-auto mb-4 object-contain" alt="S26" />
                <div className="text-sm font-black text-brand-teal uppercase">Galaxy S26 Ultra</div>
              </th>
              <th className="p-8 bg-gray-50 rounded-t-[40px] border-x border-t border-gray-100 min-w-[200px]">
                <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=200" className="h-24 mx-auto mb-4 object-contain" alt="Mac" />
                <div className="text-sm font-black text-brand-dark uppercase">MacBook M4 Max</div>
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {specs.map((spec, i) => (
              <tr key={i}>
                <td className="p-6 text-left font-black text-[10px] text-gray-400 uppercase tracking-widest">{spec.label}</td>
                <td className="p-6 bg-gray-50/50 border-x border-gray-100 text-sm font-bold text-gray-600">{spec.v1}</td>
                <td className="p-6 bg-brand-teal/5 border-x border-brand-teal/10 text-sm font-black text-brand-dark">{spec.v2}</td>
                <td className="p-6 bg-gray-50/50 border-x border-gray-100 text-sm font-bold text-gray-600">{spec.v3}</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td className="p-8 bg-gray-50 rounded-b-[40px] border-x border-b border-gray-100">
                <button className="text-[10px] font-black text-brand-dark hover:underline uppercase">{t('Details', 'تفاصيل')}</button>
              </td>
              <td className="p-8 bg-brand-teal/5 rounded-b-[40px] border-x border-b border-brand-teal/10">
                <button className="text-[10px] font-black text-brand-teal hover:underline uppercase">{t('Details', 'تفاصيل')}</button>
              </td>
              <td className="p-8 bg-gray-50 rounded-b-[40px] border-x border-b border-gray-100">
                <button className="text-[10px] font-black text-brand-dark hover:underline uppercase">{t('Details', 'تفاصيل')}</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparisonMatrix;
