// Importation du logo pour le footer
import logoFooter from "../assets/images/logoKasaFooter.svg"

// Composant Footer
// Affiche le logo et une note de copyright au bas de toutes les pages
const Footer = () => {
  return (
    <footer>
      {/* Logo de la marque */}
      <img src={logoFooter} alt="Logo de Kasa" />

      {/* Texte de copyright */}
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
