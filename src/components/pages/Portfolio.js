import React from "react";
import workdayImage from "../images/workday.PNG";
import pwgenImage from "../images/pw gen.PNG";
import javaQuiz from "../images/javaquiz.PNG";
import netflix from "../images/netflixnchill.PNG";
import weeaboowiz from "../images/weeaboowiz.PNG";
import weather from "../images/weather.PNG";
import fourbars from "../images/fourbars.PNG";

export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>

      <div className="row">
        <div className="col-md-4 ">
          <div className="card ">
            <div className="card text-bg-info">
              <h4>Workday Scheduler</h4>
              <img
                src={workdayImage}
                alt="Workday Scheduler"
                className="card-img-top"
              />
              <a
                href="https://atan39.github.io/Workday-Scheduler/"
                className="btn btn-primary"
              >
                Live Website
              </a>
              <a
                href="https://github.com/atan39/Workday-Scheduler"
                className="btn btn-secondary"
              >
                Github Repository
              </a>
            </div>
          </div>
        </div>


        <div className="col-md-4">
          <div className="card">
            <div className="card card text-bg-info">
              <h4 className="card-title">Password Generator</h4>
              <img
                src={pwgenImage}
                alt="Password Generator"
                className="card-img-top"
              />
              <a
                href="https://atan39.github.io/Password-Generator/"
                className="btn btn-primary"
              >
                Live Website
              </a>
              <a
                href="https://github.com/atan39/Password-Generator"
                className="btn btn-secondary"
              >
                Github Repository
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card text-bg-info">
              <h4>Timed Quiz</h4>
              <img
                src={javaQuiz}
                alt="Javascript Quiz"
                className="card-img-top"
              />
              <a
                href="https://atan39.github.io/Timed-Javascript-Quiz/"
                className="btn btn-primary"
              >
                Live Website
              </a>
              <a
                href="https://github.com/atan39/Timed-Javascript-Quiz"
                className="btn btn-secondary"
              >
                Github Repository
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="card text-bg-info">
            <h4>Netflix and Cocktails</h4>
            <img src={netflix} alt="NetflixnChill" />
            <a
              href="https://sirmodv.github.io/Netflix-Cocktail-s/"
              className="btn btn-primary"
            >
              Live Website
            </a>
            <a
              href="https://github.com/SirModV/Netflix-Cocktail-s"
              className="btn btn-secondary"
            >
              Github Repository
            </a>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-bg-info">
            <h4>Weeaboo Wisdom</h4>
            <img src={weeaboowiz} alt="Weeaboo Wisdom" />
            <a
              href="https://weeaboo-wisdomm-04ded8f01ad7.herokuapp.com/"
              className="btn btn-primary"
            >
              Live Website
            </a>
            <a
              href="https://github.com/atan39/Weeaboo-Wisdom"
              className="btn btn-secondary"
            >
              Github Repository
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-bg-info">
            <h4>Weather Forecast</h4>
            <img src={weather} alt="Weather Forecast" />
            <a
              href="https://atan39.github.io/Weather-Forecast/"
              className="btn btn-primary"
            >
              Live Website
            </a>
            <a
              href="https://github.com/atan39/Weather-Forecast"
              className="btn btn-secondary"
            >
              Github Repository
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-bg-info">
            <h4>4Bars</h4>
            <img src={fourbars} alt="4bars" />
            <a
              href="https://fourbars-dab352bab680.herokuapp.com/"
              className="btn btn-primary"
            >
              Live Website
            </a>
            <a
              href="https://github.com/keurid/4Bars"
              className="btn btn-secondary"
            >
              Github Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
