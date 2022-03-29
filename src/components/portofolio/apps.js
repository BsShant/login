import React from "react";
import "./portofolio.css";
import OwlCarousel from "react-owl-carousel";
import { Card } from "react-bootstrap";
import ImageNine from "../../assets/images/apps.jpg";


const Apps = () => {
 
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
              items: 1
            },
            // breakpoint from 768 up
            768 : {
              items: 2,
             
            }
          }}
        >
         

          <div className="card-p">
          <Card class="cards">
              <img className="photoes" src={ImageNine}></img>
              </Card>
          </div>
     
          
         
          <div className="card-p"> 
          <Card class="cards">
              <img className="photoes" src={ImageNine}></img>
              </Card>
          </div>
       

        </OwlCarousel>
      </div>

       
    )
}
export default Apps;