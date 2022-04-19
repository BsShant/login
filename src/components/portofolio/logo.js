import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Card } from "react-bootstrap";

import "./portofolio.css";
import ImageThirteen from "../../assets/images/logo5.jpg";
import ImageFourteen from "../../assets/images/logo4.jpg";
import ImageFifteen from "../../assets/images/logo3.jpg";
import ImageSixteen from "../../assets/images/logo1.jpg";
import ImageSeventeen from "../../assets/images/logo2.jpg";

const LogoSection = () => {
    return (
        <div>
      
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ImageThirteen}
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ImageFourteen}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ImageFifteen}
      alt="Third slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ImageSixteen}
      alt="Third slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ImageSeventeen}
      alt="Third slide"
    />

 
  </Carousel.Item>
</Carousel>
         
        
          
      </div>

    )
}
export default LogoSection;