'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

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

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 px-3 sm:px-4 lg:px-6">
      <div className="container-max">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-primary-600">
              Modax
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href={navLinks.home} className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a href={navLinks.services} className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Services
              </a>
              <a href={navLinks.products} className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Products
              </a>
              <a href={navLinks.about} className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
              <a href={navLinks.contact} className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                {isRawnnPage ? 'Get Demo' : 'Contact'}
              </a>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          {!isRawnnPage && (
            <div className="hidden md:flex items-center space-x-4">
              <a href={navLinks.contact} className="btn-primary">
                Talk to Us
              </a>
            </div>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
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
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          <a href={navLinks.home} className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
            Home
          </a>
          <a href={navLinks.services} className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
            Services
          </a>
          <a href={navLinks.products} className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
            Products
          </a>
          <a href={navLinks.about} className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
            About
          </a>
          <a href={navLinks.contact} className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
            {isRawnnPage ? 'Get Demo' : 'Contact'}
          </a>
          {!isRawnnPage && (
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex flex-col space-y-3 px-3">
                <a href={navLinks.contact} className="btn-primary w-full text-center">
                  Get Demo
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
