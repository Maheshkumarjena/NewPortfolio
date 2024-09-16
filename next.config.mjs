/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Combine all domains into a single array
    domains: [
      "assets.aceternity.com",
      "aceternity.com",
      "auth-frontend-bt9fsab5b-maheshkumarjenas-projects.vercel.app",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname:
          "auth-frontend-bt9fsab5b-maheshkumarjenas-projects.vercel.app",
      },
    ],
  },
};

export default nextConfig;
