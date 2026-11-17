/** Inline JSON-LD <script> tag. Accepts a single schema object or an array
 * (rendered as one script per item) to avoid "@context" collisions from
 * trying to merge unrelated schema types into one @graph. */
export default function JsonLd({ data }) {
  const items = Array.isArray(data) ? data : [data]

  return items.map((item, index) => (
    <script
      key={index}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
    />
  ))
}
