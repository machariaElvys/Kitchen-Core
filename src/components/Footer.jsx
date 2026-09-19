import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="nav-brand">
            <span className="brand-icon" aria-hidden="true">
              K
            </span>

<span>
              Kitchen<strong>Core</strong>
            </span>
          </Link>

<p>
            Simple recipes, fresh inspiration, and delicious meals for every
            day.
          </p>
        </div>

<div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/about">About</Link>
        </div>
      </div>

<div className="footer-bottom">
        <p>© 2026 Kitchen Core. Made for people who love good food. </p>
        <p>Designed & built by Macharia</p>
      </div>
    </footer>
  );
}
