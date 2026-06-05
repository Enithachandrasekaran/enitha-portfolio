import { motion as Motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import {
  IconCode,
  IconTool,
  IconWordpress,
} from '../Icons/Icons'

const SKILL_ICONS = {
  WordPress: IconWordpress,
  'HTML / CSS': IconCode,
  JavaScript: IconCode,
  React: IconCode,
  'Bootstrap / Tailwind': IconTool,
}

function skillLevel(pct) {
  if (pct >= 90) return 'Expert'
  if (pct >= 80) return 'Advanced'
  return 'Proficient'
}

function SkillBar({ name, pct }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.35 })
  const reduce = useReducedMotion()
  const Icon = SKILL_ICONS[name] || IconCode

  const size = 88
  const stroke = 6
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const targetOffset = circumference - (pct / 100) * circumference

  return (
    <li ref={ref} className="skills__ring-card">
      <div className="skills__ring-visual">
        <svg
          className="skills__ring-svg"
          viewBox={`0 0 ${size} ${size}`}
          width={size}
          height={size}
          aria-hidden="true"
        >
          <circle
            className="skills__ring-track"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={stroke}
          />
          <Motion.circle
            className="skills__ring-progress"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={stroke}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={
              inView
                ? { strokeDashoffset: targetOffset }
                : { strokeDashoffset: circumference }
            }
            transition={{
              duration: reduce ? 0 : 1.15,
              ease: [0.22, 1, 0.36, 1],
              delay: reduce ? 0 : 0.08,
            }}
          />
        </svg>
        <span className="skills__ring-icon" aria-hidden="true">
          <Icon className="skills__ring-icon-svg" />
        </span>
        <Motion.span
          className="skills__ring-pct"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: reduce ? 0 : 0.35, duration: 0.4 }}
        >
          {pct}%
        </Motion.span>
      </div>
      <h4 className="skills__ring-name">{name}</h4>
      <span className="skills__ring-level">{skillLevel(pct)}</span>
    </li>
  )
}

export default SkillBar
