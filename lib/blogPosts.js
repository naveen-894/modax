// Blog post data for app/blog. Each post's `content` is Markdown, rendered
// through react-markdown + remark-gfm by app/blog/[slug]/page.js.

export const blogPosts = [
  {
    slug: 'sell-on-your-own-website-instead-of-amazon-flipkart',
    title: 'Sell on Your Own Website Instead of Amazon & Flipkart',
    metaTitle: 'Sell on Your Own Website Instead of Amazon & Flipkart | Modax',
    metaDescription: 'The commission math behind selling on your own website instead of Amazon and Flipkart — what marketplaces actually cost you, and what a one-time-fee ecommerce platform changes.',
    keyword: 'sell on own website instead of amazon flipkart',
    date: '2026-11-10',
    author: 'Naveen V',
    excerpt: 'Marketplaces take 20-30% of every order before you see a rupee. Here is the actual commission math, and what changes when you sell on your own website instead.',
    relatedLinks: [
      { href: '/products/rawnn', label: 'See the Modax Rawnn ecommerce platform' },
      { href: '/ecommerce-website-cost-india', label: 'Ecommerce website cost in India' },
      { href: '/d2c-ecommerce-platform', label: 'D2C ecommerce platform India' },
    ],
    content: `
Most sellers start on Amazon or Flipkart because it's the fastest way to get in front of buyers. That's a reasonable first step. The problem shows up later, once the volume is real and the commission line on every settlement starts to sting.

## The commission math

Marketplace commission in India typically runs 20-30% of the order value, depending on category, plus fixed fees, shipping fees, and collection fees layered on top. On a product that sells for ₹1,000, a 25% effective cut means ₹250 goes to the marketplace before you've paid for the product, packaging or your own time. Sell 1,000 units a month at that margin and roughly ₹2,50,000 a month is leaving before costs.

That cost never goes away. It's not a setup fee you pay once — it's charged on every single order, forever, for as long as you sell there.

## What selling on your own website changes

An ecommerce website you own flips that model: instead of a percentage on every sale, you pay once to have the store built, and after that there's no commission on sales at all. The trade-off is you now own the responsibility for getting traffic — but you also keep 100% of what the order is worth.

To sell on your own website instead of Amazon or Flipkart, you need three things a marketplace normally hides from you:

1. **A storefront customers trust** — product pages, reviews, and a checkout that feels as smooth as what they're used to.
2. **Payments and shipping handled properly** — UPI, cards, net banking, Cash on Delivery, and reliable courier booking and tracking.
3. **A way to manage orders day to day** — an admin panel, not a spreadsheet.

This is exactly what [Rawnn](/products/rawnn), Modax's ecommerce platform, is built to provide: a customer storefront, a store admin panel and an owner control panel, with Razorpay and Shiprocket integrated from day one — for a one-time project fee starting at ₹99,000, with zero commission on sales afterwards.

## You don't have to choose one or the other

Most brands that make this move don't abandon marketplaces entirely — they keep Amazon or Flipkart for discovery and reach, while directing their own audience (Instagram followers, repeat customers, WhatsApp contacts) to their own website, where there's no commission eating into the margin. Over time, as the direct channel grows, the share of sales that goes through a 25% commission shrinks.

## What this actually looks like over a year

Take a brand doing ₹10 lakh a month in sales entirely through marketplaces at a 25% effective commission — that's ₹2.5 lakh a month, or ₹30 lakh a year, gone to commission alone. Move even half of that volume to your own website and the commission on that half disappears. The one-time cost of a platform like Rawnn is recovered from commission saved in the first month or two of the shift, not years down the line.

If you're ready to see what an ecommerce website for your own brand would look like, [book a free demo of Rawnn](/products/rawnn#demo) — or read our [honest cost guide](/ecommerce-website-cost-india) for exactly what's included at each price point.
`,
  },
  {
    slug: 'how-to-automate-repetitive-tasks-with-ai',
    title: 'How to Automate Repetitive Tasks with AI',
    metaTitle: 'How to Automate Repetitive Tasks with AI | Modax',
    metaDescription: 'A practical guide to automating repetitive tasks with AI — data entry, document reading and support questions — without losing human oversight.',
    keyword: 'how to automate repetitive tasks with ai',
    date: '2026-11-05',
    author: 'Naveen V',
    excerpt: 'Most teams don\'t need a company-wide "AI strategy" — they need one repetitive task off their plate. Here is how to find it and automate it properly.',
    relatedLinks: [
      { href: '/services/ai-automation', label: 'See our AI automation service' },
      { href: '/products/ai-resume-matcher', label: 'Try Screenr, our AI resume matcher' },
      { href: '/products/rawnn', label: 'See Rawnn\'s AI product listing in action' },
    ],
    content: `
"We should use AI" is not a plan. The teams that actually get value from AI automation start somewhere much narrower: one specific, repetitive task that someone on the team does the same way, over and over, every day.

## Step 1: Find a task that is repetitive, not just annoying

Not every slow task is a good automation candidate. Look for work with these traits:

- **It follows a consistent pattern** — the same kind of document, the same kind of question, the same kind of decision, just with different details each time.
- **It happens often enough to matter** — daily or several times a week, not a one-off.
- **The input already exists digitally** — emails, PDFs, spreadsheets, a support inbox, a web form.

Good examples: re-typing invoice details into an accounting tool, reading contracts to pull out key dates, answering the same five support questions, or screening resumes against a job description.

## Step 2: Decide what "automated" should actually mean

How to automate repetitive tasks with AI responsibly comes down to one design choice: does a human review the output before it's acted on, or does the system act on its own? For most business-critical work, the right answer is a human-reviewed draft, not full autonomy on day one.

A document-processing tool, for instance, can read an invoice and draft the structured fields — vendor, amount, due date — but a person confirms it before it posts to your accounting system. That single review step catches the mistakes AI will occasionally make, while still removing 90% of the manual typing.

## Step 3: Build around your own data, not a generic model

A generic chatbot answers generically. What actually saves time is AI trained on your own documents and context — your policies, your product catalogue, your past tickets — so the output is specific to your business, not a plausible-sounding guess.

This is the same principle behind two tools we've built and run ourselves:

- [Screenr](/products/ai-resume-matcher) reads a resume against a specific job description and returns an explainable 0-100% match score with a skills gap analysis — not a generic "good fit" guess.
- [Rawnn's AI product listing](/products/rawnn) drafts a product title, description and variants from a single photo, which a store owner reviews before publishing — automation with a human still in the loop.

## Step 4: Start with one task, then expand

Once one task is automated and trusted, the pattern usually repeats cleanly to adjacent work — the same document-reading approach that handles invoices often extends to purchase orders or delivery notes with small changes.

## What this looks like as a project

A typical AI automation project starts with a short call to map the manual steps and the data involved, followed by a working prototype tested on real samples before anything goes live for the whole team. If you've got a specific task in mind — an inbox, a form, a spreadsheet someone updates by hand — [book a free 15-minute call](/services/ai-automation) and we'll tell you honestly whether AI automation is a good fit for it.
`,
  },
]

export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug)
}
