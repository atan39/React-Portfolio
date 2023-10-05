import React from 'react';
import workdayImage from "../images/workday.PNG";
import pwgenImage from "../images/pw gen.PNG";
export default function Portfolio() {
    return (
      <div>
        <h1>Portfolio Page</h1>
        <h2>Portfolio</h2>
  
        <div>
          <h4>Workday Scheduler</h4>
          <img src={workdayImage} alt="Workday Scheduler" /> <br></br>
          <a href="https://atan39.github.io/Workday-Scheduler/">Live Website</a> <br></br>
          <a href="https://github.com/atan39/Workday-Scheduler">Github Repository</a>
        </div>
  
        <div>
          <h4>Password Generator</h4>
          <img src={pwgenImage} alt="Password Generator" />
          <a href="https://atan39.github.io/Password-Generator/">Live Website</a> <br></br>
          <a href="https://github.com/atan39/Password-Generator">Github Repository</a>
        </div>
      </div>
    );
  }