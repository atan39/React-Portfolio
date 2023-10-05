import React from "react";
import { BsGithub } from "react-icons/bs";
import "../styles/Footer.css";

function Footer() {
  return (
    <div class= "footer">
      <section>
        <a href="https://github.com/atan39" className="github">
          <BsGithub size={"2em"} />{" "}
        </a>
      </section>
    </div>
  );
}

export default Footer;
