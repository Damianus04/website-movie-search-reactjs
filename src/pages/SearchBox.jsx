import React, { Component, Fragment } from "react";
import SearchBoxResult from "./SearchBoxResult";
// import axios from "axios";

class SearchBox extends Component {
  state = {
    post: [],
  };

  componentDidMount() {
    // fetch(`https://jsonplaceholder.typicode.com/posts`)
    fetch(`https://www.omdbapi.com/?apikey=a2a531cf&s=avengers`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          post: json.Search,
        });
      });
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row mt-5 text-center">
            <div className="col">
              <h1>Let's Search Movie</h1>
            </div>
          </div>

          <div className="row center">
            <div className="col-md-8">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control input-keyword"
                  placeholder="Search Movie."
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-primary search-button"
                    type="button"
                    onClick={this.getAPI}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row movie-container">
            {this.state.post.map((post) => {
              return (
                <SearchBoxResult
                  title={post.Title}
                  year={post.Year}
                  poster={post.Poster}
                />
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SearchBox;
