import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

const navClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

const closeMenu = () => setMenuOpen(false);

return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <Link to="/" className="nav-brand" onClick={closeMenu}>
          <span className="brand-icon" aria-hidden="true">
            K
          </span>

<span>
            Kitchen <strong>Core</strong>
          </span>
        </Link>

<button
          type="button"
          className="menu-button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

<div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" end className={navClass} onClick={closeMenu}>
            Home
          </NavLink>

<NavLink to="/recipes" className={navClass} onClick={closeMenu}>
            Recipes
          </NavLink>

<NavLink to="/favorites" className={navClass} onClick={closeMenu}>
            Favorites
          </NavLink>

<NavLink to="/about" className={navClass} onClick={closeMenu}>
            About
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
