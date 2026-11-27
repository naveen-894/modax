'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

/** All resource links stay in the rendered markup at all times (so search
 * engines keep crawling/indexing every linked page) — "Show more" only
 * toggles a CSS height/opacity transition, it never unmounts the extra
 * links. Visitors get a short list by default; crawlers always see all of them. */
const primaryLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/ecommerce-website-cost-india', label: 'Ecommerce Website Cost in India' },
  { href: '/shopify-alternative-india', label: 'Shopify Alternative India' },
  { href: '/rawnn-vs-shopify', label: 'Shopify vs Custom Website' },
  { href: '/d2c-ecommerce-platform', label: 'D2C Ecommerce Platform' },
]

const moreLinks = [
  { href: '/rawnn-vs-woocommerce', label: 'WooCommerce Alternative' },
  { href: '/ecommerce-website-development-bangalore', label: 'Ecommerce Dev in Bangalore' },
  { href: '/instagram-to-website', label: 'Instagram Seller to Website' },
  { href: '/ecommerce-for-fashion', label: 'Ecommerce for Fashion' },
  { href: '/ecommerce-for-retail-and-brands', label: 'Ecommerce for Retail & Brands' },
]

export default function FooterResourcesList() {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <ul className="space-y-2 text-xs">
        {primaryLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-modax-muted hover:text-white transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className={`overflow-hidden transition-all duration-300 ${expanded ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
        <ul className="space-y-2 text-xs">
          {moreLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-modax-muted hover:text-white transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-modax-muted hover:text-white transition-colors min-h-[44px]"
      >
        {expanded ? 'Show less' : 'View all resources'}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
    </>
  )
}
