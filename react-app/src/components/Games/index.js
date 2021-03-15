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

  useEffect(() => {
    (async () => {
      await dispatch(gameActions.getGame);
      console.log("game info maybe here", gameList);
      dispatch(gameList);
    })();
  }, [dispatch]);

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