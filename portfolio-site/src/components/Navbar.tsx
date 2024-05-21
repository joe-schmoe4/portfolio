import './Navbar.scss'
import {Link} from 'react-router-dom'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
            <Link to='/'>
              Home
            </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <Link to='/'>
              About
            </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <Link to='/'>
              Projects
            </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <Link to='/'>
              Contact
            </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navbar
