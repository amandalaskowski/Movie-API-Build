import React, { useContext } from "react";

export const Login = () => {
  return (
    <div className="logindiv1">
      <div className="logincard card">
        <div className="logindiv2">
          <h1>Login</h1>
        </div>
        <div className="logininput1 input-group mb-3">
          <div className="input-group-prepend">
            <span className="logininput2 input-group-text" id="basic-addon1">
              <i className="fas fa-user"></i>
            </span>
          </div>
          <input type="text" className="form-control" placeholder="Email" />
        </div>
        <div className="logininput1 input-group mb-3">
          <div className="input-group-prepend">
            <span className="logininput2 input-group-text" id="basic-addon1">
              <i className="fas fa-key"></i>
            </span>
          </div>
          <input type="text" className="form-control" placeholder="Password" />
        </div>
        <button type="button" className="loginbtn btn btn-secondary">
          login
        </button>
        <div className="logindiv3">
          <p>Don't have an account? Message Amanda!</p>
        </div>
      </div>
    </div>
  );
};
