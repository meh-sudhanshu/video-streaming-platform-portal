

import React from "react";

import './homepage.css'
import HomepageTop from "../components/HomepageTop";
import FlexContainer from "../components/FlexContainer";
import tv from '../assets/tv.png'

const flexContainerData = [
      {
        heading:"Enjoy on your TV",
        para:"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
        image:tv,
      },
      {
        heading:"Hi",
        para:"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
        image:tv
      },
      {
        heading:"Enjoy on your TV",
        para:"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
        image:tv
      },
      {
        heading:"Enjoy on your TV",
        para:"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
        image:tv
      }
]




const Homepage = ()=>{
    return(
        <div className="main">
          <HomepageTop/>
          {
            flexContainerData.map(data=><FlexContainer data={data}/>)
          }
        </div>
    )
}


export default Homepage