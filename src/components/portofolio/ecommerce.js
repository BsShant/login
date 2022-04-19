import React, { useRef } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./portofolio.css";
import { Card } from "react-bootstrap";
import ImageTen from "../../assets/images/ecommerce1.webp";
import ImageEleven from "../../assets/images/ecommerce2.webp";
import ImageTwelve from "../../assets/images/ecommerce3.webp";

const Ecommerce = (props) => {
  const { fullpageApi } = props;
const ecommerce = useRef('ecommerce')
  return (
    <div>
       
       <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ImageTen}
      alt="First slide"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ImageEleven}
      alt="First slide"
    />
 
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ImageTwelve}
      alt="First slide"
    />

  </Carousel.Item>
</Carousel>
       
     
    </div>
  );
};
export default Ecommerce;
