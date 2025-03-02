// "use client";

// import { useState, useEffect, useRef } from "react";
// import gsap from "gsap";
// import Image from "next/image";
// import Button from "../components/Button"; // Adjust path if needed

// const sections = [
//   {
//     id: 1,
//     title: "البرمجة للأطفال",
//     description: "نحن نقدم دورات تعليمية في البرمجة للأطفال باستخدام لغات حديثة.",
//     img: "/images/image1.jpg",
//     cta: "تعلم المزيد",
//   },
//   {
//     id: 2,
//     title: "الإلكترونيات والدوائر",
//     description: "تعلم كيفية بناء دوائر إلكترونية وتحليلها بأسلوب ممتع وسهل.",
//     img: "/images/image2.jpg",
//     cta: "استكشف الآن",
//   },
//   {
//     id: 3,
//     title: "الأردوينو والروبوتات",
//     description: "استكشاف عالم الأردوينو وبرمجة الروبوتات بتطبيقات عملية.",
//     img: "/images/image3.jpg",
//     cta: "ابدأ الآن",
//   },
//   {
//     id: 4,
//     title: "التكنولوجيا المستقبلية",
//     description: "تجربة أحدث تقنيات الذكاء الاصطناعي وإنترنت الأشياء.",
//     img: "/images/image4.jpg",
//     cta: "انضم إلينا",
//   },
// ];

// export default function AboutPage() {
//   const [activeId, setActiveId] = useState(1);
//   const containerRef = useRef(null); // Reference for the entire container
//   const sectionRefs = useRef([]); // References for each section

//   // 🔹 PAGE ENTER ANIMATION (On Mount)
//   useEffect(() => {
//     gsap.from(containerRef.current, {
//       y: 50, // Start 50px down
//       opacity: 0,
//       duration: 1.2,
//       ease: "power3.out",
//     });
//   }, []);

//   // 🔹 ACTIVE SECTION ANIMATION
//   useEffect(() => {
//     if (sectionRefs.current[activeId - 1]) {
//       gsap.fromTo(
//         sectionRefs.current[activeId - 1],
//         { scale: 0.9, opacity: 0 },
//         { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" }
//       );
//     }
//   }, [activeId]);

//   return (
//     <div
//       ref={containerRef}
//       className="flex flex-col items-center min-h-screen bg-[rgb(var(--light-gray))] text-gray-800 p-10"
//       dir="rtl"
//     >
//       {/* 🔹 Heading Section */}
//       <div className="text-center mb-10">
//         <h1 className="text-5xl font-bold text-gray-900">من نحن؟</h1>
//         <p className="mt-4 text-lg text-gray-700 max-w-2xl">
//           مؤسسة مجتمعية مقرها السودان، تعمل على تعليم الأطفال البرمجة، الإلكترونيات، والأردوينو.
//         </p>
//       </div>

//       {/* 🔹 Expandable Sections */}
//       <div className="flex flex-col md:flex-row w-full gap-2">
//         {sections.map((section, index) => (
//           <div
//             key={section.id}
//             ref={(el) => (sectionRefs.current[index] = el)}
//             className={`relative transition-all duration-500 ease-in-out flex items-center justify-center cursor-pointer border-2 border-gray-400 rounded-2xl
//               ${
//                 activeId === section.id
//                   ? "md:w-[80vw] w-full md:h-[500px] h-full bg-[rgb(var(--teal-blue))] text-[rgb(var(--light-gray))]"
//                   : "md:w-[5vw] w-full md:h-[500px] h-[100px]"
//               }`}
//             onClick={() => setActiveId(section.id)}
//           >
//             {activeId === section.id ? (
//               // ✅ Active Section Animation
//               <div className="flex flex-col md:flex-row-reverse items-center w-full h-full p-6">
//                 {/* 🔹 Right Side (Image) */}
//                 <div className="md:w-1/2 w-full h-full">
//                   <Image
//                     src={section.img}
//                     alt={section.title}
//                     width={400}
//                     height={400}
//                     className="object-contain w-full h-full p-4 border-t-2 border-l-2 border-black"
//                   />
//                 </div>

