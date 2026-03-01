import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import Favorites from "./pages/Favorites";
import About from "./pages/About";

import recipesData from "./data/recipes";

export default function App() {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("recipeHubFavorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("recipeHubFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <>
      <Navbar />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home recipes={recipesData} />} />
          <Route
            path="/recipes"
            element={
              <Recipes
                recipes={recipesData}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/recipes/:id"
            element={
              <RecipeDetails
                recipes={recipesData}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                recipes={recipesData}
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