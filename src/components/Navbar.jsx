import {useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem("kitchen-theme") === "dark";
});
useEffect(() => {
  document.documentElement.classList.toggle("dark", darkMode);

  localStorage.setItem(
    "kitchen-theme",
    darkMode ? "dark" : "light"
  );
}, [darkMode]);

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
<button
  id="theme-toggle"
  type="button"
  aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
  onClick={() => setDarkMode((current) => !current)}
>
  <span className={`theme-icon-wrap ${darkMode ? "dark" : ""}`}>
    {/* Moon */}
    <svg
      className="theme-icon moon-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.6 6.6 0 0 0 21 12.8Z" />
    </svg>

    {/* Sun */}
    <svg
      className="theme-icon sun-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="2" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
      <line x1="4.9" y1="4.9" x2="7.1" y2="7.1" />
      <line x1="16.9" y1="16.9" x2="19.1" y2="19.1" />
      <line x1="4.9" y1="19.1" x2="7.1" y2="16.9" />
      <line x1="16.9" y1="7.1" x2="19.1" y2="4.9" />
    </svg>
  </span>
</button>
        </div>
      </nav>
    </header>
  );
}
