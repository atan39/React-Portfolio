import React from "react";
import workdayImage from "../images/workday.PNG";
import pwgenImage from "../images/pw gen.PNG";
import javaQuiz from "../images/javaquiz.PNG";
import netflix from "../images/netflixnchill.PNG";
import weeaboowiz from "../images/weeaboowiz.PNG";
import weather from "../images/weather.PNG";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <h2>Portfolio</h2>

      <div>
        <h4>Workday Scheduler</h4>
        <img src={workdayImage} alt="Workday Scheduler" /> <br></br>
        <a href="https://atan39.github.io/Workday-Scheduler/">
          Live Website
        </a>
        <br></br>
        <a href="https://github.com/atan39/Workday-Scheduler">
          Github Repository
        </a>
      </div>

      <div>
        <h4>Password Generator</h4>
        <img src={pwgenImage} alt="Password Generator" />
        <a href="https://atan39.github.io/Password-Generator/">
          Live Website
        </a>
        <br></br>
        <a href="https://github.com/atan39/Password-Generator">
          Github Repository
        </a>
      </div>

      <div>
        <h4>Timed Quiz</h4>
        <img src={javaQuiz} alt="Javascript Quiz" /> <br></br>
        <a href="https://atan39.github.io/Timed-Javascript-Quiz/">
          Live Website
        </a>
        <br></br>
        <a href="https://github.com/atan39/Timed-Javascript-Quiz">
          Github Repository
        </a>
      </div>
      <div>
        <h4>Netflix and Cocktails</h4>
        <img src={netflix} alt="NetflixnChill" />
        <a href="https://sirmodv.github.io/Netflix-Cocktail-s/">
          Live Website
        </a>
        <br></br>
        <a href="https://github.com/SirModV/Netflix-Cocktail-s">
          Github Repository
        </a>
      </div>
      <div>
        <h4>Weeaboo Wisdom</h4>
        <img src={weeaboowiz} alt="Weeaboo Wisdom" />
        <a href="https://weeaboo-wisdomm-04ded8f01ad7.herokuapp.com/">
          Live Website
        </a>
        <br></br>
        <a href="https://github.com/atan39/Weeaboo-Wisdom">Github Repository</a>
      </div>
      <div>
        <h4>Weather Forecast</h4>
        <img src={weather} alt="Weather Forecast" />
        <a href="https://atan39.github.io/Weather-Forecast/">
          Live Website
        </a>
        <br></br>
        <a href="https://github.com/atan39/Weather-Forecast">
          Github Repository
        </a>
      </div>
    </div>
  );
}
