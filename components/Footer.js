export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-3 sm:px-4 lg:px-6">
      <div className="container-max py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-primary-400 mb-4">
              Modax
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Software development company specializing in e-commerce platforms, web applications, and digital solutions.
              Transform your business with innovative technology solutions.
            </p>
           
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="/products" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <a href="mailto:modaxecommerce@gmail.com" className="hover:text-white transition-colors">
                modaxecommerce@gmail.com
                </a>
              </li>
              <li className="text-gray-400">
                <a href="https://wa.me/9164579092" className="hover:text-white transition-colors">
                  +91 9164579092
                </a>
              </li>
              <li className="text-gray-400">
                <span>Bangalore, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Modax. All rights reserved. Empowering businesses with software solutions.
          </p>
        </div>
      </div>
    </footer>
  )
}
