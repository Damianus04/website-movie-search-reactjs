import React, { Component, Fragment } from "react";
import DisplayMovie from "../pages/SearchBoxResult";
import NavBar from "../pages/NavBar";
import SearchBox from "../pages/SearchBox";
// import TutorialInputForm from "../pages/TutorialInputForm";

class Home extends Component {
  render() {
    return (
      <Fragment>
        {/* <TutorialInputForm /> */}
        <NavBar />
        <SearchBox />
      </Fragment>
    );
  }
}

export default Home;
