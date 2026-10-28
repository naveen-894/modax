import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export const metadata = {
  metadataBase: new URL('https://www.modax.in'),
  title: 'Privacy Policy | Modax',
  description: 'How Modax collects, uses and protects your personal data across modax.in, our landing pages, and our products.',
  alternates: {
    canonical: 'https://www.modax.in/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const LAST_UPDATED = '23 October 2026'

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-xl sm:text-2xl font-bold text-ink-900 mb-4">{title}</h2>
      <div className="space-y-4 text-ink-700 leading-relaxed">{children}</div>
    </section>
  )
}

function SubHeading({ children }) {
  return <h3 className="text-base font-semibold text-ink-900 mt-5 mb-2">{children}</h3>
}

function List({ items }) {
  return (
    <ul className="list-disc pl-6 space-y-2 marker:text-ink-400">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="section-padding bg-ink-50">
          <div className="container-max max-w-3xl">
            <span className="eyebrow mb-4 block">Legal</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-3">Privacy Policy</h1>
            <p className="text-ink-500">Last updated: {LAST_UPDATED}</p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-max max-w-3xl space-y-12">
            <div className="space-y-4 text-ink-700 leading-relaxed">
              <p>
                This Privacy Policy explains how Modax (&ldquo;Modax&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses
                and protects your personal data when you visit modax.in, its landing pages, or use our products and
                services.
              </p>
              <p>Modax is based in Bengaluru, India.</p>
            </div>

            <Section id="information-we-collect" title="1. Information we collect">
              {/* TODO: this list mentions "approximate monthly revenue" and "planned launch
                  time" — none of the current site forms (ContactForm, RawnnDemo,
                  RawnnProductDemo, AiResumeMatcherDemo) collect these fields. Either add
                  those fields to the forms, or have legal review and trim this text to match
                  what's actually collected. */}
              <SubHeading>Information you give us</SubHeading>
              <List
                items={[
                  <>
                    <strong>Enquiry and demo forms:</strong> your name, business name, phone/WhatsApp number,
                    email, type of business, what you sell, approximate monthly revenue and planned launch time.
                  </>,
                  <>
                    <strong>Call bookings:</strong> your name, email and any details you add when booking through
                    Calendly.
                  </>,
                  <>
                    <strong>Messages:</strong> anything you send us by email, phone or WhatsApp.
                  </>,
                  <>
                    <strong>Screenr:</strong> resumes and job descriptions you upload to get a match score.
                  </>,
                ]}
              />
              <SubHeading>Information collected automatically</SubHeading>
              <List
                items={[
                  <>
                    <strong>Usage data:</strong> pages visited, device and browser type, approximate location
                    (city level), and the ad or link that brought you to us (UTM parameters).
                  </>,
                  <>
                    <strong>Cookies and the Meta Pixel:</strong> we use the Meta Pixel on some pages to measure
                    how our ads perform and to show our ads to relevant people. It may record that you visited a
                    page or submitted a form.
                  </>,
                ]}
              />
              <p>
                We do not collect payment card details, government ID numbers or passwords through this website.
              </p>
            </Section>

            <Section id="how-we-use-it" title="2. How we use your information">
              <List
                items={[
                  'To respond to your enquiry, contact you about a demo, and share a proposal or pricing',
                  'To provide and support the products and services you request',
                  'To process uploads in Screenr and return your results',
                  'To measure and improve our website and advertising',
                  'To meet legal, accounting and security requirements',
                ]}
              />
              <p>
                We contact you only about the enquiry you made or services you&rsquo;ve shown interest in. You can
                ask us to stop at any time.
              </p>
            </Section>

            <Section id="who-we-share-it-with" title="3. Who we share it with">
              <p>
                We do not sell or rent your personal data. We share it only with service providers who help us
                run our business, and only as much as they need:
              </p>
              <List
                items={[
                  'Meta Platforms (Facebook/Instagram): advertising and the Meta Pixel',
                  'Google: storage of form submissions (Google Sheets) and email',
                  'Calendly: call scheduling',
                  'WhatsApp: messaging, if you contact us there',
                  'Vercel: hosting, to run our website',
                  'OpenAI: AI processing of Screenr uploads',
                ]}
              />
              <p>
                We may also disclose data if required by law or a government authority. Some of these providers
                may store data outside India.
              </p>
            </Section>

            <Section id="documents-and-ai" title="4. Your documents and AI">
              <p>
                Files you upload to our products are used only to provide the result you asked for. Your
                documents and data are never used to train AI models.
              </p>
              <p>
                For Screenr specifically: we don&rsquo;t keep the resume or job description file you upload. We
                extract the text needed to generate your match score, and that extracted text — along with your
                match result — is kept with your session or account so you can come back to it. We don&rsquo;t
                currently delete this automatically; email us at{' '}
                <a href="mailto:naveen@modax.in" className="text-primary-700 hover:underline">naveen@modax.in</a>
                {' '}if you&rsquo;d like it removed.
              </p>
            </Section>

            <Section id="how-long-we-keep-it" title="5. How long we keep it">
              <List
                items={[
                  'Enquiries and leads: up to 12 months from your last contact if you don’t become a client, then deleted',
                  'Client information: for as long as we work together, and afterwards as long as needed for legal, tax and accounting purposes',
                  'Screenr uploads: kept until you ask us to delete them (see Section 4)',
                ]}
              />
            </Section>

            <Section id="how-we-protect-it" title="6. How we protect it">
              <p>
                We limit access to your data to people who need it, use secure, access-controlled tools, and use
                encrypted connections (HTTPS) on our website. No method is completely secure, but we take
                reasonable steps to protect your data. If a data breach affects you, we will inform you as
                required by law.
              </p>
            </Section>

            <Section id="your-rights" title="7. Your rights">
              <p>Under India&rsquo;s Digital Personal Data Protection Act, 2023, you can:</p>
              <List
                items={[
                  'ask what personal data we hold about you and how we use it',
                  'ask us to correct, update or delete your data',
                  'withdraw your consent and stop being contacted',
                  'nominate another person to exercise your rights if you are unable to',
                  'raise a complaint with us, and, if not resolved, with the Data Protection Board of India',
                ]}
              />
              <p>
                To use any of these rights, email{' '}
                <a href="mailto:naveen@modax.in" className="text-primary-700 hover:underline">naveen@modax.in</a>.
                We will respond within 30 days.
              </p>
            </Section>

            <Section id="children" title="8. Children">
              <p>
                Our website and services are meant for businesses and adults. We do not knowingly collect data
                from anyone under 18.
              </p>
            </Section>

            <Section id="client-stores" title="9. Client stores and products we build">
              <p>
                When we build an online store or tool for a client, the client decides how their customers&rsquo;
                data is used, and their own privacy policy applies. We process that data only on the
                client&rsquo;s instructions, under our agreement with them.
              </p>
            </Section>

            <Section id="changes" title="10. Changes to this policy">
              <p>
                We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top will
                show when it last changed.
              </p>
            </Section>

            <Section id="contact-us" title="11. Contact us">
              <p className="font-semibold text-ink-900">Modax</p>
              <p>
                Email:{' '}
                <a href="mailto:naveen@modax.in" className="text-primary-700 hover:underline">naveen@modax.in</a>
              </p>
              <p>
                Phone / WhatsApp:{' '}
                <a href="https://wa.me/919164579092" className="text-primary-700 hover:underline">+91 91645 79092</a>
              </p>
              <p>Bengaluru, Karnataka, India</p>
            </Section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
