const Recipe = require("../models/Recipe");

// Get all recipes
exports.getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ message: "Error fetching recipes" });
    }
};

// Create a new recipe
exports.createRecipe = async (req, res) => {
    try {
        const { title, ingredients, instructions, category } = req.body;
        const newRecipe = new Recipe({ title, ingredients, instructions, category });
        await newRecipe.save();
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(400).json({ message: "Error creating recipe" });
    }
};

// Update a recipe
exports.updateRecipe = async (req, res) => {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedRecipe);
    } catch (error) {
        res.status(400).json({ message: "Error updating recipe" });
    }
};
