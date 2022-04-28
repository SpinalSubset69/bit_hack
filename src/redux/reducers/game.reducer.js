import { MODE_SELECTED, SELECT_LEVEL, SET_PLAYER_SCORE } from '../types'

const INITIAL_STATE = {
  mode: '',
  level: {},
  player: '',
  score: '',
}

export const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODE_SELECTED:
      return { ...state, mode: action.payload }

    case SELECT_LEVEL:
      return { ...state, level: action.payload }

    case SET_PLAYER_SCORE:
      return { ...state, score: action.payload }

    default:
      return { ...state }
  }
}
