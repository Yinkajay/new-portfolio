import { useEffect, useRef, useState } from 'react'
import SkillsSection from '../components/SkillsSection'

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
    title: 'Bloody Civilian fansite',
    category: 'Music and culture',
    stack: ['Next.js', 'JavaScript', 'CSS'],
    live: 'https://bloooooddyyyyy.netlify.app/',
    repo: 'https://github.com/Yinkajay/bloody-civ',
    theme: 'civilian',
    mark: 'BLOODY\nCIVILIAN',
    note: 'A fan page for Bloody Civilian.',
  },
  {
    title: 'Task Manager',
    category: 'Productivity app',
    stack: ['React', 'TypeScript', 'CSS'],
    live: 'https://schoolinkatask.netlify.app/',
    repo: 'https://github.com/Yinkajay/Activity-Planner',
    theme: 'tasks',
    mark: 'TODAY',
    note: 'An activity planner for the day.',
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
  {
    title: 'Call Center Agency',
    type: 'Business website',
    detail: 'React · JavaScript',
    live: 'https://connect.markcalthers.com',
    repo: '',
  },
]

const capabilities = [
  ['01', 'Interface development', 'Responsive web experiences built with care for the small details.'],
  ['02', 'Frontend systems', 'Reusable components and code that stays understandable as products grow.'],
  ['03', 'Product collaboration', 'Working closely with design and product to make ideas real.'],
]

function HeroIllustration() {
  return (
    <div className="hero-illustration" role="img" aria-label="Layered browser windows with a geometric interface study">
      <div className="illustration-yellow-block" />
      <div className="illustration-dot-field" />
      <div className="browser-window browser-window--back">
        <div className="browser-bar"><span /><span /><span /><div /></div>
        <div className="browser-body browser-body--back">
          <div className="browser-copy">
            <strong>Ideas<br />into useful<br />interfaces.</strong>
            <span className="fake-line fake-line--short" />
            <span className="fake-line" />
            <span className="fake-action" />
          </div>
          <div className="browser-picture browser-picture--facets"><span /></div>
        </div>
      </div>
      <div className="browser-window browser-window--front">
        <div className="browser-bar"><span /><span /><span /><div /></div>
        <div className="browser-body browser-body--front">
          <div className="browser-sidebar"><span /><span /><span /></div>
          <div className="browser-panel">
            <div className="browser-panel__hero"><span /><span /><span /></div>
            <div className="browser-panel__lines"><span /><span /><span /></div>
          </div>
          <div className="browser-picture browser-picture--sculpture"><span /></div>
        </div>
      </div>
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
  return (
    <div className={`project-art project-art--${project.theme}`} aria-hidden="true">
      <div className="art-topline"><span>SELECTED WORK</span><span>LAGOS / NIGERIA</span></div>
      <div className="art-center">
        <span className="art-mark">{project.mark}</span>
        <span className="art-note">{project.note}</span>
      </div>
      <div className="art-bottomline"><span>FRONTEND ENGINEERING</span><span>↗</span></div>
      <span className="art-orbit" />
    </div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <a className="project-link" href={project.live} target="_blank" rel="noreferrer">
        <ProjectArt project={project} />
        <div className="project-card__heading">
          <div>
            <p className="eyebrow project-category">0{index + 1} / {project.category}</p>
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
            <p className="eyebrow hero-eyebrow"><span>Frontend engineer</span><span className="eyebrow-divider">·</span><span>Lagos, NG</span></p>
            <h1 id="hero-title">Thoughtful<br />interfaces.<br /><span>Solid frontend.</span></h1>
            <p className="hero-intro">I build clear, responsive experiences for the web, with care for the interface and the code behind it.</p>
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
            <p className="eyebrow">01 / Selected work</p>
            <h2 id="work-title">Built for people<br />and the things they do.</h2>
          </div>
          <p className="section-intro">A selection of web experiences I’ve helped bring to life, from useful tools to places built around culture.</p>
        </Reveal>

        <div className="project-grid">
          {projects.map((project, index) => (
            <Reveal key={project.title} className="project-reveal">
              <ProjectCard project={project} index={index} />
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
            <p className="eyebrow">02 / A little about me</p>
            <h2 id="about-title">Good work comes<br />from staying curious.</h2>
          </div>
          <div className="about-copy">
            <p>I’m Yinka, a frontend engineer based in Lagos. I enjoy turning early ideas into useful, carefully considered interfaces, with attention to accessibility, responsive design, and the details people notice when everything just works.</p>
            <p>When I’m away from the screen, I’m usually reading, running, listening to music, or following a new thread of curiosity.</p>
            <a className="text-link resume-link" href="https://docs.google.com/document/d/1G9KDmwkUBLW0TzVpSFavC_oDN-7F_Pwe09aKfbvkJcA/edit?tab=t.0" target="_blank" rel="noreferrer">Read my résumé <span aria-hidden="true">↗</span></a>
          </div>
        </Reveal>

        <Reveal className="capabilities">
          <p className="eyebrow capabilities-label">How I contribute</p>
          {capabilities.map(([number, title, description]) => (
            <div className="capability-row" key={number}>
              <span className="capability-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="contact-section section-shell" id="contact" aria-labelledby="contact-title">
        <Reveal className="contact-inner">
          <div>
            <p className="eyebrow">03 / Contact</p>
            <h2 id="contact-title">Have something<br />good in mind?</h2>
          </div>
          <div className="contact-copy">
            <p>I’d like to hear what you’re working on. Tell me a little about it and let’s start a conversation.</p>
            <a className="contact-email" href="mailto:yinkajunaid@ymail.com">yinkajunaid@ymail.com <span aria-hidden="true">↗</span></a>
          </div>
        </Reveal>
      </section>
    </>
  )
}
