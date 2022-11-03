import React from "react";
import './Brand_Image.css'
import Brand_image from '../../../Images/Brand_image.png'

export default function Brand_Image({locationClassName}){
    return(
        <img src={Brand_image} alt='Profile-Image' className={`Brand_Image ${locationClassName}`}/>
    )
}