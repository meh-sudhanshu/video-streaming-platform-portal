import React from "react";

import './flex-container.css'
import tv from '../assets/tv.png'
const FlexContainer = (props)=>{
    console.log(props.data.heading)
    return(
        <div className='flex-ctn'>
            <div className="left">
                <h2 className="f-heading">{props.data.heading}</h2>
                <p className="f-para">{props.data.para}</p>
            </div>
            <div className="right">
                <img src={props.data.image} alt="" />
            </div>
        </div>
    )
}

export default FlexContainer