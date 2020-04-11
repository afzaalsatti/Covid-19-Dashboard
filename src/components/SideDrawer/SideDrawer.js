import React, { Component } from "react";
import "./SideDrawer.css";
class SideDrawer extends Component {
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(28, 40, 51 ,0.4)";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }
  render() {
    return (
      <div>
        <div id="mySidenav" className="sidenav">
          <a
            href="javascript:void(0)"
            className="closebtn"
            onClick={this.closeNav}
          >
            &times;
          </a>
          <a href="#">Home</a>
          <a href="#">Graph</a>
          <a href="#">Map</a>
          <a href="#">Precautions</a>
          <a href="#">About Us</a>
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