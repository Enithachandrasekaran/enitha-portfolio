import { IconGraduation } from '../Icons/Icons'
import MotionStagger, { MotionStaggerItem } from '../Motion/MotionStagger'
import './Education.css'

const ENTRIES = [
  {
    school: 'Fatima College, Madurai',
    degree: 'MCA — Master of Computer Science',
    range: '2022 – 2024',
    grade: '7.3 CGPA',
    logo: '/edu-fatima.jpg',
    logoAlt: 'Fatima College emblem',
    detail:
      'Postgraduate work in computer science—covering advanced programming, systems, software engineering, and a major project—building research-minded problem solving for complex technical work.',
  },
  {
    school: 'Mannar Thirumalai Naicker College (MTNC), Madurai',
    degree: 'BCA — Bachelor of Computer Applications',
    range: '2019 – 2022',
    grade: '8.6 CGPA',
    logo: '/edu-mtnc.png',
    logoAlt: 'Mannar Thirumalai Naicker College logo',
    detail:
      'Three-year undergraduate foundation in computing: programming, data structures, databases, operating systems, and web basics—with hands-on projects that prepared the move into postgraduate CS.',
  },
]

function Education() {
  return (
    <section id="education" className="section-block education">
      <div className="section-block__inner">
        <h2 className="section-block__title section-block__title--icon">
          <IconGraduation className="section-title__icon" />
          Education
        </h2>
        <p className="section-block__subtitle">
          Postgraduate and undergraduate studies in Madurai.
        </p>
        <MotionStagger as="ol" className="education__timeline">
          {ENTRIES.map((e) => (
            <MotionStaggerItem key={e.school + e.range} className="education__item">
              <span className="education__dot" aria-hidden="true" />
              <div className="education__card">
                <div className="education__card-top">
                  <img
                    className="education__logo"
                    src={e.logo}
                    alt={e.logoAlt}
                    width={72}
                    height={72}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="education__card-head">
                    <h3 className="education__school">{e.school}</h3>
                    <p className="education__degree">{e.degree}</p>
                    <span className="education__range">{e.range}</span>
                    <span className="education__grade">{e.grade}</span>
                  </div>
                </div>
                <p className="education__detail">{e.detail}</p>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  )
}

export default Education
