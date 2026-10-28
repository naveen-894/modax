import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export const metadata = {
  metadataBase: new URL('https://www.modax.in'),
  title: 'Terms of Service | Modax',
  description: 'The terms that govern your use of modax.in and the products and services Modax provides.',
  alternates: {
    canonical: 'https://www.modax.in/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const LAST_UPDATED = '27 October 2026'

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-xl sm:text-2xl font-bold text-ink-900 mb-4">{title}</h2>
      <div className="space-y-4 text-ink-700 leading-relaxed">{children}</div>
    </section>
  )
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

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="section-padding bg-ink-50">
          <div className="container-max max-w-3xl">
            <span className="eyebrow mb-4 block">Legal</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-3">Terms of Service</h1>
            <p className="text-ink-500">Last updated: {LAST_UPDATED}</p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-max max-w-3xl space-y-12">
            {/* TODO: this whole page is a draft outline, not reviewed legal copy.
                Have a lawyer review before relying on it, especially the limitation
                of liability, refund/cancellation and governing law sections — the
                specifics of Modax's actual refund policy and any client contracts
                should take precedence over this generic draft. */}
            <div className="space-y-4 text-ink-700 leading-relaxed">
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) govern your use of modax.in and the products and
                services offered by Modax (&ldquo;Modax&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By using our
                website, booking a call, requesting a demo, or using Screenr or Rawnn, you agree to these Terms.
              </p>
              <p>Modax is based in Bengaluru, India.</p>
            </div>

            <Section id="services" title="1. Our services">
              <p>
                Modax designs and builds AI tools, websites and apps for businesses, and offers two products:
                Screenr (AI resume-to-job-description matching) and Rawnn (a one-time-fee ecommerce platform).
                Custom project work is governed by the scope and price set out in your specific proposal; these
                Terms cover your general use of the website and products.
              </p>
            </Section>

            <Section id="accounts-and-use" title="2. Accounts and acceptable use">
              <List
                items={[
                  'You must provide accurate information when booking a call, requesting a demo, or contacting us.',
                  'You won’t use our website or products for anything unlawful, or to upload content you don’t have the right to share.',
                  'You are responsible for keeping any account credentials for our products secure.',
                ]}
              />
            </Section>

            <Section id="screenr-terms" title="3. Screenr">
              <p>
                Screenr provides an AI-generated match score and explanation based on the resume and job
                description you upload. Results are provided as a decision-support tool, not a guarantee of
                candidate suitability or employment outcome. You are responsible for how you use Screenr&rsquo;s
                output.
              </p>
            </Section>

            <Section id="rawnn-terms" title="4. Rawnn">
              <p>
                Rawnn is built and set up by Modax for your business under a one-time project fee. {/* TODO: confirm exact
                ownership/licence wording with Modax before publishing — see placeholder in the Rawnn page. */}
                You receive a licence to the platform for your own business, running on your own servers; hosting
                and running costs are paid by you directly to your hosting provider, separately from Modax&rsquo;s
                one-time fee. Ongoing updates and support from Modax are provided under a separate support plan.
              </p>
            </Section>

            <Section id="payments" title="5. Payments, pricing and refunds">
              <p>
                Pricing for custom work and for Rawnn is agreed in writing before any project starts. {/* TODO: Modax
                to confirm actual refund/cancellation policy for deposits and project fees — none is published
                yet, so none should be implied by this page. */}
              </p>
            </Section>

            <Section id="ip" title="6. Intellectual property">
              <p>
                Screenr remains the property of Modax; you don&rsquo;t acquire ownership of it by using it. For
                Rawnn and custom-built work, ownership of the delivered code is as set out in your project
                agreement with Modax.
              </p>
            </Section>

            <Section id="liability" title="7. Limitation of liability">
              <p>
                Our website and products are provided &ldquo;as is&rdquo;. To the extent permitted by law, Modax is
                not liable for indirect or consequential losses arising from your use of our website or products.
                {' '}{/* TODO: standard placeholder — have this reviewed/tightened by a lawyer. */}
              </p>
            </Section>

            <Section id="changes" title="8. Changes to these terms">
              <p>
                We may update these Terms from time to time. The &ldquo;Last updated&rdquo; date at the top will
                show when they last changed.
              </p>
            </Section>

            <Section id="governing-law" title="9. Governing law">
              <p>
                These Terms are governed by the laws of India, and any disputes will be subject to the
                jurisdiction of the courts in Bengaluru, Karnataka.
              </p>
            </Section>

            <Section id="contact-us" title="10. Contact us">
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
