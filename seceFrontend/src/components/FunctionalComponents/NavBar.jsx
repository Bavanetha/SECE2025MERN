import "./NavBar.css"
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
            <li><Link to="/" className="Link">Home</Link></li>
            <li><Link to="/about" className="Link">About</Link></li>
            <li><Link to="/gallery" className="Link">Gallery</Link></li>
            <li><Link to="/contact" className="Link">Contact</Link></li>
            <li><Link to="/signup" className="Link">Signup</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
