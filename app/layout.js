import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import ChatWidget from '../components/chatbot/ChatWidget'
import MotionProvider from '../components/MotionProvider'

export const metadata = {
  metadataBase: new URL('https://www.modax.in'),
  title: 'Modax | AI, Website & Ecommerce Development in Bengaluru',
  description: 'Bengaluru tech studio building AI tools, websites, apps and Rawnn, an ecommerce platform you own. Fixed-scope projects, live in 2–6 weeks. Book a free call.',
  keywords: ['modax bengaluru', 'modax', 'AI tools', 'website development', 'ecommerce platform', 'app development', 'software development company', 'AI automation', 'Bengaluru'],
  authors: [{ name: 'Modax' }],
  creator: 'Modax',
  publisher: 'Modax',
  alternates: {
    canonical: 'https://www.modax.in/',
  },
  openGraph: {
    title: 'Modax | AI, Website & Ecommerce Development in Bengaluru',
    description: 'Bengaluru tech studio building AI tools, websites, apps and Rawnn, an ecommerce platform you own. Fixed-scope projects, live in 2–6 weeks.',
    url: 'https://www.modax.in/',
    siteName: 'Modax',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Modax',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modax | AI, Website & Ecommerce Development in Bengaluru',
    description: 'Bengaluru tech studio building AI tools, websites, apps and Rawnn, an ecommerce platform you own. Fixed-scope projects, live in 2–6 weeks.',
    images: ['/images/og-image.jpg'],
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
  themeColor: '#001848',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <MotionProvider>
          {children}
          <ChatWidget
            contactEmail={process.env.CONTACT_EMAIL}
            contactWhatsapp={process.env.CONTACT_WHATSAPP}
          />
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  )
}
