"use client";

export default function InfiniteTextCarousel() {
  return (
    <div className="w-full overflow-hidden  py-4 bg-[rgb(var(--light-gray))]">
      <div className="flex whitespace-nowrap min-w-max animate-scroll text-6xl sm:text-7xl md:text-8xl font-bold text-black font-tajawal">
        {/* Duplicate the text to create an infinite loop effect */}
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex">
            <p className="mr-16">🚀 تعلم البرمجة</p>
            <p className="mr-16">💻 بناء مشاريع مذهلة</p>
            <p className="mr-16">🎯 إتقان Tailwind و React</p>
            <p className="mr-16">🔥 انضم إلى ثورة التكنولوجيا</p>
          </div>
        ))}
      </div>
    </div>
  );
}
