// Importation des PropTypes pour valider les props et des icônes d'étoile
import PropTypes from "prop-types";
import starFull from "../assets/images/starFull.svg";
import starGrey from "../assets/images/starGrey.svg";

// Composant Rating pour afficher les étoiles de notation
// Utilise des étoiles pleines et grises en fonction de la note reçue
const Rating = ({ rating }) => {
  const totalStars = 5; // Nombre total d'étoiles

  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, index) => (
        <img
          key={index}
          src={index < rating ? starFull : starGrey} // Condition pour étoile pleine ou grise
          alt={index < rating ? "étoile pleine" : "étoile vide"}
          className="star"
        />
      ))}
    </div>
  );
};

// Validation de la prop rating pour s'assurer qu'elle est un nombre
Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
