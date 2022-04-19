import React, { useRef } from "react";
import "./portofolio.css";
import OwlCarousel from 'react-owl-carousel';
import LogoSection from "./logo";
import Apps from "./apps";
import Ecommerce from "./ecommerce";
import Website from "./website"


const PortofolioSection = (props) => {
  const { fullpageApi } = props;
  const options = {
    center: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    draggable: false,
    margin: 10,
    nav: true,
    items: 1,
    loop: true,
  };
  return (
    <div className="section">
      <div>
        <OwlCarousel className='owl-theme portfolio' center dot dotData={true}>

          <div class="Item">  
          {/* data-dot={<button>01</button>}> */}
            <LogoSection />
          </div>

          <div class="Item"> 
           {/* data-dot={<button>02</button>}> */}
            < Ecommerce />
          </div>

          <div class="Item" >
             {/* data-dot={<button>03</button>}> */}
            <Apps />
          </div>

          <div class="Item"> 
           {/* data-dot={<button>04</button>}> */}
            <Website />
          </div>
        </OwlCarousel>
        <div class="myDots" style={{marginTop:"-80%"}}>
          <button role="button" class="myDot active" href="#Logosection">Logo</button>
          <button role="button" class="myDot" href="#Ecommerce">Ecommerce<span></span></button>
          <button role="button" class="myDot" href="#Apps">Apps<span></span></button>
          <button role="button" class="myDot" href="#Website">Website<span></span></button>
          </div>
      </div>
      {/* <button
        class="bt1 abt d-md-block d-none endButtonContainer"
        onClick={() => fullpageApi.moveSectionDown()}>
     
     <div className="endButton"> </div>
      </button> */}
    </div>
  );
};

export default PortofolioSection;
