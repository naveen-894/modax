export default function AboutHero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white min-h-screen flex items-center pt-16 px-3 sm:px-4 lg:px-6">
      <div className="container-max">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Building the Future<span className="text-primary-600"> of Software</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Modax is a software development company that builds both custom solutions for clients and
            owns products that solve real business challenges. We're passionate about creating technology
            that makes businesses more efficient and successful.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">2019</div>
              <div className="text-gray-600">Founded</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">20+</div>
              <div className="text-gray-600">Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
