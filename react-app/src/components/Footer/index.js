import "./footer.css";
import React from "react";
import gitcircle from "./footerImages/gitcircle.png";
import linkedin from "./footerImages/linkedin1.png";
import headshot from "./footerImages/GregG.jpg";

const Footer = () => {
  return (
    <div id="foots">
      <div id="gregdata">
        <p>
          <b>Designed by:</b> Greg Gardini
        </p>
      </div>
      <div id="headshot">
        <img className="greghead" src={headshot} alt="Greg Gardini" />
      </div>
      <div id="git">
        <a
          href="https://github.com/ggard214/Gwimer"
          alt="The github for Gwimer"
          target="_blank"
        >
          <img className="gitcircle" src={gitcircle} alt="My Github" />
        </a>
      </div>
      <div id="linked">
        <img className="linkedin" src={linkedin} alt="My LinkedIn" />
      </div>
    </div>
  );
};

export default Footer;
