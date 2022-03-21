
import React from "react";
import './service.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Container } from "react-bootstrap";

 
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
          <Container class="cont">
            <div className="row">
        <div className="col-md-6">
  <h5>  <FontAwesomeIcon icon={faArrowRight}/> LEGAL SERVICE</h5>
 
    <ul>
      <li>Company Registration</li>
      <li>PAN/VAT Registration</li>
      <li>Trademark Registration</li>
    </ul>
 
    </div>
    <div className="col-md-6">
  <h5>  <FontAwesomeIcon icon={faArrowRight}/> MULTIMEDIA SERVICE</h5>
  
    <ul>
      <li>Logo and Graphic Design</li>
      <li>Branding and Printing</li>
      <li>Photography and Videography</li>
      <li>Animation</li>
    </ul>
   </div>
   </div>
   <div className="row">
   <div className="col-md-6">
  <h5>  <FontAwesomeIcon icon={faArrowRight}/> FINANCE SERVICE</h5>
  
    <ul>
      <li>Accounting</li>
      <li>Auditing</li>
      <li>Taxation</li>
      <li>Advisory</li>
      <li>Investment</li>
    </ul>
   </div>
   <div className="col-md-6">
  <h5>  <FontAwesomeIcon icon={faArrowRight}/>IT SERVICE</h5>
  
    <ul>
      <li>Website Design and Development</li>
      <li>Android Application Development</li>
      <li>iOS Application Development</li>
      <li>Web Application Development</li>
      <li>Software Development</li>
      <li>IT Support</li>
    </ul>
   </div>
    </div>
    <div className="row">
   <div className="col-md-6">
  <h5>  <FontAwesomeIcon icon={faArrowRight}/> MARKETING SERVICE</h5>
  
    <ul>
      <li>Strategy Planning and Production</li>
      <li>TV and Radio Commercials</li>
      <li>Digital Marketing and SEO</li>
      <li>Social Media Marketing </li>
      <li>Product and Service Promotion</li>
    </ul>
   </div>
   <div className="col-md-6">
  <h5>  <FontAwesomeIcon icon={faArrowRight}/>BUSINESS SERVICE</h5>
  
    <ul>
      <li>Business Consultancy</li>
      <li>New Business Estalishment</li>
      <li>Idea and Research</li>
      <li>Sales Strategy</li>
    </ul>
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