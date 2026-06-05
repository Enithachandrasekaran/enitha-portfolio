import { motion as Motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import {
  ContactIcon,
  IconDownload,
  SocialIcon,
} from '../Icons/Icons'
import { assetUrl } from '../../utils/assetUrl'
import './Sidebar.css'

const CONTACT = [
  { label: 'Email', value: 'enitha2002c@gmail.com', href: 'mailto:enitha2002c@gmail.com' },
  { label: 'Phone', value: '+91 98657 09149', href: 'tel:+919865709149' },
  { label: 'Location', value: 'Madurai, India' },
]

const AVATAR_SOURCES = [
  '/profile.png',
  '/profile-portrait.png',
  '/banner-hero.svg',
]

const SOCIAL = [
  {
    label: 'GitHub',
    href: 'https://github.com/Enithachandrasekaran',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/enitha-c-2174a6230/',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    href: 'mailto:enitha2002c@gmail.com',
    icon: 'mail',
  },
]

function Sidebar() {
  const [avatarIndex, setAvatarIndex] = useState(0)
  const avatar = AVATAR_SOURCES[avatarIndex]
  const reduce = useReducedMotion()

  const handleAvatarError = () => {
    setAvatarIndex((i) =>
      i < AVATAR_SOURCES.length - 1 ? i + 1 : i,
    )
  }

  return (
    <Motion.aside
      className="sidebar"
      aria-label="Profile"
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Motion.div
        className="sidebar__card"
        initial={reduce ? false : { opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Motion.figure
          className="sidebar__avatar-wrap"
          initial={reduce ? false : { scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <img
            className="sidebar__avatar"
            src={assetUrl(avatar)}
            alt="Enitha C — profile photo"
            width={160}
            height={160}
            decoding="async"
            fetchPriority="high"
            onError={handleAvatarError}
          />
        </Motion.figure>
        <h1 className="sidebar__name">Enitha C</h1>
        <p className="sidebar__role">WordPress & React Developer</p>

        <ul className="sidebar__contact">
          {CONTACT.map(({ label, value, href }, i) => (
            <Motion.li
              key={label}
              className="sidebar__contact-item"
              initial={reduce ? false : { opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.07, duration: 0.4 }}
            >
              <span className="sidebar__contact-icon">
                <ContactIcon label={label} className="sidebar__icon-svg" />
              </span>
              <div>
                <span className="sidebar__contact-label">{label}</span>
                {href ? (
                  <a className="sidebar__contact-value" href={href}>
                    {value}
                  </a>
                ) : (
                  <span className="sidebar__contact-value">{value}</span>
                )}
              </div>
            </Motion.li>
          ))}
        </ul>

        <ul className="sidebar__social">
          {SOCIAL.map(({ label, href, icon }, i) => (
            <Motion.li
              key={label}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.06 }}
            >
              <Motion.a
                className="sidebar__social-link"
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                whileHover={reduce ? undefined : { scale: 1.08, y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.96 }}
              >
                <SocialIcon type={icon} className="sidebar__icon-svg" />
              </Motion.a>
            </Motion.li>
          ))}
        </ul>

        <Motion.a
          className="sidebar__resume btn btn--accent"
          href={assetUrl('/resume.pdf')}
          target="_blank"
          rel="noreferrer"
          whileHover={reduce ? undefined : { scale: 1.02 }}
          whileTap={reduce ? undefined : { scale: 0.98 }}
        >
          <IconDownload className="sidebar__icon-svg sidebar__icon-svg--btn" />
          Download CV
        </Motion.a>
      </Motion.div>
    </Motion.aside>
  )
}

export default Sidebar
