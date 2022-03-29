import React from "react";
import './team.css';
import ImageFour from "../assets/images/4.webp";
 


const ThirdPage=(props)=>{
    const {fullpageApi} = props
    return(
        <div className="aboutSection">
          <h1>
            Team
          </h1>
          <div class="row">

          <div className=" col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="img-holder">
          <img class="leaders" src={ImageFour}></img><br/>
          </div>
          <p>Name</p><br/>
          <p className="groups"> Position</p>
          </div>

          <div className=" col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="img-holder">
          <img class="leaders" src={ImageFour}></img><br/>
          </div>
          <p>Name</p><br/>
          <p className="groups">Position</p>
          </div>
        
          <div className=" col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="img-holder">
          <img class="leaders" src={ImageFour}></img><br/>
          </div>
          <p>Name</p><br/>
          <p className="groups">Position</p>
           </div>
          
      </div>

      <div class="row">
   <div className=" col-lg-4 col-md-6 col-sm-12 col-12">
   <div className="img-holder">
       <img class="leaders" src={ImageFour}></img><br/>
       </div>
       <p>Name</p><br/>
       <p className="groups"> Position</p></div>

    <div className=" col-lg-4 col-md-6 col-sm-12 col-12">
        <div className="img-holder">

    <img class="leaders" src={ImageFour}></img><br/>
        </div>
    <p>Name</p><br/>
    <p className="groups">Position</p>
    </div>

      <div className=" col-lg-4 col-md-6 col-sm-12 col-12">
      <div className="img-holder">
      <img class="leaders" src={ImageFour}></img><br/>
      </div>
      <p>Name</p><br/>
      <p className="groups"> Position</p>
        </div>

      </div>
     </div>
    )
}

export default ThirdPage;