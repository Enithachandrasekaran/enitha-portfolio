import { IconExternalLink, IconWordpress } from '../Icons/Icons'
import './WorkExperience.css'

const COMPANY = {
  name: 'GegoSoft Technologies',
  tagline: 'GegoSoft Technologies (OPC) Private Limited · Madurai, India',
  url: 'https://gegosoft.com/',
  logo: '/gegosoft-logo.jpg',
  logoAlt: 'GegoSoft Technologies logo',
  role: 'WordPress Developer',
  range: '2025',
  about: [
    'Custom software and web development company delivering scalable, client-focused solutions—from WordPress sites and plugins to full-stack web applications.',
    'Known for agile delivery, strong engineering practices, and services spanning UI/UX, cloud, and modern web stacks alongside dedicated WordPress builds.',
  ],
}

function WorkExperience() {
  return (
    <section id="work-experience" className="section-block work-experience">
      <div className="section-block__inner work-experience__inner">
        <h2 className="section-block__title work-experience__title section-block__title--icon">
          <IconWordpress className="section-title__icon" />
          Work experience
        </h2>
        <p className="section-block__subtitle work-experience__subtitle">
          Professional role building and maintaining WordPress solutions for clients.
        </p>

        <article className="work-experience__card">
          <div className="work-experience__card-edge" aria-hidden="true" />
          <div className="work-experience__head">
            <a
              className="work-experience__logo-link"
              href={COMPANY.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className="work-experience__logo"
                src={COMPANY.logo}
                alt={COMPANY.logoAlt}
                width={88}
                height={88}
                loading="lazy"
                decoding="async"
              />
            </a>
            <div className="work-experience__head-text">
              <h3 className="work-experience__company">
                <a
                  href={COMPANY.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {COMPANY.name}
                </a>
              </h3>
              <p className="work-experience__tagline">{COMPANY.tagline}</p>
              <p className="work-experience__role">{COMPANY.role}</p>
              <span className="work-experience__range">{COMPANY.range}</span>
            </div>
          </div>

          <ul className="work-experience__bullets">
            {COMPANY.about.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>

          <a
            className="work-experience__cta"
            href={COMPANY.url}
            target="_blank"
            rel="noreferrer noopener"
          >
            gegosoft.com
            <IconExternalLink className="work-experience__cta-icon" aria-hidden="true" />
          </a>
        </article>
      </div>
    </section>
  )
}

export default WorkExperience
