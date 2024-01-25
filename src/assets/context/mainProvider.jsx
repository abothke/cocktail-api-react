import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const mainContext = createContext()

const MainProvider = ({children}) => {
    const [id, setId] = useState()
    const [data, setData] = useState()
    const [category, setCategory] = useState()
    const [cocktail, setCocktail] = useState()

    // useEffect(() => {
    //     const getCocktailId = async  () =>{ 
    //         const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${category}`)
    //         const ids = resp.data.drinks.map(drink => drink.idDrink);
    //         setId(ids)
    //     }
    //     { category ? getCocktailId() : null}
    // }, [category])


    useEffect(() => {
      const getCocktail = async  () =>{ 
          const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${category}`)
          setData(resp.data.drinks)
      }
      { category ? getCocktail() : null}
  }, [category])



  return (
    <>
    <mainContext.Provider value={{ data, setCategory, category, setId, id, setCocktail, cocktail}}>
      {children}
    </mainContext.Provider>
    </>
  )
}

export default MainProvider