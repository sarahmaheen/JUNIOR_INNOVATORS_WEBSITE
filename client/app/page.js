// 'use client';

// import Image from 'next/image';
// import InfiniteTextCarousel from "./components/InfiniteTextCarousel.js";


// const images = [
//   '/images/image1.jpg',
//   '/images/image2.jpg',
//   '/images/image3.jpg',
//   '/images/image4.jpg',
// ];

// export default function Home() {
//   return (
//     <div className='flex flex-col items-center justify-between gap-4 bg-[rgb(var(--light-gray))]'>
// <div className="flex flex-col md:flex-row w-full min-h-screen md:h-[80vh] bg-[rgb(var(--teal-blue))] p-10 rounded-b-[50px] items-center justify-between " dir="rtl">
      
//       {/* Right Section (Text) */}
//       <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start px-8 md:px-16 gap-4 ">
//       <h1 className="text-[rgb(var(--light-gray))] text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] xl:text-[2.5vw] font-bold leading-tight font-tajawal">
//   مؤسسة مجتمعية مقرها السودان . <br />
//   تقوم هذه المؤسسة بتدريب وتعليم الأطفال البرمجة، الإلكترونيات والأردوينو <br />
//   للنهضة بالتكنولوجيا في السودان
// </h1>

//         <button className="text-black bg-[rgb(var(--light-gray))] hover:bg-none   md:px-8 px-16 py-3 text-xl md:text-3xl ">
//           ابدأ الآن
//         </button>
//       </div>

//       {/* Left Section (Overlapping Images) */}
//       <div className="w-full md:w-1/2 h-full flex items-center justify-center relative">
//         {images.map((src, index) => (
//           <div
//             key={index}
//             className=" w-full max-w-[350px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[450px] aspect-[4/5] relative"
//             style={{
//               top: `${index * -5}%`,
//               left: `${index * -3}%`,
//               transform: `rotate(${index % 2 === 0 ? '20deg' : '5deg'})`,
//               zIndex: images.length - index,
//             }}
//           >
//             <Image
//               src={src}
//               alt={`Image ${index + 1}`}
//               fill
//               className="object-cover rounded-2xl border-4 border-[rgb(var(--light-gray))] shadow-lg"
//             />
//           </div>
//         ))}
//       </div>

//     </div>
//         <InfiniteTextCarousel/>
//     </div>
//   );
// }



























































// import Button from "./components/Button";
// import InfiniteTextCarousel from "./components/InfiniteTextCarousel";
// import Image from "next/image";

// const images = [
//   "/images/image1.jpg",
//   "/images/image2.jpg",
//   "/images/image3.jpg",
//   "/images/image4.jpg",
// ];

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-between gap-4 bg-[rgb(var(--light-gray))]">
//       <div className="flex flex-col md:flex-row w-full min-h-screen md:h-[80vh] bg-[rgb(var(--teal-blue))] p-10 rounded-b-[50px] items-center justify-between" dir="rtl">
        
//         {/* Right Section (Text) */}
//         <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start px-8 md:px-16 gap-4">
//           <h1 className="text-[rgb(var(--light-gray))] text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] xl:text-[2.5vw] font-bold leading-tight font-tajawal">
//             مؤسسة مجتمعية مقرها السودان . <br />
//             تقوم هذه المؤسسة بتدريب وتعليم الأطفال البرمجة، الإلكترونيات والأردوينو <br />
//             للنهضة بالتكنولوجيا في السودان
//           </h1>

//           {/* Using the Button Component */}
//           <Button 
//   text="السود"
//   bgColor="none"
//   textColor="text-white"
//   borderColor="var(--light-gray)"
//   px="px-16"
//   py="py-4"
// />

//         </div>

//         {/* Left Section (Overlapping Images) */}
//         <div className="w-full md:w-1/2 h-full flex items-center justify-center relative">
//           {images.map((src, index) => (
//             <div
//               key={index}
//               className="w-full max-w-[350px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[450px] aspect-[4/5] relative"
//               style={{
//                 top: `${index * -5}%`,
//                 left: `${index * -3}%`,
//                 transform: `rotate(${index % 2 === 0 ? "20deg" : "5deg"})`,
//                 zIndex: images.length - index,
//               }}
//             >
//               <Image
//                 src={src}
//                 alt={`Image ${index + 1}`}
//                 fill
//                 className="object-cover rounded-2xl border-4 border-[rgb(var(--light-gray))] shadow-lg"
//               />
//             </div>
//           ))}
//         </div>

//       </div>
//       <InfiniteTextCarousel />
//     </div>
//   );
// }









// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import Button from "./components/Button";
// import InfiniteTextCarousel from "./components/InfiniteTextCarousel";
// import Image from "next/image";
// import AboutPage from "./about/page";
// import HowToGetStart from "./howtogetstart/page";
// import CoursesPage from "./coursespage/page";
// import GetInTouch from "./getintouch/page";

// const images = [
//   "/images/image1.jpg",
//   "/images/image2.jpg",
//   "/images/image3.jpg",
//   "/images/image4.jpg",
// ];

// export default function Home() {
//   const textRef = useRef(null);
//   const buttonRef = useRef(null);
//   const imageRefs = useRef([]);

//   useEffect(() => {
//     const tl = gsap.timeline({ delay: 0.3 });

//     // Animate Text
//     tl.fromTo(
//       textRef.current,
//       { yPercent: 50, opacity: 0 },
//       { yPercent: 0, opacity: 1, duration: 1, ease: "power2.out" }
//     );

