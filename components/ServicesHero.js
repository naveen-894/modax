export default function ServicesHero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white min-h-screen flex items-center pt-16 px-3 sm:px-4 lg:px-6">
      <div className="container-max">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Custom Software<span className="text-primary-600"> Development</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We build scalable software solutions that drive business growth. From web applications to mobile apps,
            we deliver reliable, high-performance software tailored to your needs.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href="#contact" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
              Start Your Project
            </a>
            <a href="#services" className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
