import "./profile.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as profileActions from "../../store/profile";
import { authenticate } from "../../services/auth.js";
import AboutUserForm from "./userForm";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer";
import { setUser } from "../../store/session";
import nintendo from "./profimg/nintendo.jpg";
import playstation from "./profimg/playstation.png";
import xbox from "./profimg/xboxicon.gif";
import steam from "./profimg/steam.png";
import discord from "./profimg/discord.png";

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
          <hr></hr>
        </div>
        <div id="about">
          <button id="editprofilebutton" onClick={toggle}>
            Edit Your Profile
          </button>
          <div id="component-wrapper" className={info ? "" : "hidden"}>
            <AboutUserForm
              userProfile={userProfile}
              info={info}
              setInfo={setInfo}
              setAuthenticated={setAuthenticated}
            />
          </div>
          <div id="aboutme">
            <p>
              <b>About me: </b>
            </p>
            <p>{userProfile.about_me}</p>
          </div>
          <br></br>
          <div id="location">
            <p>
              <b>Location: </b>
            </p>
            <p>{userProfile.location}</p>
          </div>
          <br></br>
          <div id="gts">
            <p>
              <b>My gamer tags:</b>
            </p>
          </div>
          <br></br>
          <div id="tags">
            <div id="taggroup">
              <div>
                <img id="icons" src={nintendo} alt="Nintendo Gamer tag" />
              </div>
              <div id="nametags">{userProfile.nin_gt}</div>
            </div>
            <div id="taggroup">
              <div>
                <img
                  id="icons"
                  src={playstation}
                  alt="Playstation Network Gamer tag"
                />
              </div>
              <div id="nametags">{userProfile.ps_gt}</div>
            </div>
            <div id="taggroup">
              <div>
                <img id="icons" src={xbox} alt="Xbox Gamer tag" />
              </div>
              <div id="nametags">{userProfile.xbox_gt}</div>
            </div>
            <div id="taggroup">
              <div>
                <img id="icons" src={steam} alt="Steam Gamer tag" />
              </div>
              <div id="nametags">{userProfile.steam_gt}</div>
            </div>
            <div id="taggroup">
              <div>
                <img id="icons" src={discord} alt="Discord Gamer tag" />
              </div>
              <div id="nametags">{userProfile.discord_gt}</div>
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
