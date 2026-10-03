'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

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

  const navLinks = {
    home: '/',
    services: '/services',
    hr: '/hr',
    products: '/products',
    about: '/about',
    contact: '/contact'
  }

  const linkItems = [
    { href: navLinks.home, label: 'Home' },
    { href: navLinks.services, label: 'AI Solutions' },
    { href: navLinks.hr, label: 'For HR Teams' },
    { href: navLinks.products, label: 'Products' },
    { href: navLinks.about, label: 'About' },
  ]

  const bookCallHref = 'https://calendly.com/vnaveen894/30min'

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
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-ink-900 text-white font-bold text-sm tracking-tight group-hover:bg-primary-700 transition-all duration-200 group-hover:scale-105 group-hover:rotate-3">
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
                    className={`group relative px-3 py-2 text-sm font-medium transition-colors ${
                      active ? 'text-ink-900' : 'text-ink-500 hover:text-ink-900'
                    }`}
                  >
                    {item.label}
                    {active ? (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-3 right-3 -bottom-[1px] h-[2px] bg-primary-600 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    ) : (
                      <span className="absolute left-3 right-3 -bottom-[1px] h-[2px] bg-primary-200 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
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
            <a href={bookCallHref} target="_blank" rel="noopener noreferrer" className="btn-primary px-5 py-2.5 text-sm">
              Book a call
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-ink-700 hover:text-ink-900 hover:bg-ink-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-label="Toggle menu"
            >
              <Menu className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} />
              <X className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-ink-100">
              {linkItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.04 }}
                >
                  <Link href={item.href} className="text-ink-700 hover:text-primary-700 block px-3 py-2 text-base font-medium transition-colors">
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 pb-3 border-t border-ink-100">
                <div className="flex flex-col space-y-3 px-3">
                  {isRawnnPage ? (
                    <Link href="/contact" className="btn-primary w-full text-center">
                      Get Demo
                    </Link>
                  ) : (
                    <a href={bookCallHref} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">
                      Book a call
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
