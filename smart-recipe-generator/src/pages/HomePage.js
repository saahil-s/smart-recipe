// src/pages/HomePage.js

import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

function HomePage() {
  const [ingredients, setIngredients] = useState('');
  const [recipe, setRecipe] = useState('');
  const inputRef = useRef(null); // Ref for textarea
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleGenerateRecipe = () => {
    // Generate a dummy recipe based on the input
    setRecipe(`This is a dummy recipe based on the ingredients: ${ingredients}`);
  };

  const handleGoToSavedRecipes = () => {
    navigate('/saved-recipes'); // Navigate to the saved recipes page
};

  // Adjust the height of the textarea as the user types
  const handleInputChange = (e) => {
    setIngredients(e.target.value);
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto'; // Reset height
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`; // Set new height
    }
  };

  return (
    <div className="App">
      <h1>Smart Recipe Generator</h1>
      <textarea
        ref={inputRef}
        value={ingredients}
        onChange={handleInputChange}
        placeholder="Enter ingredients separated by commas"
        rows={1} // Set initial rows to 1
        style={{ overflow: 'hidden', resize: 'none' }} // Prevent resizing manually
      />
      <button onClick={handleGenerateRecipe}>Generate Recipe</button>
      <div className="output">
        {recipe ? <pre>{recipe}</pre> : <p>No recipe generated yet.</p>}
      </div>
      <button onClick={handleGoToSavedRecipes} style={{ marginTop: '20px' }}>Go to Saved Recipes</button>
    </div>
  );
}

export default HomePage;
