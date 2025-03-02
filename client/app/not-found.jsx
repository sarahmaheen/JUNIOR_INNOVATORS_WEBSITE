// export default function NotFoundPage() {
//     const svgPath = "/icons-images/notfound.svg"; // Path from public folder
  
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 rtl">
//         {/* 🔹 SVG Image */}
//         <img src={svgPath} alt="صفحة غير موجودة" className="w-60 mx-auto mb-4" />
  
//         {/* 🔹 Arabic Text */}
//         <h1 className="text-4xl font-bold">الصفحة غير موجودة</h1>
//         <p className="text-lg mt-2">يبدو أنك وصلت إلى رابط غير صحيح.</p>
  
//         {/* 🔹 Button to Navigate Back */}
//         <a href="/" className="mt-4 inline-block px-6 py-2 bg-[rgb(var(--teal-blue))] text-white rounded-lg">
//           العودة إلى الصفحة الرئيسية
//         </a>
//       </div>
//     );
//   }
  



import Button from "./components/Button";

export default function NotFoundPage() {
  const svgPath = "/icons-images/notfound.svg"; // Path from public folder

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 text-gray-800 rtl gap-4 pt-10">
      {/* 🔹 SVG Image */}
      <img src={svgPath} alt="صفحة غير موجودة" className="flex-2/3 w-60 mx-auto mb-4" />

      {/* 🔹 Arabic Text */}
      <div className="flex-1/3 flex flex-col justify-around  items-center">
      <h1 className="text-4xl font-bold">الصفحة غير موجودة</h1>
      <p className="text-lg mt-2">يبدو أنك وصلت إلى رابط غير صحيح.</p>

      {/* 🔹 Custom Button with Link */}
      <a href="/">
        <Button
          text="العودة إلى الصفحة الرئيسية"
          bgColor="bg-[rgb(var(--teal-blue))]"
          textColor="text-white"
          borderColor="border-black"
          px="px-16"
          py="py-8"
          hoverBgColor="hover:bg-[rgb(var(--light-gray))] "
          hoverTextColor="hover:text-black"
        />
      </a>
      </div>
    </div>
  );
}
