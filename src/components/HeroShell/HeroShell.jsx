import { HeroBackdrop } from '../HeroBackdrop/HeroBackdrop'

/**
 * Shared #1d2d60 hero stack: animated backdrop behind header + banner (no seam).
 */
function HeroShell({ children }) {
  return (
    <div className="relative bg-[#1d2d60] text-white">
      <HeroBackdrop />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default HeroShell
