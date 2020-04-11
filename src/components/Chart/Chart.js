import React, { Component } from "react";
import { connect } from "react-redux";
import { Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";

class Chart extends Component {
  state = {
    dates: [],
    cases: [],
    show: false,
  };
  componentDidMount() {
    this.setState({
      dates: [],
      cases: [],
      show: false,
    });
    const keys = Object.keys(this.props.history.historyConfirmed);
    const values = Object.values(this.props.history.historyConfirmed);
    this.setState({
      dates: keys,
      cases: values,
      show: true,
    });
  }

  render() {
    let bar = null;

    if (
      this.state.show &&
      this.state.dates.length > 0 &&
      this.state.cases.length > 0 &&
      this.state.dates.length === this.state.cases.length
    ) {
      let DLength = this.state.dates.length - 1;
      let CLength = this.state.cases.length - 1;
      bar = (
        <Bar
          data={{
            labels: [
              this.state.dates[DLength],
              this.state.dates[DLength - 1],
              this.state.dates[DLength - 2],
              this.state.dates[DLength - 3],
              this.state.dates[DLength - 4],
              this.state.dates[DLength - 5],
              this.state.dates[DLength - 6],
              this.state.dates[DLength - 7],
              this.state.dates[DLength - 8],
              this.state.dates[DLength - 9],
            ],
            datasets: [
              {
                label: "COVID_19",
                data: [
                  this.state.cases[CLength],
                  this.state.cases[CLength - 1],
                  this.state.cases[CLength - 2],
                  this.state.cases[CLength - 3],
                  this.state.cases[CLength - 4],
                  this.state.cases[CLength - 5],
                  this.state.cases[CLength - 6],
                  this.state.cases[CLength - 7],
                  this.state.cases[CLength - 8],
                  this.state.cases[CLength - 9],
                ],
                backgroundColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(153, 102, 255, 1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
        />
      );
    }

    return (
      <div>
        <div className="col-6">
          <Link to="/" className="btn btn-light mb-3 float-left">
            Back
          </Link>
        </div>
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
