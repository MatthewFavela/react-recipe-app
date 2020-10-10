import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients, link}) => {
    return(
        <div className={style.recipe}>
            <h1><a href={link}>{title}</a></h1>
            <p>Calories: {calories}</p>
            <img src={image} alt="" className={style.image}/>
            <p>Ingredients:</p>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    )
}

export default Recipe;