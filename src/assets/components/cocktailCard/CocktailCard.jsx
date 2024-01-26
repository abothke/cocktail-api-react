import React, { useContext, useEffect, useState } from 'react'
import { mainContext } from '../../context/mainProvider'
import axios from 'axios'
import './cocktailCard.css'

const CocktailCard = () => {
  const {id, setId, setCocktail, cocktail } = useContext(mainContext);
  const [ingredients, setIngredients] = useState()
  const [measurements, setMeasurements] = useState()

  useEffect(() => {
    const getCocktail = async  () =>{ 
        const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        setCocktail(resp.data.drinks[0]);
        const arrayToObject =  resp.data.drinks[0];
        Object.keys(arrayToObject).forEach(
          (key) => !arrayToObject[key] && delete arrayToObject[key]);
        console.log(arrayToObject);
        const filteredToArray = Object.entries(arrayToObject);
        console.log(filteredToArray);
        const ingredients = filteredToArray.filter((obj) => {
          return obj.some((el) => el.includes("strIngredient"));
        });
        setIngredients(ingredients)
        console.log(ingredients);
        const measurements = filteredToArray.filter((obj) => {
          return obj.some((el) => el.includes("strMeasure"));
        });
        setMeasurements(measurements)
        console.log(measurements);
    };
    if (id) {
      getCocktail();
    }
  }, [id]);



  return ( 
    <>
    { cocktail ? (
      <div id="cocktailInfo" className='cocktailInfo'>
      <p>{cocktail.strDrink}</p>
      <p>Zutaten</p>
      <p>{cocktail.strIngredient1} {cocktail.strMeasure1}</p>
      <div id="cocktailRecipe" className='cocktailRecipe'>
      <div>
      {measurements.map((el, index) => {
              return (
                <p>
                {el[1]}
                </p>
                )
      }
      )}
      </div>
      <div>
      {ingredients.map((el, index) => {
              return (
                <p>
                {el[1]}
                </p>
                )
      }
      )}
      </div>
      </div>
      <button id="closeDetails" onClick={() =>{
        setCocktail(null)
        setId(null)
      } }>X</button>
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