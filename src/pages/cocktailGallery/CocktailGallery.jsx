import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mainContext } from '../../assets/context/mainProvider';
import CocktailCard from './../../assets/components/cocktailCard/CocktailCard';
import "./cocktailGallery.css";


const CocktailGallery = () => {
const { data, setCategory, setId, cocktailVisible, setCocktailVisible } = useContext(mainContext)
const { cat } = useParams()

useEffect(()=> {
  setCategory(cat)
}, [data])



  return (
    <>
    <div>
<CocktailCard/>
</div>
<div className={`${cocktailVisible ? 'blur' : ''}`}>
      {data ? (
        <div class="cocktails">
        {data.map((cocktail, index) =>{
          return(
            <button className="galleryButton" key={index} onClick={() => {
              setId(cocktail.idDrink)
              setCocktailVisible(true)
              }}>
            <div className={`${index % 2 === 0 ? 'cGallery gerade' : 'cGallery ungerade'}`}>
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
        <p>Loading...</p>
      )
      }
</div>
{cat === "zufall" ? (
              <button onClick={() => window.location.reload()}>Einer geht noch!</button>
            )
            :
            (
              null
            ) 
          }
    </>
  )
}

export default CocktailGallery