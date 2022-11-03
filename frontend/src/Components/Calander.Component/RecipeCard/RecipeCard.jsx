import React, { useState } from "react"
import './RecipeCard.css'
/* components */
import PopUp from "../../popUp.Components/PopUp"
import IngredientInformation from "../../../Pages/user-pages/recipe-card/ingredient-info"

export default function RecipeCardPart(props) {
    const recipeList = props.recipeList
    const viewOnly = props.viewOnly

    //console.log(recipeList)

    //if recipes is empty
    if (recipeList.length === 0) {
        return (
            <p>Please start by adding recipes</p>
        )
    }

    return (
        recipeList.map((recipe, index) => {
            const [buttonPopup, setButtonPopup] = useState(false)
            const [recipeName, setRecipeName] = useState(recipe.recipeName)
            const [recipeCategory, setRecipeCategory] = useState(recipe.category)
            const [recipeIngredients, setRecipeIngredients] = useState(recipe.ingredients)
            const [recipeInstructions, setRecipeInstructions] = useState(recipe.recipeInstructions)

            function editRecipeOnClick() {
                //const updatedIngredient = { ingredientName: newIngredientName, ingredientCategory: newIngredientCategory }
                //editPantryIngredient(token, updatedIngredient)
                setButtonPopup(false)
            }

            function deleteRecipeOnClick() {
                //deletePantryIngredient(userId, token)
                //setNewIngredientName("")
                //setNewIngredientCategory("")
                setButtonPopup(false)
            }

            if(viewOnly==true){
                return(
                    <section key={index} className="RecipeCard">
                        <p className="RecipeCard-text">
                            {recipeName}
                        </p>
                        <p className="RecipeCard-text">
                            Ingredients:
                            {recipeIngredients.map((ingredient, index) =>
                                <li key={index}>{ingredient.ingredientCount} {ingredient.ingredientLabel} {ingredient.ingredientName}</li>
                            )}
                        </p>
                        <p className="RecipeCard-text">
                            Instructions:<br></br>
                            {recipeInstructions}
                        </p>
                    </section>
                )
            }

            return (
                <div key={index} >
                    <button className="RecipeCard" onClick={() => setButtonPopup(true)}>
                        <p className="RecipeCard-text">
                            {recipeName}
                        </p>
                        <p className="RecipeCard-text">
                            Ingredients:
                            {recipeIngredients.map((ingredient, index) =>
                                <li key={index}>{ingredient.ingredientCount} {ingredient.ingredientLabel} {ingredient.ingredientName}</li>
                            )}
                        </p>
                        <p className="RecipeCard-text">
                            Instructions:<br></br>
                            {recipeInstructions}
                        </p>
                    </button>

                    <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <h3 className="title">Edit Recipe</h3>
                        <p>Recipe Name <input type="text" className="textInputLong" value={recipeName} onChange={()=>setRecipeName(event.target.value)} /></p>
                        <p>Recipe Category <input type="text" className="textInputLong" value={recipeCategory} onChange={()=>setRecipeCategory(event.target.value)} /></p>
                        <IngredientInformation
                            ingredients={recipeIngredients}
                            setIngredients={setRecipeIngredients} />
                        <p>Instructions</p>
                        <input type="text" className="textInputBox" value={recipeInstructions} onChange={()=>setRecipeInstructions(event.target.value)} />
                        <div className="popup-buttons">
                            <button className="submitButton" onClick={editRecipeOnClick}>Update</button>
                            <button className="deleteButton" onClick={deleteRecipeOnClick}>Delete</button>
                        </div>
                    </PopUp>
                </div>
            )
        })
    )

}