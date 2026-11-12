export const DISPOSABLE_EMAIL_DOMAINS = [
  'mailinator.com',
  'yopmail.com',
  'guerrillamail.com',
  'guerrillamail.net',
  'sharklasers.com',
  '10minutemail.com',
  '10minutemail.net',
  'tempmail.com',
  'temp-mail.org',
  'temp-mail.io',
  'tempmail.net',
  'throwawaymail.com',
  'trashmail.com',
  'getnada.com',
  'maildrop.cc',
  'dispostable.com',
  'fakeinbox.com',
  'emailondeck.com',
  'mytemp.email',
  'tempinbox.com',
  'burnermail.io',
  'moakt.com',
  'discard.email',
  'emailfake.com',
  'minuteinbox.com',
  'mail.tm',
  'tmpmail.org',
]

export function isDisposableEmail(email) {
  if (!email || typeof email !== 'string') return false
  var atIndex = email.lastIndexOf('@')
  if (atIndex === -1) return false
  var domain = email.slice(atIndex + 1).trim().toLowerCase()
  if (!domain) return false
  return DISPOSABLE_EMAIL_DOMAINS.indexOf(domain) !== -1
}

var HIGH_REVENUE_BANDS = ['₹5–25L', '₹25L–1Cr', 'Above ₹1Cr']
var LOW_REVENUE_BANDS = ['Not selling yet', 'Under ₹1L', '₹1–5L']
var FAST_LAUNCH_TIMELINES = ['Immediately', 'Within 1 month']

export function scoreLead({ monthly_revenue, launch_timeline }) {
  if (launch_timeline === 'Just exploring') return 'Nurture'

  if (HIGH_REVENUE_BANDS.indexOf(monthly_revenue) !== -1) {
    if (FAST_LAUNCH_TIMELINES.indexOf(launch_timeline) !== -1) return 'Hot'
    if (launch_timeline === '1–3 months') return 'Warm'
  }

  if (LOW_REVENUE_BANDS.indexOf(monthly_revenue) !== -1 && FAST_LAUNCH_TIMELINES.indexOf(launch_timeline) !== -1) {
    return 'Warm'
  }

  return 'Nurture'
}
