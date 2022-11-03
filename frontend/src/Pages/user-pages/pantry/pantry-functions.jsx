/* api */
import { baseUrl } from "../../../api/baseUrl";
import axios from "axios";

/* File contains functional code for pantry */

export async function getAllPantryIngredients(userId, token) {
  try {
    const authHeader = { headers: { "Authorization": `Bearer ${token}` } }
    const userPantryIngredients = await axios.get(`${baseUrl}/user/pantry/all/${userId}`, authHeader)
    return userPantryIngredients.data.map((dataItem)=>dataItem.ingredient)
  } catch (err) {
    alert("Ingredients not found");
    const returnValue=[]
    return returnValue
  }
};

export async function getAllIngredients(token) {
  try {
    const api = `${baseUrl}/ingredient/`
    const authHeader = { headers: { "Authorization": `Bearer ${token}` } }
    const ingredients = await axios.get(api, authHeader);
    return ingredients.data
  } catch (err) {
    alert(err);
    const returnValue=[]
    return returnValue
  }
}

const getIngredientsByCategory = async (e) => {
  e.preventDefault();
}

const getIngredientsByName = async (e) => {
  e.preventDefault();
}

const getPantryIngredient = async (e) => {
  e.preventDefault();
}

export async function editPantryIngredient(token, ingredient) {
  try {
    const authHeader = { headers: { "Authorization": `Bearer ${token}` } }

    //edit ingredient
    const editIngredient = `${baseUrl}/ingredient/${ingredient.ingredientId}`
    const editIngredientResponse = await axios.put(editIngredient, ingredient, authHeader)
    console.log(`Successfully updated ingredient`)
  } catch (err) {
    alert(err);
  }
};

export async function deletePantryIngredient(userId, token, ingredientId) {
  try {
    const authHeader = { headers: { "Authorization": `Bearer ${token}` } }

    //remove from pantry
    const disjoinIngredientFromUser = `${baseUrl}/user/pantry/delete/${userId}/${ingredientId}`
    const disjoinIngredientFromUserResponse = await axios.delete(disjoinIngredientFromUser, authHeader)
    console.log(`Successfully disjoined ingredient from user`)
  } catch (err) {
    alert(err);
  }
}

export async function addNewIngredient(userId, token, ingredient) {
  try {
    const authHeader = { headers: { "Authorization": `Bearer ${token}` } }

    //add new ingredient to ingredient table
    const addIngredientTable = `${baseUrl}/ingredient/`
    const addIngredientTableResponse = await axios.post(addIngredientTable, ingredient, authHeader)
    const ingredientId = addIngredientTableResponse.data.ingredientId
    console.log(`Successfully added into Ingredient Table`)

    //using response, join new ingredient to user
    const joinIngredientToUser = `${baseUrl}/user/pantry/add${userId}/${ingredientId}`
    const joinIngredientToUserResponse = await axios.post(joinIngredientToUser, "", authHeader)
    console.log(`Successfully joined to User Table`)
    console.log(joinIngredientToUserResponse.data.ingredient.ingredientId)
    return joinIngredientToUserResponse.data.ingredient.ingredientId
  } catch (err) {
    alert(err);
  }

  //Upgrades to functionality:
  //have a drop down that is based of what is being typed, if there are no ingredients found, add new
}

export const getIngredient = async (e) => {

}

export function testIngredientList() {
  const testIngredients = [
    { ingredientId: 1, ingredientName: "egg" },
    { ingredientId: 2, ingredientName: "bread" },
    { ingredientId: 3, ingredientName: "milk" },
    { ingredientId: 4, ingredientName: "cheddar cheese" }
  ]
  return testIngredients;
};
