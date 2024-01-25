import React, { useContext } from 'react'
import { mainContext } from '../../assets/context/mainProvider'
import { useParams } from 'react-router-dom'


const CocktailGallery = () => {
const { data, setCategory, category } = useContext(mainContext)

const { cat } = useParams()
{ data ? setCategory(cat) : null}
console.log(category);

  return (
    <div>CocktailGallery</div>
  )
}

export default CocktailGallery