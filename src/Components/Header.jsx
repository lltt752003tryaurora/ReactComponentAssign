import React, { Component } from "react";
import "../ComponentCSS/header.css";

export default class Header extends Component {
  render() {
    return (
      <nav id="header" className="bg-dark">
        <div className="px-5 content_header">
          <p className="title">Start Bootstrap</p>
          <div className="navbar">
            <ul className="list">
              <li className="navItem">Home</li>
              <li className="navItem">About</li>
              <li className="navItem">Contact</li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
