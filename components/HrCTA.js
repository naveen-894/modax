import Reveal from './motion/Reveal'

export default function HrCTA() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <Reveal className="relative overflow-hidden rounded-2xl bg-ink-900 px-8 py-14 sm:px-14 sm:py-16 text-center">
          <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-primary-600/30 rounded-full blur-3xl animate-blob-pulse" aria-hidden="true" />

          <div className="relative max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              Ready to take screening off your plate?
            </h2>
            <p className="text-lg text-ink-300 mb-8 leading-relaxed">
              Book a 15-minute call and tell us what's slowing your hiring down.
              We'll tell you honestly whether AI can help.
            </p>
            <a href="https://calendly.com/vnaveen894/30min" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-ink-900 hover:bg-ink-100 font-semibold px-7 py-3.5 rounded-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0">
              Book a 15-min call
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
