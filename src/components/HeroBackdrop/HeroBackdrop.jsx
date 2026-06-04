import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

/**
 * Same moving grid + blue blobs + vignette as the top banner (#1d2d60 stack).
 * Parent must be `relative overflow-hidden bg-[#1d2d60]`.
 */
export function HeroBackdrop() {
  const root = useRef(null)
  const grid = useRef(null)
  const blobA = useRef(null)
  const blobB = useRef(null)
  const blobC = useRef(null)
  const vignette = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(grid.current, {
        x: 36,
        y: 36,
        duration: 22,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to(blobA.current, {
        x: '12%',
        y: '-10%',
        scale: 1.12,
        duration: 11,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to(blobB.current, {
        x: '-14%',
        y: '12%',
        scale: 1.08,
        duration: 13,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to(blobC.current, {
        x: '-8%',
        y: '-6%',
        scale: 1.15,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.fromTo(
        vignette.current,
        { opacity: 0.35 },
        {
          opacity: 0.55,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        },
      )
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={root}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div
        ref={vignette}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(59,130,246,0.22)_0%,transparent_55%)]"
      />
      <div
        ref={grid}
        className="absolute inset-[-40%] opacity-[0.09]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />
      <div
        ref={blobA}
        className="absolute -left-[15%] top-[-10%] h-[min(90vw,560px)] w-[min(90vw,560px)] rounded-full bg-[#2563eb]/30 blur-[110px]"
      />
      <div
        ref={blobB}
        className="absolute -right-[18%] bottom-[-15%] h-[min(80vw,480px)] w-[min(80vw,480px)] rounded-full bg-[#3b82f6]/25 blur-[100px]"
      />
      <div
        ref={blobC}
        className="absolute left-[25%] top-[28%] h-[min(65vw,400px)] w-[min(65vw,400px)] rounded-full bg-[#1e40af]/40 blur-[90px]"
      />
    </div>
  )
}
