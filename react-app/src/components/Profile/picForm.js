import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { submitProfPic } from "../../store/profpic";

const ProfPicForm = ({ userPic, info, setInfo }) => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [pic_url, setPicurl] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("pic url info", pic_url);
    await dispatch(submitProfPic(userId, pic_url));
  };

  return (
    <>
      <div id="picformdiv">
        <form id="updatepic" onSubmit={onSubmit}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPicurl(e.target.files[0])}
          />
          <button type="submit">Update</button>
        </form>
      </div>
    </>
  );
};

export default ProfPicForm;
