'use client'

import { useState } from 'react'
import { Loader2 } from 'lucide-react'

const SERVICE_OPTIONS = [
  'AI Document Understanding',
  'AI Scoring & Matching',
  'AI Assistants',
  'Workflow Automation with AI',
  'AI Features in Your Product',
  'Screenr (AI resume matcher)',
  'Rawnn (e-commerce platform)',
  'Not sure yet',
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function LeadForm({ onSubmit, onCancel }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    requirements: '',
    service_interest: '',
    budget: '',
    preferred_contact: '',
    consent: false,
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (e) => {
    const value = field === 'consent' ? e.target.checked : e.target.value
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name'
    if (!EMAIL_RE.test(form.email.trim())) next.email = 'Please enter a valid email address'
    if (!form.requirements.trim()) next.requirements = 'Tell us briefly what you need'
    if (!form.consent) next.consent = 'Please confirm you agree to be contacted'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setIsSubmitting(true)
    setSubmitError(null)
    try {
      await onSubmit({
        name: form.name.trim(),
        email: form.email.trim(),
        company: form.company.trim() || undefined,
        requirements: form.requirements.trim(),
        service_interest: form.service_interest || undefined,
        budget: form.budget.trim() || undefined,
        preferred_contact: form.preferred_contact || undefined,
        consent: form.consent,
      })
      setSubmitted(true)
    } catch (err) {
      setSubmitError(err?.message || 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-primary-50 border border-primary-100 rounded-xl p-4 text-sm text-ink-900">
        <p className="font-medium mb-1">Thanks, {form.name.split(' ')[0]} — we&apos;ve got it.</p>
        <p className="text-ink-600">The Modax team will reach out to you at {form.email} shortly.</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-ink-100 rounded-xl p-4 space-y-3 text-sm shadow-sm"
    >
      <p className="font-semibold text-ink-900">Share your project details</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-ink-600 mb-1" htmlFor="lead-name">
            Name *
          </label>
          <input
            id="lead-name"
            type="text"
            value={form.name}
            onChange={update('name')}
            className="w-full px-3 py-2 border border-ink-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
            placeholder="Your name"
          />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-xs font-medium text-ink-600 mb-1" htmlFor="lead-email">
            Business email *
          </label>
          <input
            id="lead-email"
            type="email"
            value={form.email}
            onChange={update('email')}
            className="w-full px-3 py-2 border border-ink-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
            placeholder="you@company.com"
          />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-ink-600 mb-1" htmlFor="lead-company">
          Company (optional)
        </label>
        <input
          id="lead-company"
          type="text"
          value={form.company}
          onChange={update('company')}
          className="w-full px-3 py-2 border border-ink-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
          placeholder="Company name"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-ink-600 mb-1" htmlFor="lead-requirements">
          What do you need? *
        </label>
        <textarea
          id="lead-requirements"
          rows={3}
          value={form.requirements}
          onChange={update('requirements')}
          className="w-full px-3 py-2 border border-ink-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
          placeholder="Briefly describe what you're trying to build or automate"
        />
        {errors.requirements && <p className="text-xs text-red-600 mt-1">{errors.requirements}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-ink-600 mb-1" htmlFor="lead-service">
            Service of interest
          </label>
          <select
            id="lead-service"
            value={form.service_interest}
            onChange={update('service_interest')}
            className="w-full px-3 py-2 border border-ink-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm bg-white"
          >
            <option value="">Select one (optional)</option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-ink-600 mb-1" htmlFor="lead-budget">
            Estimated budget (optional)
          </label>
          <input
            id="lead-budget"
            type="text"
            value={form.budget}
            onChange={update('budget')}
            className="w-full px-3 py-2 border border-ink-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
            placeholder="e.g. ₹1-3L"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-ink-600 mb-1" htmlFor="lead-contact">
          Preferred contact method (optional)
        </label>
        <select
          id="lead-contact"
          value={form.preferred_contact}
          onChange={update('preferred_contact')}
          className="w-full px-3 py-2 border border-ink-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm bg-white"
        >
          <option value="">No preference</option>
          <option value="email">Email</option>
          <option value="phone">Phone call</option>
          <option value="whatsapp">WhatsApp</option>
        </select>
      </div>

      <label className="flex items-start gap-2 text-xs text-ink-600">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={update('consent')}
          className="mt-0.5 rounded border-ink-300 text-primary-600 focus:ring-primary-500"
        />
        I agree to be contacted by Modax about this inquiry.
      </label>
      {errors.consent && <p className="text-xs text-red-600">{errors.consent}</p>}

      {submitError && <p className="text-xs text-red-600">{submitError}</p>}

      <div className="flex items-center gap-2 pt-1">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary px-4 py-2 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
          {isSubmitting ? 'Sending...' : 'Send details'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="text-sm text-ink-500 hover:text-ink-900 px-2 py-2"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
