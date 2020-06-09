import React from "react";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";

import axios from "axios";
import img1 from "../Images/darkmap.jpg";
import img2 from "../Images/geogarphic map.jpg";
import img3 from "../Images/map2.jpg";
import Modal from "../Modal/Modal";
import MapView1 from "../Mapbox/MapView1";
import "./Mapbox.css";

const requestResponseData = [];
export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      check: [],
      allData: [],
      mapview: 1,
      toggal: false,

      totalConfirmedLatest: 0,
      totalDeathsLatest: 0,
      totalRecoveredLatest: 0,
      viewport: {
        width: "84vw",
        height: "100vh",

        latitude: 33.0,
        longitude: 65.0,
        zoom: 4,
      },
    };
  }

  componentWillMount() {

   
    let data = [];
    axios
      .get("https://api.thevirustracker.com/free-api?countryTotals=ALL")
      .then((res) => {
        let keys = Object.keys(res.data.countryitems[0]);
        var precise = res.data.countryitems[0];
        keys.forEach((l, index) => {
          data.push({
            country: precise[l].title,
            countryCode: precise[l].code,
            historyConfirmed: null,
            latestConfirmed: precise[l].total_cases,
            historyDeaths: null,
            latestDeaths: precise[l].total_deaths,
            historyRecovered: null,
            latestRecovered: precise[l].total_recovered,
            Active: precise[l].total_active_cases,
            SeriousCases: precise[l].total_serious_cases,
            coordinates: [],
          });
        });

        data.map((data, i) =>
          axios
            .get(
              `https://api.mapbox.com/geocoding/v5/mapbox.places/${data.country}.json?access_token=pk.eyJ1IjoibWVoYWtraGFuIiwiYSI6ImNrOHN5MTd3ZzAwamgzb29ic3EybWhuZWkifQ.B7TChUzxCD7J_RQZLqFxsg`
            )
            .then((response) => {
             
              requestResponseData[i] = data;

              requestResponseData[i].coordinates =
                response.data.features[0].center;

            })
        );
        axios
          .get("https://api.thevirustracker.com/free-api?global=stats")
          .then((res) => {
            let temp = [...data];

            this.setState({
              allData: temp,
              filteredData: temp,
              totalConfirmedLatest: res.data.results[0].total_cases,
              totalDeathsLatest: res.data.results[0].total_deaths,
              totalRecoveredLatest: res.data.results[0].total_recovered,
              loading: false,
            });
          });
      });
  }


  render() {
    if (this.state.mapview === 1) {
      return (
        <div style={{ flexDirection: "row" }}>
          <MapView1
            confirmed={this.state.totalConfirmedLatest}
            death={this.state.totalDeathsLatest}
            recovered={this.state.totalRecoveredLatest}
          />

          <div className="Map">
            <ReactMapGL
              mapStyle={"mapbox://styles/mehakkhan/ck8tu8x420qjq1ipm2jdm16qg"}
              {...this.state.viewport}
              mapboxApiAccessToken={
                "pk.eyJ1IjoibWVoYWtraGFuIiwiYSI6ImNrOHN5MTd3ZzAwamgzb29ic3EybWhuZWkifQ.B7TChUzxCD7J_RQZLqFxsg"
              }
              onViewportChange={(viewport) => this.setState({ viewport })}
            >
              <div
                className="SettingIcon"
                onClick={() => {
                  this.state.toggal === false
                    ? this.setState({ toggal: true })
                    : this.setState({ toggal: false });
                }}
              >
                <i
                  style={{ fontSize: "48px", color: "red" }}
                  className="fa fa-gear"
                ></i>
              </div>
              {this.state.toggal === true ? (
                <div className="toggalViews1">
                  <div
                    className="MapStyle"
                    onClick={() => this.setState({ mapview: 1 })}
                  >
                    <img className="img" src={img1} alt="map1"></img>
                    <div style={{ color: "red" }}>Dark Gray Canvas</div>
                  </div>
                  <div
                    className="MapStyle"
                    onClick={() => this.setState({ mapview: 2 })}
                  >
                    <img className="img" src={img3} alt="map1"></img>
                    <div style={{ color: "gray" }}>Light Gray Canvas</div>
                  </div>
                  <div
                    className="MapStyle"
                    onClick={() => this.setState({ mapview: 3 })}
                  >
                    <img className="img" src={img2} alt="map1"></img>
                    <div style={{ color: "gray" }}>National Geographic</div>
                  </div>
                </div>
              ) : null}
              <div className="Navigation">
                <NavigationControl />
              </div>
              {requestResponseData.map((d, i) => (
                <Marker
                  key={i}
                  longitude={d.coordinates[0]}
                  latitude={d.coordinates[1]}
                >
                  <Modal
                    Serious={d.SeriousCases}
                    Active={d.Active}
                    country={d.country}
                    latestDeaths={d.latestDeaths}
                    confirmed={d.latestConfirmed}
                    latestRecovered={d.latestRecovered}
                  />
                </Marker>
              ))}
            </ReactMapGL>
          </div>
        </div>
      );
    }
    if (this.state.mapview === 2) {
      return (
        <div style={{ flexDirection: "row" }}>
          <MapView1
            confirmed={this.state.totalConfirmedLatest}
            death={this.state.totalDeathsLatest}
            recovered={this.state.totalRecoveredLatest}
          />

          <div className="Map">
            <ReactMapGL
              mapStyle={"mapbox://styles/mehakkhan/ck8u0ini70wsz1il9s1a5b03x"}
              {...this.state.viewport}
              mapboxApiAccessToken={
                "pk.eyJ1IjoibWVoYWtraGFuIiwiYSI6ImNrOHN5MTd3ZzAwamgzb29ic3EybWhuZWkifQ.B7TChUzxCD7J_RQZLqFxsg"
              }
              onViewportChange={(viewport) => this.setState({ viewport })}
              zoomInLbel="Zoom In"
            >
              <div
                className="SettingIcon"
                onClick={() => {
                  this.state.toggal === false
                    ? this.setState({ toggal: true })
                    : this.setState({ toggal: false });
                }}
              >
                <i
                  style={{ fontSize: "48px", color: "red" }}
                  className="fa fa-gear"
                ></i>
              </div>
              {this.state.toggal === true ? (
                <div className="toggalViews">
                  <div
                    className="MapSelectedStyle"
                    onClick={() => this.setState({ mapview: 1 })}
                  >
                    <img className="img" src={img1} alt="map1"></img>
                    <div style={{ color: "gray" }}>Dark Gray Canvas</div>
                  </div>
                  <div
                    className="MapStyle"
                    onClick={() => this.setState({ mapview: 2 })}
                  >
                    <img className="img" src={img3} alt="map1"></img>
                    <div style={{ color: "red" }}>Light Gray Canvas</div>
                  </div>
                  <div
                    className="MapStyle"
                    onClick={() => this.setState({ mapview: 3 })}
                  >
                    <img className="img" src={img2} alt="map1"></img>
                    <div style={{ color: "gray" }}>National Geographic</div>
                  </div>
                </div>
              ) : null}
              <div className="Navigation">
                <NavigationControl />
              </div>
              {requestResponseData.map((d, i) => (
                <Marker
                  key={i}
                  longitude={d.coordinates[0]}
                  latitude={d.coordinates[1]}
                >
                  <Modal
                    Serious={d.SeriousCases}
                    Active={d.Active}
                    country={d.country}
                    latestDeaths={d.latestDeaths}
                    confirmed={d.latestConfirmed}
                    latestRecovered={d.latestRecovered}
                  />
                </Marker>
              ))}
            </ReactMapGL>
          </div>
        </div>
      );
    }
    if (this.state.mapview === 3) {
      return (
        <div style={{ flexDirection: "row" }}>
          <MapView1
            confirmed={this.state.totalConfirmedLatest}
            death={this.state.totalDeathsLatest}
            recovered={this.state.totalRecoveredLatest}
          />

          <div className="Map">
            <ReactMapGL
              mapStyle={"mapbox://styles/mapbox/basic-v9"}
              {...this.state.viewport}
              mapboxApiAccessToken={
                "pk.eyJ1IjoibWVoYWtraGFuIiwiYSI6ImNrOHN5MTd3ZzAwamgzb29ic3EybWhuZWkifQ.B7TChUzxCD7J_RQZLqFxsg"
              }
              onViewportChange={(viewport) => this.setState({ viewport })}
              zoomInLabel="Zoom In"
            >
              <div
                className="SettingIcon"
                onClick={() => {
                  this.state.toggal === false
                    ? this.setState({ toggal: true })
                    : this.setState({ toggal: false });
                }}
              >
                <i
                  style={{ fontSize: "48px", color: "red" }}
                  className="fa fa-gear"
                ></i>
              </div>
              {this.state.toggal === true ? (
                <div className="toggalViews">
                  <div
                    className="MapStyle"
                    onClick={() => this.setState({ mapview: 1 })}
                  >
                    <img className="img" src={img1} alt="map1"></img>
                    <div style={{ color: "gray" }}>Dark Gray Canvas</div>
                  </div>
                  <div
                    className="MapStyle"
                    onClick={() => this.setState({ mapview: 2 })}
                  >
                    <img className="img" src={img3} alt="map1"></img>
                    <div style={{ color: "gray" }}>Light Gray Canvas</div>
                  </div>
                  <div
                    className="MapStyle"
                    onClick={() => this.setState({ mapview: 3 })}
                  >
                    <img className="img" src={img2} alt="map1"></img>
                    <div style={{ color: "red" }}>National Geographic</div>
                  </div>
                </div>
              ) : null}
              <div className="Navigation">
                <NavigationControl />
              </div>
              {requestResponseData.map((d, i) => (
                <Marker
                  key={i}
                  longitude={d.coordinates[0]}
                  latitude={d.coordinates[1]}
                >
                  <Modal
                    Serious={d.SeriousCases}
                    Active={d.Active}
                    country={d.country}
                    latestDeaths={d.latestDeaths}
                    confirmed={d.latestConfirmed}
                    latestRecovered={d.latestRecovered}
                  />
                </Marker>
              ))}
            </ReactMapGL>
          </div>
        </div>
      );
    }
  }
}
