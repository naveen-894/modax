/** @type {import('next').NextConfig} */
const nextConfig = {
  // App directory is stable in Next.js 14, no experimental config needed

  // SEO and Performance optimizations
  compress: true,
  poweredByHeader: false,

  // Image optimization for better SEO
  images: {
    domains: ['modax.com'],
    formats: ['image/webp', 'image/avif'],
  },

  // Enable experimental features for better SEO
  experimental: {
    optimizeCss: true,
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
