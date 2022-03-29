import React, { useRef } from "react";
import "./portofolio.css";
import OwlCarousel from 'react-owl-carousel2';
import { Card } from "react-bootstrap";
import LogoSection from "./website";
import Website from "./logo";
import Apps from "./apps";
import Ecommerce from "./ecommerce";

const PortofolioSection = (props) => {
  const { fullpageApi } = props;
  const options = {
    center: true,
    autoplay: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    draggable: false,
    margin: 10,
    nav: true,
    items: 1,
    loop: true
  };
const portfolio = useRef('car')
  return (
    <div className="section">
      <div>
        <OwlCarousel ref={portfolio} className='portfolio' options={options}>
          <div className="card-p">
            <Card class="cards">
              <LogoSection />
            </Card>
          </div>

          <div className="card-p">
            <Card class="cards">
              <Website />
            </Card>
          </div>

          <div className="card-p">
            <Card class="cards">
              <Ecommerce />
            </Card>
          </div>

          <div className="card-p">
            <Card class="cards">
              <Apps />
            </Card>
          </div>
        </OwlCarousel>
      </div>

      {/* <button
        class="bt1 abt d-md-block d-none endButtonContainer"
        onClick={() => fullpageApi.moveSectionDown()}>
     
     <div className="endButton"> </div>
      </button> */}
    </div>
  );
};

export default PortofolioSection;
