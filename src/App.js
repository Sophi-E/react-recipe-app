import React, { useEffect, useState } from 'react';
import Recipe from './components/Recipe';

import './App.css';

function App() {
  const APP_ID = '6a974c15';
  const APP_KEY = 'a228ca81e9703092a64077968d1fd737';

  const [recipes, setRecipes] = useState([]);

  const [search, setSearch] = useState('');

  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      // console.log(data);
      setRecipes(data.hits);
      console.log(data.hits);
    };
    getRecipes();
    console.log(query);
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  };
  const submit = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className='App'>
      <form onSubmit={submit} className='search-form'>
        <input
          className='search-bar'
          type='text'
          value={search}
          onChange={updateSearch}
        />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>

      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;
