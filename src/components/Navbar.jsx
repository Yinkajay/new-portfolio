import { useEffect, useRef, useState } from 'react'

const links = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Work', href: '#work', id: 'work' },
  { label: 'Skills', href: '#skills', id: 'skills' },
]

const mobileLinks = [...links, { label: 'Contact', href: '#contact', id: 'contact' }]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const toggleRef = useRef(null)
  const mobileMenuRef = useRef(null)

  useEffect(() => {
    const sections = mobileLinks.map(({ id }) => document.getElementById(id)).filter(Boolean)
    if (!('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver((entries) => {
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]

      if (visibleSection) setActiveSection(visibleSection.target.id)
    }, { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.2, 0.5, 0.8] })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 761px)')
    const closeOnDesktop = (event) => {
      if (event.matches) setIsOpen(false)
    }

    desktopQuery.addEventListener('change', closeOnDesktop)
    return () => desktopQuery.removeEventListener('change', closeOnDesktop)
  }, [])

  useEffect(() => {
    if (!isOpen) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    mobileMenuRef.current?.querySelector('a')?.focus()
    const handleMenuKeys = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        return
      }

      if (event.key !== 'Tab') return
      const focusableLinks = [...(mobileMenuRef.current?.querySelectorAll('a[href]') ?? [])]
      const firstLink = focusableLinks[0]
      const lastLink = focusableLinks.at(-1)

      if (event.shiftKey && document.activeElement === firstLink) {
        event.preventDefault()
        lastLink?.focus()
      } else if (!event.shiftKey && document.activeElement === lastLink) {
        event.preventDefault()
        firstLink?.focus()
      }
    }
    document.addEventListener('keydown', handleMenuKeys)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleMenuKeys)
      if (document.activeElement === document.body) toggleRef.current?.focus()
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <a className="site-mark" href="#top" onClick={closeMenu} aria-label="Yinka Junaid, home" aria-current="page">YINX.</a>

        <div className="desktop-links">
          {links.map((link) => (
            <a
              key={link.id}
              className={`nav-link${activeSection === link.id ? ' is-active' : ''}`}
              href={link.href}
              aria-current={activeSection === link.id ? 'location' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a className="nav-contact" href="#contact">
          <img className="nav-memoji" src="/memoji-thumbs-up.png" alt="" />
          Contact <span aria-hidden="true">↗</span>
        </a>

        <button
          ref={toggleRef}
          className={`menu-toggle${isOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls={isOpen ? 'mobile-menu' : undefined}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="menu-line menu-line--top" />
          <span className="menu-line menu-line--bottom" />
        </button>
      </nav>

      {isOpen && (
        <nav className="mobile-menu" id="mobile-menu" ref={mobileMenuRef} aria-label="Mobile navigation">
          <div className="mobile-menu-top">
            <span className="eyebrow">Yinka Junaid / Frontend engineer</span>
            <span className="eyebrow">Menu</span>
          </div>
          <div className="mobile-menu-links">
            {mobileLinks.map((link, index) => (
              <a
                key={link.id}
                href={link.href}
                onClick={closeMenu}
                aria-current={activeSection === link.id ? 'location' : undefined}
                style={{ '--menu-delay': `${100 + index * 50}ms` }}
              >
                <span>0{index + 1}</span>{link.label}<span className="mobile-menu-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
          <p className="mobile-menu-bottom">Lagos, Nigeria <span>·</span> yinkajunaid@ymail.com</p>
        </nav>
      )}
    </header>
  )
}
