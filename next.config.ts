import type { NextConfig } from "next";

/**
 * Nonce-based CSP would force every page to render dynamically.
 * This static clinic site uses the Next.js header CSP instead.
 * `unsafe-inline` remains because the App Router injects its bootstrap
 * scripts and font styles without a per-request nonce. There is no
 * user-supplied HTML on the page. `unsafe-eval` is limited to development,
 * where React uses it for debugging. `upgrade-insecure-requests` is omitted
 * because Vercel already redirects HTTP to HTTPS, and the directive breaks
 * a local `next start` server that is served over HTTP.
 */
function contentSecurityPolicy(): string {
  const isDev = process.env.NODE_ENV === "development";
  const scriptSrc = ["'self'", "'unsafe-inline'"];
  if (isDev) {
    scriptSrc.push("'unsafe-eval'");
  }

  const directives = [
    "default-src 'self'",
    `script-src ${scriptSrc.join(" ")}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' blob: data:",
    "font-src 'self'",
    "connect-src 'self'",
    "media-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'none'",
    "frame-src 'none'",
    "frame-ancestors 'none'",
    "worker-src 'self'",
    "manifest-src 'self'",
  ];

  return directives.join("; ");
}

function securityHeaders(): { key: string; value: string }[] {
  const headers = [
    { key: "Content-Security-Policy", value: contentSecurityPolicy() },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "X-Frame-Options", value: "DENY" },
    {
      key: "Permissions-Policy",
      value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
    },
    { key: "X-DNS-Prefetch-Control", value: "off" },
    { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  ];

  if (process.env.NODE_ENV === "production") {
    headers.push({
      key: "Strict-Transport-Security",
      value: "max-age=63072000; includeSubDomains",
    });
  }

  return headers;
}

const nextConfig: NextConfig = {
  poweredByHeader: false,
  devIndicators: false,
  images: {
    localPatterns: [
      {
        pathname: "/images/**",
        search: "",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders(),
      },
    ];
  },
};

export default nextConfig;
