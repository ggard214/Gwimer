import "./splash.css";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";
import { Modal } from "../../context/Modal";
import Footer from "../Footer";
import controller from "./splashimgs/controllerblank.png";

const Splash = ({ authenticated, setAuthenticated }) => {
  const [showSignModal, setShowSignModal] = useState(false);

  if (authenticated) return <Redirect to="/home" />;

  return (
    <>
      {showSignModal && (
        <Modal onClose={() => setShowSignModal(false)}>
          <SignUpForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
            setShowSignModal={setShowSignModal}
          />
        </Modal>
      )}

      <div id="homediv">
        <div id="homespread">
          <div id="left">
            <img id="controller" src={controller} alt="Gwimer" />
          </div>
          <div id="right">
            <div id="about">
              <h2 id="splashh1">
                Gwimer is your home for all things video games!
              </h2>
              <br></br>
              <p id="splashp">
                Discuss your favorite games or find a walkthrough for a part
              </p>
              <p id="splashp2">of a game that you are struggling with.</p>
              <br></br>
              <p id="splashp3">Log in or sign up below!</p>
            </div>
            <div id="log">
              <LoginForm id="lform" setAuthenticated={setAuthenticated} />
            </div>
            <div id="sign">
              <button id="signbutton" onClick={() => setShowSignModal(true)}>
                Sign Up For Gwimer
              </button>
            </div>
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
