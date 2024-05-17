import './App.scss'
import Navbar from './components/Navbar';
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact';
function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <div style={{ maxWidth: '900px', width: '100%'}}>
        <Navbar/>
    
        <div style={{marginTop: '60px'}}>
          <p style={{fontWeight: 'bold',fontSize: '25px'}}>Hello, I'm Darian Chieng. Welcome to my portfolio site!</p>
          <p>Newly Graduated Computer science </p>
        </div>
        <About/>
        <Projects/>
        <Contact/>
      </div>
  </div>
  )
}

export default App
