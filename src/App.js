import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from "./components/Layout/Header";
import Chart from "./components/Chart/Chart";
import Table from "./components/Table/Table";
import MapBox from "../src/Component/Mapbox/MapBox";
import Precautions from "./components/Preventions/Preventions";
import Footer from "./components/Layout/Footer";

class App extends Component {
  state = {
    darkMode: false,
  };
  onChangeHandler = () => {
    this.setState((prevState) => {
      return {
        darkMode: !prevState.darkMode,
      };
    });
  };

  render() {
    return (
      <Router>
        <Redirect to="/" />
        <div
          style={{ backgroundColor: this.state.darkMode ? "black" : "white" }}
        >
          <Header />
          <div
            class="custom-control custom-switch"
            style={{ position: "sticky", float: "right", marginRight: "1rem" }}
          >
            <input
              type="checkbox"
              className="custom-control-input"
              id="customSwitch1"
              onChange={this.onChangeHandler}
              placeholder="Dark"
            />
            <label
              className="custom-control-label"
              htmlFor="customSwitch1"
              style={{ color: "#777" }}
            >
              {this.state.darkMode ? "Dark Mode" : "Light Mode"}
            </label>
            <br />
            <br />
          </div>
          <Route
            exact
            path="/"
            render={() => {
              return <Table darkMode={this.state.darkMode} />;
            }}
          />
          <Route
            exact
            path="/graph"
            render={() => {
              return <Chart darkMode={this.state.darkMode} />;
            }}
          />
          <Route
            exact
            path="/precautions"
            render={() => {
              return <Precautions darkMode={this.state.darkMode} />;
            }}
          />
          <Route
            exact
            path="/map"
            render={() => {
              return <MapBox darkMode={this.state.darkMode} />;
            }}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
