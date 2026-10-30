import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import ChatWidget from '../components/chatbot/ChatWidget'

export const metadata = {
  metadataBase: new URL('https://www.modax.in'),
  title: 'Modax | AI, Website & App Development',
  description: 'Modax is a tech studio that builds AI tools, websites and apps for growing businesses — document processing, workflow automation, AI assistants, and the web or app product you need shipped.',
  keywords: ['AI tools', 'website development', 'app development', 'software development company', 'AI automation', 'custom AI development', 'LLM integration', 'Bengaluru'],
  authors: [{ name: 'Modax' }],
  creator: 'Modax',
  publisher: 'Modax',
  alternates: {
    canonical: 'https://www.modax.in/',
  },
  openGraph: {
    title: 'Modax | AI, Website & App Development',
    description: 'Modax is a tech studio that builds AI tools, websites and apps for growing businesses.',
    url: 'https://www.modax.in/',
    siteName: 'Modax',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modax | AI, Website & App Development',
    description: 'Modax is a tech studio that builds AI tools, websites and apps for growing businesses.',
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
    "description": "Founder-led tech studio that builds AI tools, websites and apps for growing businesses — document understanding, AI assistants, workflow automation, and web and app development.",
    "url": "https://www.modax.in",
    "logo": "https://www.modax.in/images/logo.png",
    "sameAs": [
      "https://www.linkedin.com/in/naveen-v-89011421b/",
      `https://wa.me/${process.env.CONTACT_WHATSAPP}`
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": process.env.CONTACT_PHONE,
      "contactType": "customer service",
      "email": process.env.CONTACT_EMAIL
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bengaluru",
      "addressCountry": "IN"
    },
    "serviceArea": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI, Website & App Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Document Understanding",
            "description": "Extract structured data from invoices, contracts, forms and other documents."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Scoring & Matching",
            "description": "Explainable scores that compare leads, candidates or documents against your criteria."
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
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Development",
            "description": "Design, build and deploy fast, modern websites and web apps."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "App Development",
            "description": "Build web and mobile apps, from internal tools to customer-facing products."
          }
        }
      ]
    },
    "knowsAbout": [
      "Artificial Intelligence",
      "Document Understanding",
      "LLM Integration",
      "Workflow Automation",
      "Website Development",
      "App Development",
      "Software Development"
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
        <ChatWidget
          contactEmail={process.env.CONTACT_EMAIL}
          contactWhatsapp={process.env.CONTACT_WHATSAPP}
        />
        <Analytics />
      </body>
    </html>
  )
}
