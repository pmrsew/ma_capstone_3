import React, { useState } from "react"
import { getCurrentMealRecipes } from "./dashboard-functions";
import "./DashBored.css"
import RecipeInformation from "./recipe-info";
/*redux*/
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { addCurrentMeals } from "../../../Redux/dashboardSlice";

import BasicExample from "./testing";

export default function MealInformation(props) {
    // const arr = useSelector((state) => state.dashboard.currentMeals);
    // console.log(arr)
    // const setArr = useDispatch()

    // const addInput = () => {
    //     setArr(
    //         addCurrentMeals(
    //             [...arr,
    //             {
    //                 name: "",
    //                 recipes: []
    //             }]
    //         )
    //     )
    // };

    const arr = props.meals;
    const setArr = props.setMeals;

    const addInput = () => {
        setArr(s => {
            return [
                ...s,
                {
                    mealName: "",
                    recipes:[]
                }
            ];
        });
    };



    const handleChangeName = e => {
        e.preventDefault();

        const index = e.target.id;
        setArr(s => {
            const newArr = s.slice();
            newArr[index].name = e.target.value;
            return newArr;
        });
    };

    const handleChangeRecipe = e => {
        e.preventDefault();

        const index = e.target.id;
        setArr(s => {
            const newArr = s.slice();
            newArr[index].recipes.push(e.target.value);
            return newArr;
        });
    };

    //dropdown

    return (
        <div>

            {arr.map((item, i) => {
                return (
                    <div key={i} id={i} className="meal-info">
                        <input
                            id={i}
                            onChange={handleChangeName}
                            value={item.name}
                            type="text"
                            className="meal-info-name"
                            placeholder="Meal Name"
                        />
                        <RecipeInformation recipes={item.recipes} />

                    </div>
                );
            })}
            <div className="popup-buttons">
                <button className="addIngredientButton" onClick={addInput}>Add Meal</button>
            </div>


        </div>
    );

}