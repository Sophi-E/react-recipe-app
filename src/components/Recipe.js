import React from 'react';

export default function recipe({ title, calories, image, ingredients }) {
  const recipeStyle = {
    textAlign: 'center',
    background: 'white',
    boxShadow: '0px 5px 20px grey',
    borderRadius: '10px',
    margin: '20px',
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingRight: '20px',
    alignItems: 'center',
    //width: '30%',
    minWidth: '30%'
  };

  return (
    <div style={recipeStyle}>
      <h1>{title}</h1>
      <ol>
        <h3>Ingredients</h3>
        {ingredients.map((ingredient, index) => (
          <li style={{ listStyle: 'none' }} key={index}>
            {ingredient.text}
          </li>
        ))}
      </ol>
      <h3>Calories: {Math.round(calories)}</h3>
      <img src={image} alt={title} />
    </div>
  );
}
