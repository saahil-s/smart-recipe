import React from 'react';

function RecipeDisplay({ recipe }) {
  return (
    <div>
      <h2>Generated Recipe</h2>
      {recipe ? <pre>{recipe}</pre> : <p>No recipe generated yet.</p>}
    </div>
  );
}

export default RecipeDisplay;
