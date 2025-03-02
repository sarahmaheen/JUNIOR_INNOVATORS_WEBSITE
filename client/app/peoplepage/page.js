// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const PeoplePage = () => {
//   const line1Ref = useRef(null);
//   const line2Ref = useRef(null);
//   const line3Ref = useRef(null);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     let tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top top",
//         end: "bottom+=500 top",
//         scrub: 1.5,
//         pin: true,
//         pinSpacing: true,
//       },
//     });

//     // Line 1 moves to the right
//     tl.to(line1Ref.current, { x: "-100vw", ease: "none" }, 0);

//     // Line 2 moves to the left
//     tl.to(line2Ref.current, { x: "100vw", ease: "none" }, 0);

//     // Line 3 moves to the right
//     tl.to(line3Ref.current, { x: "-100vw", ease: "none" }, 0);

//     return () => tl.kill(); // Cleanup on unmount
//   }, []);

//   return (
//     <div className="relative w-full  flex flex-col items-center bg-black text-white">
//       {/* Heading */}
//       <h1 className="text-3xl md:text-5xl font-bold mt-10">Meet the People</h1>

//       {/* Scrolling Section */}
//       <div ref={sectionRef} className="w-full flex flex-col gap-10 items-center overflow-hidden">
        
//         {/* Line 1 - Moves to the right */}
//         <div ref={line1Ref} className="flex gap-10">
//           {[...Array(8)].map((_, i) => (
//             <img
//               key={i}
//               src={`/images/image${i + 1}.jpg`}
//               alt={`Person ${i + 1}`}
//               className="w-[120px] h-[120px] md:w-[250px] md:h-[250px] object-cover rounded-lg"
//             />
//           ))}
//         </div>

//         {/* Line 2 - Moves to the left */}
//         <div ref={line2Ref} className="flex gap-10">
//           {[...Array(8)].map((_, i) => (
//             <img
//               key={i}
//               src={`/images/image${i + 1}.jpg`}
//               alt={`Person ${i + 1}`}
//               className="w-[120px] h-[120px] md:w-[250px] md:h-[250px] object-cover rounded-lg"
//             />
//           ))}
//         </div>

//         {/* Line 3 - Moves to the right */}
//         <div ref={line3Ref} className="flex gap-10">
//           {[...Array(8)].map((_, i) => (
//             <img
//               key={i}
//               src={`/images/image${i + 1}.jpg`}
//               alt={`Person ${i + 1}`}
//               className="w-[120px] h-[120px] md:w-[250px] md:h-[250px] object-cover rounded-lg"
//             />
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default PeoplePage;































// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const PeoplePage = () => {
//   const line1Ref = useRef(null);
//   const line2Ref = useRef(null);
//   const line3Ref = useRef(null);
//   const sectionRef = useRef(null);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     let tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top top",
//         end: "bottom+=100% top", // Dynamic height handling
//         scrub: 1.5,
//         pin: true,
//         pinSpacing: true,
//       },
//     });

//     // Line 1 moves to the right
//     tl.to(line1Ref.current, { x: "-100vw", ease: "none" }, 0);

//     // Line 2 moves to the left
//     tl.to(line2Ref.current, { x: "100vw", ease: "none" }, 0);

//     // Line 3 moves to the right
//     tl.to(line3Ref.current, { x: "-100vw", ease: "none" }, 0);

//     return () => tl.kill(); // Cleanup on unmount
//   }, []);

//   return (
//     <div ref={containerRef} className="relative w-full flex flex-col items-center bg-yellow-300 text-white">
//       {/* Heading */}
//       <h1 className="text-3xl md:text-7xl font-bold mt-10 text-center">
//   قابل الأشخاص
// </h1>

//       {/* Scrolling Section */}
//       <div ref={sectionRef} className="w-full flex flex-col gap-16 items-center overflow-hidden py-20">
        
//         {/* Line 1 - Moves to the right */}
//        {/* Line 1 - Moves to the right */}
// <div ref={line1Ref} className="flex gap-8">
//   {[...Array(8)].map((_, i) => (
//     <img
//       key={i}
//       src={`/images/image${i + 1}.jpg`}
//       alt={`Person ${i + 1}`}
//       className="w-[120px] h-[120px] md:w-[250px] md:h-[250px] object-cover rounded-2xl border-4 border-[rgb(var(--light-gray))]"
//       style={{
//         transform: `rotate(${i % 2 === 0 ? "20deg" : "-5deg"})`,
//       }}
//     />
//   ))}
// </div>

