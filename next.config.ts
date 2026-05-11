import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent clickjacking — never render in an iframe
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // Prevent MIME-type sniffing
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Strict referrer — no referrer leakage cross-origin
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Disable browser features not needed on a teaser page
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  // DNS prefetch control
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  // Content Security Policy
  // Allows: self, Google Fonts (for Cormorant Garamond), Vercel analytics
  // Blocks: everything else — no inline scripts, no external scripts
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'", // Next.js requires unsafe-inline for hydration
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,

  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // Optimise production images
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
