import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import { blogPosts } from '../../lib/blogPosts'
import { SITE_URL } from '../../lib/constants'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Blog: AI, Websites & Ecommerce for Growing Businesses | Modax',
  description: 'Practical guides on AI automation, website and ecommerce costs, and running your own online store, from the Modax team in Bengaluru.',
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: 'Blog: AI, Websites & Ecommerce for Growing Businesses | Modax',
    description: 'Practical guides on AI automation, website and ecommerce costs, and running your own online store.',
    url: '/blog',
    type: 'website',
    images: ['/images/og-image.jpg'],
  },
}

export default function BlogIndexPage() {
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <div className="min-h-screen">
      <Navigation />
      <Breadcrumbs items={[{ name: 'Blog' }]} />
      <main>
        <section className="section-padding bg-modax-blue-tint-2">
          <div className="container-max">
            <div className="text-center max-w-2xl mx-auto">
              <div className="eyebrow mb-4 justify-center">Modax blog</div>
              <h1 className="text-4xl sm:text-5xl font-bold text-modax-ink mb-5 leading-[1.1] tracking-tight">
                Modax blog
              </h1>
              <p className="text-lg text-modax-body leading-relaxed">
                Practical guides on AI automation, website and ecommerce costs, and running your own online store.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {sortedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card-surface card-hover p-6 flex flex-col"
                >
                  <div className="flex items-center gap-2 text-xs text-modax-muted-2 font-medium uppercase tracking-wide mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                  <h2 className="text-xl font-bold text-modax-ink mb-3">{post.title}</h2>
                  <p className="text-sm text-modax-body leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-modax-blue-deep">
                    Read more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