// {/* Line 2 - Moves to the left */}
// <div ref={line2Ref} className="flex gap-10">
//   {[...Array(8)].map((_, i) => (
//     <img
//       key={i}
//       src={`/images/image${i + 1}.jpg`}
//       alt={`Person ${i + 1}`}
//       className="w-[120px] h-[120px] md:w-[250px] md:h-[250px] object-cover rounded-2xl border-4 border-[rgb(var(--light-gray))]"
//       style={{
//         transform: `rotate(${i % 2 === 0 ? "-20deg" : "10deg"})`,
//       }}
//     />
//   ))}
// </div>

// {/* Line 3 - Moves to the right */}
// <div ref={line3Ref} className="flex gap-10">
//   {[...Array(8)].map((_, i) => (
//     <img
//       key={i}
//       src={`/images/image${i + 1}.jpg`}
//       alt={`Person ${i + 1}`}
//       className="w-[120px] h-[120px] md:w-[250px] md:h-[250px] object-cover rounded-2xl border-4 border-[rgb(var(--light-gray))]"
//       style={{
//         transform: `rotate(${i % 2 === 0 ? "15deg" : "-10deg"})`,
//       }}
//     />
//   ))}
// </div>

//       </div>
//     </div>
//   );
// };

// export default PeoplePage;











// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const PeoplePage = () => {
//   const line1Ref = useRef(null);
//   const line2Ref = useRef(null);
//   const line3Ref = useRef(null);
//   const sectionRef = useRef(null);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     let tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top top",
//         end: "bottom+=100% top",
//         scrub: 1.5,
//         pin: true,
//         pinSpacing: true,
//       },
//     });

//     // Line animations
//     tl.to(line1Ref.current, { x: "-100vw", ease: "none" }, 0);
//     tl.to(line2Ref.current, { x: "100vw", ease: "none" }, 0);
//     tl.to(line3Ref.current, { x: "-100vw", ease: "none" }, 0);

//     return () => tl.kill();
//   }, []);

//   return (
//     <div className="min-h-screen md:h-screen flex items-center justify-center bg-black text-white overflow-y-hidden ">
//       <div ref={containerRef} className="relative w-full flex flex-col items-center p-6">
//         {/* Heading */}
//         <h1 className="text-2xl md:text-5xl font-bold mt-6 text-center">
//           قابل الأشخاص
//         </h1>

//         {/* Scrolling Section */}
//         <div ref={sectionRef} className="w-full flex flex-col gap-10 items-center overflow-hidden py-10">
          
//           {/* Line 1 - Moves to the right */}
//           <div ref={line1Ref} className="flex gap-4 sm:gap-6 md:gap-8">
//             {[...Array(8)].map((_, i) => (
//               <img
//                 key={i}
//                 src={`/images/image${i + 1}.jpg`}
//                 alt={`Person ${i + 1}`}
//                 className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[130px] md:h-[130px] object-cover rounded-2xl border-4 border-black bg-black"
//                 style={{ transform: `rotate(${i % 2 === 0 ? "20deg" : "-5deg"})` }}
//               />
//             ))}
//           </div>

//           {/* Line 2 - Moves to the left */}
//           <div ref={line2Ref} className="flex gap-4 sm:gap-6 md:gap-8">
//             {[...Array(8)].map((_, i) => (
//               <img
//                 key={i}
//                 src={`/images/image${i + 1}.jpg`}
//                 alt={`Person ${i + 1}`}
//                 className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[130px] md:h-[130px] object-cover rounded-2xl border-4 border-black bg-black"
//                 style={{ transform: `rotate(${i % 2 === 0 ? "-20deg" : "10deg"})` }}
//               />
//             ))}
//           </div>

//           {/* Line 3 - Moves to the right */}
//           <div ref={line3Ref} className="flex gap-4 sm:gap-6 md:gap-8">
//             {[...Array(8)].map((_, i) => (
//               <img
//                 key={i}
//                 src={`/images/image${i + 1}.jpg`}
//                 alt={`Person ${i + 1}`}
//                 className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[130px] md:h-[130px] object-cover rounded-2xl border-4 border-black bg-black"
//                 style={{ transform: `rotate(${i % 2 === 0 ? "15deg" : "-10deg"})` }}
//               />
//             ))}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default PeoplePage;



























// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// // Sample images (Replace with your own URLs)
// const images = [
//   "./images/image1.jpg",
//   "./images/image2.jpg",
//   "./images/image3.jpg",
//   "./images/image4.jpg",
//   "./images/image5.jpg",
//   "./images/image6.jpg",
// ];

// export default function ImageGallery() {
//   const galleryRef = useRef(null);

//   useEffect(() => {
//     if (galleryRef.current) {
//       gsap.to(galleryRef.current, {
//         y: "-100%",
//         duration: 20,
//         ease: "linear",
//         repeat: -1,
//       });
//     }
//   }, []);

//   return (
//     <section className="flex flex-col md:flex-row-reverse h-auto  md:h-screen w-auto bg-[rgb(var(--mexican-red))] gap-4 m-4 p-4 rounded-2xl">
//       {/* 🔹 Heading Section */}
//       <div className="flex justify-center items-center  ">
//         <h2 className="text-6xl font-bold text-white">🌍 معرض الصور</h2>
//       </div>

//       {/* 🔹 Scrolling Gallery Section with Overlapping Blocks */}
//       <div className="relative flex justify-center items-center  overflow-hidden bg-transparent">
//         {/* Vertical Scrolling Images */}
//         <div className="w-full h-full overflow-hidden relative">
//           <div ref={galleryRef} className="flex flex-col gap-4">
//             {[...images, ...images].map((img, idx) => (
//               <img
//                 key={idx}
//                 src={img}
//                 alt={`Gallery ${idx}`}
//                 className="w-full h-auto rounded-lg shadow-md"
//               />
//             ))}
//           </div>

//           {/* 🔹 Overlapping Content Blocks */}
//           <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-between pointer-events-none">
//             {/* Block 1 */}
//             <div className="bg-white p-4 shadow-xl rounded-lg w-3/4 md:w-2/3 lg:w-1/2 absolute top-[10%] left-[5%]">
//               <h3 className="text-2xl font-semibold text-gray-800">لحظات لا تُنسى</h3>
//               <p className="text-gray-600 text-sm mt-1">
//                 بعض من أفضل أعمالنا التي تستحق المشاهدة، حيث تتداخل الإبداع والتكنولوجيا لتقديم لحظات رائعة.
//               </p>
//             </div>

//             {/* Block 2 */}
//             <div className="bg-white p-4 shadow-xl rounded-lg w-3/4 md:w-2/3 lg:w-1/2 absolute top-[30%] right-[5%]">
//               <h3 className="text-2xl font-semibold text-gray-800">فريقنا في العمل</h3>
//               <p className="text-gray-800 text-sm mt-1">
//                 تعرف على الأشخاص وراء هذه التحف الفنية. فريقنا يعمل بشغف لتقديم تجربة بصرية استثنائية.
//               </p>
//             </div>

//             {/* Block 3 */}
//             <div className="bg-white p-4 shadow-xl rounded-lg w-3/4 md:w-2/3 lg:w-1/2 absolute top-[55%] left-[8%]">
//               <h3 className="text-2xl font-semibold text-gray-800">إبداع بلا حدود</h3>
//               <p className="text-gray-800 text-sm mt-1">
//                 تظل رؤيتنا قائمة على دفع حدود الإبداع، لخلق صور تلهم وتبقى في الأذهان.
//               </p>
//             </div>

//             {/* Block 4 */}
//             <div className="bg-white p-4 shadow-xl rounded-lg w-3/4 md:w-2/3 lg:w-1/2 absolute top-[80%] right-[8%]">
//               <h3 className="text-2xl font-semibold text-gray-800">فن التصوير</h3>
//               <p className="text-gray-800 text-sm mt-1">
//                 التقطنا أجمل اللحظات من جميع أنحاء العالم، لتعكس الروعة والجمال في كل صورة.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 🔹 Paragraph Section */}
//       <div className="flex flex-col justify-center items-center   px-10">
//         <p className="text-2xl text-white text-center max-w-3xl">
//           استمتع بمجموعتنا الرائعة من الصور المذهلة التي تلهم وتدهش. نحن نقدم لحظات خالدة من الإبداع والفن.
//           حيث تتداخل الإبداع والتكنولوجيا لتقديم تجربة بصرية استثنائية تدفع حدود الإبداع لتظل محفورة في الذاكرة.
//         </p>
//       </div>
//     </section>
//   );
// }


























