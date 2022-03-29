import React from "react";
import './first.css';
 
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
         

         <h2>
            Welcome To Login
          </h2>
          <p className="wel">
          Scroll down and find out the ones who will bring your imgination to life.
        </p>

     </div>
    )
}

export default FirstPage;