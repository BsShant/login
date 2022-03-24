import React from "react";
import './leadership.css';
import ImageFour from "../assets/images/4.webp";
 
const anchors = [
    "firstPage",
    "secondPage",
    "thirdPage",
    "fourthPage",
    "fifthPage",
  ];

const SecondPage=(props)=>{
    const {fullpageApi} = props
    return(
        <div className="aboutSection">
          <h1>
            Leadership
          </h1>
          <div class="row">

          <div className=" col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="img-holder">
          <img class="leaders" src={ImageFour}></img><br/>
          </div>
          <p>Rojan Mul</p><br/>
          Managing Director
          </div>

          <div className=" col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="img-holder">
          <img class="leaders" src={ImageFour}></img><br/>
          </div>
          <p>Prince G. Sunuwar</p><br/>
          CEO
          </div>
        
          <div className=" col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="img-holder">
          <img class="leaders" src={ImageFour}></img><br/>
          </div>
          <p>Krishna Mul</p><br/>
          Account Manager
           </div>
          
      </div>

      <div class="row">
   <div className=" col-lg-4 col-md-6 col-sm-12 col-12">
   <div className="img-holder">
       <img class="leaders" src={ImageFour}></img><br/>
       </div>
       <p>Shyam Mul</p><br/>
          IT Manager</div>

    <div className=" col-lg-4 col-md-6 col-sm-12 col-12">
        <div className="img-holder">

    <img class="leaders" src={ImageFour}></img><br/>
        </div>
    <p>Aryan G. Himali</p><br/>
     Marketing Manager
    </div>

      <div className=" col-lg-4 col-md-6 col-sm-12 col-12">
      <div className="img-holder">
      <img class="leaders" src={ImageFour}></img><br/>
      </div>
      <p>Alaka Acharya</p><br/>
          Multimedia Manager
        </div>

      </div>
     </div>
    )
}

export default SecondPage;