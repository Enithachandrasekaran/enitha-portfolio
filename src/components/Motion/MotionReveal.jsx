import { motion as Motion, useReducedMotion } from 'framer-motion'

function MotionReveal({ children, delay = 0, y = 24 }) {
  const reduce = useReducedMotion()

  if (reduce) return <>{children}</>

  return (
    <Motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Motion.div>
  )
}

export default MotionReveal
