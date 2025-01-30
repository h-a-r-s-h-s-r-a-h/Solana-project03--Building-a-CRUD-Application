/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false, // Prevents errors related to `fs` in the browser
    };
    return config;
  },
};

export default nextConfig;
