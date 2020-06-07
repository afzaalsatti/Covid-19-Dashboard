import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Chart from "./components/Chart/Chart";
import Table from "./components/Table/Table";
import MapBox from "../src/Component/Mapbox/MapBox";
import Precautions from "./components/Preventions/Preventions";


class App extends Component {
  constructor(props){
    super(props);
   


   

  }
  


  render() {
    return (
      <Router>
        <Redirect to="/" />
        <div
          style={{ backgroundColor: this.props.darkMode ? "black" : "white" }}
        >
          {/* <Header /> */}
          <div
            class="custom-control custom-switch"
            style={{ position: "sticky", float: "right", marginRight: "1rem" }}
          >
           
            
            <br />
            <br />
          </div>
          <Route
            exact
            path="/"
            render={() => {
              return <Table darkMode={this.props.darkMode} />;
            }}
          />
          <Route
            exact
            path="/graph"
            render={() => {
              return <Chart darkMode={this.props.darkMode} />;
            }}
          />
          <Route
            exact
            path="/precautions"
            render={() => {
              return <Precautions darkMode={this.props.darkMode} />;
            }}
          />
          <Route
            exact
            path="/map"
            render={() => {
              return <MapBox darkMode={this.props.darkMode} />;
            }}
          />
          
        </div>
      </Router>
    );
  }
}

export default App;
