// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };





// import "./globals.css";
// import Navbar from "./components/Navbar";

// export default function RootLayout({ children }) {
//   return ( 
//     <html lang="en">
//       <body
//         className={`antialiased`}
//       >
//         {/* <Navbar/>  */}
//          {/* Add the Navbar here */}
//         {children}  {/* This is where the page content will render */}
//       </body>
//     </html>
//   );
// }

































import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "المبتكرون الصغار | تعلم البرمجة والإلكترونيات للأطفال",
  description: "تم إنشاء هذا التطبيق باستخدام Next.js لتقديم تجربة حديثة وسريعة.",
  keywords: "تعلم البرمجة, الإلكترونيات, الروبوتات, الأردوينو, الأطفال, تكنولوجيا المستقبل",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "المبتكرون الصغار | تعلم البرمجة والإلكترونيات للأطفال",
    description: "تمتع بتجربة تعليمية تفاعلية للأطفال في البرمجة والإلكترونيات والروبوتات.",
    url: "https://yourwebsite.com", // Replace with your actual website URL
    type: "website",
    images: [
      {
        url: "/images/seo-default.jpg", // ✅ Ensure this image exists in the public folder
        width: 1200,
        height: 630,
        alt: "المبتكرون الصغار - تعلم البرمجة والإلكترونيات للأطفال",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "المبتكرون الصغار | تعلم البرمجة والإلكترونيات للأطفال",
    description: "تمتع بتجربة تعليمية تفاعلية للأطفال في البرمجة والإلكترونيات والروبوتات.",
    images: "/images/seo-default.jpg",
  },
};

import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  return ( 
    <html lang="en">
      <body className="antialiased">
        <Navbar/>  
        {children}  {/* This is where the page content will render */}
      </body>
    </html>
  );
}
















 