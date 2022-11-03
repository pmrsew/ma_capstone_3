import React, { useState } from "react"
import "./DashBored.css"

export default function RecipeInformation(props) {
    const arr = props.recipes;
    console.log(arr)
    // const setArr = props.setRecipes;

    // const addInput = () => {
    //     setArr(s => {
    //         return [
    //             ...s,
    //             {
    //                 recipe:""
    //             }
    //         ];
    //     });
    // };

    // const handleChangeName = e => {
    //     e.preventDefault();

    //     const index = e.target.id;
    //     setArr(s => {
    //         const newArr = s.slice();
    //         newArr[index].name = e.target.value;
    //         return newArr;
    //     });
    // };

    // const handleChangeRecipe = e => {
    //     e.preventDefault();

    //     const index = e.target.id;
    //     setArr(s => {
    //         const newArr = s.slice();
    //         newArr[index].recipes.push(e.target.value);
    //         return newArr;
    //     });
    // };
    
    return (
        <div>

            {arr.map((item, i) => {
                return (
                    <div key={i} id={i} className="recipe-info">
                        <input
                            id={i}
                            value={item.recipeName}
                            type="text"
                            className="recipe-info-name"
                        />
                    </div>
                );
            })}
            <div className="popup-buttons">
                <button className="addIngredientButton">Add Recipe</button>
            </div>
        </div>
    );

}