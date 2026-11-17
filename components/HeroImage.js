import Image from 'next/image'

/** Framed hero/section photo — browser-chrome style card matching the rest
 * of the site's screenshot frames (see RawnnProductHero). */
export default function HeroImage({ src, alt, width = 1600, height = 900, className = '' }) {
  return (
    <div className={`rounded-xl bg-white shadow-xl ring-1 ring-modax-ink/5 overflow-hidden ${className}`}>
      <div className="flex items-center gap-2 px-4 py-3 bg-modax-border-lt border-b border-modax-border-lt">
        <span className="h-2.5 w-2.5 rounded-full bg-modax-muted-2" />
        <span className="h-2.5 w-2.5 rounded-full bg-modax-muted-2" />
        <span className="h-2.5 w-2.5 rounded-full bg-modax-muted-2" />
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto"
        loading="lazy"
      />
    </div>
  )
}
