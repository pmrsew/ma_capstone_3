import React, { useState } from 'react'
import './ButtonSelectItem.css'
/* Components */
import Ingredient_Image from '../../../Images/ingredient_image_2.png'
import PopUp from '../../popUp.Components/PopUp'
/* Functional Javascript */
import { deletePantryIngredient, editPantryIngredient } from '../../../Pages/UserPages/pantry/pantry-functions'

export default function ButtonSelectItem(props) {
    const items = props.items;
    const userId = props.userId;
    const token = props.token;

    //if pantry is empty
    if (items.length === 0) {
        return (
            <p>Please start by adding ingredients</p>
        )
    }

    return (
        items.map((item, index) => {
            const [buttonPopup, setButtonPopup] = useState(false)
            const [newIngredientName, setNewIngredientName] = useState(item.ingredientName)
            const [newIngredientCategory, setNewIngredientCategory] = useState(item.ingredientCategory)

            function editIngredientOnClick() {
                const updatedIngredient = { ingredientId: item.ingredientId, ingredientName: newIngredientName, ingredientCategory: newIngredientCategory }
                editPantryIngredient(token, updatedIngredient)
                setButtonPopup(false)
            }

            function deleteIngredientOnClick() {
                deletePantryIngredient(userId, token, item.ingredientId)
                setNewIngredientName("")
                setNewIngredientCategory("")
                setButtonPopup(false)
            }

            return (
                <div key={index} className='Pantry-item-body'>
                    <button className="Pantry-item-button" onClick={() => setButtonPopup(true)}>
                        <p className="d">{item.ingredientName.substring(0, 1).toUpperCase() + item.ingredientName.substring(1)}</p>
                        <img src={Ingredient_Image} alt='ingredient image'
                            className='ingredient_img' />
                    </button>
                    <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <p>Ingredient Name <input type="text" className="textInputLong" value={newIngredientName} onChange={() => setNewIngredientName(event.target.value)} /></p>
                        <p>Category <input type="text" className="textInputLong" value={newIngredientCategory} onChange={() => setNewIngredientCategory(event.target.value)} /></p>
                        <div className='popup-buttons'>
                            <button className="submitButton" onClick={editIngredientOnClick}>Update</button>
                            <button className="deleteButton" onClick={deleteIngredientOnClick}>Delete</button>
                        </div>
                    </PopUp>
                </div>
            )
        }
        )
    )
}
