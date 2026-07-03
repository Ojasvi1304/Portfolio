import { useState, useMemo } from 'react'
import { navLinks } from '../../data/nav'
import { useScrollSpy } from '../../hooks/useScrollSpy'

export default function Navbar({ isDark, onToggleDark }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const sectionIds = useMemo(() => navLinks.map(({ href }) => href.replace('#', '')), [])
  const activeId = useScrollSpy(sectionIds)

  return (
    <header className="sticky top-0 z-50 bg-cream/95 dark:bg-[#1C1A17]/95 backdrop-blur-sm border-b border-border-warm dark:border-[#38352F]">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="font-bold text-xl tracking-tight text-ink dark:text-[#E8E3DB] hover:text-teal transition-colors duration-200">
          Ojasvi
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-7 text-sm font-medium">
          {navLinks.map(({ label, href }) => {
            const id = href.replace('#', '')
            const isActive = activeId === id
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`relative py-1 transition-colors duration-200 ${
                    isActive
                      ? 'text-teal'
                      : 'text-ink-muted dark:text-[#9A958D] hover:text-ink dark:hover:text-[#E8E3DB]'
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-px rounded-full bg-teal" />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-1">

          {/* Dark mode toggle */}
          <button
            type="button"
            onClick={onToggleDark}
            aria-label="Toggle dark mode"
            className="p-2 rounded-md text-ink-muted dark:text-[#9A958D] hover:bg-border-warm dark:hover:bg-[#242220] hover:text-ink dark:hover:text-[#E8E3DB] transition-all duration-200"
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="md:hidden p-2 rounded-md text-ink-muted dark:text-[#9A958D] hover:bg-border-warm dark:hover:bg-[#242220] transition-all duration-200"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-border-warm dark:border-[#38352F] bg-cream/98 dark:bg-[#1C1A17]/98">
          <ul className="px-6 py-3 flex flex-col gap-0.5">
            {navLinks.map(({ label, href }) => {
              const id = href.replace('#', '')
              const isActive = activeId === id
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-teal/8 text-teal'
                        : 'text-ink-muted dark:text-[#9A958D] hover:bg-border-warm dark:hover:bg-[#242220] hover:text-ink dark:hover:text-[#E8E3DB]'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}
