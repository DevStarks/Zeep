import { combineReducers } from 'redux'

import keyboardReducer from './Keyboard/reducer'
import metronomeReducer from './Metronome/reducer'

export default combineReducers({
  metronome: metronomeReducer,
  keyboard:  keyboardReducer
})
