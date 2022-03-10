import React, { useContext } from "react";

export const Home = () => {
  return (
    <div className="homebackground">
      <div className="hometitle">
        <h1 className="hometitle2">What Would You Like To Do?</h1>
      </div>
      <div className="homecontainer">
        <a className="homediv1" href="/input">
          <img
            className="homeimg"
            src="https://i.pinimg.com/originals/e3/79/29/e379295d83f700385c883e38850f512c.jpg"
          ></img>
          <div className="hometext">Search Movies</div>
        </a>
        <a className="homediv1" href="/search">
          <img
            className="homeimg"
            src="https://wallpaperaccess.com/full/5485712.jpg"
          ></img>
          <div className="hometext2">Input Movies</div>
        </a>
      </div>
    </div>
  );
};
