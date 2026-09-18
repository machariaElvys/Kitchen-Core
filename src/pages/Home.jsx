import { Link } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

export default function Home({ recipes }) {
  const featuredRecipes = recipes.slice(0, 3);
  const heroRecipe = recipes[0];
  const secondaryRecipe = recipes[1];

return (
    <section className="home-page">
      <div className="hero">
        <div className="hero-content">
          <span className="eyebrow">Fresh ideas for every meal</span>

<h1>
            Cook something
            <span> delicious today.</span>
          </h1>

<p id="p1">
            Discover simple, flavorful recipes for every occasion. Browse
            inspiring dishes and save your favorites for later.
          </p>

<div className="hero-actions">
            <Link to="/recipes" className="btn hero-primary">
              Explore Recipes
              <span aria-hidden="true">→</span>
            </Link>

<a href="#featured-recipes" className="btn btn-light">
              View Featured
            </a>
          </div>

<div className="hero-stats">
            <div>
              <strong>{}100+</strong>
              <span>Recipes</span>
            </div>

<div>
              <strong>100</strong>
              <span>Categories</span>
            </div>

<div>
              <strong>100%</strong>
              <span>Easy to follow</span>
            </div>
          </div>
        </div>

{heroRecipe && (
          <div className="hero-visual">
            <div className="hero-image-main">
              <img src={heroRecipe.image} alt={heroRecipe.title} />

<div className="hero-image-label">
                <span>Featured recipe</span>
                <strong>{heroRecipe.title}</strong>
              </div>
            </div>

{secondaryRecipe && (
              <div className="hero-image-small">
                <img
                  src={secondaryRecipe.image}
                  alt={secondaryRecipe.title}
                />
              </div>
            )}

<div className="hero-badge">
              <span aria-hidden="true">★</span>
              <div>
                <strong>Popular recipes</strong>
                <small>Chosen for you</small>
              </div>
            </div>
          </div>
        )}
      </div>

<section id="featured-recipes" className="featured-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Made with love</span>
            <h2 className="section-title">Featured Recipes</h2>
            <p>Start with some of our most-loved meal ideas.</p>
          </div>

<Link to="/recipes" className="section-link">
            View all recipes <span aria-hidden="true">→</span>
          </Link>
        </div>

<div className="grid">
          {featuredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              showFavoriteButton={false}
            />
          ))}
        </div>
      </section>

<section className="home-callout">
        <div>
          <span className="eyebrow">Ready to start cooking?</span>
          <h2>Find your next favorite meal.</h2>
          <p>
            Explore every recipe and discover something delicious for today.
          </p>
        </div>

<Link to="/recipes" className="btn callout-btn">
          Browse All Recipes
        </Link>
      </section>
    </section>
  );
}
