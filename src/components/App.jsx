// Importation des pages et composants
import About from "../pages/About";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Location from "../pages/Location";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

// Composant principal de l'application
// BrowserRouter est utilisé pour activer le routage et gérer l'historique de navigation de l'application
function App() {
  return (
    <BrowserRouter>
      {/* Le Header est affiché en haut de toutes les pages */}
      <Header />
      
      {/* Définition des routes pour chaque page de l'application */}
      <Routes>
        {/* Route vers la page d'accueil, accessible par '/' ou '/Accueil' */}
        <Route path="/" element={<Home />} />
        <Route path="/Accueil" element={<Home />} />

        {/* Route dynamique vers la page de location qui prend un paramètre 'id' */}
        <Route path="/location/:id" element={<Location />} />

        {/* Route vers la page À propos */}
        <Route path="/Apropos" element={<About />} />

        {/* Route vers la page d'erreur, affichée pour '/error' et pour toute autre route non définie */}
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} /> {/* Redirige toutes les autres routes non définies vers la page d'erreur */}
      </Routes>

      {/* Le Footer est affiché en bas de toutes les pages */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
