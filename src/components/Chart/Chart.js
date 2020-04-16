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

      const confirmedValues = Object.values(
        this.props.history.historyConfirmed
      );
      const deathsValues = Object.values(this.props.history.historyDeaths);
      const recoveredValues = Object.values(
        this.props.history.historyRecovered
      );

      for (let i = 0; i < keys.length; i++) {
        for (let j = i; j < keys.length; j++) {
          if (new Date(keys[i]).getTime() > new Date(keys[j]).getTime()) {
            let temp1 = keys[i];
            let temp2 = confirmedValues[i];
            let temp3 = deathsValues[i];
            let temp4 = recoveredValues[i];
            keys[i] = keys[j];
            keys[j] = temp1;

            confirmedValues[i] = confirmedValues[j];
            confirmedValues[j] = temp2;

            deathsValues[i] = deathsValues[j];
            deathsValues[j] = temp3;

            recoveredValues[i] = recoveredValues[j];
            recoveredValues[j] = temp4;
          }
        }
      }

      this.setState({
        dates: keys,
        confirmedCases: confirmedValues,
        deathsCases: deathsValues,
        recoveredCases: recoveredValues,
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
              scales: {
                yAxes: [
                  {
                    gridLines: {
                      zeroLineColor: this.props.darkMode
                        ? "#B2BABB"
                        : "#212F3D",
                    },
                  },
                ],
                xAxes: [
                  {
                    gridLines: {
                      zeroLineColor: this.props.darkMode
                        ? "#B2BABB"
                        : "#212F3D",
                    },
                    ticks: {
                      autoSkip: true,
                      maxTicksLimit: 10,
                    },
                  },
                ],
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
