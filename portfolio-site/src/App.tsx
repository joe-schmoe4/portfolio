import './App.scss'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact';
function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <div style={{ maxWidth: '900px', width: '100%'}}>
        <AppBar>
          <Toolbar id="navbar" >            
            <Button color="inherit">About</Button>
            <Button color="inherit">Projects</Button>
            <Button color="inherit">Journey</Button>
            <Button color="inherit">Contact</Button>
          </Toolbar>
        </AppBar>
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
