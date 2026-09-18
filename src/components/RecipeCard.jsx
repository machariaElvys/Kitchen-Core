import { Link } from "react-router-dom";

export default function RecipeCard({
  recipe,
  isFavorite = false,
  onToggleFavorite,
  showFavoriteButton = true
}) {
  return (
    <article className="card">
      <Link
        to={`/recipes/${recipe.id}`}
        className="recipe-image-wrap"
        aria-label={`View ${recipe.title}`}
      >
        <img
          src={recipe.image}
          alt={recipe.title}
          className="recipe-image"
          loading="lazy"
        />

<span className="image-category">{recipe.category}</span>
      </Link>

<div className="card-body">
        <div className="card-meta">
          <span>⏱ {recipe.time}</span>
          <span>★ Popular</span>
        </div>

<h3 className="card-title">
          <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
        </h3>

<p className="card-description">{recipe.description}</p>

<div className="card-actions">
          <Link to={`/recipes/${recipe.id}`} className="card-recipe-link">
            View Recipe <span aria-hidden="true">→</span>
          </Link>

{showFavoriteButton && (
            <button
              type="button"
              className={`favorite-button ${isFavorite ? "saved" : ""}`}
              onClick={() => onToggleFavorite(recipe.id)}
              aria-pressed={isFavorite}
              aria-label={
                isFavorite
                  ? `Remove ${recipe.title} from favorites`
                  : `Add ${recipe.title} to favorites`
              }
            >
              <span aria-hidden="true">{isFavorite ? "♥" : "♡"}</span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
