const LOAD_GAME = "game/loadGame";
const SET_GAME = "game/setGame";

export const loadGame = (game) => {
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

export const getGame = (game) => async (dispatch) => {
  const response = await fetch("/api/games", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const game = await response.json();
  dispatch(loadGame(game));
  console.log("game info", game)
  return game;
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
