import { User } from 'lucide-react'
import Reveal from './motion/Reveal'

export default function AboutFounder() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <Reveal className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-8 items-start">
            <div className="w-28 h-28 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto sm:mx-0 flex-shrink-0 transition-transform duration-300 hover:scale-105 hover:rotate-2">
              <User className="w-14 h-14 text-white" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-ink-900 mb-1">Naveen V</h3>
              <p className="text-primary-700 font-medium mb-4">Founder, Modax</p>
              <p className="text-ink-500 leading-relaxed mb-4">
                Naveen founded Modax after years of building software for businesses
                and seeing the same pattern everywhere: teams buried in manual, repetitive
                work that software could already do. Modax exists to build the specific
                AI tool a team needs, ship it fast, and keep improving it after launch —
                not to sell a platform that half-fits.
              </p>
              <a
                href="https://www.linkedin.com/in/naveen-v-89011421b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-800 transition-colors"
              >
                Connect on LinkedIn
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
