import React, { useContext, useEffect } from 'react'
import { mainContext } from '../../assets/context/mainProvider'
import { Link, useParams } from 'react-router-dom'
import CocktailCard from './../../assets/components/cocktailCard/CocktailCard';
import "./cocktailGallery.css"


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
      <div class="cocktails">
      {data.map((cocktail, index) =>{
        let result = index % 2 === 0 ? 'cGallery gerade' : 'cGallery ungerade'
        return(

          <button className="galleryButton" key={index} onClick={() => setId(cocktail.idDrink)}>
          <div className={result}>
          <div class="cocktailTitle"><h2>{cocktail.strDrink}</h2></div>
          <div class="cocktailImg"><img src={cocktail.strDrinkThumb}/></div>
          </div>
          </button>
        )
      })}
      </div>
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