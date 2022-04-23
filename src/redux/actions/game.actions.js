import { MODE_SELECTED, SELECT_LEVEL } from "../types";

export const modeSelected = (data) => {
  return {
    type: MODE_SELECTED,
    payload: data,
  };
};

export const onSelectLevel = (data) => {
  return{
    type: SELECT_LEVEL,
    payload: data
  }
}