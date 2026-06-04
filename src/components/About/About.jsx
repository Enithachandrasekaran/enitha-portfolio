import { DoingIcon } from '../Icons/Icons'
import MotionStagger, { MotionStaggerItem } from '../Motion/MotionStagger'
import './About.css'

const WHAT_IM_DOING = [
  {
    title: 'Front-end Development',
    desc: 'HTML, CSS, JavaScript, React, Bootstrap, and Tailwind CSS for responsive, user-friendly interfaces.',
  },
  {
    title: 'WordPress & CMS',
    desc: 'Custom WordPress sites with Elementor and Divi, tailored to client requirements and brand needs.',
  },
  {
    title: 'Tools & Deployment',
    desc: 'Git, GitHub, VS Code, Postman, and Netlify for version control, testing, and publishing.',
  },
  {
    title: 'Databases',
    desc: 'MySQL and MongoDB for content-driven and application data behind web projects.',
  },
]

function About() {
  return (
    <section id="about" className="section-block about">
      <div className="section-block__inner">
        <h2 className="section-block__title">About me</h2>
        <div className="about__body">
          <p>
            I am Enitha, a passionate and dedicated web developer with experience
            in WordPress development and a strong interest in becoming a React
            Developer. I enjoy building clean, responsive, and user-friendly
            websites that provide a great user experience.
          </p>
          <p>
            I have worked as a WordPress Developer at GegoSoft Technologies,
            where I developed and customized websites based on client
            requirements. I also have hands-on experience in frontend
            technologies like HTML, CSS, JavaScript, Reactand Bootstrap.
            Currently, I am focusing on improving my skills in React.js and
            modern web development to build dynamic and scalable web
            applications.
          </p>
        </div>

        <h3 className="about__doing-title">What I&apos;m doing</h3>
        <MotionStagger className="about__doing-grid">
          {WHAT_IM_DOING.map(({ title, desc }) => (
            <MotionStaggerItem key={title} className="about__doing-card">
              <span className="about__doing-icon">
                <DoingIcon title={title} className="about__icon-svg" />
              </span>
              <h4 className="about__doing-name">{title}</h4>
              <p className="about__doing-desc">{desc}</p>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  )
}

export default About
