import styles from './Navbar.module.scss'
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
    <div className='flex items-center justify-center sticky top-0 bg-black text-white z-50 p-4 w-full'>
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-4">
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
    </div>
  )
}

export default Navbar
