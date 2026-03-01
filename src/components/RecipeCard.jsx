import { Link } from "react-router-dom";

export default function RecipeCard({
  recipe,
  isFavorite = false,
  onToggleFavorite,
  showFavoriteButton = true
}) {
  return (
    <div className="card">
      <div className="recipe-image-wrap">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="recipe-image"
        />
      </div>

      <div className="card-body">
        <p className="card-category">{recipe.category}</p>
        <h3 className="card-title">{recipe.title}</h3>
        <p className="card-time">{recipe.time}</p>
        <p className="card-description">{recipe.description}</p>

        <div className="card-actions">
          <Link to={`/recipes/${recipe.id}`} className="btn">
            View Recipe
          </Link>

          {showFavoriteButton && (
            <button
              className="btn btn-outline"
              onClick={() => onToggleFavorite(recipe.id)}
            >
              {isFavorite ? "Remove" : "Favorite"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}