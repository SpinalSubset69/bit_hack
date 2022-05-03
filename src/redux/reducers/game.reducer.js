import {
  MODE_SELECTED,
  RESET_LEVEL,
  SELECT_LEVEL,
  SET_MUSIC,
  SET_PLAYER_SCORE,
} from '../types'

const INITIAL_STATE = {
  mode: '',
  level: {},
  player: '',
  score: '',
  music: 'menu',
}

export const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODE_SELECTED:
      return { ...state, mode: action.payload }

    case SELECT_LEVEL:
      return { ...state, level: action.payload }

    case SET_PLAYER_SCORE:
      return { ...state, score: action.payload }

    case SET_MUSIC:
      return { ...state, music: action.payload }

    case RESET_LEVEL:
      return { ...INITIAL_STATE, mode: 'easy' }

    default:
      return { ...state }
  }
}
