import React from "react";
import './team.css';
import "aos/dist/aos.css";
import ImageFour from "../assets/images/b5.jpg";
 


const FourthPage=(props)=>{
  const { fullpageApi, normalRotate, setNormalRotate } = props;
    return(
        <div className="aboutSection">
          <h1 data-aos="fade-down" style={{fontFamily:"nexa light",color:"transparent"}}>
            Team
          </h1>
           <div className="Lead">
        <ul id="mymenu" className="alpha leFTMenu"  data-aos="fade-right">
       <h2><li>L</li></h2>
       <h2><li>O</li></h2>
       <h2><li>G</li></h2>
       <h2><li>I</li></h2>
       <h2><li>N</li></h2>
             <br/>
       <h2><li>T</li></h2>
       <h2><li>E</li></h2>
       <h2><li>A</li></h2>
       <h2><li>M</li></h2>
        </ul>
      </div>
          <div class="row teamRow">

          <div className=" col-lg-4 col-md-6 col-sm-12 col-12 teamCol">
          <div className={`img-holder`} data-aos="rotate-c" data-aos-delay="100" data-aos-duration="500">
          <img class="leaders" src={ImageFour}></img><br/>
          </div>
          <p>Name</p><br/>
          <p className="groups">Position</p>
          </div>

          <div className=" col-lg-4 col-md-6 col-sm-12 col-12 teamCol">
          <div className={`img-holder`} data-aos="rotate-c" data-aos-delay="200" data-aos-duration="500">
          <img class="leaders" src={ImageFour}></img><br/>
          </div>
          <p>Name</p><br/>
          <p className="groups">Position</p>
          </div>
        
          <div className=" col-lg-4 col-md-6 col-sm-12 col-12 teamCol">
          <div className={`img-holder`} data-aos="rotate-c" data-aos-delay="300" data-aos-duration="500">
          <img class="leaders" src={ImageFour}></img><br/>
          </div>
          <p>Name</p><br/>
          <p className="groups">Position</p>
           </div>
          
      </div>

      <div class="row teamRow">
   <div className=" col-lg-4 col-md-6 col-sm-12 col-12 teamCol">
   <div className={`img-holder`} data-aos="rotate-c" data-aos-delay="400" data-aos-duration="500">
       <img class="leaders" src={ImageFour}></img><br/>
       </div>
       <p>Name</p><br/>
       <p className="groups"> Position</p></div>

    <div className=" col-lg-4 col-md-6 col-sm-12 col-12 teamCol">
    <div className={`img-holder`} data-aos="rotate-c" data-aos-delay="500" data-aos-duration="500">

    <img class="leaders" src={ImageFour}></img><br/>
        </div>
    <p>Name</p><br/>
    <p className="groups">Position</p>
    </div>

      <div className=" col-lg-4 col-md-6 col-sm-12 col-12 teamCol">
      <div className={`img-holder`} data-aos="rotate-c" data-aos-delay="600" data-aos-duration="500">
      <img class="leaders" src={ImageFour}></img><br/>
      </div>
      <p>Name</p><br/>
      <p className="groups"> Position</p>
        </div>

      </div>
     </div>
    )
}

export default FourthPage;