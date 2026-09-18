import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import Favorites from "./pages/Favorites";
import About from "./pages/About";

import recipesData from "./data/recipes";

export default function App() {
  const navigate = useNavigate();

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("recipeHubFavorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "recipeHubFavorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const formatInstructions = (instructions) => {
    if (!instructions) return [];

    return instructions
      .split(/\r?\n/)
      .map((step) => step.trim())
      .filter(Boolean);
  };

  const formatIngredients = (meal) => {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingredient && ingredient.trim()) {
        ingredients.push(
          `${measure ? measure.trim() : ""} ${ingredient.trim()}`.trim()
        );
      }
    }

    return ingredients;
  };

  const normalizeMeal = (meal) => {
    return {
      id: meal.idMeal,
      title: meal.strMeal,
      category: meal.strCategory || "Recipe",
      time: "See recipe",
      image: meal.strMealThumb,
      description:
        meal.strInstructions?.slice(0, 120) ||
        "A delicious recipe waiting to be cooked.",
      ingredients: formatIngredients(meal),
      steps: formatInstructions(meal.strInstructions),
    };
  };

  const handleSearch = async (query) => {
    setIsSearching(true);
    setSearchError("");

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
          query
        )}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch recipes.");
      }

      const data = await response.json();

      const meals = data.meals || [];
      const formattedMeals = meals.map(normalizeMeal);

      setSearchResults(formattedMeals);

      navigate("/recipes");
    } catch (error) {
      console.error(error);
      setSearchError(
        "Something went wrong while searching. Please try again."
      );
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
    setSearchError("");
  };

  const allRecipes = [...recipesData, ...searchResults];

  return (
    <>
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
      />

      <main className="container">
        <Routes>
          <Route
            path="/"
            element={<Home recipes={recipesData} />}
          />

          <Route
            path="/recipes"
            element={
              <Recipes
                recipes={
                  searchResults.length > 0
                    ? searchResults
                    : recipesData
                }
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                searchTerm={searchTerm}
                isSearching={isSearching}
                searchError={searchError}
                clearSearch={clearSearch}
              />
            }
          />

          <Route
            path="/recipes/:id"
            element={
              <RecipeDetails
                recipes={allRecipes}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />

          <Route
            path="/favorites"
            element={
              <Favorites
                recipes={allRecipes}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />

          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}