export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-primary-50 to-white min-h-screen flex items-center px-3 sm:px-4 lg:px-6">
      <div className="container-max">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Modax builds scalable software<span className="text-primary-600"> and products</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            From custom software development to ready-to-use platforms like Rawnn,
            we help businesses build, launch, and scale their digital presence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="/services" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
              View Services
            </a>
            <a href="/products/rawnn" className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
              View Product
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