//                 {/* 🔹 Left Side (Text Content) */}
//                 <div className="md:w-1/2 w-full text-right px-6">
//                   <span className="text-2xl font-bold text-gray-500">{section.id}.</span>
//                   <h2 className="text-3xl font-bold text-[rgb(var(--light-gray))]">{section.title}</h2>
//                   <p className="text-lg text-[rgb(var(--light-gray))] mt-2">{section.description}</p>
//                   <div className="mt-4">
//                     <Button text={section.cta} bgColor="black" textColor="text-white" px="px-6" py="py-2" />
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               // 🔹 Inactive Section (Vertical Text)
//               <div className="flex flex-col items-center justify-evenly h-full text-black">
//                 <span className="text-lg font-bold border-2 border-black p-4 rounded-full">{section.id}.</span>
//                 <h2 className="text-xl font-bold transform md:rotate-90 whitespace-nowrap">{section.title}</h2>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }











































// "use client";

// import { useState, useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";
// import Button from "../components/Button"; // Adjust path if needed

// gsap.registerPlugin(ScrollTrigger);

// const sections = [
//   {
//     id: 1,
//     title: "البرمجة للأطفال",
//     description: "نحن نقدم دورات تعليمية في البرمجة للأطفال باستخدام لغات حديثة.",
//     img: "/images/image1.jpg",
//     cta: "تعلم المزيد",
//   },
//   {
//     id: 2,
//     title: "الإلكترونيات والدوائر",
//     description: "تعلم كيفية بناء دوائر إلكترونية وتحليلها بأسلوب ممتع وسهل.",
//     img: "/images/image2.jpg",
//     cta: "استكشف الآن",
//   },
//   {
//     id: 3,
//     title: "الأردوينو والروبوتات",
//     description: "استكشاف عالم الأردوينو وبرمجة الروبوتات بتطبيقات عملية.",
//     img: "/images/image3.jpg",
//     cta: "ابدأ الآن",
//   },
//   {
//     id: 4,
//     title: "التكنولوجيا المستقبلية",
//     description: "تجربة أحدث تقنيات الذكاء الاصطناعي وإنترنت الأشياء.",
//     img: "/images/image4.jpg",
//     cta: "انضم إلينا",
//   },
// ];

// export default function AboutPage() {
//   const [activeId, setActiveId] = useState(1);
//   const containerRef = useRef(null);
//   const sectionRefs = useRef([]);

//   // 🔹 PAGE ENTER ANIMATION (Initial)
//   useEffect(() => {
//     gsap.from(containerRef.current, {
//       y: 50,
//       opacity: 0,
//       duration: 1.2,
//       ease: "power3.out",
//     });
//   }, []);

//   // 🔹 ACTIVE SECTION ANIMATION
//   useEffect(() => {
//     if (sectionRefs.current[activeId - 1]) {
//       gsap.fromTo(
//         sectionRefs.current[activeId - 1],
//         { scale: 0.9, opacity: 0 },
//         { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" }
//       );
//     }
//   }, [activeId]);

//   // 🔹 SCROLL TRIGGER ANIMATION (Trigger at 30vh)
//   useEffect(() => {
//     gsap.fromTo(
//       sectionRefs.current,
//       { x: "-100%", opacity: 0 }, // Start from left side
//       {
//         x: "0%",
//         opacity: 1,
//         duration: 1,
//         ease: "power3.out",
//         stagger: 0.2, // Each section animates one after another
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 70vh", // When the top of the container reaches 30vh from the bottom
//           toggleActions: "play none none none",
//         },
//       }
//     );
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="flex flex-col items-center min-h-screen bg-[rgb(var(--light-gray))] text-gray-800 p-10"
//       dir="rtl"
//     >
//       {/* 🔹 Heading Section */}
//       <div className="text-center mb-10">
//         <h1 className="text-5xl font-bold text-gray-900">من نحن؟</h1>
//         <p className="mt-4 text-lg text-gray-700 max-w-2xl">
//           مؤسسة مجتمعية مقرها السودان، تعمل على تعليم الأطفال البرمجة، الإلكترونيات، والأردوينو.
//         </p>
//       </div>

