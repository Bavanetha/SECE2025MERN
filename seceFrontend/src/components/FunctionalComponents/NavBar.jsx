import { useState } from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";

const NavBar = (onLogout) => {
  var [dropdown, setDropdown] = useState(false);
  var [memodropdown, setMemoDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(dropdown => !dropdown);
  }
  const handlememoDropdown = () => {
    setMemoDropdown(memodropdown => !memodropdown);
  }

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/" className="Link">Home</Link></li>
          <li><Link to="/about" className="Link">About</Link></li>
          <li><Link to="/gallery" className="Link">Gallery</Link></li>
          <li><Link to="/contact" className="Link">Contact</Link></li>
          <div onMouseEnter={handleDropdown} onMouseLeave={handleDropdown} className="dropdown">
            <span >Hooks</span>
            {dropdown ? (
              <ol>
                <li><Link to="/reactlm" className="Link">ReactLifeCyleMethods</Link></li>
                
                <li><Link to="/use-state" className="Link">useState</Link></li>
                <li><Link to="/use-effect" className="Link">useEffect</Link></li>
                <li><Link to="/useeffect-api" className="Link">useEffectApi</Link></li>
                <li><Link to="/use-reducer" className="Link">useReducer</Link></li>
                <li><Link to="/use-ref" className="Link">useRef</Link></li>
                <li><Link to="/use-memo" className="Link">useMemo</Link></li>
                <li><Link to="/use-callback" className="Link">useCallback</Link></li>
                <li><Link to="/use-context" className="Link">useContext</Link></li>
              </ol>
            ) : ("")}

          </div>
          <div onMouseEnter={handlememoDropdown} onMouseLeave={handlememoDropdown} className="dropdown">
            <span >Memoization</span>
            {memodropdown ? (
              <ol>
                <li><Link to="/memo" className="Link">ReactMemo</Link></li>
              </ol>
            ) : ("")}

          </div>
          <li><Link to="/function-class" className="Link" >FunctionInsideClass</Link></li>
          <li><Link to="/" className="Link" onClick={onLogout}>Logout</Link></li>
          
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
