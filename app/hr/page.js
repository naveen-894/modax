import Navigation from '../../components/Navigation'
import HrHero from '../../components/HrHero'
import HrFeatures from '../../components/HrFeatures'
import HrCTA from '../../components/HrCTA'
import Footer from '../../components/Footer'

export const metadata = {
  metadataBase: new URL('https://modax.in'),
  title: 'AI Tools for HR and Recruitment Teams | Modax',
  description: 'AI tools that save HR teams hours every week: bulk resume screening, candidate tracking, automated follow-ups, shortlist reports, JD writing and an HR policy Q&A assistant.',
  keywords: ['AI for HR', 'AI resume screening', 'recruitment automation', 'candidate tracking', 'HR tools', 'AI hiring tools'],
  openGraph: {
    title: 'AI Tools for HR and Recruitment Teams | Modax',
    description: 'AI tools that save HR teams hours every week, built for recruitment agencies and in-house HR teams.',
    url: '/hr',
    type: 'website',
  },
}

export default function HrPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HrHero />
        <HrFeatures />
        <HrCTA />
      </main>
      <Footer />
    </div>
  )
}
