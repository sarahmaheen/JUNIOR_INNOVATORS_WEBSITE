// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: "export",
//   };
  
//   export default nextConfig; // Use ES module export
  
















/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", 
    images: { unoptimized: true },  // Fix for Image Optimization issue
  };
  
  export default nextConfig;
  