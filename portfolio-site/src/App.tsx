import './App.scss'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact';
function App() {
  return (
  <div className="flex justify-center">
    <div className="max-w-3xl w-full">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  </div>
   
  )
}

export default App
