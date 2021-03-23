import "./games.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as gameActions from '../../store/games';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer";


const Games = ({ setAuthenticated }) => {
  const dispatch = useDispatch();
  const gameList = useSelector((state) => state.game);
  const [info, setInfo] = useState(false);

  const Games = ({ setAuthenticated }) => {
  const dispatch = useDispatch();
  const gameList = useSelector((state) => state.game);
  const [info, setInfo] = useState(false);
  
  return (
    <>
      <div id="maingames">
        <div>
          <NavBar setAuthenticated={setAuthenticated} />
        </div>
        <div>
          <div>
            <h1>this is the future home for my games page</h1>
          </div>
          <div id="feets">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
  }

export default Games;