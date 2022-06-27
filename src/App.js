import React, { useEffect, useState } from "react";
import Repcipe from "./Recipe";
import './App.css';
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "8d9c7e25";
  const APP_KEY = "0535b3f6936e5c9dbb042950f00a0985";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  return (
  <div className="App">
    <form className="search-form">
      <input className="search-bar" type="text"/>
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
    {recipes.map(recipe =>(
      <Recipe 
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
      />
    ))}
  </div>
  );
};

export default App;
