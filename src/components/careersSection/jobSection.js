import React from "react";
import './careers.css';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const JobSection = (props) => {
  const { title, sub1, sub2, image } = props
  return (
    <div className="card-container">
      <div className="row" style={{height:"100%", width:"100%"}}>
        <div className="col-6 col-xs-6 col-sm-5 col-md-6 col-lg-4" style={{ height: "100%", display: "flex", alignItems: "flex-start"}}>
          <div className="image-section">
            <LazyLoadImage
              alt="Job Image"
              effect="blur"
              src={image}
            />
            {/* <img src={image} alt="Job Image" /> */}
          </div>
        </div>
        <div className="col-6 col-xs-6 col-sm-7 col-md-6 col-lg-8" style={{paddingRight:"0px" }}>
          <div className="card-text-section">
            <div className="job-title">{title}</div>
            <div className="job-description">
              <div className="job-desc-list">
                {sub1}
              </div>
              <div className="job-desc-list">
                {sub2}
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>

  )
}

export default JobSection;