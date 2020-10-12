import React from "react";
// import axios from "axios";

const SearchBoxResult = (props) => {
  return (
    <div className="col-md-4 my-3">
      <div className="card">
        <img className="card-img-top" src={props.poster} alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.year}</h6>
          <a
            href="#"
            className="btn btn-primary modal-detail-button"
            data-toggle="modal"
            data-target="#movieDetailModal"
            data-imdbid=""
          >
            Show Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchBoxResult;
