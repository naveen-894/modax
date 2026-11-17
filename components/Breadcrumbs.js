import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import JsonLd from './JsonLd'
import { SITE_URL } from '../lib/constants'

/** Visual breadcrumb trail + matching BreadcrumbList JSON-LD.
 * `items` is the trail after Home, e.g. [{ name: 'Products', href: '/products' }, { name: 'Rawnn' }]
 * (omit `href` on the last/current item). */
export default function Breadcrumbs({ items }) {
  const trail = [{ name: 'Home', href: '/' }, ...items]

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href || ''}`,
    })),
  }

  return (
    <nav aria-label="Breadcrumb" className="bg-modax-blue-tint-2 border-b border-modax-border-lt">
      <JsonLd data={breadcrumbSchema} />
      <div className="container-max px-3 sm:px-4 lg:px-6 py-3">
        <ol className="flex items-center flex-wrap gap-1.5 text-sm text-modax-body">
          {trail.map((item, index) => {
            const isLast = index === trail.length - 1
            return (
              <li key={item.href || item.name} className="flex items-center gap-1.5">
                {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-modax-muted-2 flex-shrink-0" aria-hidden="true" />}
                {isLast || !item.href ? (
                  <span className="font-medium text-modax-ink" aria-current="page">
                    {index === 0 ? <Home className="w-3.5 h-3.5 inline -mt-0.5" aria-label="Home" /> : item.name}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-modax-blue-deep transition-colors">
                    {index === 0 ? <Home className="w-3.5 h-3.5 inline -mt-0.5" aria-label="Home" /> : item.name}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
