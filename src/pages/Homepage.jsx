

import React from "react";
import './homepage.css'
import HomepageTop from "../components/HomepageTop";
import FlexContainer from "../components/FlexContainer";
import tv from '../assets/tv.png'
import mobile from '../assets/mobile.jpg'
import children from '../assets/children.png'
import AccordianContainer from "../components/AccordianContainer/AccordianContainer";
import GetStartedForm from "../components/GetStartedForm/GetStartedForm";
import Footer from "../components/Footer/Footer";

const flexContainerData = [
      {
        id:1,
        heading:"Enjoy on your TV",
        para:"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
        image:tv,
        flexDirection:"row"
      },
      {
        id:2,
        heading:"Download your shows to watch offline",
        para:"Save your favourites easily and always have something to watch.",
        image:mobile,
        flexDirection:"row-reverse"
      },
      {
        id:3,
        heading:"Watch everywhere",
        para:"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
        image:tv,
        flexDirection:"row"
      },
      {
        id:4,
        heading:"Create profiles for kids",
        para:"Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
        image:children,
        flexDirection:"row-reverse"
      }
]

const AccordianData = [
  {
    id:1,
    heading:"What is Netflix",
    para:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
  },
  {
    id:2,
    heading:"How Much Does Netflix Costs ?",
    para:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹649 to ₹149 a month. No extra costs, no contracts."
  },
  {
    id:3,
    heading:"Where can i watch ?",
    para:"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
  },
  {
    id:4,
    heading:"How can i cancel?",
    para:"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
  },
  {
    id:5,
    heading:"What can i watch on netflix?",
    para:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
  },
  {
    id:6,
    heading:"Is netflix good from children?",
    para:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
  }
]



const Homepage = ()=>{
    return(
        <div className="main">
          <HomepageTop/>
          {
            flexContainerData.map(data=><FlexContainer data={data} key={data.id} />)
          }
          <div className="accordian-ctn">
              <h2 className="faqs">Frequently Asked Questions ?</h2>
              {
                AccordianData.map(data=><AccordianContainer data={data} key={data.id}/>)
              }
              <div className="form-ctn">
                <GetStartedForm/>
              </div>
          </div>
          <Footer/> 
        </div>
    )
}


export default Homepage