import React, { Component } from "react";
import axios from "axios";
import Spinner from "../Layout/Spinner";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setState, setHistory } from "../../actions/displayAction";

import "./Table.css";

class Table extends Component {
  state = {
    searchedCountry: "",
    totalConfirmedLatest: 0,
    totalDeathsLatest: 0,
    totalRecoveredLatest: 0,
    allData: [],
    filteredData: [],
    loading: true,
    redirect: false,
  };
  componentDidMount() {
    if (Object.keys(this.props.state.tableState).length === 0) {
      let data = [];
      axios
        .get("https://api.thevirustracker.com/free-api?countryTotals=ALL")
        .then((res) => {
          let keys = Object.keys(res.data.countryitems[0]);
          keys.forEach((l, index) => {
            data.push({
              country: res.data.countryitems[0][l].title,
              countryCode: res.data.countryitems[0][l].code,
              latestConfirmed: res.data.countryitems[0][l].total_cases,
              latestDeaths: res.data.countryitems[0][l].total_deaths,
              latestRecovered: res.data.countryitems[0][l].total_recovered,
            });
          });

          data.sort(function(a, b){return b.latestConfirmed - a.latestConfirmed});
          axios
            .get("https://api.thevirustracker.com/free-api?global=stats")
            .then((res) => {
              let temp = [...data];
              temp.splice(temp.length - 1, 1);
              this.setState({
                allData: temp,
                filteredData: temp,
                totalConfirmedLatest: res.data.results[0].total_cases,
                totalDeathsLatest: res.data.results[0].total_deaths,
                totalRecoveredLatest: res.data.results[0].total_recovered,
                loading: false,
              });
              this.props.setState(this.state);
            });
        });
    } else {
      this.setState({
        ...this.props.state.tableState,
      });
    }
  }
  clickHandler = (data) => {
    let historyConfirmed = {};
    let historyDeaths = {};
    let historyRecovered = {};
    let dailyConfirmedCases = {};
    this.setState({ loading: true });
    axios
      .get(
        `https://api.thevirustracker.com/free-api?countryTimeline=${data.countryCode}`
      )
      .then((res) => {
        let keys = Object.keys(res.data.timelineitems[0]);
        keys.forEach((k) => {
          historyConfirmed[k] = res.data.timelineitems[0][k].total_cases;
          historyDeaths[k] = res.data.timelineitems[0][k].total_deaths;
          historyRecovered[k] = res.data.timelineitems[0][k].total_recoveries;
          dailyConfirmedCases[k] = res.data.timelineitems[0][k].new_daily_cases;
        });
        let params = {
          historyConfirmed,
          historyDeaths,
          historyRecovered,
          dailyConfirmedCases,
          country: data.country,
          countryCode: data.countryCode,
        };
        this.props.setHistory(params);
        this.setState({ loading: false, redirect: true });
      });
  };
  changeHandler = (event) => {
    let filters = this.state.allData.filter((d) => {
      return d.country.toLowerCase().includes(event.target.value.toLowerCase());
    });
    this.setState({
      filteredData: filters,
      searchedCountry: event.target.value,
    });
  };
  render() {
    let spinner = null;
    let table = null;
    if (this.state.loading) {
      spinner = <Spinner />;
    } else {
      table = (
        <div className="table-responsive">
          <table
            className={`table table-bordered ${
              this.props.darkMode ? "table-dark" : ""
            }`}
          >
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
                <th scope="col">Visualization</th>
              </tr>
            </thead>
            <tbody>
              {this.state.filteredData.map((data, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{data.country}</td>
                    <td>{data.latestConfirmed}</td>
                    <td>{data.latestDeaths}</td>
                    <td>{data.latestRecovered}</td>
                    <td>
                      <Link onClick={() => this.clickHandler(data)}>
                        Visualize
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
      <div className="Table-Main">
        {this.state.redirect ? <Redirect to="/graph" /> : null}

        <br />
        <input
          style={{
            backgroundColor: "silver",
            width: "60%",
            margin:"auto"
          }}
          className="form-control"
          placeholder="Search Country"
          value={this.state.searchedCountry}
          onChange={this.changeHandler}
          autoFocus
        />

        {spinner}
        {table}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.display,
  };
};

export default connect(mapStateToProps, { setHistory, setState })(Table);
