import React, { useState } from "react"
import { Link, Routes, Route } from 'react-router-dom';
import './DashBored.css'
import RecipeCard from '../../../Components/Calander.Component/RecipeCard/RecipeCard.jsx'
//C:\Users\Charles\Desktop\MA_CODE_FOLDER\capstones\final-capstone\frontend\src\Components\Calander.Component\RecipeCard\RecipeCard.jsx

/*redux*/
import { useDispatch, useSelector } from 'react-redux';


import { getCurrentMealPlan, testMealPlan, getCurrentMeals } from "./dashboard-functions";
import MealComponent from "./meal-component";
import AddItemButton from "../../../Components/Button.Components/ButtonAddItem/ButtonAddItem";
import MealInformation from "./meal-info";
import { useEffect } from "react";
/* redux */
import { addCurrentMealPlan, addCurrentMeals } from "../../../Redux/dashboardSlice";

export default function Dashbored() {
    const dispatch = useDispatch()
    const currentUserId = useSelector((state) => state.user.id)
    const currentUserToken = useSelector((state) => state.token.token)
    //const currentMealPlan = useSelector((state) => state.dashboard.currentMealPlan)
    //const mealPreview = useSelector((state) => state.dashboard.currentMeals)

    // async function startup(){
    //     const retrievedMealPlan = await getCurrentMealPlan(currentUserId, currentUserToken)
    //     dispatch(addCurrentMealPlan(...retrievedMealPlan))
    //     const retrievedMeals = await getCurrentMeals(currentUserToken, useSelector((state) => state.dashboard.currentMealPlan.mealPlanId))
    // }

    const [currentMealPlan, setCurrentMealPlan] = useState(testMealPlan()[0])
    const [mealPreview, setMealPreview]=useState(testMealPlan()[0].meals)
    console.log(mealPreview)
    //const [currentMealPlan, setCurrentMealPlan] = useState({ mealPlanName: "" })
    //const [mealPreview, setMealPreview] = useState([])

    // async function startup(){
    //     const retrievedMealPlan = await getCurrentMealPlan(currentUserId, currentUserToken)
    //     const retrievedMeals = await getCurrentMeals(currentUserToken, currentMealPlan.mealPlanId)
    //     setMealPreview(retrievedMeals)
    //     //dispatch(addDashboard)
    // }
    // useEffect(() => {
    //     startup()
    // }, [])


    //console.log(`currentMealPlan: ${JSON.stringify(currentMealPlan)}`)
    //console.log(`mealPreview: ${JSON.stringify(mealPreview)}`)

    // Needed for Edit
    const [currentMealPlanName, setCurrentMealPlanName] = useState(testMealPlan()[0].name)

    function updateMealPlanOnClick() {

    }

    return (
        <div className="dashboard">
            <h1>{currentMealPlan.name}</h1>
            <AddItemButton buttonImage='Edit Meal Plan' nameHandle="meal-plan-add">
                <h3 className="title">Edit Meal Plan</h3>
                <p>Meal Plan Name: <input type="text" className="textInputLong" value={currentMealPlanName} onChange={() => setCurrentMealPlanName(event.target.value)} /></p>
                <MealInformation meals={mealPreview} setMeals={mealPreview}/>
                <div className="popup-buttons">
                    <button className="submitButton" onClick={updateMealPlanOnClick}>Submit</button>
                </div>
            </AddItemButton>
            <MealComponent meals={mealPreview}/>
        </div>
    )
}