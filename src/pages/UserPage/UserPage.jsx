import React, { useEffect, useState } from "react";
import './userpage.css'


const UserPage = ()=>{
    const userId = localStorage.getItem("userID")
    const [userData,setUserData] = useState({})

    useEffect(()=>{
        const API_URL = "http://localhost:8080/user/get-user-by-id/"+userId
        const requestBody = {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':"*"
            }
        }
        const response = fetch(API_URL,requestBody)
        response.then(res => res.json())
        .then(data =>{
            setUserData(data)
            console.log(data)
        })
    },[])


    return(
        <React.Fragment>
                <h2>{userData.fullName}</h2>
                <h2>{userData.age}</h2>
                <h2>{userData.password}</h2>
                <h2>{userData.id}</h2>
        </React.Fragment>
    )
}

export default UserPage