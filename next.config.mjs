/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "frame-src 'self' https://alumn-a28s7lk87-maheshkumarjenas-projects.vercel.app;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
