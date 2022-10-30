import React from "react";
import "./Text_Banner.css"

export default function Text_Banner(props){
    return(
        <p className={`text_banner ${props.locationClassName}`}>{props.text}</p>
    )
}