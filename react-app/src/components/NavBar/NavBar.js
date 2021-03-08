import "./nav.css";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { authenticate } from "../../services/auth.js";
import LogoutButton from "../auth/LogoutButton";
import homeImg from "./Imgs/controller1.png";

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
      <ul>
        <li>
          <NavLink to="/home" exact={true} activeClassName="active">
            <img id="homecont" src={homeImg} alt="Home" />
          </NavLink>
        </li>
        <li>
          {user.id && (<NavLink to={`/profile`} exact={true} activeClassName="active">
            Profile
          </NavLink>)}
        </li>
        <li>
          <NavLink to="/games" exact={true} activeClassName="active">
            Games
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton setAuthenticated={setAuthenticated} />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
