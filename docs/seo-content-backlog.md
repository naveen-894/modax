# SEO content backlog — Medium priority

Not published. These are post ideas for the Medium-priority keywords from the
SEO keyword plan, to be written and added to `lib/blogPosts.js` (or built out
as full pages, if a title ends up warranting its own URL) when there's time.
Each one names the keyword it targets and which existing page the post
should link to once it's written.

| # | Title idea | Target keyword | Link to |
|---|---|---|---|
| 1 | Shopify Transaction Fees in India: What They Actually Cost You | shopify transaction fees india | `/shopify-alternative-india` |
| 2 | The Real Cost of an Ecommerce Website for a Small Business in India | ecommerce website for small business india | `/ecommerce-website-cost-india` |
| 3 | How to Reduce Marketplace Commission (Without Leaving Amazon/Flipkart Entirely) | how to reduce marketplace commission | `/blog/sell-on-your-own-website-instead-of-amazon-flipkart` |
| 4 | How to Build an Ecommerce Website in India: A Step-by-Step Guide | how to build an ecommerce website in india | `/ecommerce-website-cost-india` |
| 5 | SaaS vs Self-Hosted Ecommerce: Which One Actually Saves You Money | saas vs self hosted ecommerce | `/products/rawnn` |
| 6 | Is Shopify Worth It in India? An Honest Look | is shopify worth it in india | `/rawnn-vs-shopify` |
| 7 | Marketplace vs Your Own Ecommerce Website: Side-by-Side | marketplace vs own ecommerce website | `/products/rawnn` |
| 8 | How to Start a D2C Brand Website From Scratch | how to start a d2c brand website | `/d2c-ecommerce-platform` |
| 9 | MVP Development Cost in India: What to Budget For | mvp development cost india | `/services/app-development` |
| 10 | AI Use Cases for Small Businesses in India (Beyond the Hype) | ai use cases for small business india | `/services/ai-automation` |
| 11 | AI Chatbot Development Cost in India: A Realistic Breakdown | ai chatbot development cost india | `/services/ai-automation` |
| 12 | How Much Does a Website Cost in Bangalore? | how much does a website cost in bangalore | `/services/website-development` |
| 13 | How to Screen Resumes Faster (Without an Expensive ATS) | how to screen resumes faster | `/products/ai-resume-matcher` |

## Notes for whoever writes these

- Follow the same structure as the two published posts in `lib/blogPosts.js`: lead with the practical answer, back it with real numbers where we have them (flag anything unverified with a TODO rather than guessing), and close with one clear CTA to the linked page.
- Keep to the primary keyword once in the title/H1, and don't force secondary phrasing — these are guides for people, not keyword lists.
- Once a post is written, add it to the `blogPosts` array in `lib/blogPosts.js` and it will automatically appear on `/blog` and get Article schema, a canonical URL and OG/Twitter tags for free via the existing template.
