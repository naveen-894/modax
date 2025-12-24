# Modax - Complete D2C E-commerce Platform

A modern, fully responsive website for Modax, a complete D2C e-commerce platform built specifically for fashion and retail brands.

## 🚀 Features

- **Fully Responsive Design**: Optimized for mobile phones, tablets, laptops, and large desktop screens
- **Mobile-First Approach**: Designed with mobile users as the primary focus
- **Modern UI/UX**: Clean, professional design with clear spacing and readable typography
- **Fast Loading**: Optimized components and efficient code structure
- **Conversion-Focused**: Strategic CTAs and trust-building elements throughout

## 🛠️ Tech Stack

- **Next.js 14** with JavaScript (App Router)
- **Tailwind CSS** for styling
- **Responsive Design** with mobile-first approach
- **Component-Based Architecture**

## 📱 Sections

1. **Hero Section** - Strong headline, value proposition, and primary CTAs
2. **Key Benefits** - Outcome-focused messaging for fashion brands
3. **Features** - Customer and admin features in responsive grid layout
4. **How It Works** - 3-step process explanation
5. **Pricing** - Custom pricing structure with setup and maintenance costs
6. **Why Choose Modax** - Key differentiators and competitive advantages
7. **Call to Action** - Strong conversion-focused section
8. **Contact** - Contact form with WhatsApp and email integration
9. **Navigation** - Mobile-friendly hamburger menu
10. **Footer** - Essential links and company information

## 🎯 Target Audience

- Clothing brands
- Fashion startups
- D2C brand owners
- Small to mid-size retail businesses (India-focused)

## 🏃‍♂️ Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add your Resend API key:
   ```bash
   RESEND_API_KEY=your_resend_api_key_here
   ```
   Get your API key from [Resend](https://resend.com/api-keys)

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎨 Design Principles

- **Professional & Trust-Building**: Business-focused messaging without technical jargon
- **Simple & Clear**: Easy to understand value propositions
- **Mobile-Optimized**: Large touch targets and stacked layouts on mobile
- **Fast & Efficient**: Optimized for performance across all devices

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1279px
- **Large Desktop**: 1280px+

## 🔧 Customization

The website is built with modularity in mind. Each section is a separate component that can be easily customized:

- `components/Hero.js` - Main headline and CTA section
- `components/Benefits.js` - Key benefits grid
- `components/Features.js` - Customer and admin features
- `components/Pricing.js` - Pricing information
- `components/Contact.js` - Contact form and information

## 📞 Contact Integration

- **WhatsApp**: Direct integration with WhatsApp Business
- **Email**: Professional email contact forms
- **Form Handling**: Client-side form validation and submission

## 📧 Email Integration

The website includes email functionality using [Resend](https://resend.com) for the contact form:

- **API Route:** `/api/contact` - Handles form submissions
- **Email Template:** `components/EmailTemplate.js` - Formats emails
- **Configuration:** Set `RESEND_API_KEY` in `.env.local`
- **Email Flow:** Contact form → API → Email sent to admin

## 🎯 Conversion Optimization

- Strategic placement of CTAs throughout the user journey
- Trust indicators and social proof elements
- Clear value propositions and benefit-focused messaging
- Mobile-optimized forms and interaction elements
- Email integration for lead capture and follow-up

---

Built with ❤️ for fashion brands transforming their online presence.
