import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const mainContext = createContext()

const MainProvider = ({ children }) => {
    const [id, setId] = useState()
    const [data, setData] = useState()
    const [category, setCategory] = useState()
    const [cocktail, setCocktail] = useState()
    const [cocktailVisible, setCocktailVisible] = useState(false);
    const [zufall, setZufall] = useState(false)
    const [searchTerm, setSearchTerm] = useState()

    useEffect(() => {
      let apiURL
      if (category == "alkoholfrei"){
        apiURL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
      } else if (category == "zufall"){
        apiURL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
        setZufall(true)
      } else if (category == "suche"){
        apiURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      } else {
        apiURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${category}`
      }
      const getCocktail = async  () =>{ 
          const resp = await axios.get(apiURL)
          setData(resp.data.drinks)
      }
      { category ? getCocktail() : null}
  }, [category, searchTerm])



  return (
    <>
    <mainContext.Provider value={{ setSearchTerm, searchTerm, cocktailVisible, setCocktailVisible, data, setCategory, category, setId, id, setCocktail, cocktail}}>
      {children}
    </mainContext.Provider>
    </>
  )
}

export default MainProvider