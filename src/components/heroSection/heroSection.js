import React from "react";
import './hero.css'
 
const anchors = [
    "firstPage",
    "secondPage",
    "thirdPage",
    "fourthPage",
    "fifthPage",
  ];

const HeroSection=(props)=>{
    const {fullpageApi} = props
    return(
        <div className="section">
        <p>
          <h2>
            "The person who can't abondon anything, they can't change anything."
          </h2>
          - WELCOME TO LOGIN
        </p>
        <button
          class="bt1 d-md-block d-none"
          onClick={() => fullpageApi.moveSectionDown()}
        >
          <p>
           .
          </p>
        </button>
      </div>
     
    )
}

export default HeroSection;