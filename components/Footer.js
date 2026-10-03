import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-white px-3 sm:px-4 lg:px-6">
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-ink-950 font-bold text-sm">
                M
              </span>
              <span className="text-lg font-bold text-white tracking-tight">Modax</span>
            </Link>
            <p className="text-ink-300 mb-6 max-w-sm leading-relaxed">
              Custom AI tools that save teams hours of manual work.
            </p>
            <a
              href="https://www.linkedin.com/in/naveen-v-89011421b/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-ink-700 text-ink-300 hover:text-white hover:border-ink-500 transition-colors"
              aria-label="Modax on LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Company</h3>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-ink-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link href="/services" className="text-ink-400 hover:text-white transition-colors text-sm">AI Solutions</Link></li>
              <li><Link href="/hr" className="text-ink-400 hover:text-white transition-colors text-sm">For HR Teams</Link></li>
              <li><Link href="/products" className="text-ink-400 hover:text-white transition-colors text-sm">Products</Link></li>
              <li><Link href="/about" className="text-ink-400 hover:text-white transition-colors text-sm">About</Link></li>
              <li><Link href="/contact" className="text-ink-400 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Products</h3>
            <ul className="space-y-2.5">
              <li><Link href="/products/ai-resume-matcher" className="text-ink-400 hover:text-white transition-colors text-sm">Screenr</Link></li>
              <li><Link href="/products/rawnn" className="text-ink-400 hover:text-white transition-colors text-sm">Rawnn</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Contact</h3>
            <ul className="space-y-2.5">
              <li className="text-ink-400 text-sm">
                <a href="mailto:vnaveen894@gmail.com" className="hover:text-white transition-colors break-all">
                  vnaveen894@gmail.com
                </a>
              </li>
              <li className="text-ink-400 text-sm">
                <a href="https://wa.me/9164579092" className="hover:text-white transition-colors">
                  +91 9164579092
                </a>
              </li>
              <li className="text-ink-400 text-sm">
                Bangalore, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ink-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ink-500 text-sm">
            © 2026 Modax. All rights reserved.
          </p>
          <p className="text-ink-500 text-sm">
            Designed &amp; built in-house by Modax.
          </p>
        </div>
      </div>
    </footer>
  )
}
