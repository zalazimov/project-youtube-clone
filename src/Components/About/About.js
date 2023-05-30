import React from "react";
import "./About.css";

function About() {
  return (
    <div className="container text-center lh-lg">
      <h2 className="fw-bold mb-4">Welcome to our YouTube Clone Site!</h2>
      <div className="row">
        <p className="col-4"></p>
        <p className="text-start lh-lg col-4">
          We poured a lot of love into this site, so we hope that you like it.
          You can search for and watch your favorite YouTube vidoes, just as you
          would on the original site! All you need to do is type the name of the
          video in the search field and hit 'Search'. That's it. Once you find
          the video thumbnail that you want, click on it and enjoy.
          <p className="text-center">Happy Watching!</p>
          <p className="fs-3 p-5">A little about both of us:</p>
        </p>
        <p className="col-5 mx-1">
          <p className="fs-2 text-center">Zalman Azimov</p>I am an aspiring
          full-stack developer with a passion for good music, math, science, and
          a love for coding.
          <p>
            {" "}
            <a href="#">https://github.com/zalazimov</a>
          </p>
        </p>
        <p className="col-5 mx-1">
          <p className="text-center fs-2">Jennifer Peterson</p>An aspiring
          Software Developer on my journey to learn as much as I possibly can in
          order to help elevate black women and girls in tech.
          <p>
            {" "}
            <a href="#">https://github.com/JenniferPeterson1203</a>
          </p>
        </p>
      </div>
    </div>
  );
}

export default About;