//       {/* 🔹 Expandable Sections */}
//       <div className="flex flex-col md:flex-row w-full gap-2">
//         {sections.map((section, index) => (
//           <div
//             key={section.id}
//             ref={(el) => (sectionRefs.current[index] = el)}
//             className={`relative transition-all duration-500 ease-in-out flex items-center justify-center cursor-pointer border-2 border-gray-400 rounded-2xl
//               ${
//                 activeId === section.id
//                   ? "md:w-[80vw] w-full md:h-[500px] h-full bg-[rgb(var(--teal-blue))] text-[rgb(var(--light-gray))]"
//                   : "md:w-[5vw] w-full md:h-[500px] h-[100px]"
//               }`}
//             onClick={() => setActiveId(section.id)}
//           >
//             {activeId === section.id ? (
//               <div className="flex flex-col md:flex-row-reverse items-center w-full h-full p-6">
//                 {/* 🔹 Right Side (Image) */}
//                 <div className="md:w-1/2 w-full h-full">
//                   <Image
//                     src={section.img}
//                     alt={section.title}
//                     width={400}
//                     height={400}
//                     className="object-contain w-full h-full p-4 border-t-2 border-l-2 border-black"
//                   />
//                 </div>

//                 {/* 🔹 Left Side (Text Content) */}
//                 <div className="md:w-1/2 w-full text-right px-6">
//                   <span className="text-2xl font-bold text-gray-500">{section.id}.</span>
//                   <h2 className="text-3xl font-bold text-[rgb(var(--light-gray))]">{section.title}</h2>
//                   <p className="text-lg text-[rgb(var(--light-gray))] mt-2">{section.description}</p>
//                   <div className="mt-4">
//                     <Button text={section.cta} bgColor="black" textColor="text-white" px="px-6" py="py-2" />
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               // 🔹 Inactive Section (Vertical Text)
//               <div className="flex flex-col items-center justify-evenly h-full text-black">
//                 <span className="text-lg font-bold border-2 border-black p-4 rounded-full">{section.id}.</span>
//                 <h2 className="text-xl font-bold transform md:rotate-90 whitespace-nowrap">{section.title}</h2>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }














// "use client";

// import { useState, useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";
// import Button from "../components/Button"; // Adjust path if needed

// gsap.registerPlugin(ScrollTrigger);

// const sections = [
//   {
//     id: 1,
//     title: "البرمجة للأطفال",
//     description: "نحن نقدم دورات تعليمية في البرمجة للأطفال باستخدام لغات حديثة.",
//     img: "/images/image1.jpg",
//     cta: "تعلم المزيد",
//   },
//   {
//     id: 2,
//     title: "الإلكترونيات والدوائر",
//     description: "تعلم كيفية بناء دوائر إلكترونية وتحليلها بأسلوب ممتع وسهل.",
//     img: "/images/image2.jpg",
//     cta: "استكشف الآن",
//   },
//   {
//     id: 3,
//     title: "الأردوينو والروبوتات",
//     description: "استكشاف عالم الأردوينو وبرمجة الروبوتات بتطبيقات عملية.",
//     img: "/images/image3.jpg",
//     cta: "ابدأ الآن",
//   },
//   {
//     id: 4,
//     title: "التكنولوجيا المستقبلية",
//     description: "تجربة أحدث تقنيات الذكاء الاصطناعي وإنترنت الأشياء.",
//     img: "/images/image4.jpg",
//     cta: "انضم إلينا",
//   },
// ];

// export default function AboutPage() {
//   const [activeId, setActiveId] = useState(1);
//   const containerRef = useRef(null);
//   const sectionRefs = useRef([]);

//   // 🔹 PAGE ENTER ANIMATION
//   useEffect(() => {
//     gsap.from(containerRef.current, {
//       y: 50,
//       opacity: 0,
//       duration: 1.2,
//       ease: "power3.out",
//     });
//   }, []);

//   // 🔹 ACTIVE SECTION ANIMATION
//   useEffect(() => {
//     if (sectionRefs.current[activeId - 1]) {
//       gsap.fromTo(
//         sectionRefs.current[activeId - 1],
//         { scale: 0.9, opacity: 0 },
//         { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" }
//       );
//     }
//   }, [activeId]);

