const express = require("express");
const router = express.Router();
const { getRecipes, createRecipe, updateRecipe } = require("../controllers/recipeController");

router.get("/recipes", getRecipes);
router.post("/recipes", createRecipe);
router.put("/recipes/:id", updateRecipe);

module.exports = router;
