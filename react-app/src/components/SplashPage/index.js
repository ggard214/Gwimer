import "./splash.css";
import React from "react";
import LoginForm from "../auth/LoginForm";
import Footer from "../Footer";
import controller from "./splashimgs/controllerblank.png";

const Splash = (authenticated, setAuthenticated) => {
  return (
    <>
      <div id="homediv">
        <div id="homespread">
          <div id="left">
            <img id="controller" src={controller} alt="Gwimer" />
          </div>
          <div id="right">
            <LoginForm id="lform" />
          </div>
        </div>
        <div id="feets">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Splash;
