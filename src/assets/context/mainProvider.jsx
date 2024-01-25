import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const mainContext = createContext()

const MainProvider = ({children}) => {
    const [data, setData] = useState()
    const [category, setCategory] = useState()

    useEffect(() => {
        const getCocktail = async  () =>{ 
            const resp = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s')
            setData(resp.data.drinks)
            console.log(data);
        }
        { category ? getCocktail() : null}
    }, [category])


  return (
    <>
    <mainContext.Provider value={{ data, setCategory, category }}>
      {children}
    </mainContext.Provider>
    </>
  )
}

export default MainProvider