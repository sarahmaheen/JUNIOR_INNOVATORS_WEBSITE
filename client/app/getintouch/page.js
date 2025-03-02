// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// export default function GetInTouch() {
//   const titleRef = useRef(null);
//   const socialLinksRef = useRef([]);
//   const navLinksRef = useRef([]);

//   useEffect(() => {
//     // Title Animation
//     gsap.fromTo(
//       titleRef.current,
//       { opacity: 0, y: -50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: titleRef.current,
//           start: "top 80%",
//           toggleActions: "play none none none",
//         },
//       }
//     );

//     // Social Media Links Animation with Stagger
//     gsap.fromTo(
//       socialLinksRef.current,
//       { opacity: 0, x: 50 },
//       {
//         opacity: 1,
//         x: 0,
//         duration: 0.8,
//         stagger: 0.2,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: socialLinksRef.current[0],
//           start: "top 80%",
//           toggleActions: "play none none none",
//         },
//       }
//     );

//     // Navigation Links Animation with Stagger
//     gsap.fromTo(
//       navLinksRef.current,
//       { opacity: 0, x: -50 },
//       {
//         opacity: 1,
//         x: 0,
//         duration: 0.8,
//         stagger: 0.2,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: navLinksRef.current[0],
//           start: "top 80%",
//           toggleActions: "play none none none",
//         },
//       }
//     );
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen bg-[rgb(var(--light-gray))] text-right rtl justify-between gap-8 p-4">
//       {/* First Div: Large Outlined Text */}
//       <div className="flex justify-center items-center">
//         <h1
//           ref={titleRef}
//           className="text-6xl md:text-[15rem] font-bold   tracking-widest text-center"
//           style={{ WebkitTextStroke: "1px rgb(var(--mexican-red))", color: "transparent" }}
//         >
//           تواصل معنا
//         </h1>
//       </div>

//       {/* Second Div: Links Section */}
//       <div className="flex flex-col md:flex-row items-center justify-between bg-black p-4   rounded-2xl gap-8">
//         {/* Social Media Links */}
//         <div className="flex-1 flex flex-col  space-y-4 md:space-y-0 md:space-x-6 text-center">
//           {[
//             { href: "https://facebook.com", label: "فيسبوك", Icon: Facebook },
//             { href: "https://instagram.com", label: "انستجرام", Icon: Instagram },
//             { href: "https://wa.me/1234567890", label: "واتساب", Icon: MessageCircle },
//             { href: "https://linkedin.com", label: "لينكدإن", Icon: Linkedin },
//           ].map(({ href, label, Icon }, index) => (
//             <a
//               key={index}
//               href={href}
//               ref={(el) => (socialLinksRef.current[index] = el)}
//               className="flex items-center gap-2 text-white text-xl  transition-all relative group text-center justify-center"
//             >
//             <div className="bg-[rgb(var(--mexican-red))] p-2 rounded-full">
//               <Icon className="w-8 h-8  bg-transparent font-black transition-all group-hover:scale-110" />
//               </div>
//               {label}
//               <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
//             </a>
//           ))}
//         </div>

//         {/* Navigation Links */}
//         <div className="flex-1 text-lg text-white font-medium flex flex-col space-y-2 mt-6 md:mt-0 text-center">
//           {[
//             { href: "/", label: "الرئيسية" },
//             { href: "/about", label: "من نحن" },
//             { href: "/services", label: "الخدمات" },
//             { href: "/contact", label: "اتصل بنا" },
//           ].map(({ href, label }, index) => (
//             <a
//               key={index}
//               href={href}
//               ref={(el) => (navLinksRef.current[index] = el)}
//               className="relative group transition-all"
//             >
//               {label}
//               <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
//             </a>
//           ))}
//         </div>
//         <div className=" flex-1 flex flex-col m-4 gap-2 justify-center  items-center"> 
//         <p class="text-center text-sm text-white border-[1px] border-white p-2">
//         نحن هنا لنساعدك في كل خطوة، فلا تتردد في التواصل معنا إذا كان لديك أي استفسار أو اقتراح. نسعى دائمًا لتقديم أفضل تجربة ممكنة لعملائنا ونؤمن بأن التواصل هو مفتاح النجاح. سواء كنت بحاجة إلى دعم، أو لديك فكرة رائعة، أو ترغب في الانضمام إلى مجتمعنا، فنحن مستعدون للاستماع إليك. يمكنك الوصول إلينا عبر وسائل التواصل الاجتماعي أو من خلال البريد الإلكتروني، وسنكون سعداء بالرد عليك في أقرب وقت ممكن. نحن نقدر وقتك، ونعمل بجد لضمان حصولك على أفضل خدمة. لا تتردد في إرسال رسالتك، وسنعمل جاهدين لتلبية احتياجاتك. هدفنا هو بناء علاقات قوية قائمة على الثقة  من رحلتك!
// </p>
//         <p class="text-center text-sm text-gray-500">
//   © 2025 اسم_الموقع. جميع الحقوق محفوظة.
// </p>
//         </div>
       
//       </div>
     

//     </div>
//   );
// }










































"use client";