"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

// Sample images (Replace with your own URLs)
const images = [
  "./images/image1.jpg",
  "./images/image2.jpg",
  "./images/image3.jpg",
  "./images/image4.jpg",
  "./images/image5.jpg",
  "./images/image6.jpg",
];

export default function ImageGallery() {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (galleryRef.current) {
      const imagesContainer = galleryRef.current;
      const totalHeight = imagesContainer.scrollHeight / 2; // Half height to loop seamlessly

      gsap.to(imagesContainer, {
        y: `-=${totalHeight}`,
        duration: 20,
        ease: "linear",
        repeat: -1,
        modifiers: {
          y: (y) => {
            return (parseFloat(y) % totalHeight) + "px"; // Resets position to create loop
          },
        },
      });
    }
  }, []);

  return (
    <section className="flex flex-col md:flex-row-reverse h-[200vh] md:h-screen w-auto bg-[rgb(var(--mexican-red))] gap-4 m-4 p-4 rounded-2xl">
      {/* 🔹 Heading Section */}
      <div className="flex justify-center items-center">
        <h2 className="text-6xl font-bold text-white">🌍 معرض الصور</h2>
      </div>

      {/* 🔹 Scrolling Gallery Section with Infinite Loop and Overlapping Content */}
      <div className="relative flex justify-center items-center overflow-hidden bg-transparent w-full h-full">
        <div className="w-full h-full overflow-hidden relative">
          <div ref={galleryRef} className="flex flex-col gap-4">
            {[...images, ...images, ...images].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Gallery ${idx}`}
                className="w-full h-auto rounded-lg shadow-md"
              />
            ))}
          </div>

          {/* 🔹 Overlapping Content Blocks */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-between pointer-events-none">
            {/* Block 1 */}
            <div className="bg-white p-4 shadow-xl rounded-lg w-4/5 md:w-2/3 lg:w-1/2 absolute top-[10%] left-[5%]">
              <h3 className="text-2xl font-semibold text-gray-800">لحظات لا تُنسى</h3>
              <p className="text-gray-600 text-sm mt-1">
                بعض من أفضل أعمالنا التي تستحق المشاهدة، حيث تتداخل الإبداع والتكنولوجيا لتقديم لحظات رائعة.
              </p>
            </div>

            {/* Block 2 */}
            <div className="bg-white p-4 shadow-xl rounded-lg w-4/5 md:w-2/3 lg:w-1/2 absolute top-[30%] right-[5%]">
              <h3 className="text-2xl font-semibold text-gray-800">فريقنا في العمل</h3>
              <p className="text-gray-800 text-sm mt-1">
                تعرف على الأشخاص وراء هذه التحف الفنية. فريقنا يعمل بشغف لتقديم تجربة بصرية استثنائية.
              </p>
            </div>

            {/* Block 3 */}
            <div className="bg-white p-4 shadow-xl rounded-lg w-4/5 md:w-2/3 lg:w-1/2 absolute top-[55%] left-[8%]">
              <h3 className="text-2xl font-semibold text-gray-800">إبداع بلا حدود</h3>
              <p className="text-gray-800 text-sm mt-1">
                تظل رؤيتنا قائمة على دفع حدود الإبداع، لخلق صور تلهم وتبقى في الأذهان.
              </p>
            </div>

            {/* Block 4 */}
            <div className="bg-white p-4 shadow-xl rounded-lg w-4/5 md:w-2/3 lg:w-1/2 absolute top-[80%] right-[8%]">
              <h3 className="text-2xl font-semibold text-gray-800">فن التصوير</h3>
              <p className="text-gray-800 text-sm mt-1">
                التقطنا أجمل اللحظات من جميع أنحاء العالم، لتعكس الروعة والجمال في كل صورة.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Paragraph Section */}
      <div className="flex flex-col justify-center items-center px-10">
        <p className="text-2xl text-white text-center max-w-3xl">
          استمتع بمجموعتنا الرائعة من الصور المذهلة التي تلهم وتدهش. نحن نقدم لحظات خالدة من الإبداع والفن.
          حيث تتداخل الإبداع والتكنولوجيا لتقديم تجربة بصرية استثنائية تدفع حدود الإبداع لتظل محفورة في الذاكرة.
        </p>
      </div>
    </section>
  );
}
