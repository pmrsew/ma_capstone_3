/*api*/
import { baseUrl } from "../../../api/baseUrl";
import axios from "axios";

/* File contains functional code for dashboard */

export async function getCurrentMealPlan(userId, token) {
    try {
        const authHeader = { headers: { "Authorization": `Bearer ${token}` } }
        const getUserMealPlan = `${baseUrl}/user/mealplan/all/${userId}`
        const getUserMealPlanResponse = await axios.get(getUserMealPlan, authHeader)
        return(getUserMealPlanResponse.data[0].mealPlan)
      } catch (err) {
        alert("Meal Plan not found");
        const returnValue=[]
        return returnValue
      }
};

export async function getCurrentMeals(token, mealPlanId) {
    try {
        const authHeader = { headers: { "Authorization": `Bearer ${token}` } }
        const getMealsFromMealPlan = `${baseUrl}/meal/mealplan/${mealPlanId}`
        //console.log(getMealsFromMealPlan)
        const getMealsFromMealPlanResponse = await axios.get(getMealsFromMealPlan, authHeader)
        const formattedMeals = getMealsFromMealPlanResponse.data.map((item) => {
            return (item.meal)
        })
        console.log(formattedMeals)
        return formattedMeals
      } catch (err) {
        alert("Meals not found");
        const returnValue=[]
        return returnValue
      }
};

export async function getCurrentMealRecipes(token, mealId) {
    try {
        const authHeader = { headers: { "Authorization": `Bearer ${token}` } }
        const getRecipesForMeal = `${baseUrl}/recipe/meal/${mealId}`
        //console.log(getMealsFromMealPlan)
        const getRecipesForMealResponse = await axios.get(getRecipesForMeal, authHeader)
        return getRecipesForMealResponse.data
      } catch (err) {
        alert("Meals not found");
        const returnValue=[]
        return returnValue
      }
};



export function testMealPlan() {
    //ALPHABETIZE LIST
    const testMealPlans = [
        {
            id: 1, name: "Meal Plan 1", meals: [
                {
                    id: 1, name: "meal a", recipes: [
                        { id: 1, recipeName: "Omelet", ingredients: [{ ingredientCount: 2, ingredientLabel: "large", ingredientName: "egg" }, { ingredientCount: 2, ingredientLabel: "tbs", ingredientName: "butter" }, { ingredientCount: .25, ingredientLabel: "cup", ingredientName: "cheese" }], instructions: "Omelet instructions" },
                        { id: 2, recipeName: "Breakfast Potatoes", ingredients: [{ ingredientCount: 1, ingredientLabel: "whole", ingredientName: "potato" }, { ingredientCount: 2, ingredientLabel: "tbs", ingredientName: "butter" }, { ingredientCount: 1, ingredientLabel: "pinch", ingredientName: "salt" }], recipeInstructions: "Breakfast potatoes instructions" }
                    ]
                },
                {
                    id: 1, name: "meal b", recipes: [
                        { id: 1, recipeName: "Baked Potato", ingredients: [{ ingredientCount: 1, ingredientLabel: "whole", ingredientName: "potato" }, { ingredientCount: 2, ingredientLabel: "tbs", ingredientName: "butter" }, { ingredientCount: 1, ingredientLabel: "pinch", ingredientName: "salt" }], recipeInstructions: "Wrap potato in foil. Bake on cooking sheet at 350 for 10 minutes. Let cool. Serve with butter and salt." }
                    ]
                },
                {
                    id: 1, name: "meal c", recipes: [
                        { id: 1, recipeName: "Baked Potato", ingredients: [{ ingredientCount: 1, ingredientLabel: "whole", ingredientName: "potato" }, { ingredientCount: 2, ingredientLabel: "tbs", ingredientName: "butter" }, { ingredientCount: 1, ingredientLabel: "pinch", ingredientName: "salt" }], recipeInstructions: "Wrap potato in foil. Bake on cooking sheet at 350 for 10 minutes. Let cool. Serve with butter and salt." },
                        { id: 2, recipeName: "Steak", ingredients: [{ ingredientCount: 6, ingredientLabel: "oz", ingredientName: "Steak" }, { ingredientCount: 2, ingredientLabel: "tbs", ingredientName: "butter" }, { ingredientCount: 1, ingredientLabel: "pinch", ingredientName: "salt" }], recipeInstructions: "Steak instructions" },
                        { id: 3, recipeName: "Mac and Cheese", ingredients: [{ ingredientCount: 1, ingredientLabel: "pound", ingredientName: "Elbow Pasta" }, { ingredientCount: 2, ingredientLabel: "tbs", ingredientName: "butter" }, { ingredientCount: 1, ingredientLabel: "cup", ingredientName: "cheese" }], recipeInstructions: "Mac and Cheese instructions" }
                    ]
                }
            ]
        }
    ]

    //const data = { username: username, password: password };
    //const userPantryIngredients = await axios.get(`${baseUrl}/pantry/user/${currentUserId}`, data);

    return testMealPlans;
};