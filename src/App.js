import './App.css';
import React, { useState, useEffect } from 'react'
import Recipe from './Components/Recipe';

function App() {

  let API_ID = "5a6f0363"
  let API_KEY = "1a99326f2dda13437a0bd1b10ddbe58a"
  // https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${API_ID}&app_key=${API_KEY}

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState('')

  useEffect(() => {
    GetRecipes()
  }, [query])

  const updateSearch = e => {
    setSearch(e.target.value)
    console.log(search)
  }

  const GetSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  const GetRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
    console.log(data.hits)
  }

  return (
    <div className="App container my-3">
      <form className="d-flex" onSubmit={GetSearch}>
        <input className="form-control me-2" type="search" placeholder="Search Recipe" aria-label="Search" onChange={updateSearch}/>
        <button className="btn btn-outline-success" type="submit"><i className="bi bi-search"></i></button>
      </form>

      {
        recipes.map(recipe => (
          <Recipe           
            title = {recipe.recipe.label}
            image = {recipe.recipe.image}
            ingredients = {recipe.recipe.ingredients}
            ingredient_lines = {recipe.recipe.ingredientLines}
            meal_type = {recipe.recipe.mealType}
            dish_type = {recipe.recipe.dishType}
            calories = {recipe.recipe.calories}
            total_weight = {recipe.recipe.totalWeight}
          />          
        ))
      }
    </div>
  );
}

export default App;
