import React, { useRef } from "react"
import './homepage-top.css'
import netflixLogo from '../assets/netflix-logo.svg'
// import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
// import nodemailer from 'nodemailer';


const HomepageTop = ()=>{

    let emailRef = useRef()

    const sumbitHandler = async (e)=>{
        e.preventDefault()
        const userEmail =(emailRef.current.value)
        // const mailerSend = new MailerSend({
        //     apiKey: "",
        //   });
        // emailRef.current.value = ""
        // const sentFrom = new Sender("sudhashukumar8816@gmail.com", "Your name");
        // const recipients = [
        //         new Recipient("vadapallivandana555@gmail.com", "Your Client")
        // ]
        // const emailParams = new EmailParams()
        //         .setFrom(sentFrom)
        //         .setTo(recipients)
        //         .setSubject("This is a Subject")
        //         .setText("hello alu fry")

        // mailerSend.email.send(emailParams)
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
                <button className="login-btn">Login</button>
            </div>
        </div>

      <div className="content-ctn">
        <h1 className="heading1">Unlimited movies, TV shows and more</h1>
        <h3 className="heading2">Watch anywhere. Cancel anytime.</h3>
        <p className="para">Ready to watch? Enter your email to create or restart your membership.</p>
        <form className="input-ctn">
            <input type="email" placeholder="enter your email to get started" className="ip-f" ref={emailRef}/>
            <button className="get-started-button" type="submit" onClick={sumbitHandler}>Get Started</button>
        </form>
      </div>

    </div>
    )
}

export default HomepageTop