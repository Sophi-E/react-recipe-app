import React, { useEffect, useState } from 'react';
import Recipes from './components/Recipe';

import './App.css';

function App() {
  const APP_ID = '6a974c15';
  const APP_KEY = 'a228ca81e9703092a64077968d1fd737';

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = response.json();
    setRecipes(data.hits);
  };

  return (
    <div className='App'>
      <form className='search-form'>
        <input className='search-bar' />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
      <Recipes />
    </div>
  );
}

export default App;
