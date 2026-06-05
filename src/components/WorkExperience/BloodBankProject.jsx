import { IconCode } from '../Icons/Icons'
import { BLOOD_BANK_PROJECT } from '../../data/bloodBankProject'
import '../Experience/Experience.css'
import './BloodBankProject.css'

function BloodBankProject() {
  const project = BLOOD_BANK_PROJECT

  return (
    <article className="blood-bank work-experience__card experience__card--project">
      <div className="experience__head">
        <div className="experience__head-left">
          <span className="experience__project-icon" aria-hidden="true">
            <IconCode className="experience__project-icon-svg" />
          </span>
          <div>
            <h3 className="experience__company">{project.title}</h3>
            <p className="experience__role">{project.role}</p>
          </div>
        </div>
        <span className="experience__range">{project.badge}</span>
      </div>

      <p className="experience__intro">{project.intro}</p>

      <div className="experience__block">
        <h4 className="experience__block-title">Problem statement</h4>
        <ul className="experience__bullets">
          {project.problem.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="experience__block">
        <h4 className="experience__block-title">Objectives</h4>
        <ul className="experience__bullets">
          {project.objectives.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="experience__block">
        <h4 className="experience__block-title">Technology stack</h4>
        <ul className="experience__tags">
          {project.stack.map((tech) => (
            <li key={tech} className="experience__tag">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="experience__block">
        <h4 className="experience__block-title">Module overview</h4>
        <ul className="experience__modules">
          {project.modules.map(({ name, desc }) => (
            <li key={name} className="experience__module">
              <strong className="experience__module-name">{name}</strong>
              <p className="experience__module-desc">{desc}</p>
            </li>
          ))}
        </ul>
      </div>

      <details className="experience__details">
        <summary>Security features</summary>
        <ul className="experience__bullets">
          {project.security.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </details>

      <details className="experience__details">
        <summary>Testing</summary>
        <ul className="experience__bullets">
          {project.testing.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </details>

      <details className="experience__details">
        <summary>Future enhancements</summary>
        <ul className="experience__bullets">
          {project.future.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </details>
    </article>
  )
}

export default BloodBankProject
