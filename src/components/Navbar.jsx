import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        Recipe Hub
      </Link>

      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Home
        </NavLink>

        <NavLink to="/recipes" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Recipes
        </NavLink>

        <NavLink to="/favorites" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Favorites
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          About
        </NavLink>
      </div>
    </nav>
  );
}