import "./splash.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";
import { Modal } from "../../context/Modal";
import Footer from "../Footer";
import controller from "./splashimgs/controllerblank.png";

const Splash = ({authenticated, setAuthenticated}) => {
  const dispatch = useDispatch();
  const [showSignModal, setShowSignModal] = useState(false);

  if (authenticated) return <Redirect to="/home"/>;
  
  
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
            <div id="log">
              <LoginForm id="lform" setAuthenticated={setAuthenticated} />
            </div>
            <div id="sign">
              <button id="sign button" onClick={() => setShowSignModal(true)}>Sign Up For Gwimer</button>
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
