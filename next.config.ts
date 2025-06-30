import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 外部画像を使うための設定
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos'
      },
      {
        protocol: 'https',
        hostname: 'hkbuilvwheaxnhtvxpvb.supabase.co'
      }
    ]
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb' //必要に応じて値を変更（デフォルトが1MBのため）
    }
  }
};

export default nextConfig;
