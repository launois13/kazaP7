// Importation des composants spécifiques et des données JSON pour la page À propos
import BannerApropos from "../components/BannerApropos";
import Colapsis from "../components/Colapsis";
import colapsJson from "../data/colaps.json";

// Composant principal pour la page À propos
// Affiche une bannière et une liste de sections (Colapsis) avec contenu dynamique
const About = () => {
  return (
    <div className="about">
      {/* Affichage de la bannière de la page À propos */}
      <BannerApropos />

      {/* Affichage dynamique des sections Colapsis avec le contenu de colapsJson */}
      {colapsJson.map((colaps, index) => (
        <Colapsis key={index} title={colaps.title}>
          {colaps.text}
        </Colapsis>
      ))}
    </div>
  );
};

export default About;
