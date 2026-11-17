# Image requests

**Status: every image originally requested here is now done.** All hero,
section, comparison and blog-cover images are uploaded to the `modax-s3`
bucket under `modax-landing/` and wired into their pages via
`components/HeroImage.js` + `lib/constants.js:S3_LANDING_URL` (or a
direct `next/image` call for the two multi-image grids), using
`next/image` throughout (the bucket's host is already allowlisted in
`next.config.js`). No more grey-box `ImagePlaceholder` usages remain
anywhere on the site.

The demo-store screenshot and the 4 website-development portfolio shots
are real screenshots (demo.modax.in and 4 actual Modax client sites),
not generated — cropped to the target aspect ratio and converted to
WebP with Pillow before upload, per the "must be a real capture, not
generated" instruction for those slots.

## Done

| Filename (S3 key under `modax-landing/`) | Page / section | Source file used |
|---|---|---|
| `services-ai-automation-hero.webp` | `/services/ai-automation` → hero | AI-Powered Invoice Processing Workspace.webp |
| `services-website-development-hero.webp` | `/services/website-development` → hero | Modern UI_UX Designer Workspace.webp |
| `services-app-development-hero.webp` | `/services/app-development` → hero | Collaborative Office Dashboard Discussion.webp |
| `screenr-hero.webp` (bonus, not in original list) | `/products/ai-resume-matcher` → hero visual | Confident Professional Reviewing Recruitment Dashboard.webp |
| `blog-automate-repetitive-tasks-cover.webp` | `/blog` + that post | Document Workflow and Approval Illustration.webp |
| `shopify-alternative-india-hero.webp` | `/shopify-alternative-india` → hero | Isometric tech workspace with floating dashboards.webp |
| `instagram-to-website-hero.webp` | `/instagram-to-website` → hero | Warm Home Studio Analytics Scene.webp |
| `ecommerce-website-development-bangalore-hero.webp` | `/ecommerce-website-development-bangalore` → hero | Collaborative Tech Planning Over Coffee.webp |
| `rawnn-vs-shopify-comparison.webp` | `/rawnn-vs-shopify` → comparison | Rental vs Ownership_ Two Paths to Retail.png (converted to webp) |
| `ecommerce-website-cost-india-hero.webp` | `/ecommerce-website-cost-india` → hero | Rupee Invoice Shopping Scene.png (converted) |
| `d2c-ecommerce-platform-hero.webp` | `/d2c-ecommerce-platform` → hero | Confident Entrepreneur Showcasing Business Dashboard.png (converted) |
| `ecommerce-for-retail-and-brands-hero.webp` | `/ecommerce-for-retail-and-brands` → hero | Elegant Navy Fashion Flat Lay.png (converted) |
| `blog-sell-on-own-website-cover.webp` | `/blog` + `/blog/sell-on-your-own-website-instead-of-amazon-flipkart` | Coins to Shop_ From Decline to Growth.png (converted) |
| `rawnn-vs-woocommerce-comparison.webp` | `/rawnn-vs-woocommerce` → comparison | **Replaced** with From Plugin Chaos to Unified Dashboard.png (converted) — a better match than the original Connected Digital Workflow Cards.webp |
| `ecommerce-for-fashion-hero.webp` (bonus, not in original list) | `/ecommerce-for-fashion` → hero visual | Cozy Indian Online Boutique Evening.png (converted) |
| `ecommerce-for-fashion-demo-store.webp` | `/ecommerce-for-fashion` → "See it live" screenshot | Real screenshot of demo.modax.in, cropped to 1600×900 |
| `website-development-portfolio-1.webp` | `/services/website-development` → portfolio | Real screenshot, Malenadu Amruth Chaha homepage, cropped to 800×600 |
| `website-development-portfolio-2.webp` | `/services/website-development` → portfolio | Real screenshot, Markyvichara homepage, cropped to 800×600 |
| `website-development-portfolio-3.webp` | `/services/website-development` → portfolio | Real screenshot, Kaapi & Crumb homepage, cropped to 800×600 |
| `website-development-portfolio-4.webp` | `/services/website-development` → portfolio | Real screenshot, Netgaint homepage, cropped to 800×600 |

