import React from "react";
import "./careers.css";
import JobSection from "./jobSection";
import { Button, Col, Form, Row } from "react-bootstrap";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image1 from "../../assets/images/b1.jpg"
const anchors = [
  "firstPage",
  "secondPage",
  "thirdPage",
  "fourthPage",
  "fifthPage",
];

const CareersSection = (props) => {

  const { fullpageApi } = props;
  return (
    <div className="section almuniSection">

      <div className="slide">
        <div class="continfo" data-aos="fade-right" data-aos-duration="200" data-aos-delay="0" style={{ width: "90%" }}>
          <div className="professions">
            <div  className="quote" style={{ textAlign: "left", marginBottom: "30px" }}><q style={{ fontFamily: "nexa light", fontSize: "24px", textAlign: "center", color: "white" }}><em>Passion is the difference between having a job and having a career</em></q></div>
            <h5 style={{ color: "rgba(255,255,255,o.5)" }}>These are the career opportunities we offer at Login</h5>
           
            <div className="bigScreen">
            <Row>
              <Col xs={6} md={4} style={{marginBottom:"20px"}}>
                < JobSection title="Web Developer" sub1="Frontend" sub2="Backend" image={Image1} />
              </Col>
              <Col xs={6} md={4} style={{marginBottom:"20px"}}>
              < JobSection title="Designer" sub1="Graphics" sub2="Interior" image={Image1} />
              </Col>
              <Col xs={6} md={4} style={{marginBottom:"20px"}}>
              < JobSection title="Writer" sub1="Technical" sub2="Creative" image={Image1} />
              </Col>
              <Col xs={6} md={4} style={{marginBottom:"20px"}}>
              < JobSection title="Writer" sub1="Technical" sub2="Creative" image={Image1} />
              </Col>
              <Col xs={6} md={4} style={{marginBottom:"20px"}}>
              < JobSection title="Web Developer" sub1="Frontend" sub2="Backend" image={Image1} />
              </Col>
              <Col xs={6} md={4} style={{marginBottom:"20px"}}>
              < JobSection title="Web Developer" sub1="Frontend" sub2="Backend" image={Image1} />
              </Col>
            </Row>
            </div>
          </div>

          <div className="sendButtonContainer" data-aos="fade-down" data-aos-duration="200" data-aos-delay="0">
            <button
              className="team prof"
              onClick={() => fullpageApi.moveSlideRight()}
            >
              Join Us
            </button>
          </div>
        </div>
      </div>

      <div className="slide">
        <div className="row one" style={{ marginLeft: "8px" }}>
          <div className="col-md-4" style={{ textAlign: "left" }}>
            <div className="eml">
              <h4 class="customer cst" style={{ marginBottom: "100px" }}>Accelerate your growth within the Login {<FontAwesomeIcon icon={faRightLong} className="anim3" style={{ marginBottom: "-1.75px" }} />}  </h4>

            </div>
            <button

              className="team prof carr smallteam"
              onClick={() => fullpageApi.moveSlideLeft()}
            >
              Back
            </button>
          </div>

          <div className="col-md-7" style={{ textAlign: "left" }}>
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

              <Form.Group className="mb-3" controlId="FormBasicEmail">
                <Form.Label>Position</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Messages</Form.Label>
                <Form.Control className="msg" type="text" required />
              </Form.Group>
              {/* 
  <Form.Group className="mb-3" controlId="FormBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}

              <Button className="sendButton" type="submit" style={{ width: "99%", marginTop: "15px", backgroundColor: "#ff1a75", borderColor: "transparent", borderRadius: "20px" }}>
                Register
              </Button>

            </Form>
          </div>
        </div>
      </div>

      <button
        class="bt1 testBtn d-md-block d-none endButtonContainer"
        onClick={() => fullpageApi.moveSectionDown()}
      >
        <div className="endButton">

        </div>
      </button>
    </div>
  );
};

export default CareersSection;
