import React, { useState } from "react"
import './pantry.css'
/* Components */
import AddItemButton from "../../../Components/Button.Components/ButtonAddItem/ButtonAddItem";
import ButtonSelectItem from "../../../Components/Button.Components/ButtonSelectItem/ButtonSelectItem";
import Bar from "../../../Components/Input.Component/search_bar/search_bar";
/* Functional Javascript */
import { getAllPantryIngredients, addNewIngredient, testIngredientList } from "./pantry-functions";
/* Redux */
import { useSelector } from 'react-redux';
import { useEffect } from "react";

export default function Pantry() {
    const currentUserId = useSelector((state) => state.user.id)
    const currentUserToken = useSelector((state) => state.token.token)
    const [userPantry, setUserPantry] = useState([]);
    //const [userPantry, setUserPantry] = useState(testIngredientList());

    //add new ingredients
    const [newIngredientName, setNewIngredientName] = useState("")
    const [newIngredientCategory, setNewIngredientCategory] = useState("")

    useEffect(() => {
        getAllPantryIngredients(currentUserId, currentUserToken)
            .then(function (result) { setUserPantry(result) })
    }, [])

    function addIngredientOnClick() {
        //format and POST new ingredient
        const ingredient = { ingredientName: newIngredientName, ingredientCategory: newIngredientCategory }
        addNewIngredient(currentUserId, currentUserToken, ingredient)
        //reset input values
        setNewIngredientName("")
        setNewIngredientCategory("")
        //refresh pantry

    }

    return (
        <div className="pantry">
            
            <div className="Pantry-body">

                <AddItemButton buttonImage='+' nameHandle="Pantry-add" setMain={setUserPantry}>
                    <h3 className="title">Add ingredient</h3>
                    <p>Ingredient Name <input type="text" className="textInputLong" value={newIngredientName} onChange={() => setNewIngredientName(event.target.value)} /></p>
                    <p>Category <input type="text" className="textInputLong" value={newIngredientCategory} onChange={() => setNewIngredientCategory(event.target.value)} /></p>
                    <div className="popup-buttons">
                        <button className="submitButton" onClick={addIngredientOnClick}>submit</button>
                    </div>
                </AddItemButton>
                <ButtonSelectItem items={userPantry} token={currentUserToken} userId={currentUserId} />
            </div>
        </div>
    )
}

//upgrades
//pull existing categories as options in the dropdown
//have categories be created and maintained in a settings menu
//when adding new ingredient, check for dupe and ask user if they are sure
//add <Bar /> for search abilities