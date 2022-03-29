import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPhoneSquare,
  faGears,
  faUserGroup,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import './style.css';
const MenuListItem = (props) => {
  return (
    <li  className={`${props.className} menuItem`} {...props}>
      <div className="icon-container">

      {props.icon}
      </div>
      <a href={props.href}>{props.name}</a>
    </li>
  );
};

export default MenuListItem;
