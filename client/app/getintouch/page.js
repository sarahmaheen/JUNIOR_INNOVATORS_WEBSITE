"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function GetInTouch() {
  const titleRef = useRef(null);
  const socialLinksRef = useRef([]);
  const navLinksRef = useRef([]);

  useEffect(() => {
    // Title Animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Social Media Links Animation with Stagger
    gsap.fromTo(
      socialLinksRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: socialLinksRef.current[0],
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Navigation Links Animation with Stagger
    gsap.fromTo(
      navLinksRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: navLinksRef.current[0],
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[rgb(var(--light-gray))] text-right rtl justify-between gap-8 p-8">
      {/* First Div: Large Outlined Text */}
      <div className="flex justify-center items-center">
        <h1
          ref={titleRef}
          className="text-6xl md:text-[15rem] font-bold   tracking-widest text-center"
          style={{ WebkitTextStroke: "1px rgb(var(--mexican-red))", color: "transparent" }}
        >
          تواصل معنا
        </h1>
      </div>

      {/* Second Div: Links Section */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-black p-8 rounded-2xl gap-8">
        {/* Social Media Links */}
        <div className="flex-1 flex flex-col  space-y-4 md:space-y-0 md:space-x-6 text-center">
          {[
            { href: "https://facebook.com", label: "فيسبوك", Icon: Facebook },
            { href: "https://instagram.com", label: "انستجرام", Icon: Instagram },
            { href: "https://wa.me/1234567890", label: "واتساب", Icon: MessageCircle },
            { href: "https://linkedin.com", label: "لينكدإن", Icon: Linkedin },
          ].map(({ href, label, Icon }, index) => (
            <a
              key={index}
              href={href}
              ref={(el) => (socialLinksRef.current[index] = el)}
              className="flex items-center gap-2 text-white text-xl transition-all relative group text-center justify-center"
            >
              <Icon className="w-10 h-10  p-2 rounded-full transition-all group-hover:scale-110" />
              {label}
              <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
            </a>
          ))}
        </div>

        {/* Navigation Links */}
        <div className="flex-1 text-lg text-white font-medium flex flex-col space-y-2 mt-6 md:mt-0 text-center">
          {[
            { href: "/", label: "الرئيسية" },
            { href: "/about", label: "من نحن" },
            { href: "/services", label: "الخدمات" },
            { href: "/contact", label: "اتصل بنا" },
          ].map(({ href, label }, index) => (
            <a
              key={index}
              href={href}
              ref={(el) => (navLinksRef.current[index] = el)}
              className="relative group transition-all"
            >
              {label}
              <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
            </a>
          ))}
        </div>
        <div className=" flex-1 flex flex-col m-4 gap-2 justify-center  items-center"> 
        <p class="text-center text-sm text-white border-[1px] border-white p-2">
        نحن هنا لنساعدك في كل خطوة، فلا تتردد في التواصل معنا إذا كان لديك أي استفسار أو اقتراح. نسعى دائمًا لتقديم أفضل تجربة ممكنة لعملائنا ونؤمن بأن التواصل هو مفتاح النجاح. سواء كنت بحاجة إلى دعم، أو لديك فكرة رائعة، أو ترغب في الانضمام إلى مجتمعنا، فنحن مستعدون للاستماع إليك. يمكنك الوصول إلينا عبر وسائل التواصل الاجتماعي أو من خلال البريد الإلكتروني، وسنكون سعداء بالرد عليك في أقرب وقت ممكن. نحن نقدر وقتك، ونعمل بجد لضمان حصولك على أفضل خدمة. لا تتردد في إرسال رسالتك، وسنعمل جاهدين لتلبية احتياجاتك. هدفنا هو بناء علاقات قوية قائمة على الثقة  من رحلتك!
</p>
        <p class="text-center text-sm text-gray-500">
  © 2025 اسم_الموقع. جميع الحقوق محفوظة.
</p>
        </div>
       
      </div>
     

    </div>
  );
}
