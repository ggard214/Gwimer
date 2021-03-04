import "./home.css";
import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer";

const Home = ({ setAuthenticated }) => {
  return (
    <>
      <div id="mainhome">
        <div>
          <NavBar setAuthenticated={setAuthenticated} />
        </div>
        <div>
          <div>
            <h1>this is my logged in user</h1>
          </div>
          <div id="feets">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
