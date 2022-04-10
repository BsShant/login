import React, { useEffect } from "react";
import "./first.css";
import AOS from "aos";
import "aos/dist/aos.css";
const anchors = [
  "firstPage",
  "secondPage",
  "thirdPage",
  "fourthPage",
  "fifthPage",
];

const FirstPage = (props) => {
  const { fullpageApi, setNormalRotate } = props;
  useEffect(() => {
    AOS.init({ duration: 1500, once: false });
  }, []);
  return (
    <div className="aboutSection">
      <h2 data-aos="fade-down">Welcome To Login</h2>
      <p className="wel">
        Scroll down and find out the ones who will bring your imgination to
        life.
      </p>
    </div>
  );
};

export default FirstPage;
