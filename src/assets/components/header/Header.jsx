import { useContext, useRef, useState } from 'react'
import { mainContext } from '../../context/mainProvider'
import { Link } from 'react-router-dom'
import "./header.css"


const Header = () => {
const [darkmode, setDarkmode] = useState(true); // Darkmode wird auf true gesetzt, damit wird die Seite standardmäßig im Lightmode angezeigt
const { setSearchTerm } = useContext(mainContext) // Suchbegriff aus dem Context um diesen wiederzuverwenden für die Suche bzw. Api-URL
const searchRef = useRef() // Referenz für die Suche
const toggleMode = () => { // Funktion um den Darkmode zu togglen
setDarkmode(!darkmode) // Darkmode wird auf den gegenteiligen Wert gesetzt
console.log(darkmode); 
{darkmode ? document.documentElement.setAttribute('data-bs-theme', 'dark') : document.documentElement.setAttribute('data-bs-theme', 'light')} // Wenn der Darkmode true ist, dann wird das Attribut data-bs-theme auf dark gesetzt, ansonsten auf light
}
  return (
    <>
    <nav className='navbar navbar-expand-lg navbar-light'>
      <button id='modeToggle' onClick={() => toggleMode()}>🌔</button> {/* Wenn der Button geklickt wird, dann wird die Funktion toggleMode() ausgeführt */}
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
       /> {/* Referenz für die Suche */}
      <Link to="/cocktails/suche"> {/* Wenn der Button geklickt wird, dann wird der Suchbegriff in den Context gesetzt und die Seite neu geladen um die Suche zu starten und mit dem Suchbegriff die API-URL zu setzen */}
      <button className='btn' onClick={() => {
        setSearchTerm(searchRef.current.value) // Setzt den Suchbegriff in den Context um diesen wiederzuverwenden für die Suche bzw. Api-URL
      }}>Search</button></Link>
      </div>
    </nav>
    </>
  )
}

export default Header