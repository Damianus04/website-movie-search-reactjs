import React, { Component, Fragment } from "react";
import DisplayMovie from "../pages/SearchBoxResult";
import NavBar from "../pages/NavBar";
import SearchBox from "../pages/SearchBox";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <SearchBox />
      </Fragment>
    );
  }
}

export default Home;