//   // 🔹 SCROLL TRIGGER ANIMATION (Trigger at 30vh, Reverse at 80%)
//   useEffect(() => {
//     gsap.fromTo(
//       sectionRefs.current,
//       { x: "-100%", opacity: 0 }, // Start from left
//       {
//         x: "0%",
//         opacity: 1,
//         duration: 1,
//         ease: "power3.out",
//         stagger: 0.5, // Sections animate one after another
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 50vh", // When 30% of the section is visible
//           end: "top 70vh", // Reverse when 80% of the page is passed
//           toggleActions: "play none reverse none", // Reverse on scroll up
//         },
//       }
//     );
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="flex flex-col items-center min-h-screen bg-[rgb(var(--light-gray))] text-gray-800 p-10"
//       dir="rtl"
//     >
//       {/* 🔹 Heading Section */}
//       <div className="text-center mb-10">
//         <h1 className="text-5xl font-bold text-gray-900">من نحن؟</h1>
//         <p className="mt-4 text-lg text-gray-700 max-w-2xl">
//           مؤسسة مجتمعية مقرها السودان، تعمل على تعليم الأطفال البرمجة، الإلكترونيات، والأردوينو.
//         </p>
//       </div>

//       {/* 🔹 Expandable Sections */}
//       <div className="flex flex-col md:flex-row w-full gap-2">
//         {sections.map((section, index) => (
//           <div
//             key={section.id}
//             ref={(el) => (sectionRefs.current[index] = el)}
//             className={`relative transition-all duration-500 ease-in-out flex items-center justify-center cursor-pointer border-2 border-gray-400 rounded-2xl
//               ${
//                 activeId === section.id
//                   ? "md:w-[80vw] w-full md:h-[500px] h-full bg-[rgb(var(--teal-blue))] text-[rgb(var(--light-gray))]"
//                   : "md:w-[5vw] w-full md:h-[500px] h-[70px]"
//               }`}
//             onClick={() => setActiveId(section.id)}
//           >
//             {activeId === section.id ? (
//               <div className="flex flex-col md:flex-row-reverse items-center w-full h-full p-6 font-tajawal">
//                 {/* 🔹 Right Side (Image) */}
//                 <div className="md:w-1/2 w-full h-full">
//                   <Image
//                     src={section.img}
//                     alt={section.title}
//                     width={400}
//                     height={400}
//                     className="object-contain w-full h-full p-4 border-t-2 border-l-2 border-black"
//                   />
//                 </div>

//                 {/* 🔹 Left Side (Text Content) */}
//                 <div className="md:w-1/2 w-full text-right px-6">
//                   <span className="text-2xl font-bold text-black">{section.id}.</span>
//                   <h2 className="text-3xl font-bold text-[rgb(var(--light-gray))]">{section.title}</h2>
//                   <p className="text-lg text-[rgb(var(--light-gray))] mt-2">{section.description}</p>
//                   <div className="mt-4">
//                     <Button text={section.cta} bgColor="black" textColor="text-white" px="px-6" py="py-2" />
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               // 🔹 Inactive Section (Vertical Text)
//               <div className="flex flex-row md:flex-col items-center justify-evenly h-full text-black">
// <span className="text-lg border-2 border-black p-2 w-10 h-10 rounded-full flex items-center justify-center">
// {section.id}</span>
//                 <h2 className="text-xl font-bold transform md:rotate-90 whitespace-nowrap">{section.title}</h2>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }













































