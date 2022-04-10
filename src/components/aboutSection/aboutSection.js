import React from "react";
import './about.css'

const AboutSection=(props)=>{
    const {fullpageApi} = props
    return(
      <div className="section abtSection">
      <div className="hero">
        <h1 className="who" data-aos="fade-down" data-aos-duration="100" data-aos-delay="0">WHO ARE WE?</h1>
        <p className="we" data-aos="fade-up" data-aos-duration="200" data-aos-delay="100">
        We are designers, developers, creators and much more. What we develop is extraordinary because we can't stand ordinary. Don't believe yet? Then try us and amuse yourselves.
      </p>
      </div>
      <button
        class="bt1 abt d-md-block d-none endButtonContainer"
        onClick={() => fullpageApi.moveSectionDown()}>
     
     <div className="endButton"> </div>
      </button>
    </div>
     
    )
}

export default AboutSection;