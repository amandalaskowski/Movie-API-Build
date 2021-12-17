import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  return (
    <div className="div1">
      <div className="card">
        <div className="div2">
          <h1>Login</h1>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <i className="fas fa-user"></i>
            </span>
          </div>
          <input type="text" className="form-control" placeholder="Email" />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <i className="fas fa-key"></i>
            </span>
          </div>
          <input type="text" className="form-control" placeholder="Password" />
        </div>
        <button type="button" className="btn btn-secondary">
          login
        </button>
        <div className="div3">
          <p>Don't have an account? Message Amanda!</p>
        </div>
      </div>
    </div>
  );
};
