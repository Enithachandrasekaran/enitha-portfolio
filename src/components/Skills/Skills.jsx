import { GroupIcon, IconAward } from '../Icons/Icons'
import MotionStagger, { MotionStaggerItem } from '../Motion/MotionStagger'
import SkillBar from './SkillBar'
import './Skills.css'

const SKILL_BARS = [
  { name: 'WordPress', pct: 92 },
  { name: 'HTML / CSS', pct: 90 },
  { name: 'JavaScript', pct: 85 },
  { name: 'React', pct: 78 },
  { name: 'Bootstrap / Tailwind', pct: 88 },
]

const GROUPS = [
  {
    title: 'Front-end',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Bootstrap',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Tools & deployment',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Netlify'],
  },
  {
    title: 'CMS & databases',
    items: ['WordPress', 'Elementor', 'Divi', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Certifications',
    items: [
      'Full Stack Development Certification',
      'AICTE Web Technology Assessment',
      'Python Certification',
      'Digital Marketing',
    ],
    longPills: true,
  },
]

function Skills() {
  return (
    <section id="skills" className="section-block skills">
      <div className="section-block__inner skills__inner">
        <h2 className="section-block__title skills__heading section-block__title--icon">
          <IconAward className="section-title__icon" />
          Resume
        </h2>
        <p className="section-block__subtitle skills__intro">
          Tools I use for front-end work, version control and deployment, WordPress
          with Elementor and Divi, databases—and formal certifications earned along
          the way.
        </p>

        <h3 className="skills__bars-title">My skills</h3>
        <ul className="skills__bars">
          {SKILL_BARS.map(({ name, pct }) => (
            <SkillBar key={name} name={name} pct={pct} />
          ))}
        </ul>

        <MotionStagger as="div" className="skills__grid">
          {GROUPS.map(({ title, items, longPills }) => (
            <MotionStaggerItem
              as="div"
              key={title}
              className={`skills__card${longPills ? ' skills__card--long-pills' : ''}`}
            >
              <h3 className="skills__group-title">
                <GroupIcon title={title} className="skills__group-icon" />
                {title}
              </h3>
              <ul className="skills__list">
                {items.map((item) => (
                  <li key={`${title}-${item}`} className="skills__pill">
                    {item}
                  </li>
                ))}
              </ul>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  )
}

export default Skills
