// Importation des PropTypes pour la validation des types de props
import PropTypes from 'prop-types';

// Composant Tags pour afficher chaque tag d'une location
const Tags = ({ text }) => {
    return <p className="tags">{text}</p>; // Chaque tag est un élément <p> stylisé
};

// Validation du type de la prop text pour assurer qu'elle est une chaîne de caractères
Tags.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Tags;
