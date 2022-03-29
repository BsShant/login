import React from "react";
import "./animatingPages.css";
import ImageInt from "./assets/images/login.png";

function AnimatingPages(props) {
    const {setDisplayMainPage} = props
    const loadMainPage = ()=>{
        setTimeout(()=>{
            setDisplayMainPage(true)
        },8000)
    }
  return (
    <div className="animpage">
      {loadMainPage()}
    </div>
  );
}

export default AnimatingPages;
