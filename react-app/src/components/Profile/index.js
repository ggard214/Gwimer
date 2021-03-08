import "./profile.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as profileActions from "../../store/profile";
import { authenticate } from "../../services/auth.js";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer";
import { setUser } from '../../store/session';

const Profile = ({ sessionUser, setAuthenticated }) => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.profile);
  let user = {};

  useEffect(() => {
    (async () => {
      user = await authenticate();
      await dispatch(profileActions.getProfile(parseInt(user.id)));
      console.log("user info", user);
      dispatch(setUser(user))
    })();
  }, [dispatch, user.id]);

  // useEffect(() => {
    
  // }, [dispatch, user.id]);

  return (
    <>
      <div id="mainprof">
        <div>
          <NavBar setAuthenticated={setAuthenticated} />
        </div>
        <div>
          <h1>This is my profile page</h1>
        </div>
        <div id="feets">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Profile;
