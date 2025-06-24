import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 外部画像を使うための設定
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos'
      }
    ]
  }
};

export default nextConfig;
