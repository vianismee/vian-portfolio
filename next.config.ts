import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ztgkfqetyzwxqdctmvql.supabase.co',
        port: '',
        pathname: '/**',
      },
    ],
  }
  /* config options here */
};

export default nextConfig;
