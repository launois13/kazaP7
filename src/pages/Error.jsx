// Importation du composant Error404 pour afficher le message d'erreur
import Error404 from "../components/Error404"; 

// Composant Error pour afficher la page d'erreur
// Il encapsule le composant Error404 pour le message et le lien de redirection
const Error = () => {
  return (
    <div className="error">
      <Error404 />
    </div>
  );
};

export default Error;
