import React from "react";
import logo from "../images/Group 77.png";

export default function Hero() {
  return (
    <div className="Hero--section">
      <div className="Hero--img">
        <img src={logo} />
      </div>

      <div className="Hero--content">
        <h1>Online Experiences</h1>
        <p>
          Join Unique Interactive led by one-of-a-kind hosts-all without leaving
          home.
        </p>
      </div>
      
    </div>
  );
}