"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../components/Button"; // Adjust path if needed

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    id: 1,
    title: "البرمجة للأطفال",
    description: "نحن نقي عالمنا الحديث، تلعب التكنولوجيا دورًا حاسمًا في حياتنا اليومية، حيث أصبحت جزءًا لا يتجزأ من جميع جوانب المجتمع. فمن الهواتف الذكية التي نحملها في جيوبنا إلى الحواسيب العملاقة التي تدير البنية التحتية العالمية، أصبحت التكنولوجيا القوة الدافعة وراء الابتكار والتطور. ومع ذلك، فإن هذا التقدم السريع يحمل في طياته تحديات كبيرة، مثل الأمن السيبراني، والخصوصية، وتأثير الذكاء الاصطناعي على سوق العمل. إن الإنترنت، الذي بدأ كمجرد وسيلة للتواصل بين العلماء والباحثين، قد تحول إلى شبكة عالمية تربط المليارات من البشر، مما يتيح لهم تبادل المعلومات والأفكار والتفاعل مع بعضهم البعض بشكل غير مسبوق. وفي ظل هذه التغيرات، أصبح التعلم الذاتي ضرورة ملحة، حيث لم يعد التعليم التقليدي وحده كافيًا لمواكبة التطورات السريعة. فالأشخاص الذين يستثمرون في تطوير مهاراتهم الرقمية يملكون فرصًا أكبر لتحقيق النجاح في هذا العصر الرقمي. ومن ناحية أخرى، يجب أن نتذكر أن التكنولوجيا ليست مجرد أدوات مادية، بل هي أيضًا مسؤولية،  لغات حديثة.",
    img: "/images/image1.jpg",
    cta: "تعلم المزيد",
  },
  {
    id: 2,
    title: "الإلكترونيات والدوائر",
    description: "تعلم كيفية بناء  ي عالمنا الحديث، تلعب التكنولوجيا دورًا حاسمًا في حياتنا اليومية، حيث أصبحت جزءًا لا يتجزأ من جميع جوانب المجتمع. فمن الهواتف الذكية التي نحملها في جيوبنا إلى الحواسيب العملاقة التي تدير البنية التحتية العالمية، أصبحت التكنولوجيا القوة الدافعة وراء الابتكار والتطور. ومع ذلك، فإن هذا التقدم السريع يحمل في طياته تحديات كبيرة، مثل الأمن السيبراني، والخصوصية، وتأثير الذكاء الاصطناعي على سوق العمل. إن الإنترنت، الذي بدأ كمجرد وسيلة للتواصل بين العلماء والباحثين، قد تحول إلى شبكة عالمية تربط المليارات من البشر، مما يتيح لهم تبادل المعلومات والأفكار والتفاعل مع بعضهم البعض بشكل غير مسبوق. وفي ظل هذه التغيرات، أصبح التعلم الذاتي ضرورة ملحة، حيث لم يعد التعليم التقليدي وحده كافيًا لمواكبة التطورات السريعة. فالأشخاص الذين يستثمرون في تطوير مهاراتهم الرقمية يملكون فرصًا أكبر لتحقيق النجاح في هذا العصر الرقمي. ومن ناحية أخرى، يجب أن نتذكر أن التكنولوجيا ليست مجرد أدوات مادية، بلتحليلها بأسلوب ممتع وسهل.",
    img: "/images/image2.jpg",
    cta: "استكشف الآن",
  },
  {
    id: 3,
    title: "الأردوينو والروبوتات",
    description: "استكشاف عالم الأردوينو وبرمجةي عالمنا الحديث، تلعب التكنولوجيا دورًا حاسمًا في حياتنا اليومية، حيث أصبحت جزءًا لا يتجزأ من جميع جوانب المجتمع. فمن الهواتف الذكية التي نحملها في جيوبنا إلى الحواسيب العملاقة التي تدير البنية التحتية العالمية، أصبحت التكنولوجيا القوة الدافعة وراء الابتكار والتطور. ومع ذلك، فإن هذا التقدم السريع يحمل في طياته تحديات كبيرة، مثل الأمن السيبراني، والخصوصية، وتأثير الذكاء الاصطناعي على سوق العمل. إن الإنترنت، الذي بدأ كمجرد وسيلة للتواصل بين العلماء والباحثين، قد تحول إلى شبكة عالمية تربط المليارات من البشر، مما يتيح لهم تبادل المعلومات والأفكار والتفاعل مع بعضهم البعض بشكل غير مسبوق. وفي ظل هذه التغيرات، أصبح التعلم الذاتي ضرورة ملحة، حيث لم يعد التعليم التقليدي وحده كافيًا لمواكبة التطورات السريعة. فالأشخاص الذين يستثمرون في تطوير مهاراتهم الرقمية يملكون فرصًا أكبر لتحقيق النجاح في هذا العصر الرقمي. ومن ناحية أخرى، يجب أن نتذكر أن التكنولوجيا ليست مجرد أدوات مادية، بل هي أيضًا مسؤولية،  الروبوتات بتطبيقات عملية.",
    img: "/images/image3.jpg",
    cta: "ابدأ الآن",
  },
  {
    id: 4,
    title: "التكنولوجيا المستقبلية",
    description: "تجربة أحي عالمنا الحديث،ي عالمنا الحديث، تلعب التكنولوجيا دورًا حاسمًا في حياتنا اليومية، حيث أصبحت جزءًا لا يتجزأ من جميع جوانب المجتمع. فمن الهواتف الذكية التي نحملها في جيوبنا إلى الحواسيب العملاقة التي تدير البنية التحتية العالمية، أصبحت التكنولوجيا القوة الدافعة وراء الابتكار والتطور. ومع ذلك، فإن هذا التقدم السريع يحمل في طياته تحديات كبيرة، مثل الأمن السيبراني، والخصوصية، وتأثير الذكاء الاصطناعي على سوق العمل. إن الإنترنت، الذي بدأ كمجرد وسيلة للتواصل بين العلماء والباحثين، قد تحول إلى شبكة عالمية تربط المليارات من البشر، مما يتيح لهم تبادل المعلومات والأفكار والتفاعل مع بعضهم البعض بشكل غير مسبوق. وفي ظل هذه التغيرات، أصبح التعلم الذاتي ضرورة ملحة، حيث لم يعد التعليم التقليدي وحدمادية، بل هي أيضًا مسؤولية، مجرد أدوات مادية، بل هي أيضًا مسؤولية، ",
    img: "/images/image4.jpg",
    cta: "انضم إلينا",
  },
];

