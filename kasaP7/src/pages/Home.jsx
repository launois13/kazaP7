// Importation des composants pour la page d'accueil
import BannerImg from "../components/BannerImg";
import Gallery from "../components/Gallery";

// Composant principal pour la page d'accueil
// Affiche une bannière en haut et une galerie de locations
const Home = () => {
  return (
    <div className="Home">
      {/* Affichage de l'image de bannière */}
      <BannerImg />

      {/* Affichage de la galerie de locations */}
      <Gallery />
    </div>
  );
};

export default Home;
