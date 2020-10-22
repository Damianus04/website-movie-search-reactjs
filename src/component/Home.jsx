import React, { Component, Fragment } from "react";
import DisplayMovie from "../pages/SearchBoxResult";
import NavBar from "../pages/NavBar";
import SearchBox from "../pages/SearchBox";
import Hero from "./Hero";
import ErrorBoundary from "./ErrorBoundary";
// import TutorialInputForm from "../pages/TutorialInputForm";

class Home extends Component {
  render() {
    return (
      <Fragment>
        {/* <TutorialInputForm /> */}
        <ErrorBoundary>
          <NavBar />
        </ErrorBoundary>
        <ErrorBoundary>
          <SearchBox />
        </ErrorBoundary>
        
      </Fragment>
    );
  }
}

export default Home;
