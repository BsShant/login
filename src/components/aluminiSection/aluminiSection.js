import React from "react";
import "./alumini.css";
import OwlCarousel from "react-owl-carousel";
import { Card } from "react-bootstrap";
import ImageOne from "../../assets/images/1.webp";
import ImageTwo from "../../assets/images/2.jpg";
import ImageThree from "../../assets/images/3.webp";
import ImageFour from "../../assets/images/4.webp";
const anchors = [
  "firstPage",
  "secondPage",
  "thirdPage",
  "fourthPage",
  "fifthPage",
];

const AluminiSection = (props) => {
 
  const { fullpageApi } = props;
  return (
    <div className="section">
      {/* <button class="bt1" onClick={() => fullpageApi.moveSectionUp()}>
        <p>
          <i class="arrow up"></i>
        </p>
      </button> */}

      <h1>Testimonials</h1>
      <div>
        <OwlCarousel className="owl-theme" loop margin={100} nav>
          <div class="item">
            <Card class="cards"
             
            >
              <img className="photo" src={ImageOne}></img>
              <Card.Body>
                <Card.Title className="head"><h5>Card Title</h5></Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div class="item">
            <Card class="cards"
              
            >
              <img
                className="photo"
                src={ImageTwo}
              ></img>
              <Card.Body>
                <Card.Title className="head"><h5>Card Title</h5></Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div class="item">
            <Card class="cards"
             
            >
              <img
                className="photo"
                src={ImageThree}
              ></img>
              
              <Card.Body>
                <Card.Title className="head"><h5>Card Title</h5></Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div class="item">
            <Card class="cards"
          
            > 
              <img
                className="photo"
                src={ImageFour}
              ></img> 
              <Card.Body>
                <Card.Title className="head"><h5>Card Title</h5></Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </OwlCarousel>
      </div>
      <button
        class="bt1 d-md-block d-none"
        onClick={() => fullpageApi.moveSectionDown()}
      >
        <p>.</p>
      </button>
    </div>
  );
};

export default AluminiSection;
