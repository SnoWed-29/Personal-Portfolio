
import './App.css'
import AnimatedBackground from './common/AnimatedBackground'
import ScrollEffect from './common/ScrollEffect'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'
function App() {
  

  return (
    <>
      <AnimatedBackground />
      {/* <ScrollEffect /> */}
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
