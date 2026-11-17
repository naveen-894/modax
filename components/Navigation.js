'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { AnimatePresence, m } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { CALENDLY_URL } from '../lib/constants'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (!isMenuOpen) return
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = overflow
    }
  }, [isMenuOpen])

  // Close the mobile menu on outside click/tap
  useEffect(() => {
    if (!isMenuOpen) return
    const onPointerDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [isMenuOpen])

  // Determine if we're on the Rawnn page
  const isRawnnPage = pathname === '/products/rawnn'

  const navLinks = {
    home: '/',
    services: '/services',
    products: '/products',
    about: '/about',
    contact: '/contact'
  }

  const linkItems = [
    { href: navLinks.home, label: 'Home' },
    { href: navLinks.services, label: 'Services' },
    { href: navLinks.products, label: 'Products' },
    { href: navLinks.about, label: 'About' },
  ]

  const bookCallHref = CALENDLY_URL

  return (
    <nav
      ref={navRef}
      className={`sticky top-0 z-50 px-3 sm:px-4 lg:px-6 transition-all duration-200 ${
        isScrolled ? 'bg-modax-navy/95 backdrop-blur-md border-b border-modax-line shadow-sm' : 'bg-modax-navy/85 backdrop-blur-md'
      }`}
    >
      <div className="container-max">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2.5 group">
              <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-modax-blue-deep to-modax-blue text-white font-bold text-sm tracking-tight transition-all duration-200 group-hover:scale-105 group-hover:rotate-3">
                M
              </span>
              <span className="text-lg font-bold text-white tracking-tight">
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
                      active ? 'text-white' : 'text-modax-muted hover:text-white'
                    }`}
                  >
                    {item.label}
                    {active ? (
                      <m.span
                        layoutId="nav-underline"
                        className="absolute left-3 right-3 -bottom-[1px] h-[2px] bg-modax-aqua rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    ) : (
                      <span className="absolute left-3 right-3 -bottom-[1px] h-[2px] bg-modax-aqua/40 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
                    )}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href={navLinks.contact} className="text-sm font-medium text-modax-muted hover:text-white transition-colors">
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
              className="inline-flex items-center justify-center p-2 rounded-md text-modax-muted hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-modax-aqua"
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
          <m.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-modax-navy border-t border-modax-line">
              {linkItems.map((item, index) => (
                <m.div
                  key={item.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.04 }}
                >
                  <Link href={item.href} className="text-modax-muted hover:text-modax-aqua block px-3 py-2 text-base font-medium transition-colors">
                    {item.label}
                  </Link>
                </m.div>
              ))}
              <div className="pt-4 pb-3 border-t border-modax-line">
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
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
