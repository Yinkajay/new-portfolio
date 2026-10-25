import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    number: '01',
    title: 'Interface',
    tools: [
      { name: 'HTML5', slug: 'html5' },
      { name: 'CSS3', slug: 'css3' },
      { name: 'Tailwind CSS', slug: 'tailwindcss' },
      { name: 'JavaScript', slug: 'javascript' },
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'React', slug: 'react' },
      { name: 'React Native', slug: 'react' },
      { name: 'Next.js', slug: 'nextdotjs' },
      { name: 'Vue.js', slug: 'vuedotjs' },
      { name: 'Framer Motion', slug: 'framer' },
    ],
  },
  {
    number: '02',
    title: 'Data and APIs',
    tools: [
      { name: 'Node.js', slug: 'nodedotjs' },
      { name: 'MongoDB', slug: 'mongodb' },
      { name: 'MongoDB Compass', logo: 'compass' },
      { name: 'Postman', slug: 'postman' },
    ],
  },
  {
    number: '03',
    title: 'Workflow and hosting',
    tools: [
      { name: 'Git', slug: 'git' },
      { name: 'GitHub', slug: 'github' },
      { name: 'Figma', slug: 'figma' },
      { name: 'Vercel', slug: 'vercel' },
      { name: 'Netlify', slug: 'netlify' },
      { name: 'cPanel', slug: 'cpanel' },
    ],
  },
]

function CompassMark() {
  return (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="m15.7 8.3-2.4 5-5 2.4 2.4-5 5-2.4Z" fill="#f5e33f" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="1.1" fill="currentColor" />
    </svg>
  )
}

function SkillTool({ tool }) {
  return (
    <li className="skill-tool">
      <span className={`skill-tool-logo${tool.logo ? ` skill-tool-logo--${tool.logo}` : ''}`} aria-hidden="true">
        {tool.logo === 'compass' ? (
          <CompassMark />
        ) : (
          <img
            src={`https://cdn.simpleicons.org/${tool.slug}`}
            alt=""
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        )}
      </span>
      <span className="skill-tool-name">{tool.name}</span>
    </li>
  )
}

function SkillsSection() {
  const headingRef = useRef(null)

  useEffect(() => {
    const heading = headingRef.current
    if (!heading || !('IntersectionObserver' in window)) {
      heading?.classList.add('is-visible')
      return undefined
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        heading.classList.add('is-visible')
        observer.disconnect()
      }
    }, { threshold: 0.14 })

    observer.observe(heading)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="skills-section section-shell" id="skills" aria-labelledby="skills-title">
      <div className="reveal skills-heading" ref={headingRef}>
        <div>
          <p className="eyebrow">Tools I use</p>
          <h2 id="skills-title">Skills &amp; tools</h2>
        </div>
      </div>

      <div className="skill-groups">
        {skillGroups.map((group) => (
          <section className="skill-group" key={group.number} aria-labelledby={`skill-group-${group.number}`}>
            <header className="skill-group-heading">
              <h3 id={`skill-group-${group.number}`}>{group.title}</h3>
            </header>
            <ul className="skill-tool-list" aria-label={`${group.title} tools`}>
              {group.tools.map((tool) => <SkillTool key={tool.name} tool={tool} />)}
            </ul>
          </section>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
