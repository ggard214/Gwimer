import './nav.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import homeImg from './Imgs/controller1.png'

const NavBar = ({ setAuthenticated }) => {
  return (
    <nav id="nav">
      <ul>
        <li>
          <NavLink to="/home" exact={true} activeClassName="active">
            <img id="homecont" src={homeImg} alt="Home"></img>
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
}

export default NavBar;