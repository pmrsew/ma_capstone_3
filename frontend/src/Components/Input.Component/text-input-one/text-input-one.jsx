import React from "react";
import './text-input-one-style.css'

export default function TextInputOne(props){
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