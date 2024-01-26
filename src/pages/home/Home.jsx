import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"

const Home = () => {
  return (
    <div id="ctCat">
        <Link to="/cocktails/gin">
            <div>
                <h2>Gin</h2>
                <p>Lorem ipsum dolor sit.</p>
            </div>
        </Link>

        <Link to="/cocktails/vodka">
            <div>
                <h2>Vodka</h2>
                <p>Lorem ipsum dolor sit.</p>
            </div>
        </Link>
        <Link to="/cocktails/rum">
            <div>
                <h2>Rum</h2>
                <p>Lorem ipsum dolor sit.</p>
            </div>
        </Link>
        <Link to="/cocktails/scotch">
            <div>
                <h2>Scotch</h2>
                <p>Lorem ipsum dolor sit.</p>
            </div>
        </Link>
        <Link to="cocktails/alkoholfrei">
            <div>
                <h2>Alkoholfrei</h2>
                <p>Lorem ipsum dolor sit.</p>
            </div>
        </Link>
        <Link to="/cocktails/zufall">
            <div>
                <h2>Zufall</h2>
                <p>Lorem ipsum dolor sit.</p>
            </div>
        </Link>
    </div>
  )
}

export default Home