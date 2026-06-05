import { AnimatePresence, motion as Motion, useReducedMotion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { IconExternalLink, IconFolder } from '../Icons/Icons'
import { assetUrl } from '../../utils/assetUrl'
import './Projects.css'

const MotionLi = Motion.li

/**
 * WordPress = all projects. WooCommerce = store builds (Haus, Kiya, Green Leaf,
 * Aesthetics Silai). Freelance = only Green Leaf, Integrow, Aesthetics Silai.
 */
const FILTERS = ['WordPress', 'WooCommerce', 'Freelance']

const PROJECTS = [
  {
    id: 'greenleaf',
    title: 'Green Leaf Global Export',
    siteUrl: 'greenleaf-globalexport.com',
    url: 'https://greenleaf-globalexport.com/',
    thumb: '/projects/greenleaf.png',
    thumbLabel: 'GL',
    categories: ['WordPress', 'Freelance', 'WooCommerce'],
    tags: ['Freelance', 'WooCommerce', 'Export', 'Agriculture'],
    blurb:
      'Freelance WooCommerce build for a South Indian agro export firm—premium commodities, certificates, shop flow, and global buyer-focused storytelling.',
  },
  {
    id: 'integrow',
    title: 'Integrow LLC',
    siteUrl: 'integrowllc.com',
    url: 'https://integrowllc.com/',
    thumb: '/projects/integrow.png',
    thumbLabel: 'IN',
    categories: ['WordPress', 'Freelance'],
    tags: ['Freelance', 'WordPress', 'Data', 'US'],
    blurb:
      'Freelance WordPress site for a US data consultancy—governance, management, analytics, self-reporting, and migration services with a clear enterprise narrative.',
  },
  {
    id: 'aestheticsilai',
    title: 'Aesthetics Silai',
    siteUrl: 'aestheticsilai.com',
    url: 'https://aestheticsilai.com/',
    thumb: '/projects/aestheticsilai.png',
    thumbLabel: 'AS',
    categories: ['WordPress', 'Freelance', 'WooCommerce'],
    tags: ['Freelance', 'WooCommerce', 'Art', 'Retail'],
    blurb:
      'Freelance WordPress / WooCommerce presence for bespoke art—murals, bronze sculpture, and 3D work—with shop integration and a dark, gallery-style hero.',
  },
  {
    id: 'hausofaker',
    title: 'Haus of Aker',
    siteUrl: 'hausofaker.com',
    url: 'https://hausofaker.com/',
    thumb: '/projects/hausofaker.png',
    thumbLabel: 'HA',
    categories: ['WooCommerce', 'WordPress'],
    tags: ['WooCommerce', 'Texas, US', 'Lifestyle'],
    blurb:
      'Texas-based WooCommerce home and lifestyle brand—warm palette, editorial hero, and product-led navigation for a premium US audience.',
  },
  {
    id: 'shikshaclass',
    title: 'Shiksha Class',
    siteUrl: 'shikshaclass.com',
    url: 'https://shikshaclass.com/',
    thumb: '/projects/shikshaclass.png',
    thumbLabel: 'SC',
    categories: ['WordPress'],
    tags: ['WordPress', 'Education', 'UGC NET'],
    blurb:
      'WordPress training platform for UGC NET and competitive exams—courses, test series, resources, and enrollment flows with a bold purple-and-yellow brand.',
  },
  {
    id: 'sriindhirajewellers',
    title: 'Sri Indhira Jewellers',
    siteUrl: 'sriindhirajewellers.com',
    url: 'https://sriindhirajewellers.com/',
    thumb: '/projects/sriindhirajewellers.png',
    thumbLabel: 'SI',
    categories: ['WordPress'],
    tags: ['WordPress', 'Jewellery', 'Retail'],
    blurb:
      'Luxury jewellery WordPress site—gold and silver collections, live rate strip, Tamil branding, and hero imagery that highlights craft and trust.',
  },
  {
    id: 'whitepearldentistry',
    title: 'White Pearl Dentistry',
    siteUrl: 'whitepearldentistry.in',
    url: 'https://whitepearldentistry.in/',
    thumb: '/projects/whitepearldentistry.png',
    thumbLabel: 'WP',
    categories: ['WordPress'],
    tags: ['WordPress', 'Dental', 'Healthcare'],
    blurb:
      'Dental practice WordPress site—teal healthcare aesthetic, services and blog structure, and clear “Get in Touch” paths for patients.',
  },
  {
    id: 'rttechserv',
    title: 'R&T Calibration Services',
    siteUrl: 'rttechserv.com',
    url: 'https://rttechserv.com/',
    thumb: '/projects/rttechserv.png',
    thumbLabel: 'RT',
    categories: ['WordPress'],
    tags: ['WordPress', 'Calibration', 'B2B'],
    blurb:
      'Industrial calibration services site—hero slider, equipment imagery, certifications, and quote CTAs for traceable lab positioning.',
  },
  {
    id: 'churchcms',
    title: 'ChurchCMS',
    siteUrl: 'churchcms.app',
    url: 'https://churchcms.app/',
    thumb: '/projects/churchcms.png',
    thumbLabel: 'CC',
    categories: ['WordPress'],
    tags: ['WordPress', 'CMS', 'Open source'],
    blurb:
      'Product landing for free, open-source church management—gradient brand, GitHub and demo CTAs, and messaging around self-hosted control.',
  },
  {
    id: 'kiyafashions',
    title: 'Kiya Fashions',
    siteUrl: 'kiyafashions.in',
    url: 'https://kiyafashions.in/',
    thumb: '/projects/kiyafashions.png',
    thumbLabel: 'KF',
    categories: ['WooCommerce', 'WordPress'],
    tags: ['WooCommerce', 'Bridal', 'Fashion'],
    blurb:
      'Bridal couture WooCommerce—rich maroon and gold styling, slider hero, shop and wishlist flows for embroidered and bridal blouses.',
  },
  {
    id: 'androidappmarketing',
    title: 'Android App Marketing',
    siteUrl: 'androidappmarketing.in',
    url: 'https://androidappmarketing.in/',
    thumb: '/projects/androidappmarketing.png',
    thumbLabel: 'AM',
    categories: ['WordPress'],
    tags: ['WordPress', 'Marketing', 'Apps'],
    blurb:
      'App growth marketing WordPress site—service highlights, checkmark proof points, and bold illustration-led hero for Android promotion.',
  },
  {
    id: 'gegosoft',
    title: 'GegoSoft Technologies',
    siteUrl: 'gegosoft.com',
    url: 'https://gegosoft.com/',
    thumb: '/projects/gegosoft.png',
    thumbLabel: 'GS',
    categories: ['WordPress'],
    tags: ['WordPress', 'Agency', 'Madurai'],
    blurb:
      'Corporate WordPress presence for a Madurai software company—gradient hero, services and products navigation, and lead-focused messaging.',
  },
  {
    id: 'gegok12',
    title: 'Gego K12',
    siteUrl: 'gegok12.com',
    url: 'https://gegok12.com/',
    thumb: '/projects/gegok12.png',
    thumbLabel: 'K12',
    categories: ['WordPress'],
    tags: ['WordPress', 'School ERP', 'Laravel'],
    blurb:
      'Landing site for Gego K12—free MIT open-source school management (PHP + Laravel), modular ERP, docs, preset demo, and parent/teacher mobile apps.',
  },
]

function Projects() {
  const [active, setActive] = useState('WordPress')
  const reduce = useReducedMotion()

  const visible = useMemo(() => {
    if (active === 'WordPress') return PROJECTS
    return PROJECTS.filter((p) => p.categories.includes(active))
  }, [active])

  return (
    <section id="projects" className="section-block projects">
      <div className="section-block__inner">
        <h2 className="section-block__title section-block__title--icon">
          <IconFolder className="section-title__icon" />
          Portfolio
        </h2>
        <p className="section-block__subtitle">
          <strong>WordPress</strong> lists every project. <strong>WooCommerce</strong>{' '}
          shows store builds: Haus of Aker, Kiya Fashions, Green Leaf Global Export,
          and Aesthetics Silai. <strong>Freelance</strong> shows only those three
          freelance builds (also included under WordPress).
        </p>

        <div
          className="projects__filters"
          role="tablist"
          aria-label="Project categories"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={active === f}
              className={`projects__filter ${active === f ? 'projects__filter--active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <ul className="projects__grid">
          <AnimatePresence mode="popLayout">
          {visible.map((p, index) => (
            <MotionLi
              key={p.id}
              className="projects__card"
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              whileHover={reduce ? undefined : { y: -5 }}
            >
              <a
                className="projects__thumb-link"
                href={p.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Open ${p.title} — ${p.siteUrl}`}
              >
                {p.thumb ? (
                  <img
                    className="projects__thumb"
                    src={assetUrl(p.thumb)}
                    alt=""
                    width={640}
                    height={400}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div
                    className="projects__thumb projects__thumb--placeholder"
                    aria-hidden="true"
                  >
                    <span className="projects__thumb-placeholder-text">
                      {p.thumbLabel}
                    </span>
                  </div>
                )}
              </a>
              <div className="projects__card-body">
                <p className="projects__site-url">{p.siteUrl}</p>
                <h3 className="projects__title">{p.title}</h3>
                <ul className="projects__tags">
                  {p.tags.map((t) => (
                    <li key={`${p.id}-${t}`}>{t}</li>
                  ))}
                </ul>
                <p className="projects__blurb">{p.blurb}</p>
                <a
                  className="projects__link"
                  href={p.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Visit site
                  <IconExternalLink className="projects__link-icon" />
                </a>
              </div>
            </MotionLi>
          ))}
          </AnimatePresence>
        </ul>

        {visible.length === 0 ? (
          <p className="projects__empty">No projects in this category yet.</p>
        ) : null}
      </div>
    </section>
  )
}

export default Projects
