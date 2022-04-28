import { MODE_SELECTED, SELECT_LEVEL, SET_PLAYER_SCORE } from '../types'

export const modeSelected = (data) => {
  return {
    type: MODE_SELECTED,
    payload: data,
  }
}

export const onSelectLevel = (data) => {
  return {
    type: SELECT_LEVEL,
    payload: data,
  }
}

export const setPlayerScoreAction = (data) => {
  return {
    type: SET_PLAYER_SCORE,
    payload: data,
  }
}
