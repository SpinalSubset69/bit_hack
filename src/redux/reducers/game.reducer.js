import { MODE_SELECTED } from "../types";

const INITIAL_STATE = {
  mode: "",
  level: "",
  player: "",
  score: "",
};

export const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODE_SELECTED:
      return { ...state, mode: action.payload };
    default:
      return { ...state };
  }
};
