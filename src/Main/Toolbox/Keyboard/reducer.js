import Tone from 'tone';

export const types = {
  SET_OVERLAY: 'KEYBOARD/SET_OVERLAY',
  INCREMENT_FREQ: 'KEYBOARD/INCREMENT_FREQ',
  DECREMENT_FREQ: 'KEYBOARD/DECREMENT_FREQ',
  DECREMENT_KEY: 'KEYBOARD/DECREMENT_KEY',
  INCREMENT_KEY: 'KEYBOARD/INCREMENT_KEY',
}

export const initialState = {
  overlay: 'none',
  frequency: 440,
  key: 'C',
  synth: new Tone.PolySynth(6).toMaster()
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_OVERLAY:
      return { ...state, overlay: action.overlay }
    case types.INCREMENT_FREQ:
      state.synth.voices.forEach(voice => voice.frequency.value += 1)
      return { ...state, frequency: state.frequency + 1 }
    case types.DECREMENT_FREQ:
      state.synth.voices.forEach(voice => voice.frequency.value -= 1)
      return { ...state, frequency:  state.frequency - 1 }
    case types.INCREMENT_KEY:

      // use tone.pitchShift
      return { ...state, key: state.key + 1 }
    case types.DECREMENT_KEY:

      return { ...state, key:  state.key - 1 }
    default:
      return state
  }
}

export const actions = {
  setOverlay: (overlay) => ({ type: types.SET_OVERLAY, overlay }),
  incrementFreq: () => ({ type: types.INCREMENT_FREQ }),
  decrementFreq: () => ({ type: types.DECREMENT_FREQ }),
  incrementKey: () => ({ type: types.INCREMENT_KEY }),
  decrementKey: () => ({ type: types.DECREMENT_FREQ })
}
