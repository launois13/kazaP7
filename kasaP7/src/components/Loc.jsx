import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import locations from "../data/locations.json";
import Tags from "./Tags";
import Colapsis from "./Colapsis";
import Rating from "./Rating";
import Caroussel from "./Caroussel";

const Loc = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = locations.find((item) => item.id === id);

  useEffect(() => {
    if (!location) {
      navigate("/error");
    }
  }, [id, location, navigate]);

  if (!location) {
    return null; // Ou affichez un composant d'erreur approprié
  }

  return (
    <>
      <div className="loc">
        <Caroussel slides={location.pictures} />
        <div className="loc-container-up-down">
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
          <div className="loc-content-down">
            <Colapsis title="Description">{location.description}</Colapsis>
            <Colapsis title="Equipement">
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