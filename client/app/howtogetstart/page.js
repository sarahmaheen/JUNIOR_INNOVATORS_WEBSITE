// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";
// import Button from "../components/Button"; // Adjust path if needed

// gsap.registerPlugin(ScrollTrigger);

// const steps = [
//   { id: 1, title: "الخطوة 1", description: "في العقود الأخيرة، شهد العالم تطورًا تكنولوجيًا هائلًا أثر على جميع جوانب الحياة. من الذكاء الاصطناعي إلى إنترنت الأشياء، أصبحت التكنولوجيا جزءًا لا يتجزأ من حياتنا اليومية." },
//   { id: 2, title: "الخطوة 2", description: "عد الذكاء الاصطناعي (AI) من أبرز الابتكارات في العصر الحديث، حيث أصبح يُستخدم في مختلف المجالات مثل الرعاية الصحية، والتمويل، والتسويق. تعتمد تقنيات تعلم الآلة على تحليل البيانات والتنبؤ بسلوك المستخدم، مما يسهم في تطوير حلول أكثر ذكاءً وكفاءة." },
//   { id: 3, title: "الخطوة 3", description: "عد شبكات الجيل الخامس نقلة نوعية في عالم الاتصالات، حيث توفر سرعات إنترنت فائقة وزمن استجابة منخفض. ستفتح هذه التكنولوجيا الباب أمام تقنيات مثل السيارات ذاتية القيادة، والواقع الافتراضي المتقدم، والطب عن بُعد.اختر الدورة المناسبة لك." },
//   { id: 4, title: "الخطوة 4", description: "ابدأ في التعلم وتطبيق المعرفة. لتكنولوجيا تتقدم بوتيرة سريعة، وتجلب معها فرصًا وتحديات جديدة. من الضروري مواكبة هذه التطورات واستغلالها بطرق تساهم في تحسين جودة الحياة وتحقيق مستقبل أكثر تقدمًا واستدامة." },
//   { id: 5, title: "الخطوة 5", description: "شارك إنجازاتك مع المجتمع.صبحت الأجهزة المتصلة بالإنترنت أكثر انتشارًا، مما يتيح التحكم بالأجهزة المنزلية عن بُعد وتحليل البيانات لتحسين الأداء. على سبيل المثال، يمكن للثلاجات الذكية تنبيه المستخدم عند انتهاء صلاحية المنتجات، ويمكن للمدن الذكية تقليل استهلاك الطاقة عبر أنظمة إدارة المرور الذكية." },
// ];

// export default function HowToGetStart() {
//   const sectionRef = useRef(null);
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 80%", // Trigger when the section is 80% in view
//         toggleActions: "play none none none",
//       },
//     });

//     // Fade-in and slide-up effect for the section
//     tl.fromTo(
//       sectionRef.current,
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
//     );

//     // Animating step cards when they enter viewport
//     cardsRef.current.forEach((card, index) => {
//       gsap.fromTo(
//         card,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.8,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: card,
//             start: "top 90%", // Trigger when the card is 90% in view
//             toggleActions: "play none none none",
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//       className="flex h-auto w-full bg-[rgb(var(--pink))] flex-col md:flex-row opacity-0"
//       dir="rtl"
//     >
//       {/* 🔹 Left Section (Fixed on Large Screens, Full Width on Mobile) */}
//       <div className="w-full md:w-[60vw] md:h-screen flex flex-col justify-center p-6 md:p-10 items-center gap-2">
//         <h1 className="text-3xl md:text-6xl font-bold text-black text-right">
//           كيف تبدأ؟
//         </h1>

//         {/* Text & Image Container */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
//           <p className="text-lg text-gray-800 text-right leading-relaxed w-full md:w-1/2">
//             النهضة بتعليم التكنولوجيا في السودان وأن نكون الجهة الأولى التي تقدم تلك الخدمات التكنولوجية؛ الإلكترونيات، البرمجة،
//             والذكاء الاصطناعي، والنهضة بشباب الوطن في هذه مجالات المستقبل بما يساهم في مواكبة البلاد التطور العالمي التكنولوجي.
//           </p>

