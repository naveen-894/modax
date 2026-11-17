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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'modax-s3.s3.ap-south-1.amazonaws.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },

  // Enable experimental features for better SEO
  // experimental: {
  //   optimizeCss: true,
  // },

  // /rawnn was an early product page; it's superseded by /products/rawnn,
  // which is the canonical URL. Redirect instead of serving a duplicate.
  async redirects() {
    return [
      {
        source: '/rawnn',
        destination: '/products/rawnn',
        permanent: true,
      },
    ]
  },

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
