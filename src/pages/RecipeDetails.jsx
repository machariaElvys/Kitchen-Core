import { useParams, Link } from "react-router-dom";

export default function RecipeDetails({ recipes, favorites, toggleFavorite }) {
  const { id } = useParams();

  const recipe = recipes.find((item) => item.id === Number(id));

  if (!recipe) {
    return <p className="empty-state">Recipe not found.</p>;
  }

  const isFavorite = favorites.includes(recipe.id);

  return (
    <section className="details-page">
      <Link to="/recipes" className="back-link">
        ← Back to Recipes
      </Link>

      <div className="details-card">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="recipe-details-image"
        />

        <h1>{recipe.title}</h1>
        <p className="card-category">{recipe.category}</p>
        <p className="card-time">{recipe.time}</p>
        <p>{recipe.description}</p>

        <button
          className="btn btn-outline"
          onClick={() => toggleFavorite(recipe.id)}
        >
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>

        <div className="details-section">
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="details-section">
          <h2>Steps</h2>
          <ol>
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}