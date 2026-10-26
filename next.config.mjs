/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  poweredByHeader: false,
  generateEtags: true,
  async redirects() {
    return [
      {
        source: "/microscopic-dentistry",
        destination: "/services/microscopic-root-canal",
        permanent: true,
      },
      {
        source: "/locations/kogilu",
        destination: "/locations",
        permanent: true,
      },
      {
        source: "/locations/kodigehalli",
        destination: "/locations",
        permanent: true,
      },
      {
        source: "/locations/devanahalli",
        destination: "/locations",
        permanent: true,
      },
      {
        source: "/locations/doddaballapur",
        destination: "/locations",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
