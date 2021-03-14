import "./nav.css";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { authenticate } from "../../services/auth.js";
import LogoutButton from "../auth/LogoutButton";
import homeImg from "./Imgs/controller1.png";
import gwimer from "./Imgs/gwimer.png";

const NavBar = ({ setAuthenticated }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  
  useEffect(() => {
    (async () => {
      const currentUser = await authenticate();
      setUser(currentUser)
      console.log("user info", user);
    })();
  }, [dispatch]);

  return (
    <nav id="nav">
      <div id="allitems">
        <div id="cont">
          <NavLink to="/home" exact={true} activeClassName="active">
            <img id="homecont" src={homeImg} alt="Home" />
          </NavLink>
          <img id="gwimtext" src={gwimer} alt="Gwimer Home" />
        </div>
        <div id="links">
          <div id="games">
            <NavLink to="/games" exact={true} activeClassName="active">
              Games
            </NavLink>
          </div>
          <div>
            {user.id && (
              <NavLink
                to={`/profile/${user.id}`}
                exact={true}
                activeClassName="active"
              >
                Profile
              </NavLink>
            )}
          </div>
          <div>
            <LogoutButton id="logout" setAuthenticated={setAuthenticated} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
