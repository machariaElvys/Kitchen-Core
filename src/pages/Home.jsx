import RecipeCard from "../components/RecipeCard";

export default function Home({ recipes }) {
  const featuredRecipes = recipes.slice(0, 3);

  return (
    <section>
      <div className="hero">
        <h1> Recipe Hub </h1>
        <p>
          Discover tasty meals, explore categories, and save your favorites.
        </p>
      </div>

      <h2 className="section-title">Featured Recipes</h2>

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
  );
}
