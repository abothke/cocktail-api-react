import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import CocktailGallery from './pages/cocktailGallery/CocktailGallery';
import Footer from './assets/components/footer/Footer';
import Header from './assets/components/header/Header';

function App() {


  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/cocktails/:cat" element={<CocktailGallery />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
