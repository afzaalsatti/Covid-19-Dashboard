import React, { Component } from "react";
import { connect } from "react-redux";
import Line from "./Line";
import { Link } from "react-router-dom";

class Chart extends Component {
  state = {
    dates: [],
    confirmedCases: [],
    deathsCases: [],
    recoveredCases: [],
    newDailyCases: [],
    show: false,
  };
  componentDidMount() {
    if (this.state.dates.length === 0) {
      this.setState({
        dates: [],
        show: false,
      });

      const keys = Object.keys(this.props.history.historyConfirmed);

      const confirmedValues = Object.values(
        this.props.history.historyConfirmed
      );
      const deathsValues = Object.values(this.props.history.historyDeaths);
      const recoveredValues = Object.values(
        this.props.history.historyRecovered
      );
      const newDailyCases = Object.values(
        this.props.history.dailyConfirmedCases
      );

      for (let i = 0; i < keys.length; i++) {
        for (let j = i; j < keys.length; j++) {
          if (new Date(keys[i]).getTime() > new Date(keys[j]).getTime()) {
            let temp1 = keys[i];
            let temp2 = confirmedValues[i];
            let temp3 = deathsValues[i];
            let temp4 = recoveredValues[i];
            let temp5 = newDailyCases[i];
            keys[i] = keys[j];
            keys[j] = temp1;

            confirmedValues[i] = confirmedValues[j];
            confirmedValues[j] = temp2;

            deathsValues[i] = deathsValues[j];
            deathsValues[j] = temp3;

            recoveredValues[i] = recoveredValues[j];
            recoveredValues[j] = temp4;

            newDailyCases[i] = newDailyCases[j];
            newDailyCases[j] = temp5;
          }
        }
      }

      this.setState({
        dates: keys,
        confirmedCases: confirmedValues,
        deathsCases: deathsValues,
        recoveredCases: recoveredValues,
        newDailyCases: newDailyCases,
        show: true,
      });
    }
  }

  render() {
    let graph = null;
    if (this.state.dates.length > 0) {
      graph = (
        <div>
          <img
            src={`https://www.countryflags.io/${this.props.history.countryCode}/flat/64.png`}
          ></img>
          {this.props.darkMode ? (
            <p style={{ color: "#CCD1D1" }}>{this.props.history.countryName}</p>
          ) : (
            <p>{this.props.history.countryName}</p>
          )}
          <Line
            labels={this.state.dates}
            label="Daily Cases"
            data={this.state.newDailyCases}
            borderColor="#8E44AD"
            darkMode={this.props.darkMode}
            title={true}
          />
          <Line
            labels={this.state.dates}
            label="Confirmed"
            data={this.state.confirmedCases}
            borderColor="#2874A6"
            darkMode={this.props.darkMode}
          />
          <Line
            labels={this.state.dates}
            label="Deaths"
            data={this.state.deathsCases}
            borderColor="#B03A2E"
            darkMode={this.props.darkMode}
          />
        </div>
      );
    }

    return (
      <div className="container">
        <Link to="/">Back</Link>
        <div align="center">{graph}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    history: state.display,
  };
};

export default connect(mapStateToProps)(Chart);
