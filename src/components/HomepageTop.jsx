import React from "react"
import './homepage-top.css'
import netflixLogo from '../assets/netflix-logo.svg'
const HomepageTop = ()=>{
    return(
        <div className="homepage-top">
        <div className="top">
            <img src={netflixLogo} alt="" className="logo"/>
            <div className="btn-ctn">
                <select className="language-options">
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                </select>
                <button className="login-btn">Login</button>
            </div>
        </div>

      <div className="content-ctn">
        <h1 className="heading1">Unlimited movies, TV shows and more</h1>
        <h3 className="heading2">Watch anywhere. Cancel anytime.</h3>
        <p className="para">Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="input-ctn">
            <input type="text" placeholder="enter your email to get started" className="ip-f"/>
            <button className="get-started-button">Get Started</button>
        </div>
      </div>

    </div>
    )
}

export default HomepageTop