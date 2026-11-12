import { isDisposableEmail, scoreLead, DISPOSABLE_EMAIL_DOMAINS } from '../lib/leadQuality'

describe('isDisposableEmail', () => {
  test('flags known disposable domains', () => {
    expect(isDisposableEmail('foo@mailinator.com')).toBe(true)
    expect(isDisposableEmail('bar@yopmail.com')).toBe(true)
  })

  test('is case-insensitive on the domain', () => {
    expect(isDisposableEmail('foo@MAILINATOR.COM')).toBe(true)
    expect(isDisposableEmail('foo@Mailinator.Com')).toBe(true)
  })

  test('allows normal business/personal emails', () => {
    expect(isDisposableEmail('owner@paramparaasilks.com')).toBe(false)
    expect(isDisposableEmail('someone@gmail.com')).toBe(false)
  })

  test('covers every domain in the list', () => {
    DISPOSABLE_EMAIL_DOMAINS.forEach((domain) => {
      expect(isDisposableEmail(`test@${domain}`)).toBe(true)
    })
  })

  test('handles invalid input without throwing', () => {
    expect(isDisposableEmail('')).toBe(false)
    expect(isDisposableEmail(null)).toBe(false)
    expect(isDisposableEmail(undefined)).toBe(false)
    expect(isDisposableEmail(123)).toBe(false)
    expect(isDisposableEmail('not-an-email')).toBe(false)
    expect(isDisposableEmail('trailing-at@')).toBe(false)
  })
})

describe('scoreLead', () => {
  test('"Just exploring" is always Nurture, regardless of revenue', () => {
    expect(scoreLead({ monthly_revenue: 'Above ₹1Cr', launch_timeline: 'Just exploring' })).toBe('Nurture')
    expect(scoreLead({ monthly_revenue: 'Under ₹1L', launch_timeline: 'Just exploring' })).toBe('Nurture')
  })

  test('high revenue band + Immediately/Within 1 month => Hot', () => {
    ;['₹5–25L', '₹25L–1Cr', 'Above ₹1Cr'].forEach((revenue) => {
      expect(scoreLead({ monthly_revenue: revenue, launch_timeline: 'Immediately' })).toBe('Hot')
      expect(scoreLead({ monthly_revenue: revenue, launch_timeline: 'Within 1 month' })).toBe('Hot')
    })
  })

  test('high revenue band + 1–3 months => Warm', () => {
    ;['₹5–25L', '₹25L–1Cr', 'Above ₹1Cr'].forEach((revenue) => {
      expect(scoreLead({ monthly_revenue: revenue, launch_timeline: '1–3 months' })).toBe('Warm')
    })
  })

  test('low revenue band + Immediately/Within 1 month => Warm', () => {
    ;['Not selling yet', 'Under ₹1L', '₹1–5L'].forEach((revenue) => {
      expect(scoreLead({ monthly_revenue: revenue, launch_timeline: 'Immediately' })).toBe('Warm')
      expect(scoreLead({ monthly_revenue: revenue, launch_timeline: 'Within 1 month' })).toBe('Warm')
    })
  })

  test('low revenue band + 1–3 months => Nurture', () => {
    ;['Not selling yet', 'Under ₹1L', '₹1–5L'].forEach((revenue) => {
      expect(scoreLead({ monthly_revenue: revenue, launch_timeline: '1–3 months' })).toBe('Nurture')
    })
  })

  test('unknown/empty inputs fall through to Nurture', () => {
    expect(scoreLead({ monthly_revenue: '', launch_timeline: '' })).toBe('Nurture')
    expect(scoreLead({})).toBe('Nurture')
  })
})
