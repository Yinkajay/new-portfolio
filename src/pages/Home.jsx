import { useEffect, useRef, useState } from 'react'
import SkillsSection from '../components/SkillsSection'
import bloodyCivilianHomepage from '../assets/bloody-civilian-homepage.png'
import heroOption01 from '../assets/option-1.png'
import heroOption02 from '../assets/option-2.png'
import heroOption03 from '../assets/option-3.png'

const heroImageOptions = {
  option01: heroOption01,
  option02: heroOption02,
  option03: heroOption03,
}
const selectedHeroImage = heroImageOptions.option01

const projects = [
  {
    title: 'MFS Services',
    category: 'Client website',
    stack: [],
    live: 'https://mfsservicesng.com/',
    repo: '',
    theme: 'mfs',
    mark: 'MFS',
    note: 'A live website for MFS Services.',
  },
  {
    title: 'Jobs Lounge',
    category: 'Web application',
    stack: ['Next.js', 'Framer Motion', 'Figma'],
    live: 'https://jobslounge.markcalthers.com/',
    repo: '',
    theme: 'jobs',
    mark: 'J / L',
    note: 'Job discovery and listings.',
  },
  {
    title: 'Craftbox AI',
    category: 'Creative tool',
    stack: ['Next.js', 'TypeScript', 'Framer Motion'],
    live: 'https://craftbox-rho.vercel.app/',
    repo: 'https://github.com/Yinkajay/new-portfolio',
    theme: 'craftbox',
    mark: 'CRAFTBOX',
    note: 'AI tools for creative work.',
  },
  {
    title: 'MC Connect',
    category: 'Business website',
    stack: ['React', 'JavaScript'],
    live: 'https://connect.markcalthers.com/',
    repo: '',
    theme: 'connect',
    mark: 'MC\nCONNECT',
    note: 'A website for MC Connect.',
    previewWidth: 1040,
    previewCrop: 550,
  },
  {
    title: 'Bloody Civilian fansite',
    category: 'Music and culture',
    stack: ['Next.js', 'JavaScript', 'CSS'],
    live: 'https://bloooooddyyyyy.netlify.app/',
    repo: 'https://github.com/Yinkajay/bloody-civ',
    theme: 'civilian',
    mark: 'BLOODY\nCIVILIAN',
    note: 'A fan page for Bloody Civilian.',
    previewImage: bloodyCivilianHomepage,
  },
]

const moreProjects = [
  {
    title: 'Creative Studio Website',
    type: 'Studio website',
    detail: 'Next.js · JavaScript',
    live: 'https://mcmstudio.markcalthers.com/services',
    repo: '',
  },
  {
    title: 'Vue Store',
    type: 'Commerce experience',
    detail: 'Vue · JavaScript',
    live: 'https://shoppa-app-vue3.web.app/login',
    repo: 'https://github.com/Yinkajay/Product-Auth',
  },
]

const capabilities = [
  {
    area: 'Frontend',
    title: 'Interfaces people can use',
    description: 'Responsive, accessible product experiences built from clear interactions and reusable components.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    icon: 'interface',
  },
  {
    area: 'Backend',
    title: 'Services behind the screen',
    description: 'APIs, server-side logic, and data flows that connect product experiences to the information they need.',
    tags: ['Node.js', 'MongoDB', 'Postman'],
    icon: 'backend',
  },
  {
    area: 'Product design',
    title: 'Clear journeys and direction',
    description: 'Turning early ideas into user flows, wireframes, and interface direction that teams can build from.',
    tags: ['Figma', 'User flows', 'Wireframes'],
    icon: 'design',
  },
  {
    area: 'UX testing',
    title: 'Thoughtful quality checks',
    description: 'Reviewing key flows across devices for clarity, accessibility, and edge cases, then refining what feels off.',
    tags: ['Usability checks', 'Accessibility', 'Responsive QA'],
    icon: 'testing',
  },
]

