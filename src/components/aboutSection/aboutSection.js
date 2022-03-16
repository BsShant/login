import React from "react";
import './Section.css'

const AboutSection=(props)=>{
    const {fullpageApi} = props
    return(
      <div className="section">
      {/* <button class="bt1" onClick={() => fullpageApi.moveSectionUp()}>
        <p>
          <i class="arrow up"></i>
        </p>
      </button> */}
      <p>
        <h1>If There Is No Need To Decide Then Don't Decide</h1>
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

export default AboutSection;