import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GetInTouch() {
  const titleRef = useRef(null);
  const socialLinksRef = useRef([]);
  const navLinksRef = useRef([]);


  const handleScroll = (event, sectionId) => {
    event.preventDefault(); // Prevent default link behavior

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


  useEffect(() => {
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
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[rgb(var(--light-gray))] text-right rtl justify-between gap-8 p-4 relative">
      <div className="flex justify-center items-center">
        <h1
          ref={titleRef}
          className="text-6xl md:text-[15rem] font-bold tracking-widest text-center"
          style={{ WebkitTextStroke: "1px rgb(var(--mexican-red))", color: "transparent" }}
        >
          تواصل معنا
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-around bg-black p-4 rounded-2xl gap-8">
        {/* Social Media Links */}
        <div className="flex-1 flex flex-row space-y-8 space-x-4  md:space-y-2 md:space-x-2 text-center justify-between md:justify-center">
          {[
            {
              href: "https://www.facebook.com/Ju.Innovators",
              // label: "فيسبوك",
              svg: (
                <svg className="w-4 h-4 md:w-8 md:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
              ),
            },
            {
              href: "https://twitter.com/Ju_Innovators",
              // label: "فيسبوك",
              svg: (
                <svg className="w-4 h-4 md:w-8 md:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>              ),
            },
            {
              href: "https://t.me/JuInnovators",
              svg: (
                <svg
                  className="w-5 h-5 md:w-8 md:h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9.17 14.73l-.39 5.12c.56 0 .8-.24 1.1-.52l2.64-2.57 5.48 3.9c1 .56 1.7.27 1.96-.93l3.57-16.72c.32-1.45-.52-2-1.47-1.7L1.3 9.86c-1.4.52-1.38 1.25-.25 1.58l5.54 1.69L18.9 5.3c.6-.4 1.17-.18.71.23L9.17 14.73z" />
                </svg>
              ),
            },
           
            {
              href: "https://linkedin.com",
              // label: "فيسبوك",
              svg: (
                <svg className="w-4 h-4 md:w-8 md:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>              ),
            },
            {
              href: "https://www.instagram.com/ju.innovators/",
              // label: "انستجرام",
              svg: (
                <svg className="w-4 h-4 md:w-8 md:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
              ),
            },
            {
              href: "https://wa.me/249997707000",
              // label: "واتساب",
              svg: (
                <svg className="w-4 h-4 md:w-8 md:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
              ),
            },
          ].map(({ href, label, svg }, index) => (
            <a
              key={index}
              href={href}
              ref={(el) => (socialLinksRef.current[index] = el)}
              className="flex items-center gap-2 text-white text-xl transition-all relative group text-center justify-center"
            >
              <div className="bg-[rgb(var(--mexican-red))] p-2 rounded-full">{svg}</div>
              {label}
            </a>
          ))}
        </div>
        {/* <div className="flex-1 text-lg text-white font-medium flex flex-col space-y-2 mt-6 md:mt-0 text-center">
  {[
    { href: "#home", label: "الرئيسية" },
    { href: "#about", label: "من نحن" },
    { href: "#services", label: "الخدمات" },
    { href: "#contact", label: "اتصل بنا" },
  ].map(({ href, label }, index) => (
    <a
      key={index}
      href={href}
      className="relative group transition-all scroll-smooth"
    >
      {label}
      <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
    </a>
  ))}
</div> */}


<div className="flex-1 text-lg text-white font-medium flex flex-col space-y-2 mt-6 md:mt-0 text-center">
      {[
        { id: "home", label: "الرئيسية" },
        { id: "about", label: "من نحن" },
        { id: "howtogetstart", label: "الخدمات" },
        { id: "awards", label: "الخدمات" },
        { id: "meetourteam", label: "الخدمات" },
        { id: "contact", label: "اتصل بنا" },
      ].map(({ id, label }, index) => (
        <Link key={index} href={`/#${id}`} onClick={(e) => handleScroll(e, id)}>
          <span className="relative group transition-all cursor-pointer">
            {label}
            <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
          </span>
        </Link>
      ))}
    </div>

        <div className=" flex-1 flex flex-col m-4 gap-2 justify-center  items-center"> 
        <p class="text-center text-sm text-white border-[1px] rounded-lg border-white p-2">
        نحن هنا لنساعدك في كل خطوة، فلا تتردد في التواصل معنا إذا كان لديك أي استفسار أو اقتراح. نسعى دائمًا لتقديم أفضل تجربة ممكنة لعملائنا ونؤمن بأن التواصل هو مفتاح النجاح. سواء كنت بحاجة إلى دعم، أو لديك فكرة رائعة، أو ترغب في الانضمام إلى مجتمعنا، فنحن مستعدون للاستماع إليك. يمكنك الوصول إلينا عبر وسائل التواصل الاجتماعي أو من خلال البريد الإلكتروني، وسنكون سعداء بالرد عليك في أقرب وقت ممكن. نحن نقدر وقتك، ونعمل بجد لضمان حصولك على أفضل خدمة. لا تتردد في إرسال رسالتك، وسنعمل جاهدين لتلبية احتياجاتك. هدفنا هو بناء علاقات قوية قائمة على الثقة  من رحلتك!
</p>
        <p class="text-center text-sm text-[rgb(var(--light-gray))">
  © 2025 اسم_الموقع. جميع الحقوق محفوظة.
</p>
        </div>

        
      </div>
    </div>
  );
}




