function CapabilityIcon({ type }) {
  if (type === 'interface') {
    return (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="3.5" y="5.5" width="25" height="20" rx="2" />
        <path d="M4 11h24M9 8.5h.01M12.5 8.5h.01M16 8.5h.01M12 29h8M16 25.5V29" />
      </svg>
    )
  }

  if (type === 'backend') {
    return (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="5" y="4.5" width="22" height="9" rx="2" />
        <rect x="5" y="18.5" width="22" height="9" rx="2" />
        <path d="M9 9h.01M9 23h.01M13 9h9M13 23h9" />
      </svg>
    )
  }

  if (type === 'design') {
    return (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4.5" y="4.5" width="23" height="23" rx="2" />
        <path d="m9 22.5 1.3-4.1 9.8-9.8 4.1 4.1-9.8 9.8L9 22.5Z" />
        <path d="m18.6 10.1 4.1 4.1" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="9" />
      <path d="m20.5 20.5 6.5 6.5M10 14.2l2.6 2.6 5.4-5.5" />
    </svg>
  )
}

function HeroIllustration() {
  return (
    <div className="hero-illustration">
      <div className="hero-studio-glow" aria-hidden="true" />
      <div className="hero-studio-orbit" aria-hidden="true" />
      <img className="hero-working-portrait" src={selectedHeroImage} alt="Yinka working at a desk" />
    </div>
  )
}

function Reveal({ children, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element || !('IntersectionObserver' in window)) {
      element?.classList.add('is-visible')
      return undefined
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('is-visible')
        observer.disconnect()
      }
    }, { threshold: 0.14 })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}

function WordReveal({ text }) {
  const wordRefs = useRef([])
  const words = text.split(' ')

  useEffect(() => {
    const observers = wordRefs.current.map((word) => {
      if (!word || !('IntersectionObserver' in window)) {
        word?.classList.add('is-lit')
        return null
      }

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          word.classList.add('is-lit')
          observer.disconnect()
        }
      }, { threshold: 0.65, rootMargin: '0px 0px -8% 0px' })

      observer.observe(word)
      return observer
    })

    return () => observers.forEach((observer) => observer?.disconnect())
  }, [text])

  return (
    <p className="tagline-copy" aria-label={text}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          ref={(element) => { wordRefs.current[index] = element }}
          aria-hidden="true"
          className="tagline-word"
          style={{ '--word-delay': `${index * 60}ms` }}
        >
          {word}{index < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </p>
  )
}

function ProjectArt({ project }) {
  const [previewFailed, setPreviewFailed] = useState(false)
  const previewUrl = `https://image.thum.io/get/width/${project.previewWidth ?? 1200}/crop/${project.previewCrop ?? 750}/noanimate/${project.live}`

  return (
    <div className={`project-art project-art--${project.theme} project-art--preview`}>
      {previewFailed ? (
        <div className="project-preview-fallback">
          <span className="eyebrow">Homepage preview</span>
          <strong>{project.mark}</strong>
          <span>Open live site ↗</span>
        </div>
      ) : (
        <img
          className="project-preview-image"
          src={project.previewImage ?? previewUrl}
          alt={`${project.title} homepage`}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setPreviewFailed(true)}
        />
      )}
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <a className="project-link" href={project.live} target="_blank" rel="noreferrer">
        <ProjectArt project={project} />
        <div className="project-card__heading">
          <div>
            <p className="eyebrow project-category">{project.category}</p>
            <h3>{project.title}</h3>
          </div>
          <span className="project-arrow" aria-hidden="true">↗</span>
        </div>
      </a>
      {project.stack.length > 0 && (
        <ul className="tag-list" aria-label={`${project.title} technologies`}>
          {project.stack.map((tool) => <li key={tool}>{tool}</li>)}
        </ul>
      )}
      {project.repo && (
        <a className="text-link project-repo" href={project.repo} target="_blank" rel="noreferrer">
          View source <span aria-hidden="true">↗</span>
        </a>
      )}
    </article>
  )
}

function MoreProjectRow({ project }) {
  return (
    <article className={`more-project-row${project.detail ? '' : ' more-project-row--compact'}`}>
      <div>
        <p className="eyebrow">{project.type}</p>
        <h3>{project.title}</h3>
      </div>
      {project.detail && <p className="more-project-meta">{project.detail}</p>}
      <div className="more-project-links">
        <a className="text-link" href={project.live} target="_blank" rel="noreferrer">Visit <span aria-hidden="true">↗</span></a>
        {project.repo && <a className="text-link" href={project.repo} target="_blank" rel="noreferrer">Source <span aria-hidden="true">↗</span></a>}
      </div>
    </article>
  )
}