//           {/* Responsive Image */}
//           <div className="relative w-full md:w-1/2 h-40 md:h-72">
//             <Image
//               src="/images/image3.jpg"
//               alt="ابدأ"
//               fill
//               className="object-contain rounded-lg"
//             />
//           </div>
//         </div>

//         {/* CTA Button */}
//         <Button 
//   text="ابدأ الآن" 
//   bgColor="bg-black" 
//   textColor="text-white" 
//   borderColor="border-black" 
//   px="px-8" 
//   py="py-4" 
//   hoverBgColor="hover:bg-[rgb(var(--teal-blue))]" 
//   hoverTextColor="hover:text-white" 
// />
//       </div>

//       {/* 🔹 Right Section (Scrollable on Desktop, Full Width on Mobile) */}
//       <div className="w-full md:w-[40vw] md:h-screen overflow-y-auto p-6">
//         <div className="flex flex-col gap-6">
//           {steps.map((step, index) => (
//             <div
//               key={step.id}
//               ref={(el) => (cardsRef.current[index] = el)}
//               className="opacity-1 transition-all duration-200 ease-in-out w-full p-6 shadow-lg rounded-lg border-2 border-black text-right"
//             >
//               <span className="text-xl font-bold text-gray-800">🔹 {step.id}</span>
//               <h2 className="text-2xl font-bold text-black mt-2">{step.title}</h2>
//               <p className="text-gray-800 mt-2">{step.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }













// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Button from "../components/Button";
// import Image from "next/image";


// gsap.registerPlugin(ScrollTrigger);

// const steps = [
//   { id: 1, title: "الخطوة 1", description: "في العقود الأخيرة، شهد العالم تطورًا تكنولوجيًا هائلًا أثر على جميع جوانب الحياة. من الذكاء الاصطناعي إلى إنترنت الأشياء، أصبحت التكنولوجيا جزءًا لا يتجزأ من حياتنا اليومية." },
//   { id: 2, title: "الخطوة 2", description: "يعد الذكاء الاصطناعي (AI) من أبرز الابتكارات في العصر الحديث، حيث أصبح يُستخدم في مختلف المجالات مثل الرعاية الصحية، والتمويل، والتسويق." },
//   { id: 3, title: "الخطوة 3", description: "شبكات الجيل الخامس توفر سرعات إنترنت فائقة وزمن استجابة منخفض، مما يفتح الباب أمام السيارات ذاتية القيادة، والواقع الافتراضي المتقدم." },
//   { id: 4, title: "الخطوة 4", description: "ابدأ في التعلم وتطبيق المعرفة، التكنولوجيا تتقدم بوتيرة سريعة، مما يجلب فرصًا وتحديات جديدة." },
//   { id: 5, title: "الخطوة 5", description: "شارك إنجازاتك مع المجتمع. أصبحت الأجهزة المتصلة بالإنترنت أكثر انتشارًا، مما يتيح تحسين الأداء في العديد من المجالات." },
// ];

// export default function HowToGetStart() {
//   const sectionRef = useRef(null);
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     // Fade-in effect for the section
//     gsap.fromTo(
//       sectionRef.current,
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
//     );

//     // Animations for each card
//     cardsRef.current.forEach((card, index) => {
//       gsap.to(card, {
//         scale: 0.7,
//         opacity: 0,
//         scrollTrigger: {
//           trigger: card,
//           start: "top 0%",
//           end: "bottom 15%",
//           scrub: true,
//         },
//       });
//     });
//   }, []);

  
//   // useEffect(() => {
//   //   // Fade-in effect for the section
//   //   gsap.fromTo(
//   //     sectionRef.current,
//   //     { opacity: 0, y: 50 },
//   //     { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
//   //   );

