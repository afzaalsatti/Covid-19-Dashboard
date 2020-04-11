import React, { Component } from "react";
import { connect } from "react-redux";
import { Line as Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";

class Chart extends Component {
  state = {
    dates: [],
    confirmedCases: [],
    deathsCases: [],
    recoveredCases: [],
    show: false,
  };
  componentDidMount() {
    this.setState({
      dates: [],
      cases: [],
      show: false,
    });

    const keys = Object.keys(this.props.history.historyConfirmed);
    const confirmedValues = Object.values(this.props.history.historyConfirmed);
    const deathsValues = Object.values(this.props.history.historyDeaths);
    const recoveredValues = Object.values(this.props.history.historyRecovered);
    this.setState({
      dates: keys,
      confirmedCases: confirmedValues,
      deathsCases: deathsValues,
      recoveredCases: recoveredValues,
      show: true,
    });
  }

  render() {
    let bar = null;
    if (this.state.dates.length > 0) {
      bar = (
        <Bar
          data={{
            labels: this.state.dates, //array
            datasets: [
              {
                label: "Confirmed",
                data: this.state.confirmedCases, //array
                borderColor: "blue",
                fill: false,
                borderWidth: 1,
              },
              {
                label: "Deaths",
                data: this.state.deathsCases, //array
                borderColor: "red",
                fill: false,
                borderWidth: 1,
              },
              {
                label: "Recovered",
                data: this.state.recoveredCases, //array
                borderColor: "green",
                fill: false,
                borderWidth: 1,
              },
            ],
          }}
          options={{
            title: {
              display: true,
              text: "CORONA VIRUS COVID-19",
              fontSize: 25,
            },
          }}
        />
      );
    }

    return (
      <div>
        <img
          src={`https://www.countryflags.io/${this.props.history.countryCode}/flat/64.png`}
        ></img>
        <p>{this.props.history.countryName}</p>
        <div className="container" align="center">
          {bar}
        </div>
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
