import "./NavBar.css"
import { TbSunMoon } from "react-icons/tb"

const NavBar = () => {
  return (
    <nav>
        <ul>
        <li>About</li>
        <li>FAQ</li>
        </ul>
        <button aria-label="theme switcher" id="theme-button"><TbSunMoon /></button>
    </nav>
  )
}

export default NavBar