//   //   // Animations for each card
//   //   cardsRef.current.forEach((card, index) => {
//   //     gsap.to(card, {
//   //       scale: 0.7,
//   //       opacity: 0,
//   //       scrollTrigger: {
//   //         trigger: card,
//   //         start: "top 15%",
//   //         end: "bottom 15%",
//   //         scrub: true,
//   //       },
//   //     });
//   //   });
//   // }, []);

//   return (
//     <div ref={sectionRef} className="flex flex-col md:flex-row w-full bg-[rgb(var(--light-gray))] text-white justify-center items-center" dir="rtl">
//       {/* Left Section */}
//       <div className="w-full md:w-[60vw] flex flex-col justify-center items-center p-6 md:p-10 gap-4">
//         <h1 className="text-3xl md:text-6xl font-bold text-black text-right">كيف تبدأ؟</h1>

//         <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
//           <p className="text-lg text-black leading-relaxed w-full md:w-1/2">
//             النهضة بتعليم التكنولوجيا في السودان وأن نكون الجهة الأولى التي تقدم تلك الخدمات التكنولوجية؛ الإلكترونيات، البرمجة، والذكاء الاصطناعي.
//           </p>

//           <div className="relative w-full md:w-1/2 h-40 md:h-72">
//             <Image src="/images/image3.jpg" alt="ابدأ" fill className="object-cover rounded-lg" />
//           </div>
//         </div>

//  <Button 
//               text="والذكاء"
//               bgColor="bg-black" 
//               textColor="text-white" 
//               borderColor="border-black" 
//               px="px-8" 
//               py="py-4" 
//               hoverBgColor="hover:bg-[rgb(var(--light-gray))] " 
//               hoverTextColor="hover:text-black" 
//             />                      
//       </div>

//       {/* Right Section (Cards) */}
//       <div className="w-full md:w-[40vw] md:h-[50vh]  overflow-y-auto p-6 flex flex-col gap-6 bg-[rgb(var(--teal-blue))]">
//         {steps.map((step, index) => (
//           <div
//             key={step.id}
//             ref={(el) => (cardsRef.current[index] = el)}
//             className="bg-[rgb(var(--light-gray))] p-6 rounded-2xl text-center sticky top-[2vh] shadow-lg transition-transform duration-300 border-[1px] border-[rgb(var(--teal-blue))]"
//           >
//             <span className="text-xl font-bold text-[rgb(var(--teal-blue))]">🔹 {step.id}</span>
//             <h2 className="text-2xl font-bold mt-2 text-[rgb(var(--teal-blue))]">{step.title}</h2>
//             <p className="text-black mt-2">{step.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

























"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../components/Button";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { id: 1, title: "الخطوة 1", description: "في العقود الأخيرة، شهد العالم تطورًا تكنولوجيًا هائلًا أثر على جميع جوانب الحياة. من الذكاء الاصطناعي إلى إنترنت الأشياء، أصبحت التكنولوجيا جزءًا لا يتجزأ من حياتنا اليومية." },
  { id: 2, title: "الخطوة 2", description: "يعد الذكاء الاصطناعي (AI) من أبرز الابتكارات في العصر الحديث، حيث أصبح يُستخدم في مختلف المجالات مثل الرعاية الصحية، والتمويل، والتسويق." },
  { id: 3, title: "الخطوة 3", description: "شبكات الجيل الخامس توفر سرعات إنترنت فائقة وزمن استجابة منخفض، مما يفتح الباب أمام السيارات ذاتية القيادة، والواقع الافتراضي المتقدم." },
  { id: 4, title: "الخطوة 4", description: "ابدأ في التعلم وتطبيق المعرفة، التكنولوجيا تتقدم بوتيرة سريعة، مما يجلب فرصًا وتحديات جديدة." },
  { id: 5, title: "الخطوة 5", description: "شارك إنجازاتك مع المجتمع. أصبحت الأجهزة المتصلة بالإنترنت أكثر انتشارًا، مما يتيح تحسين الأداء في العديد من المجالات." },
];

