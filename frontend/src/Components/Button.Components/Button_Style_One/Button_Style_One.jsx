import React from 'react'
import './Button_Style_One.css'

export default function Button_Style_One(props){
    return(
        <div>
            <button className='login-Button' onClick={props.onClickHandler}>{props.buttonName}</button>
        </div>
    )
}
