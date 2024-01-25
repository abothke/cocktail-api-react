import React, { useContext, useEffect } from 'react'
import { mainContext } from '../../assets/context/mainProvider'
import { useParams } from 'react-router-dom'


const CocktailGallery = () => {
const { data, setCategory, category } = useContext(mainContext)
const { cat } = useParams()

useEffect(()=> {
  setCategory(cat)
}, [data])

console.log(data);

  return (
    <>
    {data ? (
      <>
      {data.map((cocktail, index) =>{
        return(
          <div key={index}>
          <p>{cocktail.strDrink}</p>
          <img src={cocktail.strDrinkThumb}/>
          </div>
        )
      })}
      </>
    )
    :
    (
      <p>Hallo</p>
    )
    }
    </>
  )
}

export default CocktailGallery