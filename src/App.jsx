import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import EngineeringFocus from './sections/EngineeringFocus'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <EngineeringFocus />
        <About />
        <Skills />
        <Projects />
        <div className="bg-slate-50">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}