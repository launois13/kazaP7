// Importation des hooks, données et composants pour gérer les détails d'une location
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import locations from "../data/locations.json";
import Tags from "./Tags";
import Colapsis from "./Colapsis";
import Rating from "./Rating";
import Caroussel from "./Caroussel";

// Composant principal Loc pour afficher les informations d'une location spécifique
const Loc = () => {
  const { id } = useParams(); // Récupère l'ID de la location depuis l'URL
  const navigate = useNavigate(); // Permet de rediriger l'utilisateur en cas d'erreur
  const location = locations.find((item) => item.id === id); // Recherche la location par ID dans le fichier JSON

  useEffect(() => {
    // Si la location n'existe pas, redirige vers la page d'erreur
    if (!location) {
      navigate("/error");
    }
  }, [id, location, navigate]);

  // Si la location n'existe pas, retourne null (pour éviter un rendu incorrect)
  if (!location) {
    return null;
  }

  return (
    <>
      <div className="loc">
        {/* Composant Caroussel pour afficher les images de la location */}
        <Caroussel slides={location.pictures} />

        {/* Conteneur pour la description et les informations de la location */}
        <div className="loc-container-up-down">
          
          {/* Section supérieure avec titre, localisation, tags, hôte et note */}
          <div className="loc-content-up">
            <div className="loc-content-up-left">
              <h2>{location.title}</h2>
              <h3>{location.location}</h3>
              <div className="container-tags">
                {location.tags.map((tag, index) => (
                  <Tags key={index} text={tag} />
                ))}
              </div>
            </div>
            <div className="hostRating">
              <div className="host">
                <h3>{location.host.name}</h3>
                <img src={location.host.picture} alt="photo de l'hébergeur" />
              </div>
              <div className="rating">
                <Rating rating={parseInt(location.rating, 10)} />
              </div>
            </div>
          </div>

          {/* Section inférieure avec description et équipements sous forme de collapsibles */}
          <div className="loc-content-down">
            <Colapsis title="Description">{location.description}</Colapsis>
            <Colapsis title="Équipement">
              <ul>
                {location.equipments.map((equip, index) => (
                  <li key={index}>{equip}</li>
                ))}
              </ul>
            </Colapsis>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loc;
