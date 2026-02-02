
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { Language } from '../types';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface ChatBotProps {
  lang: Language;
}

const ChatBot: React.FC<ChatBotProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatInstance = useRef<any>(null);

  const t = (en: string, ar: string) => lang === 'en' ? en : ar;

  // Initialize Chat Session
  const initChat = () => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatInstance.current = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are the MaxDeal AI Shopping Assistant. 
        You represent MaxDeal, Cairo's premium 2026 tech store. 
        Your tone is futuristic, helpful, and professional. 
        You specialize in products like Apple Vision Pro 2, RTX 5090 laptops, and Galaxy S26 Ultra. 
        Mention our 15-minute drone delivery in New Cairo if asked about shipping. 
        Speak in ${lang === 'en' ? 'English' : 'Arabic'}. 
        Keep responses concise and energetic.`,
      },
    });
  };

  useEffect(() => {
    if (isOpen && !chatInstance.current) {
      initChat();
      // Initial greeting if no messages exist
      if (messages.length === 0) {
        const greeting = lang === 'en' 
          ? "Welcome to the future of retail! I'm your MaxDeal Assistant. How can I help you find the perfect 2026 hardware today?"
          : "مرحباً بك في مستقبل التكنولوجيا! أنا مساعد ماكس ديل الذكي. كيف يمكنني مساعدتك في العثور على أفضل أجهزة ٢٠٢٦ اليوم؟";
        setMessages([{ role: 'model', text: greeting }]);
      }
    }
  }, [isOpen, lang]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const streamResponse = await chatInstance.current.sendMessageStream({ message: userMessage });
      
      let fullText = "";
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of streamResponse) {
        const c = chunk as GenerateContentResponse;
        const chunkText = c.text;
        if (chunkText) {
          fullText += chunkText;
          setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1] = { role: 'model', text: fullText };
            return newMessages;
          });
        }
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: t("Sorry, my neural link is flickering. Please try again in a moment.", "عذراً، الرابط العصبي الخاص بي غير مستقر. يرجى المحاولة مرة أخرى لاحقاً.") 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-32 right-8 z-[200]">
      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-br from-brand-deep to-brand-dark rounded-full shadow-[0_15px_30px_rgba(220,38,38,0.4)] flex items-center justify-center text-3xl hover:scale-110 transition-transform relative group"
      >
        <span className="animate-pulse">🤖</span>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
        <div className="absolute inset-0 rounded-full border-2 border-brand-accent scale-100 group-hover:scale-125 opacity-0 group-hover:opacity-40 transition-all"></div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={`absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[550px] bg-white rounded-[40px] shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-8 duration-300`}>
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-dark to-brand-deep p-6 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-xl">
                🧠
              </div>
              <div>
                <h3 className="font-black italic text-sm tracking-tighter uppercase">MaxDeal AI</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-bold text-white/70 uppercase">{t('Online | 8K Neural Link', 'متصل | رابط عصبي 8K')}</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="opacity-60 hover:opacity-100 p-2">
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-6 space-y-4 no-scrollbar bg-gray-50/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] px-5 py-3 rounded-3xl text-sm font-medium leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-brand-deep text-white rounded-tr-none' 
                      : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none'
                  }`}
                >
                  {msg.text || (isLoading && i === messages.length - 1 ? "..." : "")}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="relative flex items-center">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t("Ask about 2026 tech...", "اسأل عن تقنيات ٢٠٢٦...")}
                className="w-full bg-gray-100 rounded-2xl py-4 pl-6 pr-14 outline-none border-2 border-transparent focus:border-brand-deep/20 transition-all font-medium text-sm"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className={`absolute right-2 p-2.5 rounded-xl transition-all ${isLoading ? 'opacity-30' : 'bg-brand-dark text-white hover:bg-brand-deep active:scale-90'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
