// Importation de l'image pour la bannière
import img from '../assets/images/imgApropos.png'

// Composant pour afficher la bannière de la page À propos
// Comprend une image de fond et un masque (overlay) pour un effet visuel
const BannerApropos = () => {
  return (
    <div className="banner">
      {/* Image de la bannière avec masque */}
      <img src={img} alt="montagnes" className="bannerImg" />
      <div className="mask"></div>
    </div>
  );
};

export default BannerApropos;
