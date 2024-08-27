import React, { useState } from 'react';

function RecipeInput({ onGenerateRecipe }) {
  const [ingredients, setIngredients] = useState('');

  const handleGenerate = () => {
    onGenerateRecipe(ingredients);
  };

  return (
    <div>
      <h2>Enter Ingredients</h2>
      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Enter ingredients separated by commas"
      />
      <button onClick={handleGenerate}>Generate Recipe</button>
    </div>
  );
}

export default RecipeInput;
