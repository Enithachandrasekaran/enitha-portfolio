import { IconBriefcase } from '../Icons/Icons'
import MotionStagger, { MotionStaggerItem } from '../Motion/MotionStagger'
import { assetUrl } from '../../utils/assetUrl'
import './Experience.css'

const ROLES = [
  {
    company: 'v7lancers Technopark Pvt. Ltd.',
    logo: '/experience/v7.png',
    logoAlt: 'v7lancers logo',
    role: 'Digital Marketing Intern',
    range: 'Jan 2024 – Apr 2024',
    bullets: [
      'Three-month internship focused on digital marketing campaigns and online presence.',
      'Collaborated with team workflows in a professional services environment.',
    ],
    skills: ['Digital Marketing', 'Content & campaigns'],
  },
  {
    company: 'Gateway Solution Technology',
    logo: '/experience/gateway.png',
    logoAlt: 'Gateway Solution Technology logo',
    role: 'Industry training — Python & networking',
    range: 'May 2023 · 1 month',
    bullets: [
      'One-month industry training covering Python fundamentals and networking concepts.',
      'Hands-on practice aligned with academic and career goals in tech.',
    ],
    skills: ['Python', 'Networking'],
  },
]

function Experience() {
  return (
    <section id="experience" className="section-block experience">
      <div className="section-block__inner">
        <h2 className="section-block__title section-block__title--icon">
          <IconBriefcase className="section-title__icon" />
          Experience
        </h2>
        <p className="section-block__subtitle">
          Internships and industry training that shaped my practical skills.
        </p>
        <MotionStagger className="experience__list">
          {ROLES.map((job) => (
            <MotionStaggerItem key={job.company + job.range} className="experience__card">
              <div className="experience__head">
                <div className="experience__head-left">
                  <img
                    className="experience__logo"
                    src={assetUrl(job.logo)}
                    alt={job.logoAlt}
                    width={52}
                    height={52}
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <h3 className="experience__company">{job.company}</h3>
                    <p className="experience__role">{job.role}</p>
                  </div>
                </div>
                <span className="experience__range">{job.range}</span>
              </div>
              <ul className="experience__bullets">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              {job.skills?.length ? (
                <p className="experience__skills">
                  <span className="experience__skills-label">Focus:</span>{' '}
                  {job.skills.join(' · ')}
                </p>
              ) : null}
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  )
}

export default Experience
