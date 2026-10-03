import './globals.css'
import ChatWidget from '../components/chatbot/ChatWidget'

export const metadata = {
  metadataBase: new URL('https://modax.in'),
  title: 'Modax | Custom AI Tools for HR Teams & Businesses',
  description: 'Modax builds custom AI tools that save teams hours of manual work, from resume screening to document processing and AI assistants. Try our free AI resume screener, Screenr.',
  keywords: ['AI tools', 'AI resume screening', 'AI for HR', 'AI automation', 'custom AI development', 'LLM integration', 'Bangalore'],
  authors: [{ name: 'Modax' }],
  creator: 'Modax',
  publisher: 'Modax',
  openGraph: {
    title: 'Modax | Custom AI Tools for HR Teams & Businesses',
    description: 'Modax builds custom AI tools that save teams hours of manual work, from resume screening to document processing and AI assistants.',
    url: 'https://modax.in',
    siteName: 'Modax',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modax | Custom AI Tools for HR Teams & Businesses',
    description: 'Modax builds custom AI tools that save teams hours of manual work, from resume screening to document processing and AI assistants.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Modax",
    "description": "Founder-led AI studio that builds custom AI tools for HR teams and businesses — resume screening, document understanding, AI assistants, and workflow automation.",
    "url": "https://modax.in",
    "logo": "https://modax.in/images/logo.png",
    "sameAs": [
      "https://www.linkedin.com/in/naveen-v-89011421b/",
      "https://wa.me/919164579092"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9164579092",
      "contactType": "customer service",
      "email": "vnaveen894@gmail.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressCountry": "IN"
    },
    "serviceArea": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Tools & Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Document Understanding",
            "description": "Extract structured data from resumes, invoices, contracts and forms."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Scoring & Matching",
            "description": "Explainable scores that compare candidates, leads or documents against your criteria."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Assistants",
            "description": "Chat assistants that answer questions from your own data and documents."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Workflow Automation with AI",
            "description": "Automate follow-ups, reports, data entry and approvals."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Features in Your Product",
            "description": "Add LLM-powered features to existing software."
          }
        }
      ]
    },
    "knowsAbout": [
      "Artificial Intelligence",
      "AI for HR and Recruitment",
      "Resume Screening",
      "Document Understanding",
      "LLM Integration",
      "Workflow Automation"
    ]
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="font-sans">
        {children}
        <ChatWidget />
      </body>
    </html>
  )
}
