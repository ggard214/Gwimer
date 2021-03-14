import "./footer.css";
import React from "react";
import gitcircle from "./footerImages/gitcircle.png";
import linkedin from "./footerImages/linkedin1.png";
import headshot from "./footerImages/GregG.jpg";

const Footer = () => {
  return (
    <div id="foots">
      <div id="gregdata">
        <p id="des">
          <b>Designed by:</b> Greg Gardini
        </p>
        <div id="headshot">
          <img className="greghead" src={headshot} alt="Greg Gardini" />
        </div>
      </div>

      <div id="git">
        <div>
          <p id="gitdes">Checkout the Github</p>
        </div>
        <a
          href="https://github.com/ggard214/Gwimer"
          alt="The github for Gwimer"
          target="_blank"
        >
          <img className="gitcircle" src={gitcircle} alt="My Github" />
        </a>
      </div>
      <div id="linked">
        <div>
          <p id="linkdes">Follow me on LinkedIn</p>
        </div>
        <a
          href="https://www.linkedin.com/in/greg-gardini-931b943/"
          alt="My LinkedIn Profile"
          target="_blank"
        >
          <img className="linkedin" src={linkedin} alt="My LinkedIn" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
