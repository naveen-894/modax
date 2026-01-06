import './globals.css'

export const metadata = {
  title: 'Modax - Custom Software Development & Digital Solutions Company',
  description: 'Leading software development company specializing in custom web applications, mobile apps, e-commerce solutions, and business automation. Transform your business with scalable digital solutions.',
  keywords: ['software development', 'custom software', 'web development', 'mobile app development', 'e-commerce solutions', 'business automation', 'digital transformation', 'software company'],
  authors: [{ name: 'Modax Software Development' }],
  creator: 'Modax',
  publisher: 'Modax',
  openGraph: {
    title: 'Modax - Custom Software Development & Digital Solutions',
    description: 'Leading software development company specializing in custom web applications, mobile apps, e-commerce solutions, and business automation.',
    url: 'https://modax.com',
    siteName: 'Modax',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modax - Custom Software Development & Digital Solutions',
    description: 'Leading software development company specializing in custom web applications, mobile apps, e-commerce solutions, and business automation.',
    creator: '@modax',
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
  verification: {
    google: 'your-google-site-verification-code',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareDevelopmentCompany",
    "name": "Modax",
    "description": "Leading software development company specializing in custom web applications, mobile apps, e-commerce solutions, and business automation.",
    "url": "https://modax.com",
    "logo": "https://modax.com/images/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/modax-ecommerce/",
      "https://wa.me/919164579092"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9164579092",
      "contactType": "customer service",
      "email": "modaxecommerce@gmail.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "serviceArea": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Software Development",
            "description": "Tailored software solutions built from the ground up to meet your specific business requirements."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Application Development",
            "description": "Modern web applications with responsive design, fast performance, and seamless user experiences."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile Application Development",
            "description": "Native and cross-platform mobile apps for iOS and Android platforms."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Solutions",
            "description": "Complete e-commerce platforms with payment processing and inventory management."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Automation",
            "description": "Streamline business processes with custom automation solutions."
          }
        }
      ]
    },
    "knowsAbout": [
      "Software Development",
      "Web Development",
      "Mobile App Development",
      "E-commerce",
      "Business Automation",
      "Digital Transformation",
      "Custom Software Solutions"
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
      <body className="font-sans">{children}</body>
    </html>
  )
}
