import React from 'react';

export default function recipe({ title, calories, image, ingredients }) {
  return (
    <div>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ol>
      <p>{Math.round(calories)}</p>
      <img src={image} alt='' />
    </div>
  );
}
