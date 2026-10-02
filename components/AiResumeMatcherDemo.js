'use client'

import { useState } from 'react'

export default function AiResumeMatcherDemo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    role: '',
    hiringVolume: '',
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
          message: `Resume Matcher Demo Request:\n\nRole: ${formData.role}\nHiring Volume: ${formData.hiringVolume}\n\n${formData.message}\n\n[This is a Resume Matcher Product Demo Request]`
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
          role: '',
          hiringVolume: '',
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
            See Resume Matcher in Action
          </h2>
          <p className="text-lg sm:text-xl text-primary-100 max-w-3xl mx-auto">
            Schedule a personalized demo and see how a real resume and job description
            get scored, explained, and ready to discuss in seconds.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-ink-900">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Request Your Free Demo</h3>
              <p className="text-ink-500">See Resume Matcher score a real resume against one of your open roles</p>
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
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-ink-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your company"
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
                  <label htmlFor="role" className="block text-sm font-medium text-ink-700 mb-2">
                    Your Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-ink-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select your role</option>
                    <option value="recruiter">Recruiter / Talent Acquisition</option>
                    <option value="hiring-manager">Hiring Manager</option>
                    <option value="hr-leader">HR Leader</option>
                    <option value="founder">Founder / Small Business Owner</option>
                    <option value="job-seeker">Job Seeker</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="hiringVolume" className="block text-sm font-medium text-ink-700 mb-2">
                    Monthly Hiring Volume
                  </label>
                  <select
                    id="hiringVolume"
                    name="hiringVolume"
                    value={formData.hiringVolume}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-ink-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">How many resumes do you screen?</option>
                    <option value="1-10">1-10 per month</option>
                    <option value="11-50">11-50 per month</option>
                    <option value="51-200">51-200 per month</option>
                    <option value="200+">200+ per month</option>
                    <option value="not-applicable">Not applicable</option>
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
                  placeholder="What's slowing down your resume screening today? What would you like to see in the demo?"
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
                  ✓ Cancel anytime, no commitments
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
