import { motion as Motion, useReducedMotion } from 'framer-motion'
import { SocialIcon } from '../Icons/Icons'
import './Footer.css'

const SOCIAL = [
  {
    label: 'GitHub',
    href: 'https://github.com/Enithachandrasekaran',
    icon: 'github',
    newTab: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/enitha-c-2174a6230/',
    icon: 'linkedin',
    newTab: true,
  },
  {
    label: 'Email',
    href: 'mailto:enitha2002c@gmail.com',
    icon: 'mail',
    newTab: false,
  },
  {
    label: 'Phone',
    href: 'tel:+919865709149',
    icon: 'phone',
    newTab: false,
  },
]

function Footer() {
  const year = new Date().getFullYear()
  const reduce = useReducedMotion()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">
          © {year} Enitha C. All rights reserved.
        </p>
        <ul className="footer__social">
          {SOCIAL.map(({ label, href, icon, newTab }, i) => (
            <li key={label}>
              <Motion.a
                className="footer__link"
                href={href}
                aria-label={label}
                title={label}
                initial={reduce ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.35 }}
                whileHover={reduce ? undefined : { scale: 1.08, y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.96 }}
                {...(newTab
                  ? { target: '_blank', rel: 'noreferrer noopener' }
                  : {})}
              >
                <SocialIcon type={icon} className="footer__link-icon" />
              </Motion.a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
