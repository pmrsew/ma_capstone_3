import React, { useState } from "react"
import { Link, Routes, Route } from 'react-router-dom';
import ListItem from "../../../Components/Button.Components/ButtonListItem/ListItem";
import Bar from "../../../Components/Input.Component/search_bar/search_bar";
import AddItemButton from "../../../Components/Button.Components/ButtonAddItem/ButtonAddItem";

import './shopping-List.css'
/*redux*/
import { useSelector } from 'react-redux';
import { getShoppingList } from "./shopping-list-functions";

export default function ShoppingList(){
    const currentUserId = useSelector((state) => state.user.id)
    const currentUserToken = useSelector((state) => state.token.token)
    const [shoppingList, setShoppingList] = useState(getShoppingList(currentUserId))

    console.log(shoppingList)
    return(
        <div className="shopping-list">
            
                <Bar/>
                <AddItemButton buttonImage='+' nameHandle="Shopping-add">
                    <h3 className="title">Add to Shopping List</h3>
                    <p>Item name? <input type="text" className="textInputLong"/></p>
                    <p>Catagory? <input type="text" className="textInputLong"/></p>
                    <div className="countAndDate">
                        <p className="E">How many? <input type="text" className="textInputShort"/></p>
                        
                        <p>Date added? <input type="text" className="textInputShort"/></p>
                    </div>
                    <button className="submitButton">submit</button>
                </AddItemButton>
            
            <div className="shopping-list-items">
                <ListItem shoppingList = {shoppingList}/>
            </div>
        </div>
    )
}