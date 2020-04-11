import React, { Component } from "react";

class Chart extends Component {
  state = {
    searchedCountry: "",
  };
  submitHandler = (event) => {
    event.preventDefault();
    this.props.submitHandler(this.state.searchedCountry);
    this.setState({ searchedCountry: "" });
  };
  changeHandler = (event) => {
    this.setState({ searchedCountry: event.target.value });
  };
  render() {
    return (
      <div>
        <form className="col-6" onSubmit={this.submitHandler}>
          {alert}
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search Country"
              value={this.state.searchedCountry}
              onChange={this.changeHandler}
              autoFocus
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={this.props.disabled}
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Chart;
