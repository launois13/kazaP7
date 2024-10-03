import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink to="/" className={({isActive}) => (isActive ? "nav-underline" : "")}>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/apropos" className={({isActive}) => (isActive ? "nav-underline" : "")}>
            A propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;