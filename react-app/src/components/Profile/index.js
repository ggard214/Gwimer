import "./profile.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as profileActions from "../../store/profile";
import { authenticate } from "../../services/auth.js";
import AboutUserForm from './userForm';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer";
import { setUser } from "../../store/session";
import nintendo from "./profimg/nintendo.jpg";
import playstation from "./profimg/playstation.png";
import xbox from './profimg/xboxicon.gif';
import steam from './profimg/steam.png';
import discord from './profimg/discord.png';

const Profile = ({ sessionUser, setAuthenticated }) => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.profile);
  const userInfo = useSelector((state) => state.session.user);
  const userPic = useSelector((state) => state.profpic);
  const [info, setInfo] = useState(false);
  console.log("profpic", userPic);
  let user = {};

  function toggle() {
    setInfo(!info);
  }

  useEffect(() => {
    (async () => {
      user = await authenticate();
      await dispatch(profileActions.getProfile(parseInt(user.id)));
      console.log("user info", user);
      dispatch(setUser(user));
    })();
  }, [dispatch, user.id]);
if (!userInfo) return null;

  return (
    <>
      <div id="mainprof">
        <div>
          <NavBar setAuthenticated={setAuthenticated} />
        </div>
        <div id="userdata">
          <div id="propic"></div>
          <div id="name">
            <h1>Welcome back, {userInfo.username}</h1>
          </div>
          <br></br>
          <hr></hr>
        </div>
        <div id="about">
          <button id="editprofilebutton" onClick={toggle}>
            Edit Profile
          </button>
          <div id="component-wrapper" className={info ? "" : "hidden"}>
            <AboutUserForm
              userProfile={userProfile}
              info={info}
              setInfo={setInfo}
              setAuthenticated={setAuthenticated}
            />
          </div>
          <div>
            <p>About me: {userProfile.about_me}</p>
          </div>
          <div>
            <p>Location: {userProfile.location}</p>
          </div>
          <div>
            <p>My gamer tags:</p>
          </div>
          <div id="tags">
            <div>
              <p>
                <img id="iconsNin" src={nintendo} alt="Nintendo Gamer tag" />
                {userProfile.nin_gt}
              </p>
            </div>
            <div>
              <p>
                <img
                  id="iconsPS"
                  src={playstation}
                  alt="Playstation Network Gamer tag"
                />
                {userProfile.ps_gt}
              </p>
            </div>
            <div>
              <p>
                <img id="iconsXbox" src={xbox} alt="Xbox Gamer tag" />
                {userProfile.xbox_gt}
              </p>
            </div>
            <div>
              <p>
                <img id="iconsSteam" src={steam} alt="Steam Gamer tag" />
                {userProfile.steam_gt}
              </p>
            </div>
            <div>
              <p>
                <img id="iconsDiscord" src={discord} alt="Discord Gamer tag" />
                {userProfile.discord_gt}
              </p>
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

export default Profile;
