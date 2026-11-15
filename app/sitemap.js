const BASE_URL = 'https://www.modax.in'

// lastModified should be bumped whenever a page's content changes —
// /rawnn is intentionally omitted: it 301-redirects to /products/rawnn
// (see next.config.js), and only canonical URLs belong in the sitemap.
const routes = [
  { path: '/', lastModified: '2026-10-31', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/services', lastModified: '2026-10-28', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/products', lastModified: '2026-10-28', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/products/rawnn', lastModified: '2026-11-11', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/products/ai-resume-matcher', lastModified: '2026-10-28', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/about', lastModified: '2026-10-28', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/contact', lastModified: '2026-10-28', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/privacy-policy', lastModified: '2026-11-11', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms', lastModified: '2026-11-11', changeFrequency: 'yearly', priority: 0.3 },
]

export default function sitemap() {
  return routes.map(({ path, ...rest }) => ({
    url: `${BASE_URL}${path}`,
    ...rest,
  }))
}
