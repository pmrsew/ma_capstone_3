import React from "react";
import './Text_Input_One.css'

export default function Text_Input_One(props){
    const {labelClassName, name, type, id,  placeholder} = props;
    
    return(
        <div className="text-input-one">
            <label className={labelClassName}>{name}</label>
            <input
            type={type}
            id={id}
            name={name}
            className="text-input-one_input"
            placeholder={placeholder}
            onChange={(event) => props.onChange(event.target.value)}
            required
            />
        </div>
    )
}