import './Navbar.scss'
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

function Navbar() {
  return (
    <AppBar>
    <Toolbar id="navbar" >            
    <Button color="inherit">About</Button>
    <Button color="inherit">Projects</Button>
    <Button color="inherit">Journey</Button>
    <Button color="inherit">Contact</Button>
    </Toolbar>
    </AppBar>

  )
}

export default Navbar
