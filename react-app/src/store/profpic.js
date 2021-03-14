const LOAD_PROFPIC = "profpic/loadProfpic";
const SET_PROFPIC = "profpic/setProfpic";

export const loadProfpic = (profpic) => {
  return {
    type: LOAD_PROFPIC,
    payload: profpic,
  };
};

export const setProfpic = (profpic) => {
  return {
    type: SET_PROFPIC,
    payload: profpic,
  };
};

export const getProfpic = (userId) => async (dispatch) => {
  const response = await fetch(`/api/users/profpic/${userId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const profpic = await response.json();
  dispatch(loadProfpic(profpic));
  return profpic;
};

export const submitProfPic = (userId, pic_url) => async (dispatch) => {
  const formData = new FormData();
  console.log("form data stuff", pic_url)
  formData.append("profile_photo_file", pic_url);
  const response = await fetch(`/api/users/profpic/${userId}`, {
    method: 'PUT',
    body: formData,
  })
  return await response.json();
}

const profpicReducer = (state = { profpic: null }, action) => {
  let newState = { ...state };
  switch (action.type) {
    case LOAD_PROFPIC:
      newState = action.payload;
      return newState;
    case SET_PROFPIC:
      newState = action.payload;
      return newState;
    default:
      return state;
  }
};
export default profpicReducer;