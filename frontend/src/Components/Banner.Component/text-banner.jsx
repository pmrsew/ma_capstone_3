import React from "react";
import "./text-banner-style.css"

export default function TextBanner(props){
    return(
        <p className={`text-banner ${props.locationClassName}`}>{props.text}</p>
    )
}