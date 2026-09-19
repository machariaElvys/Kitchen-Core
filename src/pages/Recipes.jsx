import { useState } from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import RecipeCard from "../components/RecipeCard";

export default function Recipes({
  recipes,
  favorites,
  toggleFavorite,
  searchTerm,
  setSearchTerm,
  onSearch,
  isSearching,
  searchError,
  clearSearch,
}) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    ...new Set(recipes.map((recipe) => recipe.category)),
  ];

  const filteredRecipes = recipes.filter((recipe) => {
    return (
      selectedCategory === "All" ||
      recipe.category === selectedCategory
    );
  });

  return (
    <section>
      <h1 className="page-title">Recipes</h1>

      <div className="controls">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={onSearch}
          isSearching={isSearching}
        />

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      {isSearching && (
        <p className="empty-state">
          Searching for <strong>"{searchTerm}"</strong>...
        </p>
      )}

      {searchError && (
        <p className="empty-state">
          {searchError}
        </p>
      )}

      {!isSearching && !searchError && searchTerm.trim() && (
        <div className="search-result-bar">
          <span>
            Results for <strong>"{searchTerm}"</strong>
          </span>

          <button
            type="button"
            onClick={clearSearch}
            className="btn btn-light"
          >
            Clear Search
          </button>
        </div>
      )}

      {!isSearching && !searchError && (
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
            <p className="empty-state">
              No meals found for <strong>"{searchTerm}"</strong>.
            </p>
          )}
        </div>
      )}
    </section>
  );
}