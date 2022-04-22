import React from "react";
import "./company.css";
import { useSelector } from "react-redux";
import { server } from "../../utils/fetch";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const anchors = [
  "firstPage",
  "secondPage",
  "thirdPage",
  "fourthPage",
  "fifthPage",
];

const CompanySection = (props) => {
  const ourCompany = useSelector(state => state.ourCompanyStore.ourCompany)
  const { fullpageApi } = props;
  return (
    <div className="section companySection">

      <div className="companyFullScreen">
        <h1
          data-aos="fade-down"
          style={{ fontFamily: "nexa light", color: "white", marginTop: "25px",marginBottom:"0px" }}
        >
          Our Companies
        </h1>
        <div className="slide">

          <div className="row companyRow" style={{ marginBottom: "103px" }}>
            {
              ourCompany.length > 0 ? ourCompany.slice(0, 12).map(company => {

                return <div className=" col-lg-4 col-md-4 col-sm-6 col-6 teamCol companyContainer">
                  <div className={`img-cover`} data-aos-delay="100" data-aos-duration="500">
                    {/* <LazyLoadImage
                      alt="comapny logo"
                      effect="blur"
                      src={`${server}/${company.image}`}
                    /> */}
                    <img class="company" src={`${server}/${company.image}`}></img><br />
                  </div>

                </div>
              }) : null
            }
          </div>
          {ourCompany.length > 12 ? <div className="sendButtonContainer smore" data-aos="fade-down" data-aos-duration="200" data-aos-delay="0" style={{ position: "absolute", bottom: "10%", left: "22%" }}>
            <button
              className="team cmpn fscr"
              onClick={() => fullpageApi.moveSlideRight()}
            >
              See more     {<FontAwesomeIcon icon={faRightLong} className="anim" style={{ marginBottom: "-1.75px" }} />}
            </button>
          </div> : null}
        </div>
        <div className="slide">

          <div className="row companyRow fsc" style={{ marginBottom: "103px" }}>
            {
              ourCompany.length > 12 ? ourCompany.slice(12, 24).map(company => {

                return <div className=" col-lg-4 col-md-4 col-sm-6 col-6 teamCol companyContainer">
                  <div className={`img-cover`} data-aos-delay="100" data-aos-duration="500">
                    <img class="company" src={`${server}/${company.image}`}></img><br />
                  </div>

                </div>
              }) : null
            }
          </div>
          <div className="sendButtonContainer bck" data-aos="fade-down" data-aos-duration="200" data-aos-delay="0" style={{ position: "absolute", bottom: "10%", left: "72%" }}>
            <button
              className="team cmpn fscr"
              onClick={() => fullpageApi.moveSlideLeft()}
            >
              {<FontAwesomeIcon icon={faLeftLong} className="anim2" style={{ marginBottom: "-1.75px" }} />}     Back
            </button>
          </div>
        </div>
      </div>
    <button
          class="bt1 hers endButtonContainer d-md-block d-none " style={{marginLeft:"-11px",zIndex:"100"}}
          onClick={() => fullpageApi.moveSectionDown()}
        >
          <div className="endButton"></div>
        </button>
    </div>
  );
};

export default CompanySection;
