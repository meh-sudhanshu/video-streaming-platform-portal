import React, { useRef } from "react"
import './homepage-top.css'
import netflixLogo from '../assets/netflix-logo.svg'
import GetStartedForm from "./GetStartedForm/GetStartedForm"
import { useNavigate } from "react-router-dom"
const HomepageTop = ()=>{
    let navigate = useNavigate()
    const clickHandler = ()=>{
        navigate("/login")
    }
    return(
        <div className="homepage-top">
            <div className="top">
                <img src={netflixLogo} alt="" className="logo"/>
                <div className="btn-ctn">
                    <select className="language-options">
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                    </select>
                    <button className="login-btn" onClick={clickHandler}>Login</button>
                </div>
            </div>
            <div className="content-ctn">
                <h1 className="heading1">Unlimited movies, TV shows and more</h1>
                <h3 className="heading2">Watch anywhere. Cancel anytime.</h3>
                <GetStartedForm/>
            </div>
        </div>
    )
}

export default HomepageTop