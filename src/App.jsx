import About from './components/About/About'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import MotionReveal from './components/Motion/MotionReveal'
import Projects from './components/Projects/Projects'
import Sidebar from './components/Sidebar/Sidebar'
import Skills from './components/Skills/Skills'
import WorkExperience from './components/WorkExperience/WorkExperience'
import Contact from './components/Contact/Contact Form'
import './App.css'

function App() {
  return (
    <div className="app app--vcard">
      <div className="app__layout">
        <Sidebar />
        <div className="app__panel">
          <Header />
          <main className="app__main" id="top">
            <MotionReveal delay={0.02}>
              <About />
            </MotionReveal>
            <MotionReveal delay={0.04}>
              <Skills />
            </MotionReveal>
            <MotionReveal delay={0.06}>
              <Experience />
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <WorkExperience />
            </MotionReveal>
            <MotionReveal delay={0.1}>
              <Projects />
            </MotionReveal>
            <MotionReveal delay={0.12}>
              <Education />
            </MotionReveal>
            <MotionReveal delay={0.14}>
              <Contact />
            </MotionReveal>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
