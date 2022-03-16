import React from "react";
import './Section.css'
 
const anchors = [
    "firstPage",
    "secondPage",
    "thirdPage",
    "fourthPage",
    "fifthPage",
  ];

const ContactSection=(props)=>{
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
          Remember If You Play Small, You Stay Small
          </h1>
        </p>
        {/* <button
          class="bt1"
          onClick={() => fullpageApi.moveSectionDown()}
        >
          <p>
            <i class="arrow down"></i>
          </p>
        </button> */}
        
      </div>
     
    )
}

export default ContactSection;