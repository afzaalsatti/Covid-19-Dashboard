import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Graph extends Component {
  render() {
    return (
      <div>
        <Line
          data={{
            labels: this.props.labels, //array
            datasets: [
              {
                label: this.props.label,
                data: this.props.data, //array
                borderColor: this.props.borderColor,
                fill: false,
                borderWidth: 1,
              },
            ],
          }}
          options={{
            title: {
              display: this.props.title ? true : false,
              text: "CORONA VIRUS COVID-19",
              fontSize: 25,
            },
            scales: {
              yAxes: [
                {
                  gridLines: {
                    zeroLineColor: this.props.darkMode ? "#B2BABB" : "#212F3D",
                  },
                  ticks: {
                    beginAtZero: true,
                    userCallback: function (label, index, labels) {
                      // when the floored value is the same as the value we have a whole number
                      if (Math.floor(label) === label) {
                        return label;
                      }
                    },
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    zeroLineColor: this.props.darkMode ? "#B2BABB" : "#212F3D",
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
}

export default Graph;
