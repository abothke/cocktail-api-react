import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const mainContext = createContext()

const MainProvider = ({children}) => {
    const [id, setId] = useState()
    const [data, setData] = useState()
    const [category, setCategory] = useState()
    const [cocktail, setCocktail] = useState()
    const [cocktailVisible, setCocktailVisible] = useState(false);
    const [zufall, setZufall] = useState(false)
    const [searchTerm, setSearchTerm] = useState()
    const { cat } = useParams()

    // useEffect(() => {
    //     const getCocktailId = async  () =>{ 
    //         const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${category}`)
    //         const ids = resp.data.drinks.map(drink => drink.idDrink);
    //         setId(ids)
    //     }
    //     { category ? getCocktailId() : null}
    // }, [category])


  
    useEffect(() => {
    }, [searchTerm])

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
      { zufall ? setId(resp.data.drinks[0].idDrink) : null }
      }
      { category ? getCocktail() : null}
  }, [category])



  return (
    <>
    <mainContext.Provider value={{ setSearchTerm, searchTerm, cocktailVisible, setCocktailVisible, data, setCategory, category, setId, id, setCocktail, cocktail}}>
      {children}
    </mainContext.Provider>
    </>
  )
}

export default MainProvider