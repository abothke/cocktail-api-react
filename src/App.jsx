import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import CocktailGallery from './pages/cocktailGallery/CocktailGallery';

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/cocktails/:cat" element={<CocktailGallery />}/>
    </Routes>
    </>
  )
}

export default App
