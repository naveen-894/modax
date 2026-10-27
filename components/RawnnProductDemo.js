'use client'

import { useState } from 'react'
import { RAWNN_STARTING_PRICE, RAWNN_HOSTING_COST } from '../lib/constants'

export default function RawnnProductDemo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    businessType: '',
    currentPlatform: '',
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          message: `Rawnn Demo Request:\n\nBusiness Type: ${formData.businessType}\nCurrent Platform: ${formData.currentPlatform}\n\n${formData.message}\n\n[This is a Rawnn Product Demo Request]`
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage('Thank you! Your demo request has been received. We\'ll contact you within 24 hours to schedule your personalized demo.')
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          businessType: '',
          currentPlatform: '',
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
    <section id="demo" className="section-padding bg-primary-900 text-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Experience Rawnn firsthand
          </h2>
          <p className="text-lg sm:text-xl text-primary-100 max-w-3xl mx-auto">
            No mockups, no concepts — explore a fully working demo store, then book a
            personalized walkthrough of the admin and owner panels. {RAWNN_STARTING_PRICE}.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <div className="w-full max-w-sm rounded-xl bg-white shadow-xl overflow-hidden ring-1 ring-black/5">
            <img
              src="https://modax-s3.s3.ap-south-1.amazonaws.com/DEV/landing/389b2af3-ef7a-460b-b0a2-b45ea9197d33.png"
              alt="Paramparaa Silks — example storefront built on Rawnn, desktop view"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="w-28 rounded-2xl bg-ink-900 p-1.5 shadow-xl ring-1 ring-black/10">
            <img
              src="https://modax-s3.s3.ap-south-1.amazonaws.com/DEV/landing/638de390-3179-45dc-9c67-5956ca8f7cb7.jpeg"
              alt="Paramparaa Silks — example storefront built on Rawnn, mobile view"
              className="w-full h-auto rounded-xl"
              loading="lazy"
            />
          </div>
          <a
            href="https://nrd-customer-fed.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-6 py-3 whitespace-nowrap"
          >
            Explore the Demo Store
          </a>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-ink-900">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Request your free demo</h3>
              <p className="text-ink-500">See Rawnn in action with your own products and brand</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-ink-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
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
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-ink-700 mb-2">
                    Brand/Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-ink-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your brand name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-ink-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-ink-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                  <label htmlFor="currentPlatform" className="block text-sm font-medium text-ink-700 mb-2">
                    Current Platform
                  </label>
                  <select
                    id="currentPlatform"
                    name="currentPlatform"
                    value={formData.currentPlatform}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-ink-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">How do you currently sell?</option>
                    <option value="instagram">Instagram/WhatsApp</option>
                    <option value="shopify">Shopify</option>
                    <option value="woocommerce">WooCommerce</option>
                    <option value="etsy">Etsy</option>
                    <option value="no-online">No online presence</option>
                    <option value="other">Other platform</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink-700 mb-2">
                  Tell us about your goals
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-ink-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="What are your biggest challenges? What do you hope to achieve with Rawnn?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white bg-primary-600 font-semibold py-4 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 shadow-lg text-lg"
              >
                {isSubmitting ? 'Sending...' : 'Request Free Demo'}
              </button>

              {submitMessage && (
                <div className={`p-4 rounded-lg ${submitMessage.includes('Thank you') ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                  {submitMessage}
                </div>
              )}

              <div className="text-center space-y-2">
                <p className="text-xs text-ink-500">
                  ✓ No credit card required
                </p>
                <p className="text-xs text-ink-500">
                  ✓ 30-minute personalized demo
                </p>
                <p className="text-xs text-ink-500">
                  ✓ A dedicated store built and set up for your brand
                </p>
                <p className="text-xs text-ink-500">
                  ✓ One-time cost from Modax — no monthly fees, no commission. {RAWNN_STARTING_PRICE}.
                </p>
                <p className="text-xs text-ink-500">
                  ✓ You pay only your own hosting costs directly to your host ({RAWNN_HOSTING_COST})
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
