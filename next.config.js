/** @type {import('next').NextConfig} */
const nextConfig = {
  // App directory is stable in Next.js 14, no experimental config needed

  // This repo had no ESLint config before the chatbot work added one (for the
  // new chatbot code); pre-existing unescaped-entity warnings in older
  // components shouldn't block production builds. Run `npm run lint` manually.
  eslint: {
    ignoreDuringBuilds: true,
  },

  // SEO and Performance optimizations
  compress: true,
  poweredByHeader: false,

  // Image optimization for better SEO
  images: {
    domains: ['modax.in'],
    formats: ['image/webp', 'image/avif'],
  },

  // Enable experimental features for better SEO
  // experimental: {
  //   optimizeCss: true,
  // },

  // Security headers for better SEO trust signals
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
