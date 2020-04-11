import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from "./components/Layout/Header";
import Chart from "./components/Chart/Chart";
import Table from "./components/Table/Table";
import Footer from "./components/Layout/Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/"
            render={() => {
              return <Table />;
            }}
          />
          <Route
            exact
            path="/graph"
            render={() => {
              return <Chart />;
            }}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
