import React, { Component, Fragment } from "react";

class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#">
              WPU Movie
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link active" href="#">
                  Search Movie{" "}
                </a>
              </div>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default NavBar;
