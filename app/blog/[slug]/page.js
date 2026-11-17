import Link from 'next/link'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Calendar, User, ArrowRight } from 'lucide-react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Breadcrumbs from '../../../components/Breadcrumbs'
import JsonLd from '../../../components/JsonLd'
import ImagePlaceholder from '../../../components/ImagePlaceholder'
import HeroImage from '../../../components/HeroImage'
import { blogPosts, getBlogPostBySlug } from '../../../lib/blogPosts'
import { SITE_URL, S3_LANDING_URL } from '../../../lib/constants'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) return {}

  return {
    metadataBase: new URL(SITE_URL),
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: [post.keyword],
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `/blog/${post.slug}`,
      type: 'article',
      images: ['/images/og-image.jpg'],
    },
  }
}

export default function BlogPostPage({ params }) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Modax',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  }

  return (
    <div className="min-h-screen">
      <JsonLd data={articleSchema} />
      <Navigation />
      <Breadcrumbs items={[{ name: 'Blog', href: '/blog' }, { name: post.title }]} />
      <main>
        <article className="section-padding bg-white">
          <div className="container-max max-w-2xl">
            {post.coverImageReady ? (
              <HeroImage
                src={`${S3_LANDING_URL}/${post.coverImage}`}
                alt={post.coverImageAlt || post.title}
                className="mb-10"
              />
            ) : (
              <ImagePlaceholder filename={post.coverImage} ratio="aspect-[16/9]" className="mb-10" />
            )}
            <h1 className="text-3xl sm:text-4xl font-bold text-modax-ink mb-5 leading-tight tracking-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-modax-muted-2 mb-10 pb-6 border-b border-modax-border-lt">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>

            <div className="prose-modax">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
            </div>

            {post.relatedLinks && post.relatedLinks.length > 0 && (
              <div className="mt-14 pt-8 border-t border-modax-border-lt">
                <h2 className="text-sm font-semibold text-modax-ink uppercase tracking-wide mb-4">Related pages</h2>
                <ul className="space-y-2">
                  {post.relatedLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="inline-flex items-center gap-1.5 text-modax-blue-deep font-semibold hover:underline">
                        {link.label} <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-10">
              <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-modax-body hover:text-modax-blue-deep">
                ← Back to the blog
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