export default function Home() {
  return (
    <>
      <section className="hero section-shell" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <Reveal>
            <p className="eyebrow hero-eyebrow"><span>Full stack developer</span><span className="eyebrow-divider">·</span><span>Lagos, NG</span></p>
            <h1 id="hero-title">From the first<br />screen to the<br /><span>systems behind it.</span></h1>
            <p className="hero-intro">I build responsive web products, pairing clear interfaces with dependable APIs and data.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <span aria-hidden="true">↘</span></a>
              <a className="button button-secondary" href="https://docs.google.com/document/d/1G9KDmwkUBLW0TzVpSFavC_oDN-7F_Pwe09aKfbvkJcA/edit?tab=t.0" target="_blank" rel="noreferrer">View CV <span aria-hidden="true">↗</span></a>
            </div>
          </Reveal>
        </div>
        <Reveal className="hero-visual-wrap">
          <HeroIllustration />
        </Reveal>
      </section>

      <SkillsSection />

      <section className="tagline-section section-shell" aria-label="Approach">
        <Reveal className="tagline-inner">
          <p className="eyebrow">A point of view</p>
          <WordReveal text="The best interfaces make complex things feel clear." />
        </Reveal>
      </section>

      <section className="work-section section-shell" id="work" aria-labelledby="work-title">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title">Built for people<br />and the things they do.</h2>
          </div>
          <p className="section-intro">A selection of web experiences I’ve helped bring to life, from useful tools to places built around culture.</p>
        </Reveal>

        <div className="project-grid">
          {projects.map((project) => (
            <Reveal key={project.title} className="project-reveal">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="more-work">
          <div className="more-work-heading">
            <p className="eyebrow">A few more</p>
            <p>Other projects and collaborations</p>
          </div>
          <div className="more-project-list">
            {moreProjects.map((project) => <MoreProjectRow key={project.title} project={project} />)}
          </div>
        </Reveal>
      </section>

      <section className="about-section section-shell" id="about" aria-labelledby="about-title">
        <Reveal className="about-intro">
          <div>
            <p className="eyebrow">A little about me</p>
            <h2 id="about-title">Good work comes<br />from staying curious.</h2>
          </div>
          <div className="about-copy">
            <p>I’m Yinka, a full stack developer based in Lagos. I build thoughtful interfaces and the backend connections that make them useful, with care for accessibility, responsive design, APIs, and data flows.</p>
            <p>When I’m away from the screen, I’m usually reading, running, listening to music, or following a new thread of curiosity.</p>
            <a className="text-link resume-link" href="https://docs.google.com/document/d/1G9KDmwkUBLW0TzVpSFavC_oDN-7F_Pwe09aKfbvkJcA/edit?tab=t.0" target="_blank" rel="noreferrer">Read my résumé <span aria-hidden="true">↗</span></a>
          </div>
        </Reveal>

        <Reveal className="capabilities">
          <div className="capabilities-heading">
            <div>
              <p className="eyebrow capabilities-label">How I contribute</p>
              <h3>I shape, build, and refine products.</h3>
            </div>
            <p className="capabilities-intro">From early product decisions and usable interfaces to dependable APIs and thoughtful quality checks.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className="capability-card" key={capability.area}>
                <div className="capability-card-topline">
                  <span className="capability-icon"><CapabilityIcon type={capability.icon} /></span>
                  <p className="eyebrow">{capability.area}</p>
                </div>
                <h4>{capability.title}</h4>
                <p className="capability-description">{capability.description}</p>
                <ul className="capability-tags" aria-label={`${capability.area} focus areas`}>
                  {capability.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="contact-section section-shell" id="contact" aria-labelledby="contact-title">
        <Reveal className="contact-inner">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">Have something<br />good in mind?</h2>
          </div>
          <div className="contact-copy">
            <p>I’d like to hear what you’re working on. Tell me a little about it and let’s start a conversation.</p>
            <a className="contact-email" href="mailto:yinkajunaid@ymail.com">yinkajunaid@ymail.com <span aria-hidden="true">↗</span></a>
            <a className="contact-linkedin" href="https://www.linkedin.com/in/yinka-junaid-a9a654171/" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM3.56 9h3.553v11.452H3.56zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>Connect on LinkedIn</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>
      </section>
    </>
  )
}
