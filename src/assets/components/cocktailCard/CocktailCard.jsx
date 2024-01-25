import React, { useContext, useEffect } from 'react'
import { mainContext } from '../../context/mainProvider'
import axios from 'axios'
import './cocktailCard.css'

const CocktailCard = () => {
  const {id, setId, setCocktail, cocktail } = useContext(mainContext)
  useEffect(() => {
    const getCocktail = async  () =>{ 
        const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        setCocktail(resp.data.drinks)
    }
    { id ? getCocktail() : null}
}, [id])

  return ( 
    <>
    { cocktail ? (
      <div id="cocktailInfo" className='cocktailInfo'>
      <p>{cocktail[0].strDrink}</p>
      <p>Zutaten</p>
      <p>{cocktail[0].strIngredient1} {cocktail[0].strMeasure1}</p>
      <button onClick={() =>{
        setCocktail(null)
        setId(null)
      } }>drück mich</button>
    </div>
    )
    :
    (
      null
    )
    }
  </>
  )
}

export default CocktailCard