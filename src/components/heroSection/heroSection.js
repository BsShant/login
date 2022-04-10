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
        <div className="section heroSection">
         <div className="hero">
          <h2 data-aos="fade-down" data-aos-duration="100" data-aos-delay="0">
            "The person who can't abondon anything, they can't change anything."
          </h2>
          <p data-aos="fade-up">
          - WELCOME TO LOGIN
        </p>
        </div>
        <button
          class="bt1 hers endButtonContainer d-md-block d-none "
          onClick={() => fullpageApi.moveSectionDown()}
        >
          <div className="endButton"></div>
        </button>
      </div>
     
    )
}

export default HeroSection;