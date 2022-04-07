import { MODE_SELECTED } from "../types";

export const modeSelected = (data) => {
  return {
    type: MODE_SELECTED,
    payload: data,
  };
};