export default function AboutPage() {
  const [activeId, setActiveId] = useState(1);
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  // 🔹 PAGE ENTER ANIMATION
  useEffect(() => {
    gsap.from(containerRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);

  // 🔹 ACTIVE SECTION ANIMATION
  useEffect(() => {
    if (sectionRefs.current[activeId - 1]) {
      gsap.fromTo(
        sectionRefs.current[activeId - 1],
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }
  }, [activeId]);

  // 🔹 SCROLL TRIGGER ANIMATION (Trigger at 30vh, Reverse at 80%)
  useEffect(() => {
    gsap.fromTo(
      sectionRefs.current,
      { x: "-100%", opacity: 0 }, // Start position
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3, // Faster stagger effect
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%", // Start animation earlier
          end: "top 50%", // Ends animation faster
          scrub: false, // Removes delay for instant feel
          toggleActions: "play none none none", // Only plays once on enter
          // markers:true,
        },
      }
    );
  }, []);
  

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center min-h-screen bg-[rgb(var(--light-gray))] text-gray-800 p-4"
      dir="rtl"
    >
      {/* 🔹 Heading Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-bold text-black">من نحن؟</h1>
        <p className="mt-4 text-2xl text-gray-800 max-w-2xl">
          مؤسسة مجتمعية مقرها السودان، تعمل على تعليم الأطفال البرمجة، الإلكترونيات، والأردوينو.
        </p>
      </div>

      {/* 🔹 Expandable Sections */}
      <div className="flex flex-col md:flex-row w-full gap-2">
        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className={`relative transition-all duration-500 ease-in-out flex items-center justify-center cursor-pointer border-[1px] border-black rounded-2xl
              ${
                activeId === section.id
                  ? "md:w-[80vw] w-full md:h-[500px] h-full bg-[rgb(var(--teal-blue))] text-white"
                  : "md:w-[5vw] w-full md:h-[500px] h-[70px] "
              }`}
            onClick={() => setActiveId(section.id)}
          >
            {activeId === section.id ? (
              <div className="flex flex-col md:flex-row-reverse items-start justify-start w-full h-full p-4 font-tajawal">
                {/* 🔹 Right Side (Image) */}
                <div className="md:w-1/2 w-full h-full">
                  <img
                    src={section.img}
                    alt={section.title}
                    className="object-contain w-full h-full  border-t-[1px] border-l-[1px] border-black rounded-lg"
                  />
                </div>

                {/* 🔹 Left Side (Text Content) */}
                <div className="md:w-1/2 w-full text-right ">
                  <span className="text-2xl font-bold text-black">{section.id}.</span>
                  <h2 className="text-3xl font-bold text-[rgb(var(--light-gray))]">{section.title}</h2>
                  <p className="text-lg text-[rgb(var(--light-gray))] mt-2">{section.description}</p>
                  <div className="mt-4">
                    <Button text={section.cta} bgColor="black" textColor="text-white" px="px-16" py="py-8" />
                  </div>
                </div>
              </div>
            ) : (
              // 🔹 Inactive Section (Vertical Text)
<div className="flex md:flex-col md:items-center md:justify-evenly justify-center items-center h-full text-black space-y-4 md:space-y-0">
                <span className="text-lg border-[1px] border-black p-2 w-10 h-10 rounded-full flex items-center justify-center">
                  {section.id}
                </span>
                <h2 className="text-xl font-bold transform md:rotate-90 whitespace-nowrap mr-4">
                  {section.title}
                </h2>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
