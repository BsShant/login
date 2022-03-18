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
        <h1>WHO ARE WE?</h1>
        <h6>We are designers, developers, creators and much more. What we develop is extraordinary because we can't stanf ordinary. Don't believe yet? Then try us and amuse yourselves.</h6>
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

export default AboutSection;