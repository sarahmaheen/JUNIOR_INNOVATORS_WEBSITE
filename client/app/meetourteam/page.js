"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const teamMembers = [
  { id: 1, name: "أحمد علي", role: "مطور الواجهة الأمامية", image: "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=" },
  { id: 2, name: "سارة محمد", role: "مصممة UI/UX", image: "https://media.istockphoto.com/id/1369508766/photo/beautiful-successful-latin-woman-smiling.jpg?s=612x612&w=0&k=20&c=LoznG6eGT42_rs9G1dOLumOTlAveLpuOi_U755l_fqI=" },
  { id: 3, name: "خالد عبد الله", role: "مهندس برمجيات", image: "https://media.istockphoto.com/id/1840864749/photo/young-successful-businesswoman-at-corporate-office-looking-at-camera.jpg?s=612x612&w=0&k=20&c=NTgContSG8ygPpYJA3b6onDfUMQ5ANn4DzEN9y5w4dU=" },
  { id: 4, name: "نور الحسن", role: "مدير المشروع", image: "https://media.istockphoto.com/id/1688303228/photo/smiling-mature-businessman-in-his-office.jpg?s=612x612&w=0&k=20&c=z5u__wU37UZF1BQwRqpwXVa7mO8Uf466N0hYJqI-UfI=" },
];

export default function MeetOurTeam() {
  const teamRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      teamRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
    {/* Header Section */}
    <div className="text-right mb-12">
      <h2 className="text-6xl font-bold text-black">👨‍💻 فريقنا المميز</h2>
      <p className="text-lg text-gray-800 mt-2">
      ي عالمنا الحديث، تلعب التكنولوجيا دورًا حاسمًا في حياتنا اليومية، حيث أصبحت جزءًا لا يتجزأ من جميع جوانب المجتمع. فمن الهواتف الذكية التي نحملها في جيوبنا إلى الحواسيب العملاقة التي تدير البنية التحتية العالمية، أصبحت التكنولوجيا القوة الدافعة وراء الابتكار والتطور. ومع ذلك، فإن هذا التقدم السريع يحمل في طياته تحديات كبيرة، مثل الأمن السيبراني، والخصوصية، وتأثير الذكاء الاصطناعي على سوق العمل. إن الإنترنت، الذي بدأ كمجرد وسيلة للتواصل بين العلماء والباحثين، قد تحول إلى شبكة عالمية تربط المليارات من البشر، مما يتيح لهم تبادل المعلومات والأفكار والتفاعل مع بعضهم البعض بشكل غير مسبوق. وفي ظل هذه التغيرات، أصبح التعلم الذاتي ضرورة ملحة، حيث لم يعد التعليم التقليدي وحده كافيًا لمواكبة التطورات السريعة. فالأشخاص الذين يستثمرون في تطوير مهاراتهم الرقمية يملكون فرصًا أكبر لتحقيق النجاح في هذا العصر الرقمي. ومن ناحية أخرى، يجب أن نتذكر أن التكنولوجيا ليست مجرد أدوات مادية، بل هي أيضًا مسؤولية، 
      </p>
    </div>
  
    {/* Main Content: Team + Description */}
    <div className="flex flex-col lg:flex-row-reverse gap-8 px-4">
      {/* Team Cards (2/3 width) */}
      <div ref={teamRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 flex-1 lg:w-2/3">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white shadow-lg rounded-lg p-4 flex items-center gap-4 transition-transform transform hover:scale-105 justify-around"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-[rgb(var(--teal-blue))]"
            />
            <div className="text-right flex flex-col">
              <h3 className="text-2xl font-semibold text-black">{member.name}</h3>
              <p className="text-gray-800 text-lg">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
  
      {/* Description Section (1/3 width) */}
      <div className="lg:w-1/3 flex items-center justify-center">
        <div className="max-w-lg text-right">
          <h2 className="text-4xl font-bold text-black mb-4">💡 قابل فريقنا!</h2>
          <p className="text-2xl text-[rgb(var(--teal-blue))]">
            نحن مجموعة من المحترفين المتحمسين الذين يسعون جاهدين لخلق تجارب رقمية مذهلة. 
            هدفنا هو تحويل الأفكار إلى واقع بأسلوب فريد واحترافي.
          </p>
        </div>
      </div>
    </div>
  </div>
  
  );
}
