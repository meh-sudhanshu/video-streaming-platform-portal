import React, { useRef, useState } from "react";

import { useNavigate } from "react-router-dom";

import './loginpage.css'
import { LOGIN_API } from "../../constants/api";


const LoginPage = ()=>{

    let emailRef = useRef()
    let passwordRef = useRef()
    let navigate = useNavigate()
    const [passwordStyleObject,setPasswordStyleObject] = useState()
    const [emailStyleObject,setEmailStyleObject] = useState()

    const loginHandler = (event)=>{
        event.preventDefault()
        const email = (emailRef.current.value)
        const password = passwordRef.current.value
        const loginObject = {
            email:email,
            password:password
        }
        const requestBody = {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(loginObject)
        }
        const response = fetch(LOGIN_API,requestBody)
        response.then(res => res.json())
        .then(data =>{
            if(data.isAuthenticated === 'true'){
                localStorage.setItem("userID",data.userID)
                navigate("/user-page")
            }else{
                const reason = data.reason
                if(reason === "email is incorrect"){
                    setEmailStyleObject({
                        border:"2px solid red"
                    })
                }
                else if(reason === "Password does not match"){
                        setPasswordStyleObject({
                            border:"2px solid red"
                        })
                }
            }
        })
        console.log(response)
    }

    return(
        <div className="login-page">
            <form className="login-form">
                <input type="text" placeholder="enter email" className="ip" ref={emailRef} style={emailStyleObject}/>
                <input type="password" placeholder="enter password" className="ip" ref={passwordRef} style={passwordStyleObject} />
                <button className="login-btn" onClick={loginHandler}>Login</button>
            </form>
        </div>
    )
}


export default LoginPage



