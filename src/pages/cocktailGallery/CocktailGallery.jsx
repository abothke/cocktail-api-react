import React, { useContext, useEffect } from 'react'
import { mainContext } from '../../assets/context/mainProvider'
import { Link, useParams } from 'react-router-dom'
import CocktailCard from './../../assets/components/cocktailCard/CocktailCard';


const CocktailGallery = () => {
const { data, setCategory, category, setId } = useContext(mainContext)
const { cat } = useParams()

useEffect(()=> {
  setCategory(cat)
}, [data])



  return (
    <>
    <CocktailCard/>
    {data ? (
      <>
      <p>{category}</p>
      {data.map((cocktail, index) =>{
        return(
          <div key={index}>
          <p>{cocktail.strDrink}</p>
          <img src={cocktail.strDrinkThumb}/>
          <button onClick={() => setId(cocktail.idDrink)}>set ID</button>
          </div>
        )
      })}
      </>
    )
    :
    (
      <p>Hallo</p>
    )
    }
    </>
  )
}

export default CocktailGallery