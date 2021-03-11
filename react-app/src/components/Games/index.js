import "./games.css";
import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer";


const Games = ({ setAuthenticated }) => {
  return (
    <>
      <div id="maingames">
        <div>
          <NavBar setAuthenticated={setAuthenticated} />
        </div>
        <div>
          <div>
            <h1>this is my games page</h1>
          </div>
          <div id="feets">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Games;