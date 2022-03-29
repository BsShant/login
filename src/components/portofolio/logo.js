import React from "react";
import OwlCarousel from "react-owl-carousel";
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
              items: 5
            },
            // breakpoint from 768 up
            768 : {
              items: 1,
              loop:true,
              center: true,
              autoplay: true,
            }
          }}
        >
         

          
          <div className="card-p">
          <Card class="cards">
              <img className="photoes" src={ImageThirteen}></img>
              </Card>
          </div>
          

          
          
          <div className="card-p">
          <Card class="cards">
              <img className="photoes" src={ImageFourteen}></img>
              </Card>
         
          </div>
         
          <div className="card-p">
          <Card class="cards">
              <img className="photoes" src={ImageFifteen}></img>
              </Card>
       
          </div>
          
          <div className="card-p">
          <Card class="cards">
              <img className="photoes" src={ImageSixteen}></img>
              </Card>
        
          </div>
         
          <div className="card-p">
          <Card class="cards">
              <img className="photoes" src={ImageSeventeen}></img>
              </Card>
          </div>
        
          
        </OwlCarousel>
      </div>

    )
}
export default LogoSection;