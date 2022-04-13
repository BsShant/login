import React from "react";
import "./team.css";
import "aos/dist/aos.css";
import ImageFour from "../assets/images/b4.jpg";
import { useSelector } from "react-redux";
import { server } from "../utils/fetch";

const ThirdPage = (props) => {
  const { fullpageApi, normalRotate, setNormalRotate } = props;
  const ourTeam = useSelector((state) => state.ourTeamStore.ourTeam);

  return (
    <div className="aboutSection">
      <h1
        data-aos="fade-down"
        style={{ fontFamily: "nexa light", color: "transparent" }}
      >
        Team
      </h1>
      <div className="leaD">
        <ul id="mymenu" className="alpha leFTMenu" data-aos="fade-right">
          <h2>
            <li>L</li>
          </h2>
          <h2>
            <li>O</li>
          </h2>
          <h2>
            <li>G</li>
          </h2>
          <h2>
            <li>I</li>
          </h2>
          <h2>
            <li>N</li>
          </h2>
          <br />
          <h2>
            <li></li>
          </h2>
          <h2>
            <li>T</li>
          </h2>
          <h2>
            <li>E</li>
          </h2>
          <h2>
            <li>A</li>
          </h2>
          <h2>
            <li>M</li>
          </h2>
        </ul>
      </div>
      <div class="row teamRow">
        {ourTeam.length > 0
          ? ourTeam
              .filter((team) => team.type === "team")
              .sort((a, b) => a.rank - b.rank)
              .map((team, index) => {
                return (
                  <div className=" col-lg-4 col-md-4 col-sm-12 col-12 teamCol">
                    <div
                      className={`img-holder`}
                      data-aos="rotate-c"
                      data-aos-delay={100 + 100 * (index+1)}
                      data-aos-duration="500"
                    >
                      <img class="leaders" src={`${server}/${team.image}`}></img>
                      <br />
                    </div>
                    <p>{team.name}</p>
                    <br />
                    <p className="groups">{team.role}</p>
                  </div>
                );
              })
          : null}
      </div>
    </div>
  );
};

export default ThirdPage;
