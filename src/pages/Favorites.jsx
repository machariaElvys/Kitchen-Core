import RecipeCard from "../components/RecipeCard";

export default function Favorites({ recipes, favorites, toggleFavorite }) {
  const favoriteRecipes = recipes.filter((recipe) =>
    favorites.includes(recipe.id)
  );

  return (
    <section>
      <h1 className="page-title">Favorites </h1>

      {favoriteRecipes.length > 0 ? (
        <div className="grid">
          {favoriteRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isFavorite={true}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      ) : (
        <p className="empty-state">You have no favorite recipes yet.</p>
      )}
    </section>
  );
}