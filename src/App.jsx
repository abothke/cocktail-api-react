import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import CocktailGallery from './pages/cocktailGallery/CocktailGallery';
import Footer from './assets/components/footer/Footer';
import Header from './assets/components/header/Header';
import './bootstrap.min.css';



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Wenn die URL / ist, dann wird die Home-Seite angezeigt */}
        <Route path="/cocktails/:cat" element={<CocktailGallery />} /> {/* Wenn die URL /cocktails/:cat ist, dann wird die CocktailGallery-Seite angezeigt. :cat wird mit useParams() ausgelesen und in cat gespeichert, um die Kategorie der Cocktails zu setzen */}
      </Routes>
      <Footer />
    </>
  );
}

export default App
