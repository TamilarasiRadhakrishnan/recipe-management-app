import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/recipes')
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the recipes!', error);
      });
  }, []);

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe._id}>
            <Link to={`/recipe/${recipe._id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/create">Create New Recipe</Link>
    </div>
  );
};

export default RecipeList;
