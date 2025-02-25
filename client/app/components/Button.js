"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Button({
  text = "اضغط هنا", // Arabic default text
  bgColor = "bg-white", // Background color
  textColor = "text-black", // Text color
  borderColor = "border-black", // Border color
  hoverBgColor = "hover:bg-gray-300", // Hover background
  hoverTextColor = "hover:text-black", // Hover text color
  px = "px-16", // Padding X
  py = "py-3", // Padding Y
}) {
  const buttonRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Ensure elements exist before running animation
    const timer = setTimeout(() => {
      if (!buttonRef.current || !textRef.current) return;
      
      console.log("Button Ref:", buttonRef.current);
      console.log("Text Ref:", textRef.current);
      
      const button = buttonRef.current;
      const span = textRef.current;
      const tl = gsap.timeline({ paused: true });

      tl.to(span, { duration: 0.2, yPercent: -150, ease: "power2.in" });
      tl.set(span, { yPercent: 150 });
      tl.to(span, { duration: 0.2, yPercent: 0 });

      const handleMouseEnter = () => tl.play(0);
      button.addEventListener("mouseenter", handleMouseEnter);

      return () => {
        button.removeEventListener("mouseenter", handleMouseEnter);
      };
    }, 100); // Small delay to ensure elements are available

    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="#"
      ref={buttonRef}
      dir="rtl" // Ensures proper Arabic text flow
      className={`inline-flex items-center justify-center border rounded-xl overflow-hidden 
        transition duration-300 ease-in-out ${bgColor} ${textColor} ${borderColor} 
        ${hoverBgColor} ${hoverTextColor} md:${px} md:${py} px-4 py-2 text-center text-3xl hover:scale-110`}
    >
      <span ref={textRef} className="relative inline-block">
        {text}
      </span>
    </a>
  );
}
