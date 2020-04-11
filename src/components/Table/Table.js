import React, { Component } from "react";
import axios from "axios";
import Spinner from "../Layout/Spinner";
import { connect } from "react-redux";
import { setHistory } from "../../actions/displayAction";
import { Link } from "react-router-dom";

class Table extends Component {
  state = {
    totalConfirmedLatest: 0,
    totalDeathsLatest: 0,
    totalRecoveredLatest: 0,
    allData: [],
    loading: true,
  };
  componentDidMount() {
    axios.get("https://covid19api.herokuapp.com/").then((res) => {
      let data = [];
      res.data.confirmed.locations.forEach((l, index) => {
        data.push({
          country: l.country,
          latitude: l.coordinates.latitude,
          longitude: l.coordinates.longitude,
          historyConfirmed: l.history,
          latestConfirmed: l.latest,
          historyDeaths: null,
          latestDeaths: null,
          historyRecovered: null,
          latestRecovered: null,
        });
      });

      res.data.deaths.locations.forEach((l) => {
        data.forEach((d, index) => {
          if (d.country === l.country) {
            data[index] = {
              ...d,
              historyDeaths: l.history,
              latestDeaths: l.latest,
            };
          }
        });
      });
      res.data.recovered.locations.forEach((l) => {
        data.forEach((d, index) => {
          if (d.country === l.country) {
            data[index] = {
              ...d,
              historyRecovered: l.history,
              latestRecovered: l.latest,
            };
          }
        });
      });
      console.log(data);

      this.setState({
        totalConfirmedLatest: res.data.latest.confirmed,
        totalDeathsLatest: res.data.latest.deaths,
        totalRecoveredLatest: res.data.latest.recovered,
        allData: data,
        loading: false,
      });
    });
  }
  clickHandler = (data) => {
    this.props.setHistory(data);
  };
  render() {
    let spinner = null;
    let table = null;
    if (this.state.loading) {
      spinner = <Spinner />;
    } else {
      table = (
        <div>
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Country</th>
                <th scope="col">
                  Confirmed Cases{" "}
                  <span style={{ color: "#FF412D" }}>
                    {this.state.totalConfirmedLatest}
                  </span>
                </th>
                <th scope="col">
                  Total Deaths{" "}
                  <span style={{ color: "#FF412D" }}>
                    {this.state.totalDeathsLatest}
                  </span>
                </th>
                <th scope="col">
                  Recovered Cases{" "}
                  <span style={{ color: "#2ECC71" }}>
                    {this.state.totalRecoveredLatest}
                  </span>
                </th>
                <th scope="col">Graph</th>
              </tr>
            </thead>
            <tbody>
              {this.state.allData.map((data, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{data.country}</td>
                    <td>{data.latestConfirmed}</td>
                    <td>{data.latestDeaths}</td>
                    <td>{data.latestRecovered}</td>
                    <td>
                      <Link to="/graph" onClick={() => this.clickHandler(data)}>
                        View Graph
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
    return (
      <div style={{ padding: "0 5rem" }}>
        {spinner}
        {table}
      </div>
    );
  }
}

export default connect(null, { setHistory })(Table);
