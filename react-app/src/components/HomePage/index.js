import "./home.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as profileActions from "../../store/profile";
import * as profpicActions from "../../store/profpic";
import { authenticate } from "../../services/auth.js";
import { setUser } from "../../store/session";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer";
import User from '../User'
import nintendo from "../Profile/profimg/nintendo.jpg";
import playstation from "../Profile/profimg/playstation.png";
import xbox from "../Profile/profimg/xboxicon.gif";
import steam from "../Profile/profimg/steam.png";
import discord from "../Profile/profimg/discord.png";

const Home = ({ sessionUser, setAuthenticated }) => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.profile);
  const userInfo = useSelector((state) => state.session.user);
  const userPic = useSelector((state) => state.profpic);
  const [info, setInfo] = useState(false);

  let user = {};

  useEffect(() => {
    (async () => {
      user = await authenticate();
      await dispatch(profileActions.getProfile(parseInt(user.id)));
      await dispatch(profpicActions.getProfpic(parseInt(user.id)));
      console.log("user info", user);
      console.log("profpic info", userPic);
      dispatch(setUser(user));
    })();
  }, [dispatch, user.id]);
  if (!userInfo) return null;


  console.log("maybe?", userInfo)


  return (
    <>
      <div id="mainhome">
        <div>
          <NavBar setAuthenticated={setAuthenticated} />
        </div>
        <div id="homescreen">
          <div id="userstuff">
            <div id="userdata">
              <div>
                <img
                  id="profpicmain"
                  src={userPic.pic_url}
                  alt="Profile Picture"
                />
              </div>
              <div>{userInfo.username}</div>
            </div>
            <hr></hr>
          </div>
          <div id="poststuff">
            <h3>This is where future posts will go</h3>
          </div>
          <div id="trendingtopics">
            <div id="trendhead">
              <p>Trending games</p>
            </div>
            <hr></hr>
            <div id="trends">
            <li>topic 1</li></div>
          </div>
        </div>
        <div id="feets">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
