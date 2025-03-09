import React from "react";
import RecipeList from "./components/RecipeList"; // Example component
import CreateRecipe from "./components/CreateRecipe"; // Example component

function App() {
  return (
    <div>
      <h1>Recipe Management App</h1>
      <RecipeList />
      <CreateRecipe />
    </div>
  );
}

export default App;
