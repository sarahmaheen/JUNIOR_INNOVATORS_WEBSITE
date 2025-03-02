

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const awards = [
  { id: 1, image: "./images/awards/image1.jpg", title: "🏆 جائزة التميز", description: "هذه الجائزة مُنحت للأداء المتميز." },
  { id: 2, title: "🎨 أفضل تصميم", description: "تم اختيار هذا التصميم كأفضل تصميم لهذا العام." },
  { id: 3, image: "./images/awards/image14.jpg" },
  { id: 4, description: "هذه الجائزة تقدير للابتكار." },
  { id: 5, image: "https://i.pinimg.com/236x/2e/93/cc/2e93cc7542aeb64d5cdf1d93ba5e68c2.jpg", title: "🌟 جائزة الإبداع", description: "تكريم للأفكار المبتكرة في التصميم والتطوير." },
  { id: 6, title: "🔷 أفضل واجهة مستخدم", description: "واجهة مستخدم سلسة وجذابة حصلت على أعلى تقييم." },
  { id: 7, title: "🛠️ أفضل تجربة مستخدم", description: "تجربة استخدام فريدة من نوعها." },
  { id: 8, image: "./images/awards/image16.jpg", title: "💻 أفضل موقع إلكتروني", description: "موقع إلكتروني حاز على إعجاب الحكام." },
  { id: 9, image: "./images/awards/image11.jpg", description: "إنجاز رائع في عالم التقنية." },
  { id: 10, title: "🚀 جائزة الأداء الفائق", description: "أداء مثالي دون أي تأخير أو أخطاء." },
  { id: 11, title: "🥇 تكريم خاص", description: "تكريم لشخصيات بارزة في مجال التقنية." },
  { id: 12, image: "./images/awards/image15.jpg" },
];

export default function AwwwardsSection() {
  const gridRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      gridRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
<div className="flex  items-center md:justify-center justify-between md:m-4">
  <h2 className="md:text-6xl text-4xl font-bold text-center mb-6 text-[rgb(var(--teal-blue))]">
    🏆 الجوائز والتكريمات
  </h2>
  <img src="./icons-images/certificate.png" alt="Awards and Recognitions" className="w-auto h-20 " />
</div>

      {/* Masonry Layout */}
      <div ref={gridRef} className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {awards.map((award) => (
          <div 
            key={award.id} 
            className="break-inside-avoid bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105"
          >
            {award.image && <img src={award.image} alt="Award" className="w-full rounded-md mb-2" />}
            {award.title && <h3 className="text-2xl font-semibold text-black text-right">{award.title}</h3>}
            {award.description && <p className="text-gray-800 text-lg text-right">{award.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
