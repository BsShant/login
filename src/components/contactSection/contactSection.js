import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./contact.css";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Button, Form } from "react-bootstrap";

const anchors = [
  "firstPage",
  "secondPage",
  "thirdPage",
  "fourthPage",
  "fifthPage",
];

const ContactSection = (props) => {
  const { fullpageApi } = props;
  return (
    <div className="section">
      <div className="contactService contactSection">
        <div className="slide">
          <div class="continfo">
            <h4 style={{fontFamily:"nexa light"}}>Customer service</h4>
            <h2 style={{ marginLeft: "0px", fontFamily:"nexa light"}}>CUSTOMER</h2>
            <p>
              Feel free to reach out to us with any questions. We are very
              friendly and always open to discussing new projects, interesting
              ideas.
            </p>
            <div
              className="row contactInfoContainer"
              style={{ padding: "0", justifyFlex: "flex-start" }}
            >
              <div className=" contcol col-lg-6 col-md-6 col-sm-12">
                <h4 style={{fontFamily:"nexa light"}}>Contact</h4>
                Call: 9749761111
              </div>
              <div className=" contcol col-lg-6 col-md-6 col-sm-12">
                <h4 style={{fontFamily:"nexa light"}}>Address</h4>
                <span>
                  <FontAwesomeIcon icon={faLocationDot} /> Samakhushi, Kathmandu
                </span>
              </div>
            </div>
            Email:logincorpnepal@gmail.com
          </div>

          <div className="sendButtonContainer">
            <button
              className="team"
              onClick={() => fullpageApi.moveSlideRight()}
            >
              Send messages
            </button>
          </div>
        </div>

        <div className="slide">
          <div className="row one">
            <div className="col-md-4" style={{textAlign:"left"}}>
              <div className="eml">
              <h4 class="customer cst">Customer service</h4>
              <h2 class="customer ail" style={{ marginLeft: "0px" }}>
                EMAIL US
              </h2>
              </div>
              <button
                className="team"
                onClick={() => fullpageApi.moveSlideLeft()}
              >
              Information
              </button>
            </div>

            <div className="col-md-7" style={{textAlign:"left"}}>
              <Form className="msgus">
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="FormBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" required />
                  {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone No:</Form.Label>
                  <Form.Control type="number" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Messages</Form.Label>
                  <Form.Control className="msg" type="text" required />
                </Form.Group>
                {/* 
  <Form.Group className="mb-3" controlId="FormBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}

                <ReCAPTCHA
                  className="capt"
                  sitekey="6LeH_AIfAAAAAIeF4Rod6Wofc0KfYB4IUJi7L5L5"
                />

                <Button  type="submit" style={{width:"82%", marginTop:"15px",backgroundColor:"#ff1a75",borderColor:"transparent",borderRadius:"20px"}}>
                  Send
                </Button>
              </Form>
            </div>
            <div className="col-md-1 col-sm-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
