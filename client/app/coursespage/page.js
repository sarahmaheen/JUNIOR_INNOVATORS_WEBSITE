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
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center p-6"
      style={{ backgroundImage: "url('/images/image6.jpg')" }} // Set background image
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-rgb(var(--light-gray)) backdrop-blur-md"></div>

      {/* Title */}
      <h1 className="relative text-4xl font-bold text-center text-white mb-8 z-10">
        الدورات المتاحة
      </h1>

      {/* Course Cards */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
        {courses.map((course, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="flex flex-col justify-between items-center gap-3 p-6 rounded-xl border border-white/30 bg-white/20 backdrop-blur-md shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-black mb-3">{course.title}</h2>
            <ul className="text-black list-disc list-inside text-right">
              {course.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <Button 
              text={course.cta}
              bgColor="bg-black" 
              textColor="text-white" 
              borderColor="border-white/50" 
              px="px-8" 
              py="py-4" 
              hoverBgColor="hover:bg-white" 
              hoverTextColor="hover:text-black" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
