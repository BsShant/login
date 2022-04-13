import React, { useEffect } from "react";
import "./leadership.css";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
import { server } from "../utils/fetch";

const SecondPage = (props) => {
  const { fullpageApi } = props;
  const ourTeam = useSelector((state) => state.ourTeamStore.ourTeam);

  useEffect(() => {}, []);
  return (
    <div className="aboutSection">
      <h1
        data-aos="fade-down"
        style={{ fontFamily: "nexa light", color: "transparent" }}
      >
        Leadership
      </h1>
      <div className="lead">
        <ul id="mymenu" className="alpha leFTMenu" data-aos="fade-right">
          <h2>
            <li>L</li>
          </h2>
          <h2>
            <li>E</li>
          </h2>
          <h2>
            <li>A</li>
          </h2>
          <h2>
            <li>D</li>
          </h2>
          <h2>
            <li>E</li>
          </h2>
          <h2>
            <li>R</li>
          </h2>
          <h2>
            <li>S</li>
          </h2>
          <h2>
            <li>H</li>
          </h2>
          <h2>
            <li>I</li>
          </h2>
          <h2>
            <li>P</li>
          </h2>
        </ul>
      </div>
      <div class="row leaderShipRow">
        {ourTeam.length > 0
          ? ourTeam
              .filter((team) => team.type === "leader")
              .sort((a, b) => a.rank - b.rank)
              .map((leader,index) => {
                return (
                  <div className=" col-lg-4 col-md-4 col-sm-12 col-12 leaderShipCol">
                    <div
                      className={`img-holders`}
                      data-aos="rotate-c"
                      data-aos-delay={100 + 100 * (index+1)}
                      data-aos-duration="500"
                    >
                      <img
                        class="leaders"
                        src={`${server}/${leader.image}`}
                        alt="Leader"
                      />
                      <br />
                    </div>
                    <p>{leader.name}</p>
                    <br />
                    <p className="groups"> {leader.role}</p>
                  </div>
                );
              })
          : null}
      </div>
    </div>
  );
};

export default SecondPage;
