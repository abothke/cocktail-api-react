import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mainContext } from '../../assets/context/mainProvider';
import CocktailCard from './../../assets/components/cocktailCard/CocktailCard';
import "./cocktailGallery.css";


const CocktailGallery = () => {
const { data, setCategory, setId, cocktailVisible, setCocktailVisible } = useContext(mainContext) // Daten der Cocktails aus dem Context: data (Array mit allen Cocktails aus der API), setCategory (Kategorie der Cocktails), setId (ID des ausgewählten Cocktails), cocktailVisible (Sichtbarkeit des Detailcontainers/Modals des ausgewählten Cocktails
const { cat } = useParams() // mit useParams() wird die Kategorie aus der URL ausgelesen und in cat gespeichert

useEffect(()=> {
  setCategory(cat) // Setzt die Kategorie in den State (wird benötigt, um die API-URL zu setzen)
}, [data]) // Wenn sich die Daten ändern, dann wird die useEffect() Funktion ausgeführt und die Kategorie in den State gesetzt



  return (
    <>
    <div>
<CocktailCard/>
</div>
<div className={`${cocktailVisible ? 'blur' : ''}`}>
  {/* Wenn der Detailcontainer/Modal sichtbar ist, dann wird der Hintergrund geblurrt */}
  {data ? (
    // Wenn die Daten nicht leer sind, dann wird die CocktailGallery angezeigt
    // END: ed8c6549bwf9
        <div className="cocktails">
        {data.map((cocktail, index) =>{
          return(
            <button type="button" className="galleryButton btn card" key={index} onClick={() => { // Setzt die ID des ausgewählten Cocktail in den useState um die Daten des ausgewählten Cocktails aus der API zu holen und setzt cocktailVisible auf true um den Detailcontainer/Modal anzuzeigen
              setId(cocktail.idDrink)
              setCocktailVisible(true)
              }}>
            <div className={`${index % 2 === 0 ? 'cGallery gerade' : 'cGallery ungerade'}`}> 
            <div className="cocktailTitle"><h2>{cocktail.strDrink}</h2></div>
            <div className="cocktailImg"><img src={cocktail.strDrinkThumb}/></div>
            </div>
            </button>
          )
        })}
        </div>
      )
      :
      (
        <p>Loading...</p> // Wenn der API-Fetch noch nicht abgeschlossen ist, dann wird "Loading..." angezeigt
      )
      }
</div>
{cat === "zufall" ? ( // Wenn die Kategorie "zufall" ist, dann wird ein Button angezeigt, der die Seite neu lädt um einen neuen Zufallscocktail zu generieren
              <button onClick={() => window.location.reload()}>Einer geht noch!</button>
            )
            :
            (
              null
            ) 
          }
    </>
  )
}

export default CocktailGallery