**Uploaded but not yet placed:**
- `connected-chat-support-illustration.webp` (source: "Connected Chat Support Illustration.webp")
- `ecommerce-design-workspace-spare.webp` (source: "Collaborative E-commerce Design Workspace.png", converted)
- `ecommerce-workspace-chai-spare.webp` (source: "Cozy Ecommerce Workspace with Chai.png", converted)
- `malenadu-amruth-chaha-our-story-spare.webp` (real screenshot of the Malenadu "Our Story" page, not used since only one shot per portfolio project was needed)

All four are uploaded to the same S3 prefix but no remaining page content
matched them well enough to force a placement. Available at
`https://modax-s3.s3.ap-south-1.amazonaws.com/modax-landing/<filename>`
if you want to use any of them later (the chai/workspace one would suit
a second image on the Bangalore local page or `/services` hub; the
chatbot illustration suits an AI-chatbot-themed spot on
`/services/ai-automation`).

**On Open Graph images:** every new/updated page currently reuses the
existing sitewide `/images/og-image.jpg` for its OG/Twitter tags (a real
file already in the repo) rather than pointing at a placeholder that would
404 when shared. That's a deliberate, lean default — only add dedicated OG
images later if you want specific previews for high-traffic pages (Home
already has its own; `/products/rawnn` or the blog posts would be the next
candidates).

## Summary

| Filename | Page / section | Type | Size & ratio | Status |
|---|---|---|---|---|
| `shopify-alternative-india-hero.webp` | `/shopify-alternative-india` → hero | AI-generated photo | 1600×900, 16:9 | ✅ done |
| `rawnn-vs-shopify-comparison.webp` | `/rawnn-vs-shopify` → comparison section | Illustration | 1600×900, 16:9 | ✅ done |
| `rawnn-vs-woocommerce-comparison.webp` | `/rawnn-vs-woocommerce` → comparison section | Illustration | 1600×900, 16:9 | ✅ done |
| `ecommerce-website-development-bangalore-hero.webp` | `/ecommerce-website-development-bangalore` → hero | AI-generated photo | 1600×900, 16:9 | ✅ done |
| `ecommerce-website-cost-india-hero.webp` | `/ecommerce-website-cost-india` → hero | Illustration | 1600×900, 16:9 | ✅ done |
| `d2c-ecommerce-platform-hero.webp` | `/d2c-ecommerce-platform` → hero | AI-generated photo | 1600×900, 16:9 | ✅ done |
| `instagram-to-website-hero.webp` | `/instagram-to-website` → hero | AI-generated photo | 1600×900, 16:9 | ✅ done |
| `ecommerce-for-retail-and-brands-hero.webp` | `/ecommerce-for-retail-and-brands` → hero | AI-generated photo | 1600×900, 16:9 | ✅ done |
| `ecommerce-for-fashion-demo-store.webp` | `/ecommerce-for-fashion` → demo store screenshot | Product UI screenshot | 1600×900, 16:9 | ✅ done |
| `services-ai-automation-hero.webp` | `/services/ai-automation` → hero | AI-generated photo | 1600×900, 16:9 | ✅ done |
| `services-website-development-hero.webp` | `/services/website-development` → hero | AI-generated photo | 1600×900, 16:9 | ✅ done |
| `services-app-development-hero.webp` | `/services/app-development` → hero | AI-generated photo | 1600×900, 16:9 | ✅ done |
| `website-development-portfolio-1.webp` … `-4.webp` | `/services/website-development` → portfolio grid (×4) | Product UI screenshot | 800×600, 4:3 | ✅ done |
| `blog-sell-on-own-website-cover.webp` | `/blog` + `/blog/sell-on-your-own-website-instead-of-amazon-flipkart` → cover | Illustration | 1600×900, 16:9 | ✅ done |
| `blog-automate-repetitive-tasks-cover.webp` | `/blog` + `/blog/how-to-automate-repetitive-tasks-with-ai` → cover | Illustration | 1600×900, 16:9 | ✅ done |

