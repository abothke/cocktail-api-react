import { useContext, useRef, useState } from 'react'
import { mainContext } from '../../context/mainProvider'
import { Link } from 'react-router-dom'
import "./header.css"


const Header = () => {
const [darkmode, setDarkmode] = useState(true);
const { setSearchTerm } = useContext(mainContext)
const searchRef = useRef()
const toggleMode = () => { 
setDarkmode(!darkmode)
console.log(darkmode);
{darkmode ? document.documentElement.setAttribute('data-bs-theme', 'dark') : document.documentElement.setAttribute('data-bs-theme', 'light')}
}
  return (
    <>
    <nav className='navbar navbar-expand-lg navbar-light'>
      <button id='modeToggle' onClick={() => toggleMode()}>🌔</button>
      <div className="header-content">
      <Link to="/"><h1>Drinks & Chill</h1></Link>
      <h2>Cocktails & Getränke!</h2>
      <p>Herzlich Willkommen in der Welt der Cocktails und Getränke!</p>
      </div>
      <div className="search">
      <input
      className="form-control"
      aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
      type="text"
      ref={searchRef}
      placeholder="Suche..."
       />
      <Link to="/cocktails/suche">
      <button className='btn' onClick={() => {
        setSearchTerm(searchRef.current.value)
      }}>Search</button></Link>
      </div>
    </nav>
    </>
  )
}

export default Header