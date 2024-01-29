import { useContext, useEffect, useState } from 'react'
import { mainContext } from '../../context/mainProvider'
import axios from 'axios'
import './cocktailCard.css'

const CocktailCard = () => {
  const { id, setId, setCocktail, cocktail, searchTerm } = useContext(mainContext); // ID des ausgewählten Cocktails aus dem Context
  const [ingredients, setIngredients] = useState() // Zutaten des ausgewählten Cocktails, gespeichert in einem neuen Array (filteredToArray)
  const [measurements, setMeasurements] = useState() // Mengenangaben der Zutaten des ausgewählten Cocktails, gespeichert in einem neuen Array (filteredToArray)

  const { setCocktailVisible } = useContext(mainContext) // Sichtbarkeit des Detailcontainers/Modals des ausgewählten Cocktails

  useEffect(() => {
    const getCocktail = async  () =>{ 
        const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`); // API-URL mit der ID des ausgewählten Cocktails
        setCocktail(resp.data.drinks[0]); 
        const arrayToObject =  resp.data.drinks[0]; // Array mit den Daten des ausgewählten Cocktails
        Object.keys(arrayToObject).forEach(
          (key) => !arrayToObject[key] && delete arrayToObject[key]); // Löscht alle leeren/null Werte aus dem Array indem es in ein Objekt umgewandelt wird und die Keys mit leeren Werten gelöscht werden
        console.log(arrayToObject);
        const filteredToArray = Object.entries(arrayToObject); // Das Objekt wird wieder in ein Array umgewandelt und in filteredToArray gespeichert
        console.log(filteredToArray);
        const ingredients = filteredToArray.filter((obj) => {
          return obj.some((el) => el.includes("strIngredient")); // Filtert alle Zutaten aus dem Array und speichert sie in ingredients als Array
        });
        setIngredients(ingredients) // Setzt die Zutaten in den State
        console.log(ingredients); 
        const measurements = filteredToArray.filter((obj) => {
          return obj.some((el) => el.includes("strMeasure")); // Filtert alle Mengenangaben aus dem Array und speichert sie in measurements als Array
        });
        setMeasurements(measurements) // Setzt die Mengenangaben in den State
        console.log(measurements);
    };
    if (id) { 
      getCocktail(); // Wenn die ID nicht leer ist, dann wird getCocktail() ausgeführt
    }
  }, [id, searchTerm]); // Wenn sich die ID oder der Suchbegriff ändert, dann wird die useEffect() Funktion ausgeführt



  return ( 
    <>
    <div className='overlay'>
      
      { cocktail  ? ( // Wenn cocktail nicht leer ist, dann wird der Detailcontainer/Modal angezeigt
        <div id="cocktailInfo" className='cocktailInfo'>
        <img src={cocktail.strDrinkThumb} width={150}/>
        <h2>{cocktail.strDrink}</h2>
        <h3>Zutaten</h3>
        <div id="cocktailRecipe" className='cocktailRecipe'>
        <div>
        {measurements.map((el, index) => { // Mappt die Mengenangaben in ein neues Array und gibt sie im Detailcontainer/Modal aus
                return (
                  <p key={index}>
                  {el[1]}
                  </p>
                  )
        }
        )}
        </div>
        <div>
        {ingredients.map((el, index) => { // Mappt die Zutaten in ein neues Array und gibt sie im Detailcontainer/Modal aus
                return (
                  <p key={index}>
                  {el[1]}
                  </p>
                  )
        }
        )}
        </div>
        </div>
        <p className="instructions">{cocktail.strInstructionsDE}</p>
        <button id="closeDetails" onClick={() =>{ // Schließt den Detailcontainer/Modal indem die ID, der Cocktail und die Sichtbarkeit des Detailcontainers/Modals geleert wird, da der Detailcontainer/Modal nur angezeigt wird, wenn diese nicht leer sind
          setCocktail(null)
          setId(null)
          setCocktailVisible(false)
        } }>X</button>
      </div>
      )
      : // Wenn cocktail leer ist, dann wird der Detailcontainer/Modal nicht gerendert
      (
        null
      )
      }
    </div>
  </>
  )
}

export default CocktailCard