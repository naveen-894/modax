import Navigation from '../../../components/Navigation'
import AiResumeMatcherHero from '../../../components/AiResumeMatcherHero'
import AiResumeMatcherFeatures from '../../../components/AiResumeMatcherFeatures'
import AiResumeMatcherBenefits from '../../../components/AiResumeMatcherBenefits'
import AiResumeMatcherHowItWorks from '../../../components/AiResumeMatcherHowItWorks'
import AiResumeMatcherDemo from '../../../components/AiResumeMatcherDemo'
import Footer from '../../../components/Footer'

export const metadata = {
  metadataBase: new URL('https://modax.in'),
  title: 'Resume Matcher - AI Resume & Job Description Matching | Modax',
  description: 'Resume Matcher instantly scores how well a candidate fits a job. Upload a resume and a job description and get an explainable 0-100% match score in about 15 seconds.',
  keywords: ['resume matcher', 'ai resume screening', 'resume job matching', 'ats resume checker', 'applicant screening', 'resume score', 'recruiter tools'],
  openGraph: {
    title: 'Resume Matcher - AI Resume & Job Description Matching',
    description: 'Instantly score how well a candidate fits a job. Upload a resume and job description and get an explainable match score in seconds.',
    url: '/products/ai-resume-matcher',
    type: 'website',
  },
}

export default function AiResumeMatcherProductPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <AiResumeMatcherHero />
        <AiResumeMatcherFeatures />
        <AiResumeMatcherBenefits />
        <AiResumeMatcherHowItWorks />
        <AiResumeMatcherDemo />
      </main>
      <Footer />
    </div>
  )
}
