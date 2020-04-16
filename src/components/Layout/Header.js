import React, { Component } from "react";
import SideDrawer from "../SideDrawer/SideDrawer";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div style={{ marginBottom: "61px" }}>
        <nav
          className="navbar navbar-expand-sm navbar-dark bg-dark mb-4"
          style={{
            position: "fixed",
            zIndex: "1",
            width: "100%",
            top: "0",
          }}
        >
          <div className="container">
            <SideDrawer />
            <NavLink className="navbar-brand" to="/">
              COVID-19
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
              </ul>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/map">
                    World Map
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/precautions">
                    Precautions
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
