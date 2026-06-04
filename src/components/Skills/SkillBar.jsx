import { motion as Motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

function SkillBar({ name, pct }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const reduce = useReducedMotion()

  return (
    <li ref={ref} className="skills__bar-row">
      <div className="skills__bar-head">
        <span className="skills__bar-name">{name}</span>
        <Motion.span
          className="skills__bar-pct"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: reduce ? 0 : 0.4 }}
        >
          {pct}%
        </Motion.span>
      </div>
      <div className="skills__bar-track">
        <Motion.span
          className="skills__bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{
            duration: reduce ? 0 : 1,
            ease: [0.22, 1, 0.36, 1],
            delay: reduce ? 0 : 0.1,
          }}
        />
      </div>
    </li>
  )
}

export default SkillBar
