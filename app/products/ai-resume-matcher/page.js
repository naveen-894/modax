import Navigation from '../../../components/Navigation'
import AiResumeMatcherHero from '../../../components/AiResumeMatcherHero'
import AiResumeMatcherFeatures from '../../../components/AiResumeMatcherFeatures'
import AiResumeMatcherBenefits from '../../../components/AiResumeMatcherBenefits'
import AiResumeMatcherHowItWorks from '../../../components/AiResumeMatcherHowItWorks'
import AiResumeMatcherDemo from '../../../components/AiResumeMatcherDemo'
import Footer from '../../../components/Footer'
import Breadcrumbs from '../../../components/Breadcrumbs'
import FAQAccordion from '../../../components/FAQAccordion'
import JsonLd from '../../../components/JsonLd'
import { SITE_URL, SCREENR_URL } from '../../../lib/constants'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Screenr: Free AI Resume Screening & JD Match Score | Modax',
  description: 'Match any resume to a job description in 15 seconds. 0–100% score, skills gap analysis and explanations. Free during beta, no signup for your first match.',
  keywords: ['ai resume screening tool', 'resume job description match score', 'free ai resume screener', 'resume screening software for small business', 'candidate screening tool india', 'skills gap analysis tool'],
  alternates: {
    canonical: `${SITE_URL}/products/ai-resume-matcher`,
  },
  openGraph: {
    title: 'Screenr: Free AI Resume Screening & JD Match Score | Modax',
    description: 'Match any resume to a job description in 15 seconds. 0–100% score, skills gap analysis and explanations. Free during beta.',
    url: '/products/ai-resume-matcher',
    type: 'website',
    images: ['/images/og-image.jpg'],
  },
}

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Screenr',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Screenr is an AI resume screening tool that scores how well a resume matches a job description — a 0-100% match score with skills gap analysis, in about 15 seconds.',
  brand: {
    '@type': 'Brand',
    name: 'Modax',
  },
  url: SCREENR_URL,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    description: 'Free during beta, no signup required for your first match.',
  },
}

const faqs = [
  {
    question: 'Is Screenr free to use?',
    answer: 'Yes — Screenr is free during beta, and your first match needs no signup at all.',
  },
  {
    question: 'Is this resume screening software suitable for a small business?',
    answer: "Yes — resume screening software like Screenr works well for small businesses without a dedicated ATS: upload a resume and a job description and get a match score without any setup.",
  },
  {
    question: 'Can I use Screenr as a candidate screening tool in India for bulk hiring?',
    answer: 'Screenr currently works one resume at a time as a candidate screening tool — paste a job description once and run multiple resumes against it in the same session.',
  },
  {
    question: 'What does the skills gap analysis actually show?',
    answer: 'The skills gap analysis tool highlights which required skills from the job description are present, missing, or only partially matched in the resume, alongside the overall score.',
  },
]

export default function AiResumeMatcherProductPage() {
  return (
    <div className="min-h-screen">
      <JsonLd data={softwareApplicationSchema} />
      <Navigation />
      <Breadcrumbs items={[{ name: 'Products', href: '/products' }, { name: 'Screenr' }]} />
      <main>
        <AiResumeMatcherHero />
        <AiResumeMatcherFeatures />
        <AiResumeMatcherBenefits />
        <AiResumeMatcherHowItWorks />
        <AiResumeMatcherDemo />
        <FAQAccordion items={faqs} />
      </main>
      <Footer />
    </div>
  )
}
