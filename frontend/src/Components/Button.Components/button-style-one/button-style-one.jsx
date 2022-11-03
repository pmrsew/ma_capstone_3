import React from 'react'
import './button-style-one-style.css'

export default function ButtonStyleOne(props){
    return(
        <button className='button-style-one' onClick={props.onClickHandler}>{props.buttonName}</button>
    )
}