export default function HowToGetStart() {
  // const sectionRef = useRef(null);
  // const elementsRef = useRef([]);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     // Animation on Page Load
  //     gsap.fromTo(
  //       elementsRef.current,
  //       { opacity: 0, y: 200 },
  //       { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.3 }
  //     );

  //     // Scroll Trigger Animation when entering viewport (40% from bottom)
  //     ScrollTrigger.create({
  //       trigger: sectionRef.current,
  //       start: "top 95%", // Start animation earlier
  //         end: "top 50%", // Ends animation faster
  //       toggleActions: "play none reverse none", // Reverse on scroll up
  //       onEnter: () => {
  //         gsap.fromTo(
  //           elementsRef.current,
  //           { opacity: 0, y: 200 },
  //           { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.3 }
  //         );
  //       },
  //     });
  //   });

  //   return () => ctx.revert(); // Cleanup animation when component unmounts
  // }, []);



  const sectionRef = useRef(null);
const elementsRef = useRef([]);

useEffect(() => {
  const ctx = gsap.context(() => {
    // Animation on Page Load
    gsap.fromTo(
      elementsRef.current,
      { opacity: 0, y: 200 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.3 }
    );

    // Scroll Trigger Animation when entering viewport (40% from bottom)
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 95%", // Start animation earlier
      end: "top 50%", // Ends animation faster
      toggleActions: "play none reverse none", // Reverse on scroll up
      onEnter: () => {
        gsap.fromTo(
          elementsRef.current,
          { opacity: 0, y: 200 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.3 }
        );
      },
    });

    // ✅ Added Markers for Debugging (DO NOT CHANGE ANYTHING ELSE)
    ScrollTrigger.defaults({ markers: false });
  });

  return () => ctx.revert(); // Cleanup animation when component unmounts
}, []);


  return (
    <div ref={sectionRef} className="flex flex-col md:flex-row w-full  text-white justify-center items-center" dir="rtl">
      {/* Left Section */}
      <div className="w-full md:w-[60vw] flex flex-col justify-center items-center p-6 md:p-10 gap-4">
        <h1 ref={(el) => (elementsRef.current[0] = el)} className="text-6xl md:text-6xl font-bold text-black text-right">
          كيف تبدأ؟
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
          <p ref={(el) => (elementsRef.current[1] = el)} className="text-2xl text-black leading-relaxed w-full md:w-1/2">
            النهضة بتعليم التكنولوجيا في السودان وأن نكون الجهة الأولى التي تقدم تلك الخدمات التكنولوجية؛ الإلكترونيات، البرمجة، والذكاء الاصطناعي.
          </p>

          <div ref={(el) => (elementsRef.current[2] = el)} className="relative w-full md:w-1/2 h-40 md:h-72">
            <Image src="/images/logo1.png" alt="ابدأ" fill className="object-cover rounded-lg" />
          </div>
        </div>

        <Button
          ref={(el) => (elementsRef.current[3] = el)}
          text="والذكاء"
          bgColor="bg-black"
          textColor="text-white"
          borderColor="border-black"
          px="px-8"
          py="py-4"
          hoverBgColor="hover:bg-[rgb(var(--light-gray))] "
          hoverTextColor="hover:text-black"
        />
      </div>

      {/* Right Section (Cards) */}
      <div className="w-full md:w-[40vw]  h-[70vh] md:h-[50vh] overflow-y-auto p-6 flex flex-col gap-6 bg-[rgb(var(--teal-blue))]">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white p-6 rounded-lg text-center sticky top-[2vh] shadow-lg transition-transform duration-300 border-[1px] border-[rgb(var(--teal-blue))]">
            <span className="text-lg font-bold text-[rgb(var(--teal-blue))]">🔹 {step.id}</span>
            <h2 className="text-2xl font-bold mt-2 text-[rgb(var(--teal-blue))]">{step.title}</h2>
            <p className="text-black mt-2 text-lg">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
