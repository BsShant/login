import React, { useEffect } from "react";
import "./leadership.css";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
import { server } from "../utils/fetch";

const SecondPage = (props) => {
  const { fullpageApi } = props;
  // const ourTeam = useSelector((state) => state.ourTeamStore.ourTeam);
  const {ourTeam} = props

  useEffect(() => { }, []);
  return (
    <div className="aboutSection">
      <div  className="leadership">
      <h1
        data-aos="fade-down" data-aos-offset="200"
        style={{ fontFamily: "nexa light",marginBottom:"5%" }}
      >
        Leadership
      </h1>
    
        <div class="row leaderShipRow">


          {ourTeam.length > 0
            ? ourTeam
              .sort((a, b) => a.rank - b.rank)
              .map((leader, index) => {
                return (
                  <div className=" col-lg-4 col-md-4 col-sm-6 col-6 teamCol companyContainer">
                    <div
                      className={`img-holders`}
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
                  </div>)
              })
            : null}

        </div>
      </div>
      </div>
  );
};

export default SecondPage;
