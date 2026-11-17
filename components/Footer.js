import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-modax-navy text-white px-3 sm:px-4 lg:px-6">
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-modax-blue-deep to-modax-blue text-white font-bold text-sm">
                M
              </span>
              <span className="text-lg font-bold text-white tracking-tight">Modax</span>
            </Link>
            <p className="text-modax-muted mb-6 max-w-sm leading-relaxed">
              Modax Bengaluru — a tech studio building AI tools, websites, apps and ecommerce platforms for growing businesses.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/teammodax"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-modax-line text-modax-muted hover:text-white hover:border-modax-muted-2 transition-colors"
                aria-label="Modax on LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/teammodax/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-modax-line text-modax-muted hover:text-white hover:border-modax-muted-2 transition-colors"
                aria-label="Modax on Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.415.56.217.96.477 1.38.896.42.42.68.82.896 1.381.166.422.361 1.057.415 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.415 2.227-.217.56-.477.96-.896 1.38-.42.42-.82.68-1.381.896-.422.166-1.057.361-2.227.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.415-.56-.217-.96-.477-1.38-.896-.42-.42-.68-.82-.896-1.381-.166-.422-.361-1.057-.415-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.415-2.227.217-.56.477-.96.896-1.38.42-.42.82-.68 1.381-.896.422-.166 1.057-.361 2.227-.415 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.059-2.148.261-2.912.558-.789.306-1.459.717-2.126 1.384S.98 3.344.674 4.132c-.297.765-.499 1.636-.558 2.913C.058 8.325.044 8.733.044 12s.014 3.667.072 4.947c.059 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.125 1.384.766.297 1.636.499 2.913.558 1.28.058 1.689.072 4.947.072s3.667-.014 4.947-.072c1.277-.059 2.148-.261 2.913-.558.788-.306 1.459-.718 2.125-1.384.666-.667 1.079-1.336 1.384-2.126.297-.765.499-1.636.558-2.913.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.059-1.277-.261-2.148-.558-2.913-.306-.788-.718-1.459-1.384-2.125C21.665 1.395 20.996.98 20.207.674c-.765-.297-1.636-.499-2.913-.558C16.014.058 15.605.044 12.147.044zm0 5.838a6.118 6.118 0 1 0 0 12.236 6.118 6.118 0 0 0 0-12.236zm0 10.081a3.963 3.963 0 1 1 0-7.926 3.963 3.963 0 0 1 0 7.926zm7.846-10.405a1.44 1.44 0 1 1-2.881 0 1.44 1.44 0 0 1 2.881 0z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61595897785334"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-modax-line text-modax-muted hover:text-white hover:border-modax-muted-2 transition-colors"
                aria-label="Modax on Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Company</h3>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-modax-muted hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link href="/services" className="text-modax-muted hover:text-white transition-colors text-sm">Services</Link></li>
              <li><Link href="/products" className="text-modax-muted hover:text-white transition-colors text-sm">Products</Link></li>
              <li><Link href="/about" className="text-modax-muted hover:text-white transition-colors text-sm">About</Link></li>
              <li><Link href="/contact" className="text-modax-muted hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Products</h3>
            <ul className="space-y-2.5">
              <li><Link href="/products/rawnn" className="text-modax-muted hover:text-white transition-colors text-sm">Rawnn</Link></li>
              <li><Link href="/products/ai-resume-matcher" className="text-modax-muted hover:text-white transition-colors text-sm">Screenr</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Resources</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/blog" className="text-modax-muted hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/ecommerce-website-cost-india" className="text-modax-muted hover:text-white transition-colors">Ecommerce Website Cost in India</Link></li>
              <li><Link href="/shopify-alternative-india" className="text-modax-muted hover:text-white transition-colors">Shopify Alternative India</Link></li>
              <li><Link href="/rawnn-vs-shopify" className="text-modax-muted hover:text-white transition-colors">Shopify vs Custom Website</Link></li>
              <li><Link href="/rawnn-vs-woocommerce" className="text-modax-muted hover:text-white transition-colors">WooCommerce Alternative</Link></li>
              <li><Link href="/ecommerce-website-development-bangalore" className="text-modax-muted hover:text-white transition-colors">Ecommerce Dev in Bangalore</Link></li>
              <li><Link href="/d2c-ecommerce-platform" className="text-modax-muted hover:text-white transition-colors">D2C Ecommerce Platform</Link></li>
              <li><Link href="/instagram-to-website" className="text-modax-muted hover:text-white transition-colors">Instagram Seller to Website</Link></li>
              <li><Link href="/ecommerce-for-fashion" className="text-modax-muted hover:text-white transition-colors">Ecommerce for Fashion</Link></li>
              <li><Link href="/ecommerce-for-retail-and-brands" className="text-modax-muted hover:text-white transition-colors">Ecommerce for Retail & Brands</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Contact</h3>
            <ul className="space-y-2.5">
              <li className="text-modax-muted text-sm">
                <a href={`mailto:${process.env.CONTACT_EMAIL}`} className="hover:text-white transition-colors break-all">
                  {process.env.CONTACT_EMAIL}
                </a>
              </li>
              <li className="text-modax-muted text-sm">
                <a
                  href={`https://wa.me/${process.env.CONTACT_WHATSAPP}`}
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                  aria-label={`WhatsApp ${process.env.CONTACT_PHONE_DISPLAY}`}
                >
                  <MessageCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  {process.env.CONTACT_PHONE_DISPLAY}
                  <span className="text-modax-muted-2">(WhatsApp)</span>
                </a>
              </li>
              <li className="text-modax-muted text-sm">
                Bengaluru, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-modax-line mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-modax-muted-2 text-sm">
            © 2026 Modax. All rights reserved.
            {' · '}
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            {' · '}
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </p>
          <p className="text-modax-muted-2 text-sm">
            Designed &amp; built in-house by Modax.
          </p>
        </div>
      </div>
    </footer>
  )
}
