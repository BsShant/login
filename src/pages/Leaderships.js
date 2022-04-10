import React, { useEffect, useLayoutEffect, useState } from "react";
import "./team.css";
import ImageFour from "../assets/images/b2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const SecondPage = (props) => {
  const { fullpageApi, normalRotate, setNormalRotate } = props;
  useEffect(() => {
    AOS.init({ duration: 1500, once: false });
  }, []);
  return (
    <div className="aboutSection">
      <h1 data-aos="fade-down">Leadership</h1>
      <div class="row leaderShipRow">
        <div className=" col-lg-4 col-md-6 col-sm-12 col-12 leaderShipCol">
          <div className={`img-holder`} data-aos="rotate-c" data-aos-delay="100" data-aos-duration="500">
            {/* <div className={`img-holder ${normalRotate? 'normal-rotate' : ""}`}> */}
            <img class="leaders" src={ImageFour}></img>
            <br />
          </div>
          <p>Rojan Mul</p>
          <br />
          <p className="groups"> Managing Director</p>
        </div>

        <div className=" col-lg-4 col-md-6 col-sm-12 col-12 leaderShipCol">
          <div className={`img-holder`} data-aos="rotate-c" data-aos-delay="200" data-aos-duration="500">
            <img class="leaders" src={ImageFour}></img>
            <br />
          </div>
          <p>Prince G. Sunuwar</p>
          <br />
          <p className="groups">CEO</p>
        </div>

        <div className=" col-lg-4 col-md-6 col-sm-12 col-12">
          <div className={`img-holder`} data-aos="rotate-c" data-aos-delay="300" data-aos-duration="500">
            <img class="leaders" src={ImageFour}></img>
            <br />
          </div>
          <p>Krishna Mul</p>
          <br />
          <p className="groups">Account Manager</p>
        </div>
      </div>

      <div class="row leaderShipRow">
        <div className=" col-lg-4 col-md-6 col-sm-12 col-12 leaderShipCol">
          <div className={`img-holder`} data-aos="rotate-c" data-aos-delay="400" data-aos-duration="500">
            <img class="leaders" src={ImageFour}></img>
            <br />
          </div>
          <p>Shyam Mul</p>
          <br />
          <p className="groups">IT Manager</p>
        </div>

        <div className=" col-lg-4 col-md-6 col-sm-12 col-12 leaderShipCol">
          <div className={`img-holder`} data-aos="rotate-c" data-aos-delay="500" data-aos-duration="500">
            <img class="leaders" src={ImageFour}></img>
            <br />
          </div>
          <p>Aryan G. Himali</p>
          <br />
          <p className="groups">Marketing Manager</p>
        </div>

        <div className=" col-lg-4 col-md-6 col-sm-12 col-12 leaderShipCol">
          <div className={`img-holder`} data-aos="rotate-c" data-aos-delay="600" data-aos-duration="500">
            <img class="leaders" src={ImageFour}></img>
            <br />
          </div>
          <p>Alaka Acharya</p>
          <br />
          <p className="groups"> Multimedia Manager</p>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
