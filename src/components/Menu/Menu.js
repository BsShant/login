import React from "react";
import './menu.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPhoneSquare,
  faCircleInfo,
  faGears,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const Menu=()=>{
    return(
        <ul id="myMenu" className="menu d-md-block d-none">
        <li data-menuanchor="firstPage" className="active">
          <a id="link" href="#firstPage">
            <FontAwesomeIcon icon={faHouse} className="icon" />
            Home
          </a>
        </li>
        <li data-menuanchor="secondPage">
          <a id="link" href="#secondPage">
            <FontAwesomeIcon icon={faCircleInfo} className="icon" />
            About
          </a>
        </li>
        <li data-menuanchor="thirdPage">
          <a id="link" href="#thirdPage">
            <FontAwesomeIcon icon={faGears} className="icon" />
            Services
          </a>
        </li>
        <li data-menuanchor="fourthPage">
          <a id="link" href="#fourthPage">
            <FontAwesomeIcon icon={faUserGroup} className="icon" />
            Alumini
          </a>
        </li>
        <li data-menuanchor="fifthPage">
          <a id="link" href="#fifthPage">
            <FontAwesomeIcon icon={faPhoneSquare} className="icon" />
            Contacts
          </a>
        </li>
      </ul>
    )
}

export default Menu;