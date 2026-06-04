import { motion as Motion, useReducedMotion } from 'framer-motion'

const MotionLi = Motion.li

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

const STAGGER_TAGS = {
  ul: Motion.ul,
  ol: Motion.ol,
  div: Motion.div,
}

function MotionStagger({ as: Tag = 'ul', className, children }) {
  const reduce = useReducedMotion()
  const StaticTag = Tag

  if (reduce) {
    return <StaticTag className={className}>{children}</StaticTag>
  }

  const MotionTag = STAGGER_TAGS[Tag] || Motion.div

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </MotionTag>
  )
}

export function MotionStaggerItem({ as = 'li', children, className }) {
  const reduce = useReducedMotion()
  const MotionEl = as === 'div' ? Motion.div : MotionLi

  if (reduce) {
    return as === 'div' ? (
      <div className={className}>{children}</div>
    ) : (
      <li className={className}>{children}</li>
    )
  }

  return (
    <MotionEl variants={item} className={className}>
      {children}
    </MotionEl>
  )
}

export default MotionStagger
