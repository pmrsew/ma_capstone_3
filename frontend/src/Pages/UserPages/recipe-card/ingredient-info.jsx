import React, { useState } from "react"
import "./recipe-card.css"

export default function IngredientInformation(props) {
    const arr = props.ingredients;
    const setArr = props.setIngredients;

    const addInput = () => {
        setArr(s => {
            return [
                ...s,
                {
                    ingredientName: "",
                    ingredientCount: "",
                    ingredientLabel: "",
                    ingredientCategory: "added from pantry"
                }
            ];
        });
    };

    const handleChangeName = e => {
        e.preventDefault();

        const index = e.target.id;
        setArr(s => {
            const newArr = s.slice();
            newArr[index].ingredientName = e.target.value;
            return newArr;
        });
    };

    const handleChangeCount = e => {
        e.preventDefault();

        const index = e.target.id;
        setArr(s => {
            const newArr = s.slice();
            newArr[index].ingredientCount = e.target.value;
            return newArr;
        });
    };

    const handleChangeLabel = e => {
        e.preventDefault();

        const index = e.target.id;
        setArr(s => {
            const newArr = s.slice();
            newArr[index].ingredientLabel = e.target.value;
            return newArr;
        });
    };

    return (
        <div>
            <div className="popup-buttons">
                <button className="addIngredientButton" onClick={addInput}>Add Ingredient</button>
            </div>
            {arr.map((item, i) => {
                return (
                    <div key={i} id={i} className="test">
                        <input
                            id={i}
                            onChange={handleChangeCount}
                            value={item.ingredientCount}
                            type="text"
                            className="textInputShort"
                            placeholder="Count"
                        />
                        <input
                            id={i}
                            onChange={handleChangeLabel}
                            value={item.ingredientLabel}
                            type="text"
                            className="textInputShort"
                            placeholder="Label"
                        />
                        <input
                            id={i}
                            onChange={handleChangeName}
                            value={item.ingredientName}
                            type="text"
                            className="textInputLong"
                            placeholder="Name"
                        />
                    </div>
                );
            })}
        </div>
    );

}