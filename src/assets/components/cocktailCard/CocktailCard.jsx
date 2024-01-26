import React, { useContext, useEffect, useState } from 'react'
import { mainContext } from '../../context/mainProvider'
import axios from 'axios'
import './cocktailCard.css'

const CocktailCard = () => {
  const {searchCount, id, setId, setCocktail, cocktail, searchTerm } = useContext(mainContext);
  const [ingredients, setIngredients] = useState()
  const [measurements, setMeasurements] = useState()

  const { setCocktailVisible } = useContext(mainContext)

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
  }, [id, searchTerm]);



  return ( 
    <>
    <div className='overlay'>
      
      { cocktail  ? (
        <div id="cocktailInfo" className='cocktailInfo'>
        <img src={cocktail.strDrinkThumb} width={250}/>
        <h2>{cocktail.strDrink}</h2>
        <h3>Zutaten</h3>
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
        <p className="instructions">{cocktail.strInstructionsDE}</p>
        <button id="closeDetails" onClick={() =>{
          setCocktail(null)
          setId(null)
          setCocktailVisible(false)
        } }>X</button>
      </div>
      )
      :
      (
        null
      )
      }
    </div>
  </>
  )
}

export default CocktailCard