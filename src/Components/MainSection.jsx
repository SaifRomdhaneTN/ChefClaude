import React from 'react';
import IngredientList from "./IngredientList.jsx";
import ClaudeRecipe from "./ClaudeRecipe.jsx";
import {getRecipeFromMistral} from "../ai.js";
export default function MainSection() {


    const [currentIngredients, setCurrentIngredients] = React.useState([]);
    const ingredientsListItems = currentIngredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
    function HandleSubmit(formData) {
        const ingredient = formData.get('ingredient');
        setCurrentIngredients((prevIng)=> [...prevIng, ingredient]);
    }



    const [recipe, setRecipe] = React.useState("");
     async function getRecipe() {
         const apiResponse = await getRecipeFromMistral(currentIngredients)
         setRecipe(apiResponse)

    }
    return (
        <main>
            <form action={HandleSubmit} className="mainForm">
                <input
                    aria-label="Add Ingredient"
                    type="text"
                    placeholder="e.g onions"
                    name="ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            {currentIngredients.length ? <IngredientList ingredientsListItems={ingredientsListItems}currentIngredients={currentIngredients} getRecipe={getRecipe} />: null}
            {recipe && <ClaudeRecipe  recipe={recipe}/>}
        </main>
    )
}