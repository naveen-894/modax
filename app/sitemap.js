import { blogPosts } from '../lib/blogPosts'

const BASE_URL = 'https://www.modax.in'

// lastModified should be bumped whenever a page's content changes —
// /rawnn is intentionally omitted: it 301-redirects to /products/rawnn
// (see next.config.js), and only canonical URLs belong in the sitemap.
const routes = [
  { path: '/', lastModified: '2026-11-17', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/services', lastModified: '2026-11-17', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/services/ai-automation', lastModified: '2026-11-17', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/website-development', lastModified: '2026-11-17', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/app-development', lastModified: '2026-11-17', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/products', lastModified: '2026-11-17', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/products/rawnn', lastModified: '2026-11-17', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/products/ai-resume-matcher', lastModified: '2026-11-17', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/shopify-alternative-india', lastModified: '2026-11-17', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/rawnn-vs-shopify', lastModified: '2026-11-17', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/rawnn-vs-woocommerce', lastModified: '2026-11-17', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/ecommerce-website-development-bangalore', lastModified: '2026-11-17', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/ecommerce-website-cost-india', lastModified: '2026-11-17', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/d2c-ecommerce-platform', lastModified: '2026-11-17', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/instagram-to-website', lastModified: '2026-11-17', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/ecommerce-for-fashion', lastModified: '2026-11-17', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/ecommerce-for-retail-and-brands', lastModified: '2026-11-17', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/blog', lastModified: '2026-11-17', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/about', lastModified: '2026-11-17', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/contact', lastModified: '2026-11-17', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/privacy-policy', lastModified: '2026-11-11', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms', lastModified: '2026-11-11', changeFrequency: 'yearly', priority: 0.3 },
]

export default function sitemap() {
  const staticRoutes = routes.map(({ path, ...rest }) => ({
    url: `${BASE_URL}${path}`,
    ...rest,
  }))

  const blogRoutes = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes]
}
