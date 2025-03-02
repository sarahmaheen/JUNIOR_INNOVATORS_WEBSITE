// "use client";
// import { useState, useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import Link from "next/link";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const menuRef = useRef(null);
//   const linksRef = useRef([]);

//   useEffect(() => {
//     if (isOpen) {
//       gsap.to(menuRef.current, {
//         x: 0,
//         duration: 0.6,
//         ease: "power3.out",
//       });

//       gsap.fromTo(
//         linksRef.current,
//         { opacity: 0, x: 50 },
//         { opacity: 1, x: 0, stagger: 0.2, duration: 0.8, ease: "power3.out" }
//       );
//     } else {
//       gsap.to(menuRef.current, {
//         x: "100%", // Move off-screen while staying responsive
//         duration: 0.6,
//         ease: "power3.in",
//       });
//     }
//   }, [isOpen]);

//   return (
//     <nav className="fixed top-4 right-2 md:right-4 z-50">
//       {/* Open Button */}
//       <button
//         onClick={() => setIsOpen(true)}
//         className="bg-black text-white p-3 md:p-5 rounded-xl shadow-lg border border-white text-base md:text-lg
//         transition-transform transform hover:scale-105 duration-300"
//       >
//         قائمة طعام
//       </button>

//       {/* Full-Screen Navbar */}
//       <div
//         ref={menuRef}
//         className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center text-xl md:text-2xl 
//         transition-transform duration-500 "
//       >
//         {/* Close Button */}
//         <button
//           onClick={() => setIsOpen(false)}
//           className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-lg shadow-lg 
//           transition-transform transform hover:scale-110 duration-300"
//         >
//           إغلاق ✖
//         </button>

//         {/* Navigation Links */}
//         {[
//           { href: "/", text: "الرئيسية" },
//           { href: "/about", text: "معلومات عنا" },
//           { href: "/coursespage", text: "الدورات" },
//           { href: "/getintouch", text: "تواصل معنا" },
//         ].map((link, index) => (
//           <Link
//             key={index}
//             href={link.href}
//             ref={(el) => (linksRef.current[index] = el)}
//             className="relative group text-white hover:text-gray-300 transition-all duration-300 transform hover:scale-110"
//           >
//             {link.text}
//             <span className="absolute bottom-0 left-0 w-0 h-1 bg-white  transition-all duration-500"></span>
//           </Link>
//         ))}   
//       </div>
//     </nav>
//   );
// }




// "use client";
// import { useState } from "react";
// import Link from "next/link";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="flex justify-center ">
//     <nav className="fixed  w-full right-4 top-4 flex justify-end px-4 z-50">
//       {/* Open Button - Always Visible */}
//       <button
//         onClick={() => setIsOpen(true)}
//         className="bg-black text-white px-4 py-2 md:px-5 md:py-3 rounded-xl shadow-lg border border-white text-base md:text-lg"
//       >
//         قائمة طعام
//       </button>

//       {/* Full-Screen Navbar */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center w-full h-full">
//           {/* Close Button */}
//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-lg shadow-lg"
//           >
//             إغلاق ✖
//           </button>

//           {/* Navigation Links */}
//           {[
//             { href: "/", text: "الرئيسية" },
//             { href: "/about", text: "معلومات عنا" },
//             { href: "/coursespage", text: "الدورات" },
//             { href: "/getintouch", text: "تواصل معنا" },
//           ].map((link, index) => (
//             <Link
//               key={index}
//               href={link.href}
//               className="text-white hover:text-gray-300 text-lg md:text-xl py-2"
//             >
//               {link.text}
//             </Link>
//           ))}
//         </div>
//       )}
//     </nav>
//     </div>
//   );
// }





















// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed w-full right-4 top-4 flex justify-end px-4 z-50">
//       {/* Open Button - Always Visible */}
//       <button
//         onClick={() => setIsOpen(true)}
//         className="bg-black text-white px-4 py-2 md:px-5 md:py-3 rounded-xl shadow-lg border border-white text-base md:text-lg transition-all duration-300 hover:bg-gray-800"
//       >
//         قائمة طعام
//       </button>

//       {/* Full-Screen Navbar with Animations */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center w-full h-full"
//           >
//             {/* Close Button */}
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setIsOpen(false)}
//               className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-lg shadow-lg transition-all duration-300 hover:bg-red-700"
//             >
//               إغلاق ✖
//             </motion.button>

//             {/* Navigation Links */}
//             {[
//               { href: "/", text: "الرئيسية" },
//               { href: "/about", text: "معلومات عنا" },
//               { href: "/coursespage", text: "الدورات" },
//               { href: "/getintouch", text: "تواصل معنا" },
//             ].map((link, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: 10 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//               >
//                 <Link
//                   href={link.href}
//                   className="text-white hover:text-gray-300 text-lg md:text-xl py-2 transition-all duration-300"
//                 >
//                   {link.text}
//                 </Link>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }











































































// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Button from "./Button";

// import { Menu, X } from "lucide-react"; // Import icons

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="w-full fixed top-0 left-0 z-50  p-4 ">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <Link href="/">
//           <img 
//             src="/images/logo1.png" 
//             alt="Logo" 
//             className="h-[10vh] w-auto md:w-[10vw] lg:w-auto transition-transform duration-300 hover:scale-105 border-[1px] border-white bg-white"
//             />
//         </Link>

//         {/* Menu Button - Always Visible */}
//         <button
//           onClick={() => setIsOpen(true)}
//           className="block transition-all duration-300"
//         >
//           <Menu size={32} />
//         </button>
//       </div>

//       {/* Full-screen Overlay Menu (Sliding from Left) */}
//       <div
//         className={`fixed top-0 left-0 w-full h-full bg-black text-white transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 flex flex-col items-center justify-center space-y-6`}
//       >
//         {/* Close Button */}
//         <button
//           onClick={() => setIsOpen(false)}
//           className="absolute top-4 right-4 text-white"
//         >
//           <X size={32} />
//         </button>

//         {/* Navigation Links */}
//         <Link href="/" className="text-2xl hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</Link>
//         <Link href="/about" className="text-2xl hover:text-gray-400" onClick={() => setIsOpen(false)}>About</Link>
//         <Link href="/services" className="text-2xl hover:text-gray-400" onClick={() => setIsOpen(false)}>Services</Link>
//         <Link href="/contact" className="text-2xl hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact</Link>

//         {/* Custom Button */}
//         <Button
//           text="Get Started"
//           bgColor="bg-white"
//           textColor="text-black"
//           borderColor="border-black/50"
//           px="px-8"
//           py="py-4"
//           hoverBgColor="hover:bg-black"
//           hoverTextColor="hover:text-white"
//         />
//       </div>
//     </nav>
//   );
// }























































"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import { Menu, X } from "lucide-react"; // Import icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 right-0 z-50 p-4 md:px-6 " dir="rtl">
      <div className="max-w-full mx-auto flex md:flex-row-reverse items-center  justify-between rounded-full p-4 ">
        {/* الشعار */}
        <Link href="/">
          <img 
            src="/images/logo-favicon.png" 
            alt="الشعار" 
            className="h-[10vh] md:h-[10vh] bg-contain w-auto md:w-[10vw] lg:w-auto transition-transform duration-300 hover:scale-105  overflow-hidden "
          />
        </Link>

        {/* زر القائمة - باستخدام الزر المخصص */}
        {/* <Button 
          text={"menu"} 
          bgColor="bg-" 
          textColor="text-white"
          borderColor="border-none"
          /> */}
         <Button
          text="ابدأ الآن"
          bgColor="bg-black"
          textColor="text-white"
          borderColor="border-black"
          px="px-16"
          py="py-8"
          hoverBgColor="hover:bg-[rgb(var(--mexican-red))]"
          hoverTextColor="hover:text-white"
          className={`rounded-full`}

          onClick={() => setIsOpen(true)}
        />
      </div>

      {/* قائمة التنقل الجانبية */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-[rgb(var(--teal-blue))]  text-[rgb(var(--light-gray))] transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 flex flex-col items-center justify-center space-y-6 gap-4`}

        style={{ backdropFilter: "blur(16px)", backgroundColor: "rgba(var(--teal-blue), 0.5)" }}
      >



      
        {/* زر الإغلاق - باستخدام الزر المخصص */}
        <div className="">
        <Button 
          text={<X size={32} />} 
          bgColor="bg-[rgb(var(--mexican-red))]" 
          textColor="text-white"
          borderColor="border-white"
          onClick={() => setIsOpen(false)}
          className="absolute top-4 left-4"
           px="px-16"
          py="py-8"
        />
        </div>

        {/* روابط التنقل */}
        <Link href="/" className="text-2xl md:text-6xl  hover:text-white" onClick={() => setIsOpen(false)}>الرئيسية</Link>
        <Link href="/about" className="text-2xl md:text-6xl  hover:text-white" onClick={() => setIsOpen(false)}>من نحن</Link>
        <Link href="/services" className="text-2xl md:text-6xl  hover:text-white" onClick={() => setIsOpen(false)}>الخدمات</Link>
        <Link href="/contact" className="text-2xl md:text-6xl  hover:text-white" onClick={() => setIsOpen(false)}>اتصل بنا</Link>

        {/* زر مخصص */}
        <Button
          text="ابدأ الآن"
          bgColor="bg-white"
          textColor="text-black"
          borderColor="border-black/50"
          px="px-16"
          py="py-8"
          hoverBgColor="hover:bg-[rgb(var(--teal-blue))]"
          hoverTextColor="hover:text-white"
        />
      </div>
    </nav>
  );
}
