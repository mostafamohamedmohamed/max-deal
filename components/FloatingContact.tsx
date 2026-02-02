
import React, { useState } from 'react';
import { Language } from '../types';

interface FloatingContactProps {
  lang: Language;
}

const FloatingContact: React.FC<FloatingContactProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;

  const contacts = [
    {
      name: 'WhatsApp',
      icon: '💬',
      color: 'bg-[#25D366]',
      link: 'https://wa.me/201112308395',
      label: t('Live Chat', 'محادثة مباشرة')
    },
    {
      name: 'Telegram',
      icon: '✈️',
      color: 'bg-[#0088cc]',
      link: 'https://t.me/maxdeal_support', // Placeholder telegram
      label: t('Tech Channel', 'قناة التكنولوجيا')
    }
  ];

  return (
    <div className="fixed bottom-52 right-8 z-[200] flex flex-col items-end gap-3">
      {/* Contact Options */}
      <div className={`flex flex-col gap-3 transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-50 pointer-events-none'}`}>
        {contacts.map((contact) => (
          <a
            key={contact.name}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3"
          >
            <div className="glass px-4 py-2 rounded-2xl border border-white/20 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px] font-black text-brand-dark uppercase tracking-widest whitespace-nowrap">{contact.label}</span>
            </div>
            <div className={`w-14 h-14 ${contact.color} text-white rounded-full shadow-2xl flex items-center justify-center text-2xl hover:scale-110 transition-transform`}>
              {contact.icon}
            </div>
          </a>
        ))}
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-3xl transition-all duration-500 border-4 border-white ${isOpen ? 'bg-brand-dark rotate-45' : 'bg-brand-deep rotate-0'}`}
      >
        <span className="text-white">{isOpen ? '×' : '⚡'}</span>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-accent"></span>
          </span>
        )}
      </button>
    </div>
  );
};

export default FloatingContact;
