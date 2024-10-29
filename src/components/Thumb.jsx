// Importation des modules nécessaires pour la navigation et l'utilisation d'un état local
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import locations from "../data/locations.json"; // Importation des données de locations

// Composant Thumb
// Affiche une vignette pour chaque location en utilisant les données importées
const Thumb = () => {
  const [data, setData] = useState([]); // État local pour stocker les données des locations

  useEffect(() => {
    // Chargement des données dans l'état local
    setData(locations);
  }, []);

  return (
    <>
      {/* Création des vignettes pour chaque location */}
      {data.map((location, index) => (
        <div key={`routePaths${index}`} className="thumb">
          <NavLink to={`/location/${location.id}`}>
            <img src={location.cover} alt={location.title} />
            <h2 key={`${location}-${index}`}>{location.title}</h2>
          </NavLink>
        </div>
      ))}
    </>
  );
};

export default Thumb;
