import './App.scss'
import Navbar from './components/Navbar';
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact';
function App() {
  return (
  <div className="flex justify-center">
    <div className="max-w-3xl w-full">
      <Navbar />
      
      <div className="mt-15">
        <p className="font-bold text-2xl">Hello, I'm Darian Chieng. Welcome to my portfolio site!</p>
        <p>Newly Graduated Computer Science</p>
      </div>
      <About />
      <Projects />
      <Contact />
    </div>
  </div>
   
  )
}

export default App
