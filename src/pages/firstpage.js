import React from "react";
import './first.css'
 
const anchors = [
    "firstPage",
    "secondPage",
    "thirdPage",
    "fourthPage",
    "fifthPage",
  ];

const FirstPage=(props)=>{
    const {fullpageApi} = props
    return(
        <div className="aboutSection">
          <h1>
            Welcome To Login
          </h1>
          <p>
          Scroll down and find out who will bring your imagination to life.
        </p>
      </div>
     
    )
}

export default FirstPage;