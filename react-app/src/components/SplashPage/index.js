import "./splash.css";
import React from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "../auth/LoginForm";
import Footer from "../Footer";
import controller from "./splashimgs/controllerblank.png";

const Splash = ({authenticated, setAuthenticated}) => {
  if (authenticated) return <Redirect to="/home"/>;
  
  return (
      <>
        <div id="homediv">
          <div id="homespread">
            <div id="left">
              <img id="controller" src={controller} alt="Gwimer" />
            </div>
            <div id="right">
              <div id="log">
                <LoginForm id="lform" 
                setAuthenticated={setAuthenticated} />
              </div>
              <div id="sign">
                <p>
                  You can sign up by{" "}
                  <a href="/signup" alt="Sign Up">
                    clicking here
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div id="feets">
            <Footer />
          </div>
        </div>
      </>
    )
};

export default Splash;
