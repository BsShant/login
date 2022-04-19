import React from "react";
import "./company.css";
import ImageFour from "../../assets/images/Rcoco.png";
import { useSelector } from "react-redux";
import { server } from "../../utils/fetch";

const anchors = [
  "firstPage",
  "secondPage",
  "thirdPage",
  "fourthPage",
  "fifthPage",
];

const CompanySection = (props) => {
  const ourCompany = useSelector(state => state.ourCompanyStore.ourCompany)
  console.log("oyur comapnyffffff", ourCompany)
  const { fullpageApi } = props;
  return (
    <div className="section companySection">

      <div className="companyFullScreen">
        <h1
          data-aos="fade-down"
          style={{ fontFamily: "nexa light", color: "white",marginTop:"32px"}}
        >
          Our Companies
        </h1>
        <div className="slide">

          <div className="row companyRow" style={{ marginBottom: "103px" }}>
            {
              ourCompany.length > 0 ? ourCompany.slice(0, 12).map(company => {

                return <div className=" col-lg-4 col-md-4 col-sm-6 col-6 teamCol companyContainer">
                  <div className={`img-cover`} data-aos-delay="100" data-aos-duration="500">
                    <img class="company" src={`${server}/${company.image}`}></img><br />
                  </div>

                </div>
              }) : null
            }
          </div>
          {ourCompany.length > 12 ? <div className="sendButtonContainer" data-aos="fade-down" data-aos-duration="200" data-aos-delay="0" style={{position:"absolute",bottom:"15%"}}>
            <button
              className="team cmpn fscr" style={{ marginLeft: "100px" }}
              onClick={() => fullpageApi.moveSlideRight()}
            >
              See more
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
          <div className="sendButtonContainer" data-aos="fade-down" data-aos-duration="200" data-aos-delay="0" style={{position:"absolute",bottom:"15%"}}>
            <button
              className="team cmpn fsc" style={{ marginLeft: "100px" }}
              onClick={() => fullpageApi.moveSlideLeft()}
            >
              Back
            </button>
          </div>
        </div>
      </div>



      {/* <div className="companyMedScreen">
       
        <div className="cmpny">
          <h1
            data-aos="fade-down"
            style={{ fontFamily: "nexa light", color: "white", marginTop: "88px", marginBottom: "-100px" }}
          >
            Our Companies
          </h1>
        </div>


        <div className="slide">

          <div className="row companyRow" style={{ marginBottom: "10px" }}>
           
      {
              ourCompany.length > 0 ? ourCompany.slice(0, 6).map(company => {
                return <div className="col-md-6 companyContainer">
                  <div className={`img-cover`} data-aos-delay="100" data-aos-duration="500">
                    <img class="company" src={`${server}/${company.image}`}></img><br />
                  </div>

                </div>
              }):null}
              </div>
              {ourCompany.length > 6 ? <div className="sendButtonContainer" data-aos="fade-down" data-aos-duration="200" data-aos-delay="0" style={{position:"absolute",bottom:"15%"}}>
            <button
              className="team cmpn" style={{ marginLeft: "25px" }}
              onClick={() => fullpageApi.moveSlideRight()}
            >
              See more
            </button>
          </div>:null}
        </div>
    
        <div className="slide">

<div className="row companyRow fsc" style={{ marginBottom: "103px" }}>
  {
    ourCompany.length > 6 ? ourCompany.slice(6, 12).map(company => {

      return <div className=" col-lg-4 col-md-4 col-sm-12 col-12 teamCol companyContainer">
        <div className={`img-cover`} data-aos-delay="100" data-aos-duration="500">
          <img class="company" src={`${server}/${company.image}`}></img><br />
        </div>

      </div>
    }) : null
  }
</div>
<div className="sendButtonContainer" data-aos="fade-down" data-aos-duration="200" data-aos-delay="0" style={{position:"absolute",bottom:"15%"}}>
  <button
    className="team cmpn fsc" style={{ marginLeft: "25px" }}
    onClick={() => fullpageApi.moveSlideRight()}
  >
    see more
  </button>
</div>
        </div>
    
        <div className="slide">

<div className="row companyRow fsc" style={{ marginBottom: "103px" }}>
  {
    ourCompany.length > 12 ? ourCompany.slice(12, 18).map(company => {

      return <div className=" col-lg-4 col-md-4 col-sm-12 col-12 teamCol companyContainer">
        <div className={`img-cover`} data-aos-delay="100" data-aos-duration="500">
          <img class="company" src={`${server}/${company.image}`}></img><br />
        </div>

      </div>
    }) : null
  }
</div>
<div className="sendButtonContainer" data-aos="fade-down" data-aos-duration="200" data-aos-delay="0" style={{position:"absolute",bottom:"15%"}}>
  <button
    className="team cmpn fsc" style={{ marginLeft: "25px" }}
    onClick={() => fullpageApi.moveSlideRight()}
  >
    see more
  </button>
</div>
          </div>
       
        <div className="slide">

          <div className="row companyRow" style={{ marginBottom: "10px" }}>
            {
              ourCompany.length > 18 ? ourCompany.slice(18, 24).map(company => {

                return <div className="col-md-6 companyContainer">
                  <div className={`img-cover`} data-aos-delay="100" data-aos-duration="500">
                    <img class="company" src={`${server}/${company.image}`}></img><br />
                  </div>
                </div>
              }) : null
            }
          </div>

          <div className="sendButtonContainer" data-aos="fade-down" data-aos-duration="200" data-aos-delay="0">
            <button
              className="team cmpn bck"
              onClick={() => fullpageApi.moveSlideLeft()}
            >
              Back
            </button>
          </div>
        </div>
    
      </div> */}



      {/* <div className="companySmallScreen">
      

        <h1
          data-aos="fade-down"
          style={{ fontFamily: "nexa light", color: "white" }}
        >
          Our Companies
        </h1>

        <div className="slide">
          <div className="row companyRow" style={{ marginBottom: "50px" }}>
            {
              ourCompany.length > 0 ? ourCompany.slice(0, 6).map(company => {

                return <div className="col-sm-6">
                  <div className={`img-cover`} data-aos-delay="100" data-aos-duration="500">
                    <img class="company" src={`${server}/${company.image}`}></img><br />
                  </div>
                </div>
              }) : null
            }
          </div>
          <div className="sendButtonContainer" data-aos="fade-down" data-aos-duration="200" data-aos-delay="0">
            <button
              className="team"
              onClick={() => fullpageApi.moveSlideRight()}
            >
              See more
            </button>
          </div>
        </div>
   
        <div className="slide">
          <div className="row companyRow" style={{ marginBottom: "50px" }}>
            {
              ourCompany.length > 6 ? ourCompany.slice(6, 12).map(company => {

                return <div className="col-sm-6">
                  <div className={`img-cover`} data-aos-delay="100" data-aos-duration="500">
                    <img class="company" src={`${server}/${company.image}`}></img><br />
                  </div>
                </div>
              }) : null
            }
          </div>
          <div className="sendButtonContainer" data-aos="fade-down" data-aos-duration="200" data-aos-delay="0">
            <button
              className="team"
              onClick={() => fullpageApi.moveSlideRight()}
            >
              See more
            </button>
          </div>
        </div>
     
        <div className="slide">
          <div className="row companyRow" style={{ marginBottom: "50px" }}>
            {
              ourCompany.length > 12 ? ourCompany.slice(12, 18).map(company => {

                return <div className="col-sm-6">
                  <div className={`img-cover`} data-aos-delay="100" data-aos-duration="500">
                    <img class="company" src={`${server}/${company.image}`}></img><br />
                  </div>
                </div>
              }) : null
            }
          </div>
          <div className="sendButtonContainer" data-aos="fade-down" data-aos-duration="200" data-aos-delay="0">
            <button
              className="team"
              onClick={() => fullpageApi.moveSlideRight()}
            >
              See more
            </button>
          </div>
        </div>

        <div className="slide">
          <div className="row companyRow" style={{ marginBottom: "50px" }}>
            {
              ourCompany.length > 18 ? ourCompany.slice(18, 24).map(company => {

                return <div className="col-sm-6">
                  <div className={`img-cover`} data-aos-delay="100" data-aos-duration="500">
                    <img class="company" src={`${server}/${company.image}`}></img><br />
                  </div>
                </div>
              }) : null
            }
          </div>
          <div className="sendButtonContainer" data-aos="fade-down" data-aos-duration="200" data-aos-delay="0">
            <button
              className="team"
              onClick={() => fullpageApi.moveSlideLeft()}
            >
              Back
            </button>
          </div>
        </div>
      
        </div> */}
    
    <div className="endbtncontainer">
        <button
          class="bt1 serv endButtonContainer d-md-block d-none" style={{ marginLeft: "8%" }}
          onClick={() => fullpageApi.moveSectionDown()}
        >
          <div className="endButton"></div>
        </button>
      </div>
    </div>
  );
};

export default CompanySection;
