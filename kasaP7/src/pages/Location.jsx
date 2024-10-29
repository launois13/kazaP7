// Importation du composant principal Loc pour la page d'une location
import Loc from "../components/Loc";

// Composant Location qui encapsule le contenu de la page d'une location
// Affiche le composant Loc qui gère tous les détails de la location
const Location = () => {
  return (
    <div className="location">
      <Loc />
    </div>
  );
};

export default Location;