---

### shopify-alternative-india-hero.webp — ✅ done, see Done table above for actual alt text used
- **Page / section:** `/shopify-alternative-india` → hero, below the headline
- **Purpose:** Signal "Indian ecommerce brand switching away from Shopify's recurring costs" at a glance
- **Size & ratio:** 1600×900, 16:9
- **Alt text:** "Indian ecommerce brand owner reviewing their store on a laptop — a Shopify alternative in India without a monthly fee"
- **Type:** AI-generated photo
- **Generation prompt:** A confident Indian small business owner (30s, casual business attire) sitting at a wooden desk in a bright home-office setting, looking at a laptop screen showing a clean ecommerce storefront dashboard. Soft natural window light from the left, shallow depth of field. Colour palette: navy blue, soft aqua and warm gold accents reflected in the screen glow, matching a modern SaaS brand. Composition: subject and laptop positioned left-of-centre, with calm empty space on the right third for a headline overlay. Style: realistic, warm, professional photography, not corporate-stock-cheesy. No text, no logos, no watermarks.
- **Avoid:** Any visible Shopify branding, logos or competitor UI; fake dashboard numbers that look like a real brand's data.

### rawnn-vs-shopify-comparison.webp — ✅ done, see Done table above for actual alt text used
- **Page / section:** `/rawnn-vs-shopify` → comparison table section
- **Purpose:** Visually frame "two paths" — renting a platform vs owning one
- **Size & ratio:** 1600×900, 16:9
- **Alt text:** "Side-by-side comparison illustration of Shopify versus a custom ecommerce website"
- **Type:** Illustration
- **Generation prompt:** A clean, modern flat-style illustration showing two paths diverging from a single storefront icon: one path labelled conceptually by a subscription/cloud icon with a recurring arrow loop (representing a rented platform), the other by a key or ownership icon leading to a solid building/storefront (representing full ownership). Use a navy (#001848), blue (#0088F8) and gold (#FFB020) palette on a soft off-white background, consistent with a modern SaaS brand. Composition: the fork/diverging-paths visual centred, with open space at the top for a heading. Style: vector-flat illustration, minimal, geometric, no gradients overload. No text, no logos, no watermarks.
- **Avoid:** Any Shopify logo, wordmark or brand colours (Shopify green); do not depict a real company's UI.

### rawnn-vs-woocommerce-comparison.webp — ✅ done, see Done table above for actual alt text used
- **Page / section:** `/rawnn-vs-woocommerce` → comparison section
- **Purpose:** Visualise "one integrated platform" vs "many stitched-together plugins"
- **Size & ratio:** 1600×900, 16:9
- **Alt text:** "Illustration contrasting a single integrated ecommerce platform with multiple stitched-together plugins"
- **Type:** Illustration
- **Generation prompt:** A flat vector illustration split in two halves: the left half shows several small disconnected puzzle-piece icons (representing separate plugins for payments, shipping, inventory) loosely scattered and slightly misaligned; the right half shows the same functions merged into one single smooth rounded rectangle/module, solid and unified. Navy, blue and gold colour palette on an off-white background, consistent with a modern SaaS brand. Composition: clear visual contrast between messy-left and clean-right, with open space at the top for a heading. Style: vector-flat illustration, minimal, geometric. No text, no logos, no watermarks.
- **Avoid:** WordPress or WooCommerce logos/branding; any real plugin names or marketplace icons.

### ecommerce-website-development-bangalore-hero.webp — ✅ done, see Done table above for actual alt text used
- **Page / section:** `/ecommerce-website-development-bangalore` → hero
- **Purpose:** Ground the page locally — Bengaluru/Bangalore, India — without using a fabricated office address
- **Size & ratio:** 1600×900, 16:9
- **Alt text:** "Ecommerce website development team working in Bengaluru, India"
- **Type:** AI-generated photo
- **Generation prompt:** A small team of two Indian tech professionals (mixed gender, casual-professional attire) collaborating around a laptop and a tablet showing a storefront UI, in a bright modern co-working space with a hint of Bengaluru's skyline or greenery visible softly out of a window in the background (indistinct, not a specific real landmark). Natural daylight, warm and optimistic mood. Colour palette: navy, blue and gold accents in clothing or screen glow, matching a modern SaaS brand. Composition: subjects slightly left-of-frame, open negative space on the right for a text overlay. Style: realistic editorial photography. No text, no logos, no watermarks.
- **Avoid:** Any real, identifiable building, landmark or signage; fabricated company logos on clothing or laptops.

### ecommerce-website-cost-india-hero.webp — ✅ done, see Done table above for actual alt text used
- **Page / section:** `/ecommerce-website-cost-india` → hero
- **Purpose:** Signal "transparent pricing guide," not a sales pitch
- **Size & ratio:** 1600×900, 16:9
- **Alt text:** "Illustration of an ecommerce website development cost breakdown for India"
- **Type:** Illustration
- **Generation prompt:** A clean flat-style illustration of a simple invoice/receipt card with a few abstract line-item bars of varying length (no real numbers or currency symbols needed, or a single generic ₹ symbol if natural) next to a small storefront icon, suggesting "transparent pricing breakdown." Navy, blue and gold palette on an off-white background. Composition: centred, with clear open space above for a heading. Style: vector-flat illustration, minimal, friendly. No text, no logos, no watermarks.
- **Avoid:** Specific fabricated prices rendered as text in the image; any real brand's invoice template.

### d2c-ecommerce-platform-hero.webp — ✅ done, see Done table above for actual alt text used
- **Page / section:** `/d2c-ecommerce-platform` → hero
- **Purpose:** Convey "brand ownership" — a D2C founder in control of their own storefront and customer data
- **Size & ratio:** 1600×900, 16:9
- **Alt text:** "D2C brand founder managing their own ecommerce platform and customer data"
- **Type:** AI-generated photo
- **Generation prompt:** An Indian D2C brand founder (late 20s–30s, stylish casual outfit reflecting a fashion/lifestyle brand) standing in a small studio/warehouse space surrounded by neatly arranged product boxes, holding a tablet that shows a clean storefront and a customer-data dashboard. Warm, confident mood, soft studio lighting. Colour palette: navy, blue and gold accents woven into the scene (packaging ribbon, product labels — abstract, not real brand logos). Composition: subject centred-left, open space on the right for text. Style: realistic lifestyle/editorial photography. No text, no logos, no watermarks.
- **Avoid:** Any real brand names, logos or recognisable packaging designs.

### instagram-to-website-hero.webp — ✅ done, see Done table above for actual alt text used
- **Page / section:** `/instagram-to-website` → hero
- **Purpose:** Show the transition from DM-based selling to a real storefront
- **Size & ratio:** 1600×900, 16:9
- **Alt text:** "Instagram seller transitioning from DM orders to their own ecommerce website"
- **Type:** AI-generated photo
- **Generation prompt:** An Indian small business owner (20s–30s) sitting cross-legged on a sofa at home, phone in one hand showing a generic chat-app interface (no real app logos), laptop open on a coffee table beside them showing a clean storefront page — visually bridging "phone selling" and "website selling." Warm, cozy home lighting, late afternoon. Colour palette: navy, blue and gold accents in the laptop screen glow and soft furnishings. Composition: subject centred, laptop screen angled toward camera with open space above for a heading. Style: realistic lifestyle photography. No text, no logos, no watermarks.
- **Avoid:** Real Instagram or WhatsApp logos/UI chrome; any recognisable app branding.

### ecommerce-for-retail-and-brands-hero.webp — ✅ done, see Done table above for actual alt text used
- **Page / section:** `/ecommerce-for-retail-and-brands` → hero
- **Purpose:** Represent the three featured categories (retail, jewellery, cosmetics) in one cohesive visual
- **Size & ratio:** 1600×900, 16:9
- **Alt text:** "Retail, jewellery and cosmetics products displayed for an ecommerce website"
- **Type:** AI-generated photo
- **Generation prompt:** An overhead flat-lay photo of a curated product arrangement representing three categories: a neatly folded retail garment, a small elegant piece of jewellery on a soft cloth, and a cosmetics bottle/compact — arranged with generous negative space between them on a soft neutral backdrop with subtle navy and gold styling accents (a ribbon, a small card). Bright, even studio lighting, soft shadows. Composition: items arranged along the bottom third, open space at the top for a heading. Style: clean product/editorial flat-lay photography. No text, no logos, no watermarks.
- **Avoid:** Any real brand packaging, logos or recognisable jewellery/cosmetics brand design.

### ecommerce-for-fashion-demo-store.webp — ✅ done, see Done table above for actual alt text used
- **Page / section:** `/ecommerce-for-fashion` → "See it live on our demo store" section
- **Purpose:** Prove the storefront is real and working, not a mockup
- **Size & ratio:** 1600×900, 16:9
- **Type:** Product UI screenshot (not AI-generated — see instructions)
- **Alt text:** "Rawnn demo store homepage showing the clothing brand ecommerce website storefront"
- **Screenshot instructions:** Capture **demo.modax.in** homepage at **1440px wide**, scrolled to show the hero banner plus the first row of 4–6 product cards (price and product image must be visible on each card). Use whatever catalogue is live on the demo store at the time — do not relabel it as a specific named brand.
- **Avoid:** Capturing any real customer/order data if the demo store ever has live test orders; crop out any browser chrome/bookmarks bar that could reveal unrelated tabs.

### services-ai-automation-hero.webp — ✅ done, see Done table above for actual alt text used
- **Page / section:** `/services/ai-automation` → hero
- **Purpose:** Convey "AI automating real office work," explainably — not a sci-fi robot cliché
- **Size & ratio:** 1600×900, 16:9
- **Alt text:** "AI automation reading documents and organizing data for an Indian business team"
- **Type:** AI-generated photo
- **Generation prompt:** An Indian office professional (30s, business-casual) at a desk, looking at a laptop screen that shows a document being scanned/highlighted with clean, abstract AI-style overlay annotations (boxes, lines — no real UI chrome), with a small stack of physical papers nearby. Bright, modern office setting, soft daylight. Colour palette: navy, blue and gold accents in the UI overlay glow. Composition: subject and laptop left-of-centre, open space on the right for a heading. Style: realistic editorial tech photography, calm and trustworthy (not futuristic/sci-fi). No text, no logos, no watermarks.
- **Avoid:** Humanoid robots, glowing brain/circuit clichés, or anything implying AI replacing the person rather than assisting them.

### services-website-development-hero.webp — ✅ done, see Done table above for actual alt text used
- **Page / section:** `/services/website-development` → hero
- **Purpose:** Convey "fast, modern website development," craft-focused
- **Size & ratio:** 1600×900, 16:9
- **Alt text:** "Website development team designing a fast, SEO-ready website"
- **Type:** AI-generated photo
- **Generation prompt:** An Indian web developer/designer (20s–30s) at a clean desk with two monitors — one showing a wireframe/design mockup, the other showing code — in a bright, modern studio space. Natural light, focused and calm mood. Colour palette: navy, blue and gold accents reflected in the screens. Composition: subject centred-left, open space on the right for a heading. Style: realistic editorial tech photography. No text, no logos, no watermarks.
- **Avoid:** Specific real website UIs or recognisable brand templates on the screens; generic "coding matrix" clichés.

### services-app-development-hero.webp — ✅ done, see Done table above for actual alt text used
- **Page / section:** `/services/app-development` → hero
- **Purpose:** Convey "a working web app/MVP," not a mobile-app visual (Modax does not build mobile apps)
- **Size & ratio:** 1600×900, 16:9
- **Alt text:** "Startup team reviewing a web app dashboard during MVP development"
- **Type:** AI-generated photo
- **Generation prompt:** Two Indian startup team members (casual attire) standing around a large desktop monitor showing a clean web app dashboard with charts and cards (abstract, generic UI), in a small modern office. Energetic but focused mood, bright daylight. Colour palette: navy, blue and gold accents in the dashboard UI. Composition: subjects and monitor centred, open space above for a heading. Style: realistic editorial startup photography. No text, no logos, no watermarks.
- **Avoid:** Any phone/mobile-app mockups or app-store iconography — this page is web apps only, not mobile apps.

### website-development-portfolio-1.webp … website-development-portfolio-4.webp — ✅ done, see Done table above for actual alt text used
- **Page / section:** `/services/website-development` → "Recent work" portfolio grid (4 slots)
- **Purpose:** Show real past project screenshots once specific projects are approved for public display
- **Size & ratio:** 800×600, 4:3 (×4)
- **Alt text:** Write per-project once chosen, e.g. "Screenshot of [project name] homepage built by Modax" — do not use generic alt text for real client work
- **Type:** Product UI screenshot (real project screenshots — do not AI-generate placeholder "fake" portfolio pieces)
- **Instructions:** These 4 slots are intentionally left for **real** screenshots of completed Modax projects, once you've confirmed which ones are OK to show publicly. Capture each at 1280px wide, cropped to the homepage above-the-fold area, then resize to 800×600.
- **Avoid:** Do not fill these with AI-generated "fake portfolio" images — a fabricated portfolio would mislead visitors about actual past work.

### blog-sell-on-own-website-cover.webp — ✅ done, see Done table above for actual alt text used
- **Page / section:** `/blog` (card thumbnail) and `/blog/sell-on-your-own-website-instead-of-amazon-flipkart` (post header)
- **Purpose:** Visualise "commission cost" vs "owning your own sales channel"
- **Size & ratio:** 1600×900, 16:9
- **Alt text:** "Illustration comparing marketplace commission costs to selling on your own ecommerce website"
- **Type:** Illustration
- **Generation prompt:** A flat vector illustration of a stack of coins/currency being split by a large percentage-sign wedge cut out of it (representing commission taken), next to a separate, whole, uncut stack representing full ownership of sales. Navy, blue and gold palette on an off-white background. Composition: centred, open space at the top for a heading. Style: vector-flat illustration, clean and conceptual. No text, no logos, no watermarks.
- **Avoid:** Amazon or Flipkart logos, brand colours (Amazon orange/Flipkart blue-yellow) or any recognisable marketplace UI.

### blog-automate-repetitive-tasks-cover.webp — ✅ done, see Done table above for actual alt text used
- **Page / section:** `/blog` (card thumbnail) and `/blog/how-to-automate-repetitive-tasks-with-ai` (post header)
- **Purpose:** Visualise "repetitive manual task becoming automated," calmly and explainably
- **Size & ratio:** 1600×900, 16:9
- **Alt text:** "Illustration of a repetitive manual task being automated with AI"
- **Type:** Illustration
- **Generation prompt:** A flat vector illustration showing a repeating loop of simple document/form icons on the left transitioning through a small gear/checkmark icon in the middle into a single clean, completed document icon on the right — representing a repetitive task being streamlined by automation, with a human-figure silhouette icon still present near the final step (signalling human oversight, not full autonomy). Navy, blue and gold palette on an off-white background. Composition: left-to-right flow, open space at the top for a heading. Style: vector-flat illustration, clean and conceptual. No text, no logos, no watermarks.
- **Avoid:** Humanoid robots or sci-fi AI imagery; anything implying AI acts with zero human review.
