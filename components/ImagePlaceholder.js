/** Grey-box placeholder for an image not yet supplied. Keeps layout/aspect
 * ratio correct so swapping in the real WebP later (see docs/image-requests.md
 * for the filename, alt text and generation prompt) is a one-line change. */
export default function ImagePlaceholder({ filename, ratio = 'aspect-[16/9]', className = '', label }) {
  return (
    <div
      className={`${ratio} w-full rounded-xl bg-modax-blue-tint border border-dashed border-modax-blue/30 flex items-center justify-center ${className}`}
    >
      {/* TODO: replace with /images/{filename} — see docs/image-requests.md */}
      <span className="text-xs font-medium text-modax-blue-deep text-center px-4">
        {label || `Image placeholder — /images/${filename}`}
      </span>
    </div>
  )
}
