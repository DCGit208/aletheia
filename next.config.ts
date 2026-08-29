import type { NextConfig } from "next";

const hosting = process.env.FIREBASE_HOSTING === "1";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Tunnels + loopback so the app can be opened in a normal browser.
  allowedDevOrigins: [
    "127.0.0.1",
    "0.0.0.0",
    "pete-surely-scanned-hwy.trycloudflare.com",
    "*.trycloudflare.com",
    "*.loca.lt",
    "*.ngrok-free.app",
    "*.ngrok.app",
  ],
  ...(hosting
    ? {
        output: "export" as const,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
