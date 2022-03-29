import React, { useRef } from "react";
import OwlCarousel from "react-owl-carousel";
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
        <OwlCarousel 
      ref={ecommerce}
        className="owl-theme ecommerce"
        mouseDrag={true}
        touchDrag={true}
        pullDrag={true}
        autoPlay={true}
        dots={true}
        nav
        items={1}
        draggable={true}
        loop
      >
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
      </OwlCarousel>
    </div>
  );
};
export default Ecommerce;
