import React from "react";
import "./portofolio.css";
import Carousel from 'react-bootstrap/Carousel';
import OwlCarousel from "react-owl-carousel";
import { Card } from "react-bootstrap";
import ImageNine from "../../assets/images/apps.jpg";


const Apps = () => {
 
    return (

        

      <div>
      
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ImageNine}
      alt="First slide"
    />
  
  </Carousel.Item>
 
</Carousel>
       

       

        
      </div>

       
    )
}
export default Apps;