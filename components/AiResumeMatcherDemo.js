import { CheckCircle2 } from 'lucide-react'
import { SCREENR_URL } from '../lib/constants'

export default function AiResumeMatcherDemo() {
  return (
    <section id="demo" className="section-padding bg-modax-navy text-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            See Screenr in action
          </h2>
          <p className="text-lg sm:text-xl text-modax-muted max-w-3xl mx-auto">
            This is a real match result — a resume and job description scored, explained,
            and ready to discuss in seconds. No sales call needed to try it yourself.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <div className="w-full max-w-md rounded-xl bg-white shadow-xl overflow-hidden ring-1 ring-black/5">
            <img
              src="https://modax-s3.s3.ap-south-1.amazonaws.com/uploads/e6f2be8b-df11-4dff-b60d-baf532ac1d18.png"
              alt="Screenr match result showing an 85% match score and skill comparison for a Python Developer role"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="w-full max-w-md rounded-xl bg-white shadow-xl overflow-hidden ring-1 ring-black/5">
            <img
              src="https://modax-s3.s3.ap-south-1.amazonaws.com/uploads/b438282a-f45c-4e21-b077-a423f3cc11ca.png"
              alt="Screenr follow-up chat answering a question about the biggest gaps in a candidate's match"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <a
            href={SCREENR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-3.5 text-lg"
          >
            Try it free — no signup for your first match
          </a>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-modax-muted">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              Your own resume and JD
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              Results in ~15 seconds
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              No credit card
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
