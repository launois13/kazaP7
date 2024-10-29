// Importation de NavLink pour la redirection vers la page d'accueil
import { NavLink } from "react-router-dom";

// Composant Error404 pour afficher le message d'erreur 404
// Affiche un titre, un message d'erreur et un lien pour retourner à l'accueil
const Error404 = () => {
  return (
    <div className="error404">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n&apos;existe pas.</p>

      <ul>
        {/* Lien vers la page d'accueil en cas d'erreur */}
        <NavLink to="/">
          <li>Retourner sur la page d’accueil</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Error404;
