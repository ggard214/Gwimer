const LOAD_GAME = "game/loadGame";
const SET_GAME = "game/setGame";

export const getAllGames = (game) => {
    return {
        type: LOAD_GAME,
        payload: game,
    };
};

export const setGame = (game) => {
  return {
    type: SET_GAME,
    payload: game,
  };
};

export const getGames = () => async (dispatch) => {
  const response = await fetch("/api/games");
  dispatch(getAllGames(response.data));
  return response;
};

const gameReducer = (state = { game: null }, action) => {
  let newState = { ...state };
  switch (action.type) {
    case LOAD_GAME:
      newState = action.payload;
      return newState;
    case SET_GAME:
      newState = action.payload;
      return newState;
    default:
      return state;
  }
};
export default gameReducer;
