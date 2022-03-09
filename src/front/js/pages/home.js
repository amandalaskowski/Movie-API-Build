import React, { useContext } from "react";

export const Home = () => {
  return (
    <div className="homebackground">
      <div className="hometitle">
        <h1>What Would You Like To Do?</h1>
      </div>
      <div className="homecontainer">
        <div className="homediv1">
          <img
            className="homeimg"
            src="https://i.pinimg.com/736x/e5/cd/c6/e5cdc6cec55c6359d79440532a53041f.jpg"
          ></img>
        </div>
        <div className="homediv1">
          <img
            className="homeimg"
            src="https://wallpaperaccess.com/full/5485712.jpg"
          ></img>
        </div>
      </div>
    </div>
  );
};
