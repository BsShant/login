import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./portofolio.css";
import { Card } from "react-bootstrap";
import ImageFive from "../../assets/images/website1.webp";
import ImageSix from "../../assets/images/website2.webp";
import ImageSeven from "../../assets/images/website3.webp";
import ImageEight from "../../assets/images/website4.webp";

const Website = () => {
 
    
    return (
        
        

        <div>
 <Carousel>
<Carousel.Item>
    <img
      className="d-block w-100"
      src={ImageFive}
      alt="First slide"
    />
 
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ImageSix}
      alt="First slide"
    />
    
  </Carousel.Item> 
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ImageSeven}
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ImageEight}
      alt="First slide"
    />

  </Carousel.Item>
  </Carousel>

     
      </div>


    )
}
export default Website;