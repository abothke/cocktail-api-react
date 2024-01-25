import React, { useContext, useEffect } from 'react'
import { mainContext } from '../../assets/context/mainProvider'
import { useParams } from 'react-router-dom'


const CocktailGallery = () => {
const { data, setCategory, category } = useContext(mainContext)
const { cat } = useParams()

useEffect(()=> {
  setCategory(cat)
  // let filteredArray = [...data]
  // const result = filteredArray.filter(element) => element.includes(category))
  // console.log(result);
}, [data])



  return (
    <>
    {data ? (
      <>
      <p>{category}</p>
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