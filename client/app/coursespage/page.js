// "use client";

// import { motion } from "framer-motion";

// const courses = [
//   {
//     title: "دورة تطوير الويب",
//     description: ["تعلم HTML و CSS و JavaScript", "مشاريع عملية", "دعم مستمر"],
//     cta: "ابدأ الآن",
//   },
//   {
//     title: "دورة React",
//     description: ["تعلم React.js من الصفر", "مكونات قابلة لإعادة الاستخدام", "تطوير واجهات حديثة"],
//     cta: "سجل الآن",
//   },
//   {
//     title: "دورة الذكاء الاصطناعي",
//     description: ["تعلم التعلم العميق", "مكتبات مثل TensorFlow", "مشاريع حقيقية"],
//     cta: "انضم الآن",
//   },
// ];

// export default function CoursesPage() {
//   return (
//     <div className="p-8 min-h-screen bg-gray-100 text-right rtl">
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-4xl font-bold text-center text-blue-600 mb-8"
//       >
//         الدورات المتاحة
//       </motion.h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {courses.map((course, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileHover={{ scale: 1.05 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.4 }}
//             className="bg-white shadow-lg rounded-xl p-6 border border-gray-200"
//           >
//             <h2 className="text-2xl font-semibold text-gray-800 mb-3">{course.title}</h2>
//             <ul className="text-gray-600 list-disc list-inside">
//               {course.description.map((point, i) => (
//                 <li key={i}>{point}</li>
//               ))}
//             </ul>
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg shadow-lg transition"
//             >
//               {course.cta}
//             </motion.button>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }







"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../components/Button"; // Adjust path if needed


// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const courses = [
  {
    title: "دورة تطوير الويب",
    description: [
      "تعلم HTML و CSS و JavaScript",
      "إتقان تصميم الواجهات الأمامية",
      "بناء مواقع متجاوبة",
      "استخدام Flexbox و Grid",
      "تطوير مواقع ديناميكية باستخدام JavaScript",
      "فهم DOM والتعامل معه",
      "استخدام مكتبات CSS مثل Bootstrap و Tailwind",
      "إنشاء تطبيقات متكاملة مع API",
      "التعامل مع قواعد البيانات في الويب",
      "بناء مشاريع حقيقية لتعزيز المهارات",
      "تحسين أداء المواقع وسرعة التحميل",
      "إدارة المشاريع باستخدام Git و GitHub",
      "فهم أساسيات الـ SEO لتحسين محركات البحث",
      "تأمين المواقع من الثغرات الأمنية",
      "الحصول على دعم وتوجيه من المدربين",
    ],
    cta: "ابدأ الآن",
  },
  {
    title: "دورة React",
    description: [
      "تعلم React.js من الصفر",
      "مفهوم المكونات (Components) وإعادة استخدامها",
      "التعامل مع الـ State و Props",
      "استخدام React Hooks مثل useState و useEffect",
      "إنشاء تطبيقات تفاعلية وحديثة",
      "التعامل مع التوجيه (React Router)",
      "التفاعل مع الـ API وجلب البيانات",
      "تحسين أداء التطبيقات باستخدام React.memo",
      "إدارة الحالة باستخدام Redux",
      "استخدام مكتبات التصميم مثل Material-UI",
      "بناء تطبيقات متجاوبة مع الشاشات المختلفة",
      "استخدام TypeScript مع React",
      "إنشاء واجهات احترافية باستخدام Framer Motion",
      "تطوير مشاريع عملية لتعزيز المهارات",
      "توظيف المهارات المكتسبة في سوق العمل",
    ],
    cta: "سجل الآن",
  },
  {
    title: "دورة الذكاء الاصطناعي",
    description: [
      "تعلم مبادئ الذكاء الاصطناعي",
      "فهم الخوارزميات الأساسية للتعلم الآلي",
      "التعامل مع مكتبات مثل TensorFlow و PyTorch",
      "تحليل البيانات باستخدام Pandas و NumPy",
      "بناء نماذج التعلم العميق",
      "التدريب على خوارزميات التصنيف والتجميع",
      "التعامل مع معالجة اللغات الطبيعية (NLP)",
      "تنفيذ أنظمة التوصية الذكية",
      "التعرف على الصور باستخدام الشبكات العصبية",
      "تنفيذ مشاريع حقيقية باستخدام الذكاء الاصطناعي",
      "تحليل البيانات الكبيرة باستخدام الذكاء الاصطناعي",
      "توظيف الذكاء الاصطناعي في تطوير التطبيقات",
      "تحسين النماذج باستخدام تقنيات تعزيز التعلم",
      "التعرف على تطبيقات الذكاء الاصطناعي في مختلف المجالات",
      "الاستعداد للعمل كمطور ذكاء اصطناعي",
    ],
    cta: "انضم الآن",
  },
];




export default function CoursesPage() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, x: -50 }, // Reduce x-offset to prevent mobile disappearing issue
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%", // Adjusted trigger for better mobile experience
            end: "bottom 20%", // Ensures animation stays visible longer
            toggleActions: "play none none none", // Prevents unwanted reversing
            once: true, // Ensures animation runs only once per scroll
          },
        }
      );
    }, containerRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div ref={containerRef} className="p-6 bg-[rgb(var(--light-gray))] text-right rtl">
      <h1 className="text-4xl font-bold text-center text-[rgb(var(--teal-blue))] mb-8">الدورات المتاحة</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="flex flex-col justify-between items-center gap-3 bg-white shadow-lg rounded-xl p-6 border border-gray-200"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">{course.title}</h2>
            <ul className="text-black list-disc rtl:text-right rtl:list-inside">
  {course.description.map((point, i) => (
    <li key={i}>{point}</li>
  ))}
</ul>

            <Button 
              text={courses.cta}
              bgColor="bg-black" 
              textColor="text-white" 
              borderColor="border-black" 
              px="px-8" 
              py="py-4" 
              hoverBgColor="hover:bg-[rgb(var(--teal-blue))]" 
              hoverTextColor="hover:text-white" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
