import React, { useContext } from "react";

export const InputMovies = () => {
  return (
    <div className="inputcontainer">
      <div className="inputcard">
        <div className="inputheader">
          <h1>Add a New Movie</h1>
        </div>
        <div className="inputinputs">
          <input
            type="text"
            className=" form-control inputinputs"
            placeholder="Movie Name"
          ></input>
        </div>
        <div className="input-group inputgenre">
          <select className="custom-select inputinputs" id="inputGroupSelect04">
            <option selected>Select a Genre</option>
            <option value="Comedy">Comedy</option>
            <option value="Horror">Horror</option>
            <option value="Action">Action</option>
            <option value="Science-Fiction">Science Fiction</option>
            <option value="Romace">Romance</option>
            <option value="Adventure">Adventure</option>
            <option value="Documentary">Documentary</option>
            <option value="War">War</option>
            <option value="Disaster">Disaster</option>
          </select>
        </div>
        <div className="inputinputs">
          <input type="image" className="inputinputs"></input>
        </div>
        <div className="inputinputs2">
          <input
            input="text"
            placeholder="Any Comments?"
            className="form-control inputinputs2"
          ></input>
        </div>
        <div className="inputinputs3">
          <input
            input="text"
            placeholder="Rating 1-10"
            className="form-control inputinputs3"
          ></input>
        </div>
        <button type="button" className="btn btn-primary inputinputs4">
          Submit
        </button>
      </div>
    </div>
  );
};
