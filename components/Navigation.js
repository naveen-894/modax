'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Determine if we're on the Rawnn page
  const isRawnnPage = pathname === '/rawnn'

  // Generate navigation links based on current page
  const getNavLinks = () => {
    if (isRawnnPage) {
      return {
        home: '/',
        services: '/services',
        products: '/products',
        rawnn: '/products/rawnn',
        about: '/about',
        contact: '/contact'
      }
    } else {
      return {
        home: '/',
        services: '/services',
        products: '/products',
        about: '/about',
        contact: '/contact'
      }
    }
  }

  const navLinks = getNavLinks()

  const linkItems = [
    { href: navLinks.home, label: 'Home' },
    { href: navLinks.services, label: 'Services' },
    { href: navLinks.products, label: 'Products' },
    { href: navLinks.about, label: 'About' },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 px-3 sm:px-4 lg:px-6 transition-all duration-200 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-ink-100 shadow-sm' : 'bg-white/70 backdrop-blur-md'
      }`}
    >
      <div className="container-max">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2.5 group">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-ink-900 text-white font-bold text-sm tracking-tight group-hover:bg-primary-700 transition-colors">
                M
              </span>
              <span className="text-lg font-bold text-ink-900 tracking-tight">
                Modax
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-1">
              {linkItems.map((item) => {
                const active = pathname === item.href
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                      active ? 'text-ink-900' : 'text-ink-500 hover:text-ink-900'
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute left-3 right-3 -bottom-[1px] h-[2px] bg-primary-600 rounded-full" />
                    )}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href={navLinks.contact} className="text-sm font-medium text-ink-500 hover:text-ink-900 transition-colors">
              {isRawnnPage ? 'Get Demo' : 'Contact'}
            </Link>
            <Link href="/contact" className="btn-primary px-5 py-2.5 text-sm">
              Talk to Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-ink-700 hover:text-ink-900 hover:bg-ink-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-label="Toggle menu"
            >
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-ink-100">
          {linkItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-ink-700 hover:text-primary-700 block px-3 py-2 text-base font-medium">
              {item.label}
            </Link>
          ))}
          <div className="pt-4 pb-3 border-t border-ink-100">
            <div className="flex flex-col space-y-3 px-3">
              <Link href="/contact" className="btn-primary w-full text-center">
                {isRawnnPage ? 'Get Demo' : 'Talk to Us'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
