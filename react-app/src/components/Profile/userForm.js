import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { submitProfile } from "../../store/profile";
import "./proform.css";

function AboutUserForm({ userProfile, info, setInfo }) {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  function toggle() {
    setInfo(!info);
  }
  const [about_me, setAbout] = useState("");
  const [location, setLocation] = useState("");
  const [nin_gt, setNin] = useState("");
  const [ps_gt, setPs] = useState("");
  const [xbox_gt, setXbox] = useState("");
  const [steam_gt, setSteam] = useState("");
  const [discord_gt, setDiscord] = useState("");

  console.log('in my form', userProfile)

  const onSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      submitProfile(
        about_me,
        location,
        nin_gt,
        ps_gt,
        xbox_gt,
        steam_gt,
        discord_gt,
        userId
      )
    );
    toggle();
  };

  useEffect(() => {
    setAbout(userProfile.about_me);
    setLocation(userProfile.location);
    setNin(userProfile.nin_gt);
    setPs(userProfile.ps_gt);
    setXbox(userProfile.xbox_gt);
    setSteam(userProfile.steam_gt);
    setDiscord(userProfile.discord_gt);
  }, [userProfile]);

  return (
    <>
      <h1></h1>
      <form id="about-user-form-wrap" onSubmit={onSubmit}>
        <label>
          About Me
          <input
            type="text"
            value={about_me}
            onChange={(e) => setAbout(e.target.value)}
          ></input>
        </label>
        <label>
          Location
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></input>
        </label>
        <label>
          Nintendo Gamer Tag
          <input
            type="text"
            value={nin_gt}
            onChange={(e) => setNin(e.target.value)}
          ></input>
        </label>
        <label>
          Playstation Gamer Tag
          <input
            type="text"
            value={ps_gt}
            onChange={(e) => setPs(e.target.value)}
          ></input>
        </label>
        <label>
          Xbox Gamer Tag
          <input
            type="text"
            value={xbox_gt}
            onChange={(e) => setXbox(e.target.value)}
          ></input>
        </label>
        <label>
          Steam Gamer Tag
          <input
            type="text"
            value={steam_gt}
            onChange={(e) => setSteam(e.target.value)}
          ></input>
        </label>
        <label>
          Dicord User Name
          <input
            type="text"
            value={discord_gt}
            onChange={(e) => setDiscord(e.target.value)}
          ></input>
        </label>
        <div>
          <button onClick={() => history.push(`/profile/${userId}`)}>
            Cancel
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
export default AboutUserForm;