//     // Animate Button
//     tl.fromTo(
//       buttonRef.current,
//       { yPercent: 50, opacity: 0 },
//       { yPercent: 0, opacity: 1, duration: 1, ease: "power2.out" },
//       "-=0.5" // Start before the previous animation ends
//     );

//     // Animate Images (Staggered Effect)
//     gsap.fromTo(
//       imageRefs.current,
//       { yPercent: 50, opacity: 0 },
//       {
//         yPercent: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power2.out",
//         stagger: 0.2, // Delay between each image animation
//       }
//     );
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen w-full gap-10 bg-[rgb(var(--light-gray))]">

//     <div className="flex flex-col items-center justify-between gap-4 bg-[rgb(var(--light-gray))]">
//       <div
//         className="flex flex-col md:flex-row w-full min-h-screen md:h-[80vh] bg-[rgb(var(--teal-blue))] p-10 rounded-b-[50px] items-center justify-between"
//         dir="rtl"
//       >
//         {/* Right Section (Text) */}
//         <div
//           ref={textRef}
//           className="w-full md:w-1/2 h-full flex flex-col justify-center items-start px-8 md:px-16 gap-4 opacity-0"
//         >
//           <h1 className="text-[rgb(var(--light-gray))] text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] xl:text-[2.5vw] font-bold leading-tight font-tajawal">
//             مؤسسة مجتمعية مقرها السودان . <br />
//             تقوم هذه المؤسسة بتدريب وتعليم الأطفال البرمجة، الإلكترونيات والأردوينو <br />
//             للنهضة بالتكنولوجيا في السودان
//           </h1>

//           {/* Button */}
//           <div ref={buttonRef} className="opacity-0">
//             <Button
//               text="السود"
//               bgColor="none"
//               textColor="text-white"
//               borderColor="var(--light-gray)"
//               px="px-16"
//               py="py-4"
//             />
//           </div>
//         </div>

//         {/* Left Section (Overlapping Images) */}
//         <div className="w-full md:w-1/2 h-full flex items-center justify-center relative">
//           {images.map((src, index) => (
//             <div
//               key={index}
//               ref={(el) => (imageRefs.current[index] = el)}
//               className="w-full max-w-[350px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[450px] aspect-[4/5] relative opacity-0"
//               style={{
//                 top: `${index * -5}%`,
//                 left: `${index * -3}%`,
//                 transform: `rotate(${index % 2 === 0 ? "20deg" : "5deg"})`,
//                 zIndex: images.length - index,
//               }}
//             >
//               <Image
//                 src={src}
//                 alt={`Image ${index + 1}`}
//                 fill
//                 className="object-cover rounded-2xl border-4 border-[rgb(var(--light-gray))] shadow-lg"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <InfiniteTextCarousel />
//     </div>
//     <AboutPage/>
//     <HowToGetStart/>
//     <CoursesPage/>
//     <GetInTouch/>
//     </div>
//   );
// }


























































"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "./components/Button";
import InfiniteTextCarousel from "./components/InfiniteTextCarousel";
import AboutPage from "./about/page";
import HowToGetStart from "./howtogetstart/page";
import CoursesPage from "./coursespage/page";
import GetInTouch from "./getintouch/page";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
];

export default function Home() {
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    // Animate Text
    tl.fromTo(
      textRef.current,
      { yPercent: 50, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );

    // Animate Button
    tl.fromTo(
      buttonRef.current,
      { yPercent: 50, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.5"
    );

    // Animate Images (Staggered Effect)
    gsap.fromTo(
      imageRefs.current,
      { yPercent: 50, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full gap-10 bg-[rgb(var(--light-gray))]">
      <div className="flex flex-col items-center justify-between gap-4 bg-[rgb(var(--light-gray))]">
        <div
          className="flex flex-col md:flex-row w-full min-h-screen md:h-[80vh] bg-[rgb(var(--teal-blue))] p-10 rounded-b-[50px] items-center justify-between"
          dir="rtl"
        >
          {/* Right Section (Text) */}
          <div
            ref={textRef}
            className="w-full md:w-1/2 h-full flex flex-col justify-center items-start px-8 md:px-16 gap-4 opacity-0"
          >
            <h1 className="text-[rgb(var(--light-gray))] text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] xl:text-[2.5vw] font-bold leading-tight font-tajawal">
              مؤسسة مجتمعية مقرها السودان . <br />
              تقوم هذه المؤسسة بتدريب وتعليم الأطفال البرمجة، الإلكترونيات
              والأردوينو <br />
              للنهضة بالتكنولوجيا في السودان
            </h1>

            {/* Button */}
            <div ref={buttonRef} className="opacity-0">
              <Button
                text="السود"
                bgColor="none"
                textColor="text-white"
                borderColor="var(--light-gray)"
                px="px-16"
                py="py-4"
              />
            </div>
          </div>

          {/* Left Section (Overlapping Images) */}
          <div className="w-full md:w-1/2 h-full flex items-center justify-center relative">
            {images.map((src, index) => (
              <div
                key={index}
                ref={(el) => (imageRefs.current[index] = el)}
                className="w-full max-w-[350px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[450px] aspect-[4/5] relative opacity-0"
                style={{
                  top: `${index * -5}%`,
                  left: `${index * -3}%`,
                  transform: `rotate(${index % 2 === 0 ? "20deg" : "5deg"})`,
                  zIndex: images.length - index,
                }}
              >
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl border-4 border-[rgb(var(--light-gray))] shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>

        <InfiniteTextCarousel />
      </div>
      <AboutPage />
      <HowToGetStart />
      <CoursesPage />
      <GetInTouch />
    </div>
  );
}
