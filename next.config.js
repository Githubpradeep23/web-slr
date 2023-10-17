/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // images: {
  //   unoptimized: true,
  // }
  basePath: "https://academy.cyphertechvalley.com",
  output: "standalone",
  experimental: {
  appDir: true,
},
};

module.exports = nextConfig;
