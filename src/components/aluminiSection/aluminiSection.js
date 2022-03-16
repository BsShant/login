import React from "react";
import './Section.css'
 
const anchors = [
    "firstPage",
    "secondPage",
    "thirdPage",
    "fourthPage",
    "fifthPage",
  ];

const AluminiSection=(props)=>{
    const {fullpageApi} = props
    return(
        <div className="section">
        <p>
          <h1>
          Follow Your Heart But Take Your Brain With You
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

export default AluminiSection;