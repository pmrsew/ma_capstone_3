import React from "react";
import './brand-image-style.css'
import brandImage from '../../../Images/Brand_image.png'

export default function BrandImage({locationClassName}){
    return(
        <img src={brandImage} alt='Brand logo' className={`brand-image ${locationClassName}`}/>
    )
}