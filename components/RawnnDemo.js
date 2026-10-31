'use client'

import { useState } from 'react'
import { RAWNN_DEMO_URL } from '../lib/constants'

export default function RawnnDemo() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    businessType: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      // Transform the form data to match the expected API format
      const apiData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        company: formData.company,
        phone: '', // Not collected in this form
        message: `Business Type: ${formData.businessType}\n\nCurrent Setup: ${formData.message}\n\n[This is a Rawnn Demo Request]`
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage('Thank you for your demo request! We\'ll get back to you within 24-48 hours.')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          businessType: '',
          message: ''
        })
      } else {
        setSubmitMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <section id="demo" className="section-padding bg-ink-900 text-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            See Rawnn in action
          </h2>
          <p className="text-lg sm:text-xl text-ink-300 max-w-3xl mx-auto">
            Explore a fully working store built on Rawnn, then book a personalized demo tailored to your business.
          </p>
        </div>

        {/* Live demo screenshots */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <div className="w-full max-w-sm rounded-xl bg-white shadow-xl overflow-hidden ring-1 ring-black/5">
            <img
              src="https://modax-s3.s3.ap-south-1.amazonaws.com/DEV/landing/389b2af3-ef7a-460b-b0a2-b45ea9197d33.png"
              alt="Example storefront built on Rawnn — desktop view"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="w-28 rounded-2xl bg-ink-900 p-1.5 shadow-xl ring-1 ring-black/10">
            <img
              src="https://modax-s3.s3.ap-south-1.amazonaws.com/DEV/landing/638de390-3179-45dc-9c67-5956ca8f7cb7.jpeg"
              alt="Example storefront built on Rawnn — mobile view"
              className="w-full h-auto rounded-xl"
              loading="lazy"
            />
          </div>
          <a
            href={RAWNN_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-6 py-3 whitespace-nowrap"
          >
            Explore the Demo Store
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Demo Content */}
          <div>
            <h3 className="text-2xl font-bold mb-6">What you&apos;ll experience in your demo</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-ink-900 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Admin dashboard walkthrough</h4>
                  <p className="text-ink-300">
                    See how easy it is to manage your inventory, process orders, and analyze sales performance with our intuitive admin interface.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-ink-900 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <span className="text-sm font-bold text-white">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Customer experience preview</h4>
                  <p className="text-ink-300">
                    Experience your store from a customer&apos;s perspective — browsing products, adding to cart, and completing checkout.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-ink-900 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <span className="text-sm font-bold text-white">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Customization & integration</h4>
                  <p className="text-ink-300">
                    Learn how to customize your store design, integrate payment gateways, and connect with your existing systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-ink-900 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <span className="text-sm font-bold text-white">4</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Q&A session</h4>
                  <p className="text-ink-300">
                    Get answers to your specific questions and learn about implementation timeline, pricing, and ongoing support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Form */}
          <div className="bg-white rounded-xl p-8 text-ink-900">
            <h3 className="text-2xl font-bold mb-6 text-center">Request your free demo</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-ink-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-ink-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-ink-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-ink-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-ink-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="john@yourbrand.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-ink-700 mb-2">
                  Company/Brand Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-ink-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your Brand Name"
                />
              </div>

              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-ink-700 mb-2">
                  Business Type
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-ink-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select your business type</option>
                  <option value="b2b">B2B</option>
                  <option value="d2c">D2C</option>
                  <option value="b2c-retail">B2C / Retail</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink-700 mb-2">
                  Tell us about your current setup
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-ink-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Currently using Instagram/WhatsApp, Shopify, or building from scratch?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 shadow-lg"
              >
                {isSubmitting ? 'Sending...' : 'Request Free Demo'}
              </button>

              {submitMessage && (
                <div className={`p-4 rounded-lg ${submitMessage.includes('Thank you') ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                  {submitMessage}
                </div>
              )}

              <p className="text-xs text-ink-500 text-center">
                We respect your privacy. Your information will only be used to provide you with demo access and follow-up support.
              </p>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-primary-400 mb-2">30 min</div>
              <div className="text-ink-300">Demo Duration</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-400 mb-2">24-48 hrs</div>
              <div className="text-ink-300">Response Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-400 mb-2">Free</div>
              <div className="text-ink-300">No Obligations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
