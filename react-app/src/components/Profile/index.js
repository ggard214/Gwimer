import "./profile.css";
import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer";

const Profile = () => {
  return (
    <>
      <div id="mainprof">
        <div>
          <NavBar />
        </div>
        <div>
          <h1>This is my profile page</h1>
        </div>
        <div id="feets">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Profile;
