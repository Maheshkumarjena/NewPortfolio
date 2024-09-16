/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Use only remotePatterns for external images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        pathname: "/**", // Allow all paths from this domain
      },
      {
        protocol: "https",
        hostname: "aceternity.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname:
          "auth-frontend-bt9fsab5b-maheshkumarjenas-projects.vercel.app",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
