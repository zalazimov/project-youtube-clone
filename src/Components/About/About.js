import React from "react";
import zalman from "./images/zalman.jpg";
import Jennifer from "./images/Jennifer.jpg";
import "./About.css";

function About() {
  return (
    <div className="container text-center lh-lg">
      <h2 className="fw-bold mb-4">Welcome to our YouTube Clone Site! </h2>
      <img
        className="logo"
        src="https://www.freeiconspng.com/uploads/hd-youtube-logo-png-transparent-background-20.png"
      />
      <div className="row">
        <p className="col-lg-4"></p>
        <p className="col-lg-4">
          <p className="text-center fs-5 lh-lg">
            We poured a lot of love into this site, so we hope that you like it.
            You can search for and watch your favorite YouTube vidoes, just as
            you would on the original site! All you need to do is type the name
            of the video in the search field and hit 'Search'. That's it. Once
            you find the video thumbnail that you want, click on it and enjoy.
          </p>
        </p>

        <p className="text-center fs-5">Happy Watching!</p>
        <h3 className="fs-3 p-5">About the Creators:</h3>

        <div className="image-container">
          <p className="col-5 mx-1">
            <img
              src={zalman}
              alt="Zalman"
              className="image-style mb-1 zalman"
            />
            <p className="fs-2 text-center zalman">Zalman Azimov</p>A man of
            many hats, I am a single father to a wonderful son, an avid
            explorer, a problem-solver, and an aspiring full-stack developer
            with a passion for good music, math, science, cooking, and a love
            for coding.
            <p>
              {" "}
              <a href="#">https://github.com/zalazimov</a>
            </p>
          </p>
          <p className="col-5 mx-1">
            <img src={Jennifer} alt="Jen" className="image-style mb-1" />
            <p className="text-center fs-2 jennifer">Jennifer Peterson</p>An
            aspiring Software Developer on my journey to learn as much as I
            possibly can in order to help elevate black women and girls in tech.
            <p>
              {" "}
              <a href="#">https://github.com/JenniferPeterson1203</a>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
