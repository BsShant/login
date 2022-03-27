import React from "react";
import './about.css'

const AboutSection=(props)=>{
    const {fullpageApi} = props
    return(
      <div className="section">
      {/* <button class="bt1" onClick={() => fullpageApi.moveSectionUp()}>
        <p>
          <i class="arrow up"></i>
        </p>
      </button> */}
        <h1 className="who">WHO ARE WE?</h1>
        <p className="we">
        We are designers, developers, creators and much more. What we develop is extraordinary because we can't stand ordinary. Don't believe yet? Then try us and amuse yourselves.
      </p>
      <button
        class="bt1 abt d-md-block d-none endButtonContainer"
        onClick={() => fullpageApi.moveSectionDown()}>
     
     <div className="endButton"> </div>
      </button>
    </div>
     
    )
}

export default AboutSection;