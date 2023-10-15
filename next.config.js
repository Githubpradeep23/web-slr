/** @type {import('next').NextConfig} */
{
  const nextConfig = nextConfig;
{
 
  images: {
  formats: ['image/jpeg', 'image/png'], // Add any other desired formats
  domains: ['example.com'], // Add domains from which images will be served
  loader: 'default', // Use 'default' or 'imgix' loader, depending on your preference
  path: '/_next/image',
  quality: 90,
  },
  basePath: "",
  output: "standalone",
  experimental: {
  appDir: true,

  },
},
};
