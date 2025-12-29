import './globals.css'

export const metadata = {
  title: 'Modax - Complete D2C E-commerce Platform for Fashion Brands',
  description: 'Transform your fashion brand from Instagram/WhatsApp selling to a full-featured online store. Built specifically for D2C fashion and retail brands in India.',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
