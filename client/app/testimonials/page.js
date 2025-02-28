// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const Testimonials = () => {
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     const tl = gsap.timeline({
//       repeat: -1, // Infinite loop
//     });

//     tl.to(sliderRef.current, {
//       x: "-70%", // Move left continuously
//       duration: 10,
//       ease: "linear",
//     }).set(sliderRef.current, { x: "30%" }); // Reset position

//     return () => tl.kill(); // Cleanup on unmount
//   }, []);

//   const testimonials = [
//     { id: 1, text: "This service is amazing!", name: "Ahmed Ali", img: "/images/image1.jpg" },
//     { id: 2, text: "Highly recommend to everyone.", name: "Fatima Noor", img: "/images/image2.jpg" },
//     { id: 3, text: "Absolutely love it!", name: "Omar Khalid", img: "/images/image3.jpg" },
//     { id: 4, text: "A great experience overall!", name: "Layla Hassan", img: "/images/image4.jpg" },
//     { id: 5, text: "Fantastic quality and support.", name: "Hassan Malik", img: "/images/image5.jpg" },
//   ];

//   return (
//     <div className="w-full flex flex-col md:flex-row items-center justify-between bg-[rgb(var(--light-gray))] text-black py-16 px-6 md:px-16 border-b-4 border-black">
//       {/* Left Section */}
//       <div className="md:w-1/3 text-left">
//         <h2 className="text-6xl font-bold mb-4">مكونات قسم الشهادات</h2>
//         <p className="text-lg text-[rgb(var(--mexican-red))]">
//           آراء عملائنا حول خدماتنا وتجاربهم المميزة معنا.
//         </p>
//       </div>

//       {/* Right Section - Slider */}
//       <div className="md:w-2/3 overflow-hidden relative h-[250px]">
//         <div ref={sliderRef} className="flex gap-6 w-max">
//           {testimonials.concat(testimonials).map((t, index) => ( // Duplicate for smooth loop
//             <div
//               key={index}
//               className="bg-[rgb(var(--light-gray))] p-6 rounded-xl shadow-lg min-w-[300px] h-[200px] flex flex-col justify-between border-2 border-[rgb(var(--teal-blue))]"
//             >
//               <p className="text-lg italic">"{t.text}"</p>
//               <div className="flex items-center gap-3 mt-4">
//                 <img
//                   src={t.img}
//                   alt={t.name}
//                   className="w-10 h-10 object-cover rounded-full border-2 border-black"
//                 />
//                 <h3 className="text-md font-semibold">{t.name}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;


























"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const Testimonials = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1, // Infinite loop
    });

    tl.to(sliderRef.current, {
      x: "-70%", // Move left continuously
      duration: 10,
      ease: "linear",
    }).set(sliderRef.current, { x: "10%" }); // Reset position

    return () => tl.kill(); // Cleanup on unmount
  }, []);

  const testimonials = [
    {
      id: 1,
      text: "لقد كانت تجربتي مع هذه الخدمة مذهلة بكل المقاييس! من البداية وحتى النهاية، كانت الجودة والاحترافية في كل التفاصيل. أوصي بها بشدة!",
      name: "أحمد علي",
      img: "/images/image1.jpg",
    },
    {
      id: 2,
      text: "خدمة ممتازة جدًا! لم أكن أتوقع هذا المستوى من الاهتمام والدقة. الدعم الفني متوفر دائمًا!",
      name: "فاطمة نور",
      img: "/images/image2.jpg",
    },
    {
      id: 3,
      text: "من أفضل الخدمات التي جربتها. الجودة، الدعم، السرعة – كل شيء كان رائعًا!",
      name: "عمر خالد",
      img: "/images/image3.jpg",
    },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between bg-[rgb(var(--light-gray))] text-black py-16 px-6 md:px-16 border-b-4 border-black">
      {/* Left Section */}
      <div className="md:w-1/3 text-left">
        <h2 className="text-5xl font-bold mb-4">آراء العملاء</h2>
        <p className="text-lg text-[rgb(var(--mexican-red))]">
          اكتشف تجارب العملاء الذين استخدموا خدماتنا وشاركوا بآرائهم الصادقة حول تجربتهم معنا.
        </p>
      </div>

      {/* Right Section - Slider */}
      <div className="md:w-2/3 overflow-hidden relative h-[250px]">
        <div ref={sliderRef} className="flex gap-6 w-max">
          {testimonials.concat(testimonials).map((t, index) => (
            <div
              key={index}
              className="bg-[rgb(var(--light-gray))] p-6 rounded-xl shadow-lg w-[300px] max-w-[350px] min-h-[180px] flex flex-col justify-between border-2 border-[rgb(var(--teal-blue))]"
            >
              <p className="text-md break-words">{t.text}</p>
              <div className="flex flex-row-reverse  items-center gap-3 mt-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-10 h-10 object-cover rounded-full border-2 border-black"
                />
                <h3 className="text-md font-semibold">{t.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
