import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "./portofolio.css";
import { Card } from "react-bootstrap";
import ImageFive from "../../assets/images/website1.webp";
import ImageSix from "../../assets/images/website2.webp";
import ImageSeven from "../../assets/images/website3.webp";
import ImageEight from "../../assets/images/website4.webp";

const Website = () => {
 
    
    return (
        
        

        <div>
        <OwlCarousel className="inner" loop={true} center={true} autoplay={true} margin={10} nav
        responsive={{
            // breakpoint from 0 up
            0 : {
              // stagePadding: 0,
              loop: true,
              center: true,
              autoplay: true,
              // responsiveClass: true,
              // dots: false,
              nav: true,
              // autoHeight: true,
              items: 4
            },
            // breakpoint from 768 up
            768 : {
              items: 1,
              loop: true,
              center: true,
              autoplay: true,
            }
          }}
        >
          <div className="card-p">

              <img className="photoes" src={ImageFive}></img>

      
             </div> 

       
            <div className="card-p">
            <Card class="cards">
              <img className="photoes" src={ImageSix}></img>
              </Card>
          
          </div>

        
          <div className="card-p">
          <Card class="cards">
              <img className="photoes" src={ImageSeven}></img>
              </Card>
          </div>
      
          <div className="card-p">
          <Card class="cards">
              <img className="photoes" src={ImageEight}></img>
              </Card>
      
          </div>
        </OwlCarousel>
      </div>


    )
}
export default Website;