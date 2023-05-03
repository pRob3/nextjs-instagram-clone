/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['slaf.se', 'upload.wikimedia.org', 'lh3.googleusercontent.com'],
  },
};

module.exports = nextConfig;
