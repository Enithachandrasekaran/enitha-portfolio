import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useTypingEffect } from '../../hooks/useTypingEffect'
import './Banner.css'

const HERO_STATS = [
  { value: '13+', label: 'Live projects' },
  { value: '4', label: 'Certifications' },
  { value: '2025', label: 'WordPress @ GegoSoft' },
]

const TAGLINES = [
  'React Developer',
  'React Developer',
  'React Developer',
]

const BANNER_LINES = [
  'Aspiring React Developer with a strong foundation in frontend technologies and WordPress development. Passionate about building responsive, user-friendly web applications. Seeking an opportunity to apply my skills in a dynamic organization and grow as a professional developer.',
]

function ResumeIcon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M12 18v-6" />
      <path d="m9 15 3 3 3-3" />
    </svg>
  )
}

function Banner() {
  const typed = useTypingEffect(TAGLINES, {
    typingMs: 72,
    deletingMs: 42,
    pauseMs: 2000,
  })

  const [bannerImg, setBannerImg] = useState('/banner.jpg')
  const root = useRef(null)
  const resumeRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const parts = root.current?.querySelectorAll('[data-banner-reveal]')
      if (parts?.length) {
        gsap.from(parts, {
          opacity: 0,
          y: 36,
          duration: 0.75,
          stagger: 0.11,
          ease: 'power3.out',
          delay: 0.08,
        })
      }

      if (resumeRef.current) {
        gsap
          .timeline()
          .from(resumeRef.current, {
            scale: 0.92,
            opacity: 0,
            duration: 0.55,
            ease: 'back.out(1.4)',
          })
          .to(
            resumeRef.current,
            {
              y: -4,
              duration: 1.65,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
            },
            '-=0.15',
          )
      }
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={root}
      id="top"
      className="relative isolate px-[var(--banner-pad-x)] py-[clamp(var(--banner-pad-y-min),var(--banner-pad-y-mid),var(--banner-pad-y-max))] sm:px-[var(--banner-pad-x-sm)]"
      aria-label="Introduction"
    >
      <div className="relative z-10 mx-auto mt-[var(--banner-content-mt)] grid w-full max-w-7xl gap-10 lg:grid-cols-[1fr_minmax(200px,300px)] lg:items-center lg:gap-12">
        <div className="min-w-0">
        <p
          data-banner-reveal
          className="inline-block rounded-full border border-white/25 bg-white/10 px-3 py-1 font-bold uppercase tracking-[0.14em] text-white/90 [font-family:var(--font-body)] text-[var(--banner-eyebrow-font)] leading-[var(--banner-line-body)] mb-[var(--banner-eyebrow-mb)]"
        >
          Portfolio
        </p>
        <h1
          data-banner-reveal
          className="font-bold tracking-[-0.02em] [font-family:var(--font-heading)] text-[clamp(var(--banner-heading-min),var(--banner-heading-mid),var(--banner-heading-max))] leading-[var(--banner-heading-line-height)] mb-[var(--banner-title-mb)] text-white"
        >
          <span className="text-white">Hi, I&apos;m </span>
          <span className="text-brand-accent">Enitha C</span>
        </h1>
        <p
          data-banner-reveal
          className="text-white/90 [font-family:var(--font-body)] text-[var(--banner-tagline-font)] sm:text-[var(--banner-tagline-font-lg)] leading-[var(--banner-tagline-line-height)] mb-[var(--banner-tagline-mb)]"
          aria-live="polite"
        >
          <span className="text-sky-100/85">I am a </span>
          <span className="font-semibold text-white">
            {typed}
            <span
              className="ml-0.5 inline-block text-brand-accent animate-pulse"
              aria-hidden="true"
            >
              _
            </span>
          </span>
        </p>
        <div
          data-banner-reveal
          className="max-w-3xl text-white/88 text-[var(--banner-desc-font)] leading-[var(--banner-desc-line-height)] mb-[var(--banner-desc-mb)] space-y-[0.65rem]"
        >
          {BANNER_LINES.map((line) => (
            <p key={line} className="m-0">
              {line}
            </p>
          ))}
        </div>
        <ul data-banner-reveal className="banner__stats" aria-label="Highlights">
          {HERO_STATS.map(({ value, label }) => (
            <li key={label} className="banner__stat">
              <span className="banner__stat-value">{value}</span>
              <span className="banner__stat-label">{label}</span>
            </li>
          ))}
        </ul>
        <div className="relative z-20 mt-[var(--banner-cta-mt)] flex flex-wrap items-center gap-x-[var(--banner-cta-gap-x)] gap-y-[var(--banner-cta-gap-y)]">
          <a
            ref={resumeRef}
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg border-2 border-brand-accent bg-brand-accent font-semibold text-white shadow-md shadow-brand-accent/30 transition-colors duration-200 hover:border-brand-accent-hover hover:bg-brand-accent-hover hover:shadow-lg hover:shadow-brand-accent/35 px-[var(--banner-btn-pad-x)] py-[var(--banner-btn-pad-y)] text-[var(--banner-btn-font-size)] leading-[var(--banner-btn-line-height)]"
          >
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent animate-[resume-shine_2.5s_ease-in-out_infinite]"
              aria-hidden="true"
            />
            <ResumeIcon className="relative shrink-0 size-[var(--banner-btn-icon-size)]" />
            <span className="relative">Check my resume</span>
          </a>
          <a
            href="#projects"
            className="banner-viewproj ml-[var(--banner-viewproj-ml)] inline-flex items-center justify-center rounded-lg border-2 border-white px-[var(--banner-btn-pad-x)] py-[var(--banner-btn-pad-y)] text-[var(--banner-btn-font-size)] font-semibold leading-[var(--banner-btn-line-height)] shadow-lg shadow-black/25 transition duration-200 hover:brightness-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            View projects
          </a>
        </div>
        </div>

        <figure
          data-banner-reveal
          className="relative z-10 m-0 flex justify-center lg:justify-end"
        >
          <img
            src={bannerImg}
            onError={() => setBannerImg('/banner-hero.svg')}
            alt=""
            width={480}
            height={560}
            className="h-auto w-full max-w-[min(100%,280px)] rounded-2xl object-cover shadow-2xl shadow-black/40 ring-2 ring-white/20 lg:max-w-[300px]"
            decoding="async"
          />
          <figcaption className="sr-only">
            Hero visual — add your photo as public/banner.jpg to replace the default graphic.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Banner
