import React from "react";
import './Section.css'
 
const anchors = [
    "firstPage",
    "secondPage",
    "thirdPage",
    "fourthPage",
    "fifthPage",
  ];

const ServicesSection=(props)=>{
    const {fullpageApi} = props
    return(
        <div className="section">
        <p>
          <h1>
          The More You Fear Something, The More You Are Pushing
                    Yourself To Happen That Things.
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

export default ServicesSection;