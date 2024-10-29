// Importation des PropTypes pour valider les types de props et de useState pour la gestion de la visibilité
import PropTypes from 'prop-types';
import { useState } from "react";
import svgFleche from "../assets/images/arrow.svg";

// Composant Colapsis
// Permet d'afficher ou masquer du contenu textuel avec une animation
const Colapsis = ({title,children}) => {
  const [isVisible, setIsVisible] = useState(false); // État pour gérer la visibilité du contenu

  // Fonction pour basculer la visibilité du contenu
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`colapsis ${isVisible ? "visible" : ""}`}>
      {/* En-tête du Colapsis avec titre et icône de flèche */}
      <div className="headColapsis" onClick={handleToggle} role="button" aria-expanded={isVisible}>
        <h3>{title}</h3>
        <img
          src={svgFleche}
          alt="flèche"
          className={`arrow ${isVisible ? "down" : ""}`} // Rotation de la flèche en fonction de isVisible
        />
      </div>
      
      {/* Contenu du Colapsis, visible uniquement si isVisible est true */}
      <div className={`paragraph ${isVisible ? "animate" : ""}`}>
        {children}
      </div>
    </div>
  );
};

// Validation des types de props pour s'assurer que le composant reçoit les bons types de données
Colapsis.propTypes = {
  title: PropTypes.string.isRequired, // Titre est une chaîne de caractères requise
  children: PropTypes.node.isRequired, // Enfants peuvent être n'importe quel noeud React, requis
};

export default Colapsis;
