import React, { useContext, useRef } from 'react'
import { mainContext } from '../../context/mainProvider'
import { Link } from 'react-router-dom'


const Header = () => {
const { setSearchTerm } = useContext(mainContext)
const searchRef = useRef()
  return (
    <>
    <nav>
      <Link to="/"><h1>Drinks & Chill</h1></Link>
      <h2>Cocktails & Getränke!</h2>
      <p>Herzlich Willkommen in der Welt der Cocktails und Getränke!</p>
      <div className="search"></div>
      <input
      type="text"
      ref={searchRef}
       />
      <Link to="/cocktails/suche">
      <button onClick={() => {
        setSearchTerm(searchRef.current.value)
      }}>Search</button></Link>
    </nav>
    </>
  )
}

export default Header