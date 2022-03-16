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
           {/* <button class="bt1" onClick={() => fullpageApi.moveSectionUp()}>
        <p>
          <i class="arrow up"></i>
        </p>
      </button> */}
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
           .
          </p>
        </button>
      </div>
     
    )
}

export default AluminiSection;