// Importation de l'image de la bannière
import img from '../assets/images/imgAccueil.png';

// Composant BannerImg
// Affiche une image avec un masque et un texte de bienvenue
const BannerImg = () => {
  return (
    <div className="banner">
      {/* Image de la bannière */}
      <img src={img} alt="falaises" className="bannerImg" />

      {/* Masque sombre pour un effet visuel */}
      <div className="mask"></div>

      {/* Texte principal de la bannière */}
      <h1>
        <span>Chez vous, </span>
        <span>partout et ailleurs</span>
      </h1>
    </div>
  );
};

export default BannerImg;
