
import React from 'react';
import { Language, Page } from '../types';

interface GenericPageProps {
  lang: Language;
  type?: Page;
}

const GenericPage: React.FC<GenericPageProps> = ({ lang, type = 'Pages' }) => {
  const t = (en: string, ar: string) => lang === 'en' ? en : ar;

  if (type === 'Privacy') {
    return (
      <div className="py-24 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-12 lg:p-20 rounded-[60px] shadow-xl space-y-8">
            <h1 className="text-4xl lg:text-6xl font-black text-brand-dark italic">
              {t('Privacy ', 'سياسة ')}
              <span className="text-brand-deep">Policy.</span>
            </h1>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Last Updated: October 2026</p>
            <div className="space-y-6 text-lg text-gray-500 font-medium leading-relaxed">
              <h3 className="text-brand-dark font-black text-2xl">1. Data Collection</h3>
              <p>{t('We collect data to provide better services to all our users. This includes your device 8K resolution preferences and neural link IDs.', 'نقوم بجمع البيانات لتقديم خدمات أفضل لجميع مستخدمينا. يتضمن ذلك تفضيلات دقة 8K لجهازك ومعرفات الرابط العصبي.')}</p>
              <h3 className="text-brand-dark font-black text-2xl">2. Drone Delivery Data</h3>
              <p>{t('Your precise geolocation is shared with our autonomous drone fleet for 15-minute delivery cycles.', 'تتم مشاركة موقعك الجغرافي الدقيق مع أسطول الطائرات بدون طيار المستقل الخاص بنا لدورات توصيل مدتها ١٥ دقيقة.')}</p>
              <h3 className="text-brand-dark font-black text-2xl">3. Biometric Security</h3>
              <p>{t('FaceID and biometric data are processed locally on your device for secure checkout and are never stored on our cloud servers.', 'تتم معالجة FaceID والبيانات البيومترية محلياً على جهازك لإتمام الدفع الآمن ولا يتم تخزينها أبداً على خوادمنا السحابية.')}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'FAQ') {
    const faqs = [
      {
        q: t('How does the 15-minute drone delivery work?', 'كيف تعمل خدمة التوصيل بالدرون في ١٥ دقيقة؟'),
        a: t('Our autonomous drone fleet is active across New Cairo and Sheikh Zayed. Once your order is confirmed via FaceID, a drone is dispatched within 2 minutes for immediate rooftop or balcony delivery.', 'أسطولنا الذكي من الطائرات بدون طيار نشط في القاهرة الجديدة والشيخ زايد. بمجرد تأكيد طلبك، يتم إطلاق طائرة خلال دقيقتين للتوصيل الفوري.')
      },
      {
        q: t('Can I use MaxDeal with my Neuralink Hub?', 'هل يمكنني استخدام ماكس ديل مع جهاز نيورالينك؟'),
        a: t('Yes, MaxDeal 2026 fully supports V3.0 neural interfaces. You can browse, checkout, and track orders using thought-gesture integration.', 'نعم، ماكس ديل ٢٠٢٦ يدعم بالكامل واجهات نيورالينك. يمكنك التسوق وإتمام الدفع وتتبع الطلبات باستخدام التكامل العصبي.')
      },
      {
        q: t('What is the Eco-Exchange program?', 'ما هو برنامج التبادل البيئي؟'),
        a: t('You can trade in your older tech (2025 and earlier) for instant MaxCredits. We handle all recycling at our Cairo green facility.', 'يمكنك استبدال أجهزتك القديمة (٢٠٢٥ وما قبل) بـ MaxCredits فورية. نحن نتولى إعادة التدوير في منشأتنا الخضراء بالقاهرة.')
      },
      {
        q: t('Are products covered by global warranties?', 'هل المنتجات مشمولة بضمانات عالمية؟'),
        a: t('All items sold on MaxDeal carry an official 2-year 2026 Global Warranty + an exclusive 1-year MaxCare local support extension.', 'جميع المنتجات تحمل ضماناً عالمياً لمدة سنتين بالإضافة إلى تمديد دعم محلي "MaxCare" لمدة سنة إضافية.')
      }
    ];

    return (
      <div className="py-24 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-12 lg:p-20 rounded-[60px] shadow-xl space-y-12">
            <h1 className="text-4xl lg:text-6xl font-black text-brand-dark italic">{t('Frequently Asked ', 'الأسئلة الشائعة ')}<span className="text-brand-deep">Questions.</span></h1>
            <div className="space-y-8">
              {faqs.map((faq, i) => (
                <div key={i} className="p-8 rounded-[32px] border border-gray-100 bg-gray-50 group hover:border-brand-deep transition-all">
                  <h3 className="text-xl font-black text-brand-dark mb-4">{faq.q}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'Contact') {
    return (
      <div className="py-24 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-[60px] shadow-xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 bg-brand-dark text-white space-y-8">
              <h1 className="text-4xl lg:text-5xl font-black italic">{t('Contact ', 'اتصل ')}<span className="text-brand-accent">Support.</span></h1>
              <p className="text-lg opacity-80 leading-relaxed">{t('Our AI support agents and human experts are available 24/7 across the globe to help you with the next generation of tech.', 'وكلاء الدعم الأذكياء والخبراء البشر متاحون ٢٤/٧ لمساعدتك.')}</p>
              
              <div className="space-y-6 pt-8">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">📞</span>
                  <div>
                    <div className="text-[10px] font-black uppercase text-brand-accent">Phone Support</div>
                    <div className="text-xl font-bold">+201112308395</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-3xl">💬</span>
                  <div>
                    <div className="text-[10px] font-black uppercase text-brand-accent">Official WhatsApp</div>
                    <a href="https://wa.me/201112308395" target="_blank" rel="noreferrer" className="text-xl font-bold hover:text-brand-accent transition-colors underline decoration-brand-accent/30 decoration-2 underline-offset-4">Click to Chat</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-3xl">✈️</span>
                  <div>
                    <div className="text-[10px] font-black uppercase text-brand-accent">Official Telegram</div>
                    <a href="https://t.me/maxdeal_support" target="_blank" rel="noreferrer" className="text-xl font-bold hover:text-brand-accent transition-colors underline decoration-brand-accent/30 decoration-2 underline-offset-4">Join Channel</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-3xl">🏠</span>
                  <div>
                    <div className="text-[10px] font-black uppercase text-brand-accent">Cairo Tech Hub</div>
                    <div className="text-xl font-bold">{t('Building 102, New Cairo', 'مبنى ١٠٢، القاهرة الجديدة')}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20 space-y-6">
              <h3 className="text-2xl font-black text-brand-dark italic">{t('Send a Message', 'أرسل رسالة')}</h3>
              <div className="space-y-4">
                <input type="text" placeholder={t('Full Name', 'الاسم الكامل')} className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-deep/30 rounded-2xl px-6 py-4 outline-none transition-all font-medium" />
                <input type="email" placeholder={t('Email Address', 'البريد الإلكتروني')} className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-deep/30 rounded-2xl px-6 py-4 outline-none transition-all font-medium" />
                <textarea placeholder={t('Your Message...', 'رسالتك...')} rows={4} className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-deep/30 rounded-2xl px-6 py-4 outline-none transition-all font-medium resize-none" />
                <button className="w-full bg-brand-deep text-white py-5 rounded-2xl font-black text-lg shadow-xl hover:bg-brand-dark transition-all transform hover:scale-[1.02]">
                  {t('SEND MESSAGE', 'إرسال الرسالة')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-20">
          <section className="bg-white p-12 lg:p-20 rounded-[60px] shadow-xl space-y-8">
            <h1 className="text-4xl lg:text-6xl font-black text-brand-dark italic">{t('About MaxDeal', 'حول ماكس ديل')}</h1>
            <p className="text-xl text-gray-500 font-medium leading-relaxed">
              {t('Founded in Cairo in 2024, MaxDeal was built with a single vision: to bring the most advanced global technology to the Egyptian market with ultra-HD 8K clarity. We are not just a store; we are a gateway to the next era of smart living.', 
                 'تأسست ماكس ديل في القاهرة عام ٢٠٢٤، وتم بناؤها برؤية واحدة: جلب أحدث التقنيات العالمية إلى السوق المصري بدقة 8K الواقعية الفائقة. نحن لسنا مجرد متجر؛ نحن بوابة للعصر القادم من الحياة الذكية.')}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-gray-100">
              <div className="text-center">
                <div className="text-4xl font-black text-brand-deep mb-2">10M+</div>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{t('Happy Users', 'مستخدم سعيد')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-brand-deep mb-2">2026</div>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{t('Tech Ready', 'جاهز للمستقبل')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-brand-deep mb-2">24/7</div>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{t('Support', 'دعم متواصل')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-brand-deep mb-2">FREE</div>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{t('Shipping', 'شحن مجاني')}</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GenericPage;
