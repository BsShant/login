import React from "react";
import './Section.css'
 
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
          <h1>
            Your Bad Time Can Give You All The Knowledge, That Your
            School Can't
          </h1>
        </p>
        <button
          class="bt1"
          onClick={() => fullpageApi.moveSectionDown()}
        >
          <p>
            <i class="arrow down"></i>
          </p>
        </button>
      </div>
     
    )
}

export default HeroSection;