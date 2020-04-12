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
    if (this.state.dates.length === 0) {
      this.setState({
        dates: [],
        cases: [],
        show: false,
      });

      const keys = Object.keys(this.props.history.historyConfirmed);
      const sortedKeys = keys.sort((a, b) => new Date(b) !== new Date(a));
      console.log(sortedKeys);

      const confirmedValues = Object.values(
        this.props.history.historyConfirmed
      );
      const deathsValues = Object.values(this.props.history.historyDeaths);
      const recoveredValues = Object.values(
        this.props.history.historyRecovered
      );

      const K1 = [];
      const V1 = [];
      const V2 = [];
      const V3 = [];
      let i = 0;
      if (keys) {
        for (let index = 0; index < keys.length; index += 5) {
          K1[i++] = keys[index];
        }
        i = 0;
        for (let index = 0; index < confirmedValues.length; index += 5) {
          V1[i++] = confirmedValues[index];
        }
        i = 0;
        for (let index = 0; index < deathsValues.length; index += 5) {
          V2[i++] = deathsValues[index];
        }
        i = 0;
        for (let index = 0; index < recoveredValues.length; index += 5) {
          V3[i++] = recoveredValues[index];
        }
      }
      this.setState({
        dates: K1,
        confirmedCases: V1,
        deathsCases: V2,
        recoveredCases: V3,
        show: true,
      });
    }
  }

  render() {
    let bar = null;
    if (this.state.dates.length > 0) {
      bar = (
        <div>
          <img
            style={{ marginLeft: "5.3rem" }}
            src={`https://www.countryflags.io/${this.props.history.countryCode}/flat/64.png`}
          ></img>
          {this.props.darkMode ? (
            <p style={{ color: "#CCD1D1" }}>{this.props.history.countryName}</p>
          ) : (
            <p>{this.props.history.countryName}</p>
          )}
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
        </div>
      );
    }

    return (
      <div className="container" align="center">
        {bar}
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
