import { useEffect, useState } from 'react'
import './Header.css'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Resume' },
  { id: 'experience', label: 'Experience' },
  { id: 'work-experience', label: 'Work' },
  { id: 'projects', label: 'Portfolio' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const SECTION_IDS = NAV.map((n) => n.id)

function Header() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState(SECTION_IDS[0])

  useEffect(() => {
    let raf = 0
    const headerOffset = 100

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        let current = SECTION_IDS[0]
        for (const id of SECTION_IDS) {
          const el = document.getElementById(id)
          if (!el) continue
          const top = el.getBoundingClientRect().top
          if (top <= headerOffset) current = id
        }
        setActiveId((prev) => (prev === current ? prev : current))
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header className="panel-header">
      <nav
        id="site-nav"
        className={`panel-header__nav ${open ? 'panel-header__nav--open' : ''}`}
        aria-label="Main"
      >
        <ul className="panel-header__list">
          {NAV.map(({ id, label }) => {
            const active = activeId === id
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`panel-header__link${active ? ' panel-header__link--active' : ''}`}
                  onClick={() => {
                    setOpen(false)
                    setActiveId(id)
                  }}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
      <button
        type="button"
        className="panel-header__toggle"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">Menu</span>
        <span className="panel-header__toggle-bar" aria-hidden="true" />
      </button>
    </header>
  )
}

export default Header
