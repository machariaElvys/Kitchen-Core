import { useEffect, useState } from "react";

export default function SearchBar({
  searchTerm,
  setSearchTerm,
  onSearch,
  onSelectSuggestion,
  isSearching,
}) {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);

  useEffect(() => {
    const query = searchTerm.trim();

    if (query.length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const controller = new AbortController();

    const timer = setTimeout(async () => {
      setLoadingSuggestions(true);

      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
            query
          )}`,
          {
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch suggestions.");
        }

        const data = await response.json();

        const meals = data.meals || [];

        setSuggestions(meals.slice(0, 6));
        setShowSuggestions(true);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      } finally {
        setLoadingSuggestions(false);
      }
    }, 300);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const query = searchTerm.trim();

    if (!query || isSearching) return;

    setShowSuggestions(false);
    onSearch(query);
  };

  const handleSuggestionClick = (meal) => {
    setShowSuggestions(false);
    onSelectSuggestion(meal);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Search meals..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setShowSuggestions(true);
        }}
        onFocus={() => {
          if (suggestions.length > 0) {
            setShowSuggestions(true);
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setShowSuggestions(false);
          }
        }}
        disabled={isSearching}
      />

      <button
        type="submit"
        className="btn search-button"
        disabled={isSearching}
      >
        {isSearching ? "Searching..." : "Search"}
      </button>

      {showSuggestions && searchTerm.trim().length >= 2 && (
        <div className="search-suggestions">
          {loadingSuggestions ? (
            <div className="suggestion-status">
              Searching meals...
            </div>
          ) : suggestions.length > 0 ? (
            suggestions.map((meal) => (
              <button
                key={meal.idMeal}
                type="button"
                className="suggestion-item"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleSuggestionClick(meal)}
              >
                <img
                  src={meal.strMealThumb}
                  alt=""
                  className="suggestion-image"
                />

                <span className="suggestion-content">
                  <strong>{meal.strMeal}</strong>
                  <small>{meal.strCategory || "Recipe"}</small>
                </span>
              </button>
            ))
          ) : (
            <div className="suggestion-status">
              No matching meals found.
            </div>
          )}
        </div>
      )}
    </form>
  );
}