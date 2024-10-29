// Importation des PropTypes pour valider les props et des icônes de flèches
import PropTypes from "prop-types";
import arrowRight from "../assets/images/arrowRight.svg";
import arrowLeft from "../assets/images/arrowLeft.svg";
import { useState } from 'react';

// Composant Caroussel pour afficher un carrousel d'images
const Caroussel = ({ slides = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Vérification si slides est undefined ou vide
  if (!slides || slides.length === 0) {
    return null; // ou un message d'erreur/placeholder
  }

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const currentSlide = slides[currentIndex];
  const numSlides = slides.length;

  // Masquer flèches et numérotation si une seule image
  const shouldShowControls = numSlides > 1;

  return (
    <div className="caroussel">
      {/* Affichage de l'image actuelle du carrousel */}
      <img className="slider" src={currentSlide} alt={`Slide ${currentIndex + 1}`} />
      
      {/* Affichage conditionnel des flèches si plusieurs images */}
      {shouldShowControls && (
        <>
          <img className="arrowRight" src={arrowRight} alt="Flèche Droite" onClick={handleNextClick} />
          <img className="arrowLeft" src={arrowLeft} alt="Flèche Gauche" onClick={handlePrevClick} />
          <div className="slide-indicator">{`${currentIndex + 1}/${slides.length}`}</div>
        </>
      )}
    </div>
  );
};

// Validation de la prop slides pour s'assurer qu'elle est un tableau de chaînes de caractères
Caroussel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Caroussel;
