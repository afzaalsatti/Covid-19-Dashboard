import React, { Component } from "react";
import "./SideDrawer.css";
import { NavLink } from "react-router-dom";

class SideDrawer extends Component {
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.display = "none";
    document.getElementById("container").style.marginRight = "5rem";
    document.body.style.backgroundColor = "rgba(28, 40, 51 ,0.4)";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main").style.display = "block";
    document.getElementById("container").style.marginRight = "0rem";
    document.body.style.backgroundColor = "white";
  }
  render() {
    return (
      <div id="container">
        <div id="mySidenav" className="sidenav">
          <a
            href="javascript:void(0)"
            className="closebtn"
            onClick={this.closeNav}
          >
            &times;
          </a>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/graph">Graph</NavLink>
          <NavLink to="/map">Map</NavLink>
          <NavLink to="/precautions">Precautions</NavLink>
        </div>

        <div id="main">
          <span
            style={{ fontSize: "30px", cursor: "pointer", float: "left" }}
            onClick={this.openNav}
          >
            &#9776;
          </span>
        </div>
      </div>
    );
  }
}

export default SideDrawer;

/*

 
 */
