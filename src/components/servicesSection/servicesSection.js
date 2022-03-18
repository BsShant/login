
import React from "react";
import './Section.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

 
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
           {/* <button class="bt1" onClick={() => fullpageApi.moveSectionUp()}>
        <p>
          <i class="arrow up"></i>
        </p>
      </button> */}
          <p>
          We feel privileged to offer creative and innovative services to you.
          </p>
          <Container>s
            
          <div class="service-media col-sm-6 c0l-xa-12">
<div class="service ser">
  <h5>  <FontAwesomeIcon icon={faArrowRight}/> LEGAL SERVICE"</h5>
  <div class="service-text">
    <ul>
      <li>Company Registration</li>
      <li>PAN/VAT Registration</li>
      <li>Trademark Registration</li>
    </ul>
  </div>
</div>
<div class="service ser">
  <h5>  <FontAwesomeIcon icon={faArrowRight}/> MULTIMEDIA SERVICE</h5>
  <div class="service-text">
    <ul>
      <li>Logo and Graphic Design</li>
      <li>Branding and Printing</li>
      <li>Photography and Videography</li>
      <li>Animation</li>
    </ul>
  </div>
</div>
</div>

</Container>
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

export default ServicesSection;