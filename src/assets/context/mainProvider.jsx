import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const mainContext = createContext()

const MainProvider = ({ children }) => {
    const [id, setId] = useState() // ID des ausgewählten Cocktails
    const [data, setData] = useState() // Array mit allen Cocktails aus der API
    const [category, setCategory] = useState() // Kategorie der Cocktails
    const [cocktail, setCocktail] = useState() // Daten des ausgewählten Cocktails
    const [cocktailVisible, setCocktailVisible] = useState(false); // Sichtbarkeit des ausgewählten Cocktails in der Detailansicht
    const [zufall, setZufall] = useState(false) // Zufallscocktail
    const [searchTerm, setSearchTerm] = useState() // Suchbegriff

    useEffect(() => {
      let apiURL
      if (category == "alkoholfrei"){ // Wenn die Kategorie "alkoholfrei" ist, dann wird die API-URL auf alkoholfrei gesetzt
        apiURL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
      } else if (category == "zufall"){ // Wenn die Kategorie "zufall" ist, dann wird die API-URL auf zufall gesetzt
        apiURL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
        setZufall(true) // Zufall wird auf true gesetzt
      } else if (category == "suche"){ // Wenn die Kategorie "suche" ist, dann wird die API-URL so gesetzt, dass nach dem Suchbegriff gesucht wird
        apiURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      } else { // Wenn die Kategorie eine andere ist, dann wird die API-URL so gesetzt, dass nach der Kategorie gesucht wird
        apiURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${category}`
      }
      const getCocktail = async  () =>{ 
          const resp = await axios.get(apiURL)
          setData(resp.data.drinks)
      }
      { category ? getCocktail() : null} // Wenn die Kategorie nicht leer ist, dann wird getCocktail() ausgeführt, um zu verhindern, dass die API-URL falsch gesetzt wird
  }, [category, searchTerm]) // Wenn sich die Kategorie oder der Suchbegriff ändert, dann wird die useEffect() Funktion ausgeführt



  return (
    <>
    <mainContext.Provider value={{ setSearchTerm, searchTerm, cocktailVisible, setCocktailVisible, data, setCategory, category, setId, id, setCocktail, cocktail}}>
      {children}
    </mainContext.Provider>
    </>
  )
}

export default MainProvider