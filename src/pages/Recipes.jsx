import { useState } from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import RecipeCard from "../components/RecipeCard";

export default function Recipes({ recipes, favorites, toggleFavorite }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [...new Set(recipes.map((recipe) => recipe.category))];

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || recipe.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section>
      <h1 className="page-title">Recipes</h1>

      <div className="controls">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      <div className="grid">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isFavorite={favorites.includes(recipe.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))
        ) : (
          <p className="empty-state">No recipes found.</p>
        )}
      </div>
    </section>
  );
}