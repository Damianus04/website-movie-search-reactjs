import React, { Component, Fragment } from "react";
import SearchBoxResult from "./SearchBoxResult";
// import axios from "axios";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      keyword: "",
      isUpdate: true,
      error: "error",
    };
  }

  handleDisplay() {
    fetch(`https://www.omdbapi.com/?apikey=a2a531cf&s=${this.state.keyword}`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          post: json.Search,
        });
      });
  }
  handleDisplayError() {
    console.log(this.state.error);
  }
  // handle error belum solved

  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state;
    console.log(data);

    if (this.state.isUpdate) {
      this.handleDisplay();
    } else {
      this.handleDisplayError();
    }
  };

  handleKeyword = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    // const { keyword } = this.state;
    return (
      <Fragment>
        <div className="container">
          <div className="row mt-5 text-center">
            <div className="col">
              <h1>Let's Search Movie</h1>
            </div>
          </div>
          {/* <p>{keyword}</p> */}
          <div className="row center">
            <div className="col-md-8">
              <form className="input-group mb-3" onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  className="form-control input-keyword"
                  placeholder="Search Movie."
                  name="keyword"
                  onChange={this.handleKeyword}
                />
                <button className="btn btn-primary search-button">
                  Search
                </button>
              </form>
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
