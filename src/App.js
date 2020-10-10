import React,  {useEffect, useState} from 'react';
import Recipe from './Recipe'
import'./App.css';

const App = () => {

  const APP_ID = "251cdbe7"
  const APP_KEY = "3e6f5ff3c2fccf01db8e7bcc86a7703a"

 const [recipes, setRecipes] = useState([]) 

 const [search, setSearch] = useState('')

 const [query, setQuery] = useState('chicken');

 const updateSearch = e => {
   setSearch(e.target.value)
 }


  useEffect(() => {
    getRecipes();
  }, [])

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }


  const getRecipes = async()=>{
    console.log(query)
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  }
  return(
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" name="" id="" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit" onClick={getRecipes}>Submit</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
      <Recipe 
      key={recipe.recipe.label}
      title={recipe.recipe.label} 
      calories={recipe.recipe.calories}
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients}
      link={recipe.recipe.url}
       />
    ))}
      </div>
    </div>
  )
}


export default App;
