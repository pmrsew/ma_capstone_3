import React from "react";
import axios from "axios";

/* File contains functional code for shopping-list */


export function getShoppingList(userId){
    //ALPHABETIZE LIST
    const testShoppingList = [
      "Potato", "Salt", "Butter", "Pepper", "Rosemary", "Thyme"
  ]
  
  //const data = { username: username, password: password };
  //const userPantryIngredients = await axios.get(`${baseUrl}/pantry/user/${currentUserId}`, data);
  
  return testShoppingList;
  };