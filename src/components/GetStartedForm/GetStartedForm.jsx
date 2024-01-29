import React from "react";
import { useRef } from "react";



import './get-started-form.css'

const GetStartedForm = ()=>{
    let emailRef = useRef()
    const sumbitHandler = async (e)=>{
        e.preventDefault()
        const userEmail =(emailRef.current.value)
    }
    return(
        <React.Fragment>
            <p className="para">Ready to watch? Enter your email to create or restart your membership.</p>
            <form className="input-ctn">
                <input type="email" placeholder="enter your email to get started" className="ip-f" ref={emailRef}/>
                <button className="get-started-button" type="submit" onClick={sumbitHandler}>Get Started</button>
            </form>
        </React.Fragment>
    )
}

export default GetStartedForm