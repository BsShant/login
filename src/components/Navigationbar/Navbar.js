import React, { useRef, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPhoneSquare,
  faGears,
  faUserGroup,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { Link } from "react-router-dom";
import MenuListItem from "../menuListItem/menuListItem";

const Navigation = (props) => {
  const offCanvas = useRef()
  const [showCanvas, setShowCanvas] = useState(false)
  
  const handleClose = () => setShowCanvas(false);
  const handleShow = () => setShowCanvas(true);
  const {navigateTo, navigationToName} = props
  return (
    <Navbar bg="transparent" className="navbarZIndex" expand={false}>
      <Container fluid>
        <Navbar.Brand href="">
          <div className="logo">
          <img
            src="https://logindesigns.com/front/Login logo/logo-white.png"
            width="100"
          ></img>
</div>
          <button className="team d-md-block d-none">
          <Link to={navigateTo}>{navigationToName}</Link>
          </button>
        </Navbar.Brand>
        <Navbar.Toggle
         onClick={handleShow}
          aria-controls="offcanvasNavbar"
          className="d-md-none d-block closeButton"
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="top"
          onHide={handleClose}
          show={showCanvas}
          >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <button className="teambtn" style={{borderStyle:"solid"}}>
              <Link to={navigateTo}>{navigationToName}</Link>
              </button>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <ul id="linkit" className="links sideMenu" defaultActiveKey="#firstPage" variant="tabs">
       <MenuListItem data-menuanchor="firstPage" handleClose={handleClose} sideMenu closeButton href="#firstPage" icon={<FontAwesomeIcon icon={faHouse} className="icon" />}
       name="Home"
       />
         <MenuListItem data-menuanchor="secondPage"  handleClose={handleClose} sideMenu href="#secondPage" icon={ <FontAwesomeIcon icon={faInfoCircle} className="icon"  />}
       name="About"
       /> 
        <MenuListItem data-menuanchor="thirdPage"  handleClose={handleClose} sideMenu href="#thirdPage" icon={ <FontAwesomeIcon icon={faGears} className="icon" />}
       name="Services"
       />  <MenuListItem data-menuanchor="fourthPage"  handleClose={handleClose} sideMenu href="#fourthPage" icon={<FontAwesomeIcon icon={faUserGroup} className="icon" />}
       name="Testimonials"
       />  <MenuListItem data-menuanchor="fifthPage"  handleClose={handleClose} sideMenu href="#fifthPage" icon={  <FontAwesomeIcon icon={faPhoneSquare} className="icon" />}
       name="Contacts"
       /> 
      </ul> 
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;
