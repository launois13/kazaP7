// Importation du composant Thumb pour afficher les vignettes des locations
import Thumb from "./Thumb";

// Composant Gallery
// Affiche une grille de vignettes en utilisant le composant Thumb
const Gallery = () => {
  return (
    <div className="gallery">
      <Thumb />
    </div>
  );
};

export default Gallery;
