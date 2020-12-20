import React, { useState } from "react";
import "./hamburgerStyle.css";
import logo from "../image/logo.png";

function Hamburger() {
  const [anim, setAnim] = useState(false);

  function handleClick(event) {
    setAnim(!anim);
  }

  return (
    <>
      <header className="nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
        </ul>

        <div className="logo">
          <img className="logo" src={logo} alt="" />
        </div>

        <ul>
          <li>
            <a href="#">Testimonial</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <div
          onClick={handleClick}
          className={anim ? "change hamburger" : "hamburger"}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
          <div className={anim ? "sidenav push" : "sidenav"}>
            <center>
              <img className="sidenav_img" src={logo} alt="" />
            </center>

            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Portfolio</a>
            <a href="#">Testimonial</a>
            <a href="#">Contact</a>
            <a href="#">Blog</a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Hamburger;
