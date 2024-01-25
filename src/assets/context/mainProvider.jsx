import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const mainContext = createContext()

const MainProvider = ({children}) => {
    const [id, setId] = useState()
    const [data, setData] = useState()
    const [category, setCategory] = useState()

    useEffect(() => {
        const getCocktailId = async  () =>{ 
            const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${category}`)
            console.log(resp.data.drinks);
            setId(resp.data.drinks)
        }
        { category ? getCocktailId() : null}
    }, [category])


    useEffect(() => {
      {id.map((cocktail) =>{
        
      })}
      const getCocktail = 
      async  () =>{ 
          const resp = await axios.get(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
          setData(resp.data.drinks)
          console.log(data);
      }
      { id ? getCocktail() : null}
  }, [id])



  return (
    <>
    <mainContext.Provider value={{ data, setCategory, category}}>
      {children}
    </mainContext.Provider>
    </>
  )
}

export default MainProvider