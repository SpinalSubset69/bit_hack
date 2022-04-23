import { MODE_SELECTED, SELECT_LEVEL } from "../types";

const INITIAL_STATE = {
  mode: "",
  level: {},
  player: "",
  score: "",
};

export const gameReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    
    case MODE_SELECTED:
      return { ...state, mode: action.payload };

    case SELECT_LEVEL:
      return { ...state, level: action.payload };

    default:
      return { ...state };
  }
};
